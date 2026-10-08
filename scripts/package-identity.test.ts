// Package identity gates; original authorship is deliberately independent.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string): string => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const id = "@bailuo2153/dsh-locale-ja";
const oldId = "@fang2hou/dsh-locale-ja";
const manifest = JSON.parse(read("package.json")) as { name: string; version: string };
assert.equal(manifest.name, id);
assert.equal(manifest.version, "0.3.1");
assert.match(read("cordis.patch.yml"), /name: "@bailuo2153\/dsh-locale-ja"/);
assert.ok(read("lib/client.js").includes(`id: "${id}"`));
assert.ok(read("src/client/font.ts").includes(`const PLUGIN_ID = "${id}"`));
for (const path of ["lib/client.js", "e2e/harness.ts", "e2e/locale.spec.ts"]) {
  assert.ok(read(path).includes(id), `${path}: new identity is present`);
  assert.ok(!read(path).includes(oldId), `${path}: no old runtime identity remains`);
}
const dev = read("scripts/dev-env.ts");
assert.ok(dev.includes(`function pluginLinked(packageId = "${id}")`));
const oldLinkGuard = dev.indexOf(`if (pluginLinked("${oldId}"))`);
assert.ok(oldLinkGuard >= 0, "old dev identity must be checked");
assert.ok(oldLinkGuard < dev.indexOf("if (fresh || !pluginLinked())"));
assert.ok(dev.includes("Run mise run dev-stop"), "old dev links require an explicit clean restart");
const packPattern = read("e2e/run-e2e.ts").match(
  /\.find\(\(name\) => \/(.+)\/\.test\(name\)\)/,
)?.[1];
assert.ok(packPattern, "E2E pack matcher must be present");
const matcher = new RegExp(packPattern);
assert.ok(matcher.test("bailuo2153-dsh-locale-ja-0.3.1.tgz"));
assert.ok(!matcher.test("fang2hou-dsh-locale-ja-0.3.0.tgz"));
assert.ok(read("LICENSE").includes("Copyright (c) 2026 fang2hou"));
assert.ok(read("README.md").includes("https://github.com/fang2hou/dsh-locale-ja"));
console.log("Package, loader, font, tools, tarball identity and original attribution PASS");
