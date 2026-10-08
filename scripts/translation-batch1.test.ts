// Source-level translation checks plus the published pure composition helpers.
// These do not render Desktop and do not prove layout or keyboard behavior.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import ts from "typescript";
import { DICTS } from "../src/client/dictionaries.ts";

const translations = JSON.parse(
  readFileSync(new URL("./fixtures/translation-batch1.json", import.meta.url), "utf8"),
) as Record<string, Record<string, string>>;
const records = JSON.parse(
  readFileSync(new URL("./fixtures/translation-batch1-review.json", import.meta.url), "utf8"),
) as Array<{
  namespace: string;
  key: string;
  sourceEn: string;
  translation: string;
  ambiguities: string[];
}>;
assert.equal(records.length, 168);
assert.equal(new Set(records.map((row) => `${row.namespace}:${row.key}`)).size, 168);
for (const row of records) {
  assert.equal(row.translation, translations[row.namespace]?.[row.key]);
  assert.equal(row.translation, DICTS[row.namespace]?.[row.key]);
  assert.equal(row.ambiguities.length, 0, `${row.key}: unresolved source-context ambiguity`);
  const tokens = (text: string): string[] =>
    [...text.matchAll(/\{[^{}]+\}|<\/?[A-Za-z][^>]*>/g)].map((match) => match[0]).toSorted();
  assert.deepEqual(tokens(row.translation), tokens(row.sourceEn), `${row.key}: marker mismatch`);
}

type Translate = (key: string, params?: Record<string, string>) => string;
const t: Translate = (key, params = {}) => {
  const value = DICTS.chat?.[key];
  assert.notEqual(value, undefined, `missing Japanese composition fragment: ${key}`);
  return value!.replace(/\{([^{}]+)\}/g, (_match, name: string) => {
    assert.ok(Object.hasOwn(params, name), `missing composition argument: ${name}`);
    return params[name]!;
  });
};

const require = createRequire(import.meta.url);
const published = readFileSync(require.resolve("@deepseek-ai/dsh-client-ui-chat/client"), "utf8");
const source = ts.createSourceFile("published-chat.js", published, ts.ScriptTarget.Latest, true);
function pureFunction(name: string): unknown {
  const matches: ts.FunctionDeclaration[] = [];
  const visit = (node: ts.Node): void => {
    if (ts.isFunctionDeclaration(node) && node.name?.text === name) matches.push(node);
    ts.forEachChild(node, visit);
  };
  visit(source);
  assert.equal(matches.length, 1, `${name}: published helper shape changed`);
  // eslint-disable-next-line no-new-func -- evaluate only this exact published pure function
  return new Function(`return (${matches[0]!.getText(source)});`)() as unknown;
}
const processTitle = pureFunction("processTitle") as (
  summary: { counts: Array<{ kind: string }> },
  translate: Translate,
) => string;
const formatRunDuration = pureFunction("formatRunDuration") as (
  ms: number,
  translate: Translate,
) => Array<{ text: string; numeric: boolean }>;
const summary = (...kinds: string[]): { counts: Array<{ kind: string }> } => ({
  counts: kinds.map((kind) => ({ kind })),
});
assert.equal(processTitle(summary(), t), "分析が完了");
assert.equal(
  processTitle(summary("read", "edit"), t),
  "ファイルを読み込み済み、ファイルを編集済み",
);
assert.equal(
  processTitle(summary("read", "edit", "commands", "tools"), t),
  "ファイルを読み込み済み、ファイルを編集済み、コマンドを実行済みなど",
);
const duration = formatRunDuration(3_661_000, t)
  .map((part) => part.text)
  .join("");
assert.equal(duration, "1時間1分1秒");
assert.equal(t("message.turnProcess.took") + duration, "完了・所要時間 1時間1分1秒");
assert.equal(t("message.stepProcess.sharedPrefix"), "");
assert.equal(t("settings.transcript.verbose"), "すべて展開");
assert.match(DICTS.sidebarRight?.["command.noFocus"] ?? "", /フォーカス/);
assert.match(DICTS.sidebarRight?.["command.stale"] ?? "", /フォーカス/);
console.log(
  "Translation batch 1 PASS: 168 reviewed keys; published title/duration helpers exercised",
);
console.log("Native focus behavior and rendered layout remain untested.");
