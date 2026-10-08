// Screenshot-focused coverage and full compat.3 preservation, pinned to rc.2.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { DICTS } from "../src/client/dictionaries.ts";

const read = (name: string): unknown =>
  JSON.parse(readFileSync(new URL(`./fixtures/${name}.json`, import.meta.url), "utf8"));
const baseline = read("translation-batch3-preservation") as {
  count: number;
  namespaces: Record<string, { count: number; sha256: string }>;
};
let preserved = 0;
for (const [namespace, expected] of Object.entries(baseline.namespaces)) {
  const entries = DICTS[namespace]!;
  assert.equal(Object.keys(entries).length, expected.count, `${namespace}: baseline count`);
  const digest = createHash("sha256")
    .update(
      JSON.stringify(Object.entries(entries).sort(([left], [right]) => left.localeCompare(right))),
    )
    .digest("hex");
  assert.equal(digest, expected.sha256, `${namespace}: compat.3 translations changed`);
  preserved += expected.count;
}
assert.equal(preserved, baseline.count);
assert.equal(preserved, 1907);
const inventory = read("extra-namespaces-0.2.0-rc.2") as {
  namespaces: Record<string, { english: Record<string, string>; translated: boolean }>;
};
const markers = (value: string): string[] =>
  [...value.matchAll(/\{[^{}]+\}|<\/?[A-Za-z][^>]*>/g)].map((match) => match[0]).toSorted();
let additions = 0;
for (const group of ["account-shortcuts", "plugin-manager"]) {
  const review = read(`translation-batch3-${group}`) as Record<string, Record<string, string>>;
  for (const [namespace, entries] of Object.entries(review)) {
    assert.equal(baseline.namespaces[namespace], undefined, `${namespace}: must be new`);
    assert.ok(inventory.namespaces[namespace]?.translated);
    assert.deepEqual(
      Object.keys(entries).toSorted(),
      Object.keys(inventory.namespaces[namespace]!.english).toSorted(),
    );
    assert.deepEqual(DICTS[namespace], entries, `${namespace}: registered dictionary differs`);
    for (const [key, value] of Object.entries(entries)) {
      assert.ok(value.length > 0, `${namespace}.${key}: empty translation`);
      assert.deepEqual(
        markers(value),
        markers(inventory.namespaces[namespace]!.english[key]!),
        `${namespace}.${key}: marker drift`,
      );
      additions++;
    }
  }
}
assert.equal(additions, 339);
assert.equal(Object.keys(DICTS).length, 52);
assert.equal(
  Object.values(DICTS).reduce((sum, entries) => sum + Object.keys(entries).length, 0),
  2246,
);
// This key is an asset selector, not display copy; upstream only ships en/zh art.
assert.equal(DICTS["settings.account"]!.onboardingArtworkLocale, "en");
console.log(
  `Translation batch 3 PASS: ${preserved} preserved, ${additions} new entries, 52 namespaces; source keys and markers match`,
);
