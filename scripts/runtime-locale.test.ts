// Runs the unmodified published LocaleRuntime, not the stand-in from client.test.ts.
// Host transport, Cordis ownership, and rendering are test doubles: this is a
// service-contract test, not a Desktop application or persistence-on-disk test.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import type { Context } from "@deepseek-ai/cordis";
import type { LocaleRuntime } from "@deepseek-ai/dsh-client-locale/client";
import { apply } from "../src/client/index.ts";

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
const removeEnglish = locale.register("common", "en", {
  ok: "OK",
  "codeBlock.title": "Code block",
});
assert.equal(locale.getLocale().active, "en");

for (let cycle = 0; cycle < 3; cycle += 1) {
  const disposers: Array<() => void> = [];
  apply({
    locale,
    effect(setup: () => () => void) {
      disposers.push(setup());
    },
  } as unknown as Context);
  assert.equal(locale.getLocale().active, "ja");
  assert.equal(locale.getLocale().locales.find((entry) => entry.id === "ja")?.label, "日本語");
  assert.equal(locale.bind("common")("codeBlock.title"), "Code block");
  locale.setLocale("en");
  assert.equal(preference, "en");
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
}
assert.deepEqual(writes, ["en", "ja", "en", "ja", "en", "ja"]);
removeEnglish();
for (const dispose of providerDisposers.toReversed()) dispose();
assert.equal(listeners.size, 0);
console.log("Published LocaleRuntime 0.2.0-rc.2 contract PASS (mock Host, no Desktop UI)");
