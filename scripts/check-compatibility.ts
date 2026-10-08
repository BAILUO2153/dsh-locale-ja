/** Offline, exact-release drift gate for the reviewed supported namespaces.
 * The separate `pnpm drift` command still checks the complete upstream tree.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";
import { DICTS } from "../src/client/dictionaries.ts";

interface NamespaceBaseline {
  english: Record<string, string>;
  missing: string[];
  removed: string[];
}
interface Baseline {
  version: string;
  retained: number;
  missing: number;
  removed: number;
  namespaces: Record<string, NamespaceBaseline>;
}
const baseline = JSON.parse(
  readFileSync(new URL("./fixtures/compatibility-0.2.0-rc.2.json", import.meta.url), "utf8"),
) as Baseline;
const require = createRequire(import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
  devDependencies: Record<string, string>;
};
for (const [name, version] of Object.entries(manifest.devDependencies)) {
  if (!name.startsWith("@deepseek-ai/dsh-")) continue;
  assert.equal(version, baseline.version, `${name}: expected an exact reviewed version`);
  const installed = JSON.parse(readFileSync(require.resolve(`${name}/package.json`), "utf8")) as {
    version: string;
  };
  assert.equal(installed.version, baseline.version, `${name}: installed version drift`);
}

function placeholders(text: string): string[] {
  return [...text.matchAll(/\{([A-Za-z0-9_]+)\}/g)].map((match) => match[1]!).toSorted();
}

function check(dicts: Record<string, Record<string, string>>): void {
  assert.deepEqual(Object.keys(dicts).toSorted(), Object.keys(baseline.namespaces).toSorted());
  let retained = 0;
  let missing = 0;
  let removed = 0;
  for (const [ns, expected] of Object.entries(baseline.namespaces)) {
    const dict = dicts[ns]!;
    const actualMissing = Object.keys(expected.english).filter((key) => !(key in dict));
    assert.deepEqual(
      actualMissing.toSorted(),
      expected.missing.toSorted(),
      `${ns}: missing-key drift`,
    );
    assert.equal(new Set(expected.missing).size, expected.missing.length, `${ns}: duplicate gap`);
    for (const [key, value] of Object.entries(dict)) {
      assert.ok(Object.hasOwn(expected.english, key), `${ns}.${key}: unknown or removed key`);
      assert.equal(typeof value, "string");
      assert.deepEqual(
        placeholders(value),
        placeholders(expected.english[key]!),
        `${ns}.${key}: placeholder drift`,
      );
    }
    retained += Object.keys(dict).length;
    missing += actualMissing.length;
    removed += expected.removed.length;
  }
  assert.equal(retained, baseline.retained);
  assert.equal(missing, baseline.missing);
  assert.equal(removed, baseline.removed);
}

// Keep the compile-time exceptions identical to the reviewable runtime baseline.
const source = ts.createSourceFile(
  "expected-missing.ts",
  readFileSync(new URL("../src/client/expected-missing.ts", import.meta.url), "utf8"),
  ts.ScriptTarget.Latest,
  true,
);
const declaration = source.statements.find(ts.isTypeAliasDeclaration);
assert.ok(declaration && ts.isTypeLiteralNode(declaration.type));
const typedGaps: Record<string, string[]> = {};
for (const member of declaration.type.members) {
  assert.ok(
    ts.isPropertySignature(member) &&
      (ts.isStringLiteral(member.name) || ts.isIdentifier(member.name)) &&
      member.type,
  );
  const tuple = ts.isTypeOperatorNode(member.type) ? member.type.type : member.type;
  assert.ok(ts.isTupleTypeNode(tuple));
  typedGaps[member.name.text] = tuple.elements.map((element) => {
    assert.ok(ts.isLiteralTypeNode(element) && ts.isStringLiteral(element.literal));
    return element.literal.text;
  });
}
assert.deepEqual(
  typedGaps,
  Object.fromEntries(Object.entries(baseline.namespaces).map(([ns, value]) => [ns, value.missing])),
);

check(DICTS);
// Prove that the guard rejects unexpected loss, additions, and placeholder edits.
const lost = structuredClone(DICTS);
delete lost.common!.ok;
assert.throws(() => check(lost), /missing-key drift/);
const extra = structuredClone(DICTS);
extra.common!.unknownCompatibilityKey = "unknown";
assert.throws(() => check(extra), /unknown or removed key/);
const changed = structuredClone(DICTS);
changed.common!.ok = "{unexpected}";
assert.throws(() => check(changed), /placeholder drift/);
console.log(
  `Compatibility drift PASS: ${Object.keys(baseline.namespaces).length} namespaces, ${baseline.retained} localized entries, ` +
    `${baseline.missing} explicitly reviewed English fallbacks, ${baseline.removed} removed keys`,
);
console.log("Scope: pinned 0.2.0-rc.2; not a claim of coverage for new upstream namespaces.");
