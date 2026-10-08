// Exercise the exact-release published pure helpers, without mounting the UI.
// These checks do not prove rendered layout or native Desktop behavior.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";
import { DICTS } from "../src/client/dictionaries.ts";

type Translate = (key: string, params?: Record<string, string | number>) => string;

function translator(namespace: string): Translate {
  return (key, params = {}) => {
    const value = DICTS[namespace]?.[key];
    assert.notEqual(value, undefined, `missing Japanese composition fragment: ${namespace}:${key}`);
    return value!.replace(/\{([^{}]+)\}/g, (_match, name: string) => {
      assert.ok(Object.hasOwn(params, name), `missing composition argument: ${name}`);
      return String(params[name]);
    });
  };
}

const require = createRequire(import.meta.url);

/** Extract one named published source region; fail closed if its shape changes. */
function publishedRegion(published: string, sourcePath: string): string {
  const marker = `//#region ${sourcePath}`;
  const parts = published.split(marker);
  assert.equal(parts.length, 2, `${sourcePath}: published region is missing or duplicated`);
  const rest = parts[1]!;
  const end = rest.indexOf("//#endregion");
  assert.notEqual(end, -1, `${sourcePath}: published region end is missing`);
  const region = rest.slice(0, end);
  assert.ok(!region.includes("//#region"), `${sourcePath}: unexpected nested region`);
  return region;
}

const schedulePublished = readFileSync(
  require.resolve("@deepseek-ai/dsh-client-ui-schedule/client"),
  "utf8",
);
// @deepseek-ai/dsh-client-ui-schedule/lib/client.js:
// //#region lib/types/client/task-cron.js
// Includes parseCronExpression, cronPreview, and their local pure dependencies.
const cronSource = publishedRegion(schedulePublished, "lib/types/client/task-cron.js");
const cron = runInNewContext(
  `${cronSource}\n({ parse: parseCronExpression, preview: cronPreview });`,
  {},
  { timeout: 1_000 },
) as {
  parse: (expression: string) => unknown;
  preview: (parsed: unknown, t: Translate, locale: string) => string;
};
const scheduleT = translator("schedule.catalog");
const cronCases: Array<[string, string]> = [
  ["*/15 * * * *", "15 分ごと"],
  ["0 9 * * 1-5", "毎週 月曜日～金曜日 09:00"],
  ["0 9,15 * 1,12 *", "毎日（1月、12月のみ） 09:00、15:00"],
  ["*/10 9-17 * * 1-5", "毎週 月曜日～金曜日 09～17 時台に 10 分ごと"],
  ["0 */2 * * *", "2 時間ごと"],
  ["15,45 * 1,15 * 2", "毎月 1、15 日、または 火曜日 毎時 15、45 分"],
  [
    "0 9 */2 * 1-5",
    "毎月 1、3、5、7、9、11、13、15、17、19、21、23、25、27、29、31 日のうち 月曜日～金曜日 に当たる日 09:00",
  ],
];
for (const [expression, expected] of cronCases) {
  const parsed = cron.parse(expression);
  assert.notEqual(parsed, undefined, `${expression}: published cron parser rejected the fixture`);
  assert.equal(
    cron.preview(parsed, scheduleT, scheduleT("time.locale")),
    expected,
    `${expression}: Japanese cron composition changed`,
  );
}

type CommandDescriptor = { name: string; definitionId: string };
const commandsPublished = readFileSync(
  require.resolve("@deepseek-ai/dsh-client-ui-commands/client"),
  "utf8",
);
// @deepseek-ai/dsh-client-ui-commands/lib/client.js:
// //#region lib/types/client/locales.js supplies the shipped zh/en alias tables.
// //#region lib/types/client/resolution.js owns claimToken and resolveCommand.
const commandLocales = publishedRegion(commandsPublished, "lib/types/client/locales.js");
const commandResolution = publishedRegion(commandsPublished, "lib/types/client/resolution.js");
const commands = runInNewContext(
  `${commandLocales}\n${commandResolution}\n({ claimToken, resolveCommand, builtins: BUILTINS });`,
  {},
  { timeout: 1_000 },
) as {
  claimToken: (descriptor: CommandDescriptor, t: Translate) => string;
  resolveCommand: (
    token: string,
    descriptors: CommandDescriptor[],
  ) => CommandDescriptor | undefined;
  builtins: Record<string, string>;
};
const commandT = translator("command");
const canonicalTokens = ["goal", "plan", "feedback", "compact", "permission", "export"];
assert.deepEqual(Object.keys(commands.builtins).toSorted(), canonicalTokens.toSorted());
for (const name of canonicalTokens) {
  const definitionId = commands.builtins[name];
  assert.notEqual(definitionId, undefined, `${name}: missing first-party command definition`);
  const descriptor: CommandDescriptor = { name, definitionId: definitionId! };
  const token = commands.claimToken(descriptor, commandT);
  assert.equal(token, name, `${name}: the Japanese menu must insert the canonical token`);
  assert.equal(
    commands.resolveCommand(token, [descriptor]),
    descriptor,
    `${name}: the inserted token must resolve when typed again`,
  );
}

console.log(
  "Translation batch 2 composition PASS: 7 cron combinations and 6 canonical command tokens",
);
console.log(
  "Published pure helpers exercised; rendered layout and native Desktop remain untested.",
);
