// Runs the unmodified published LocaleRuntime, not the stand-in from client.test.ts.
// Host transport, Cordis ownership, and rendering are test doubles: this is a
// service-contract test, not a Desktop application or persistence-on-disk test.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import type { Context } from "@deepseek-ai/cordis";
import type { LocaleRuntime } from "@deepseek-ai/dsh-client-locale/client";
import { DICTS } from "../src/client/dictionaries.ts";

// Exercise the built candidate and an old-identity fixture against the published runtime.
// An explicit artifact path lets release verification use the actual 0.3.0 bundle.
const currentId = "@bailuo2153/dsh-locale-ja";
const oldId = "@fang2hou/dsh-locale-ja";
const candidateBundle = readFileSync(new URL("../lib/client.js", import.meta.url), "utf8");
function loadPlugin(source: string, expectedId: string): (ctx: Context) => void {
  let apply: ((ctx: Context) => void) | undefined;
  // eslint-disable-next-line no-new-func -- evaluate the generated loader artifact
  new Function("window", source)({
    __ModuleLoader__: {
      load(entry: {
        id: string;
        factory: (resolve: (id: string) => never) => { apply: (ctx: Context) => void };
      }) {
        assert.equal(entry.id, expectedId);
        apply = entry.factory((id) => {
          throw new Error(`Unexpected runtime import: ${id}`);
        }).apply;
      },
    },
  });
  assert.ok(apply);
  return apply;
}
const apply = loadPlugin(candidateBundle, currentId);
// This identity-only fixture is not a claim to test a historical binary.
const oldArtifact = process.env.DSH_MIGRATION_OLD_BUNDLE;
const oldApply = loadPlugin(
  oldArtifact === undefined
    ? candidateBundle.replaceAll(currentId, oldId)
    : readFileSync(oldArtifact, "utf8"),
  oldId,
);

const require = createRequire(import.meta.url);
const manifest = JSON.parse(
  readFileSync(require.resolve("@deepseek-ai/dsh-client-locale/package.json"), "utf8"),
) as { version: string };
assert.equal(manifest.version, "0.2.0-rc.2");
const bundle = readFileSync(require.resolve("@deepseek-ai/dsh-client-locale/client"), "utf8");
let Runtime: typeof LocaleRuntime | undefined;
const externalNames = new Set([
  "react",
  "react/jsx-runtime",
  "@deepseek-ai/dsh-client-ui-primitives",
  "@deepseek-ai/dsh-client-store",
]);

// React and store adapters are imported by the bundle but unused by the
// LocaleRuntime class. Fail if the tested path tries to use one of them.
const unusedExternal = new Proxy(
  {},
  {
    get(_target, property) {
      throw new Error(`Contract test unexpectedly used renderer export ${String(property)}`);
    },
  },
);
// eslint-disable-next-line no-new-func -- evaluate the published loader artifact unchanged
new Function("window", bundle)({
  __ModuleLoader__: {
    load(entry: {
      id: string;
      factory: (resolve: (id: string) => object) => { LocaleRuntime: typeof LocaleRuntime };
    }) {
      assert.equal(entry.id, "@deepseek-ai/dsh-client-locale");
      Runtime = entry.factory((id) => {
        assert.ok(externalNames.has(id), `unexpected runtime dependency: ${id}`);
        return unusedExternal;
      }).LocaleRuntime;
    },
  },
});
assert.ok(Runtime);

let preference = "ja";
const writes: string[] = [];
const listeners = new Set<() => void>();
const providerDisposers: Array<() => void> = [];
const context = {
  emit() {},
  effect(setup: () => () => void) {
    providerDisposers.push(setup());
  },
};
const host = {
  getSnapshot: () => ({ value: { preference } }),
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  set(field: string, value: string) {
    assert.equal(field, "preference");
    preference = value;
    writes.push(value);
    for (const listener of listeners) listener();
  },
};
// Narrow test doubles implement only the fields used by this published class.
const locale = new Runtime(
  context as unknown as ConstructorParameters<typeof Runtime>[0],
  host as unknown as ConstructorParameters<typeof Runtime>[1],
  { languages: ["en-US"], preference: "ja" },
);
const baseline = JSON.parse(
  readFileSync(new URL("./fixtures/compatibility-0.2.0-rc.2.json", import.meta.url), "utf8"),
) as { namespaces: Record<string, { english: Record<string, string> }> };
const removeEnglish = locale.register("common", "en", baseline.namespaces.common!.english);
const screenshotExisting = JSON.parse(
  readFileSync(
    new URL("./fixtures/translation-batch3-screenshot-existing.json", import.meta.url),
    "utf8",
  ),
) as Record<string, Record<string, string>>;
// Bind before activation: mounted components keep these live resolver functions.
const screenshotResolvers = Object.fromEntries(
  Object.keys(screenshotExisting).map((namespace) => [namespace, locale.bind(namespace)]),
);
const removeProbe = locale.register("contractProbe", "en", { fallback: "English fallback probe" });
assert.equal(locale.getLocale().active, "en");

for (let cycle = 0; cycle < 3; cycle += 1) {
  const registerHostEnglish = (): Array<() => void> =>
    Object.entries(baseline.namespaces)
      .filter(([namespace]) => namespace !== "common")
      .map(([namespace, entry]) => locale.register(namespace, "en", entry.english));
  const hostEnglish = cycle % 2 === 0 ? registerHostEnglish() : [];
  const disposers: Array<() => void> = [];
  // Cycle 0 unloads the old identity before cycles 1 and 2 mount the new one.
  const activate = cycle === 0 ? oldApply : apply;
  activate({
    locale,
    effect(setup: () => () => void) {
      disposers.push(setup());
    },
  } as unknown as Context);
  assert.equal(locale.getLocale().active, "ja");
  assert.equal(locale.getLocale().locales.find((entry) => entry.id === "ja")?.label, "日本語");
  assert.equal(locale.getLocale().locales.filter((entry) => entry.id === "ja").length, 1);
  assert.equal(locale.bind("contractProbe")("fallback"), "English fallback probe");
  for (const [namespace, entries] of Object.entries(DICTS)) {
    for (const [key, value] of Object.entries(entries)) {
      assert.equal(locale.bind(namespace)(key), value, `${namespace}.${key}: runtime lookup`);
    }
  }
  // Shipped dictionaries can arrive after the language plugin. They must not
  // overwrite Japanese entries in the same namespace.
  if (cycle % 2 !== 0) hostEnglish.push(...registerHostEnglish());
  for (const [namespace, entries] of Object.entries(DICTS)) {
    for (const [key, value] of Object.entries(entries)) {
      assert.equal(
        locale.bind(namespace)(key),
        value,
        `${namespace}.${key}: late English registration`,
      );
    }
  }
  for (const [namespace, entries] of Object.entries(screenshotExisting)) {
    for (const [key, value] of Object.entries(entries)) {
      assert.equal(
        screenshotResolvers[namespace]!(key),
        value,
        `${namespace}.${key}: screenshot resolver`,
      );
    }
  }
  assert.equal(
    locale.bind("pluginManager")("partsCountTotal", { count: 3 }),
    DICTS.pluginManager!.partsCountTotal!.replace("{count}", "3"),
  );
  locale.setLocale("en");
  assert.equal(preference, "en");
  for (const [namespace, entry] of Object.entries(baseline.namespaces)) {
    for (const [key, value] of Object.entries(entry.english)) {
      assert.equal(locale.bind(namespace)(key), value, `${namespace}.${key}: English restore`);
    }
  }

  locale.setLocale("ja");
  assert.equal(preference, "ja");
  for (const dispose of disposers.toReversed()) dispose();
  assert.equal(locale.getLocale().active, "en");
  assert.equal(preference, "ja", "unload must preserve the Host preference");
  assert.equal(
    locale.getLocale().locales.some((entry) => entry.id === "ja"),
    false,
  );
  assert.equal(locale.bind("common")("ok"), "OK");
  for (const dispose of hostEnglish.toReversed()) dispose();
}
assert.deepEqual(writes, ["en", "ja", "en", "ja", "en", "ja"]);
removeProbe();
removeEnglish();
for (const dispose of providerDisposers.toReversed()) dispose();
assert.equal(listeners.size, 0);
console.log(
  `All ${Object.values(DICTS).reduce((sum, entries) => sum + Object.keys(entries).length, 0)} Japanese entries survive late English registration; 11 screenshot labels resolve through pre-bound functions.`,
);
console.log("Published LocaleRuntime 0.2.0-rc.2 contract PASS (mock Host, no Desktop UI)");

console.log(
  `Old identity unload → new identity reload PASS (${oldArtifact === undefined ? "identity-only fixture" : "supplied historical artifact"}; no Desktop UI)`,
);
