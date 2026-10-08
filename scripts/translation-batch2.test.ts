// Exact-release source fixtures; no Desktop or external model calls.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DICTS } from "../src/client/dictionaries.ts";

const baseline = JSON.parse(
  readFileSync(new URL("./fixtures/compatibility-0.2.0-rc.2.json", import.meta.url), "utf8"),
) as { namespaces: Record<string, { english: Record<string, string> }> };
const extraInventory = JSON.parse(
  readFileSync(new URL("./fixtures/extra-namespaces-0.2.0-rc.2.json", import.meta.url), "utf8"),
) as { namespaces: Record<string, { english: Record<string, string>; translated: boolean }> };
let outsideCoverage = 0;
for (const [namespace, entry] of Object.entries(extraInventory.namespaces)) {
  if (entry.translated) {
    assert.deepEqual(baseline.namespaces[namespace]?.english, entry.english);
    assert.deepEqual(
      Object.keys(DICTS[namespace]!).toSorted(),
      Object.keys(entry.english).toSorted(),
    );
  } else {
    assert.equal(DICTS[namespace], undefined, `inventory coverage drift: ${namespace}`);
    outsideCoverage += Object.keys(entry.english).length;
  }
}
assert.equal(
  outsideCoverage,
  369,
  "uncovered source inventory changed; update the coverage report",
);
const seen = new Set<string>();
const markers = (value: string): string[] =>
  [...value.matchAll(/\{[^{}]+\}|<\/?[A-Za-z][^>]*>/g)].map((match) => match[0]).toSorted();
for (const group of ["conversation", "core", "preset", "extra"]) {
  const additions = JSON.parse(
    readFileSync(new URL(`./fixtures/translation-batch2-${group}.json`, import.meta.url), "utf8"),
  ) as Record<string, Record<string, string>>;
  for (const [namespace, entries] of Object.entries(additions)) {
    for (const [key, translation] of Object.entries(entries)) {
      const identity = `${namespace}:${key}`;
      assert.ok(!seen.has(identity), `duplicate batch entry: ${identity}`);
      seen.add(identity);
      const english = baseline.namespaces[namespace]?.english[key];
      assert.notEqual(english, undefined, `unknown source: ${identity}`);
      assert.equal(DICTS[namespace]?.[key], translation, `translation not registered: ${identity}`);
      assert.deepEqual(markers(translation), markers(english!), `marker mismatch: ${identity}`);
    }
  }
}
// The upstream command parser only recognizes canonical English/Chinese tokens.
// Human-readable labels may be Japanese; tokens inserted into input stay English.
for (const token of ["goal", "plan", "feedback", "compact", "permission", "export"]) {
  assert.equal(DICTS.command?.[`token.${token}`], token);
}
assert.ok(seen.size >= 502, "batch must close all 502 gaps in the original namespaces");
console.log(`Translation batch 2 PASS: ${seen.size} reviewed entries, markers and command tokens`);
