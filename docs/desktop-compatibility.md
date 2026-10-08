# Desktop compatibility and release validation

Version `0.3.0` derives from `0.3.0-compat.4` and targets DSH `0.2.0-rc.2`.
Earlier installation feedback included `0.3.0-compat.2`. Local-tarball
installation was also reported to work on two Macs, without a recorded version
for each machine or a full UI acceptance checklist. The rebuilt `0.3.0` tarball
and Git installation path still need Desktop validation.

Batch 3 preserves all 1,907 compat.3 entries and adds 339 entries for account,
shortcuts, layout commands, and plugin management, for 52 namespaces and 2,246
entries. See [the coverage report](translation-batch3.md).
No complete Japanese coverage of all DSH surfaces is claimed.

## Verified contract

The official source is pinned to
[`dsh-v0.2.0-rc.2`, commit `639ed015397290b3745d163aafe02ffee4aa3f84`](https://github.com/deepseek-ai/deepseek-harness/tree/639ed015397290b3745d163aafe02ffee4aa3f84).

- Desktop runs the shared Web renderer. Keep `dsh.client.platform: "web"`:
  [`client/modules/src/index.ts`](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/modules/src/index.ts#L841)
  filters on that value. There is no separate `desktop` client manifest here.
- The public `locale.addLanguage` API and Host `locale.preference` remain
  responsible for selection and persistence. No plugin storage is added.
- Native Electron menus, recovery/update windows, and embedded third-party
  account pages are outside this language pack. Native shell copy supports
  English and Chinese in this release.

## Install the local tarball on Desktop

1. Confirm Desktop reports exactly `0.2.0-rc.2`. Keep a backup of your existing
   profile and note any earlier installation of `@fang2hou/dsh-locale-ja`.
2. Open **Plugins → Add plugin**. Enter the absolute path to
   `fang2hou-dsh-locale-ja-0.3.0.tgz`, review the package preview,
   and install/enable it. This is a local tarball, not a request to install
   the existing npm release. If already installed, use the manager's documented
   uninstall/reinstall flow rather than installing two copies.
3. Open **Settings → General → Language**, then select **日本語**.

The official
[Plugin Manager guide](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-plugin-manager/README.md#installing-a-bundle)
accepts a tarball or an absolute local path.

CLI alternative: use only the command registered by **Desktop → Manage dsh
Command…**, initialize Desktop once, then fully quit it. Run:

```sh
dsh --version
dsh plugin --profile desktop add /absolute/path/fang2hou-dsh-locale-ja-0.3.0.tgz
```

Reopen Desktop afterward. The ordinary npm-installed `dsh` cannot mutate the
Desktop profile. See the
[official bundled command contract](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#bundled-command-runtime).
Do not run a `web` install command expecting it to affect Desktop.

## Desktop acceptance checklist (rebuilt release artifact; unverified)

- Japanese appears once; switching English → Japanese → English changes the
  main interface and the Japanese font override reverses.
- Set Japanese, fully quit/reopen Desktop, and confirm Japanese is restored.
- Check Settings, the sidebar, and a conversation without sending a model
  request. Missing Japanese entries should display readable English.
- Disable/remove the plugin while Japanese is selected. The language option
  and plugin font disappear. On an English system the interface falls back
  to English; another registered browser/system language can also be selected
  by the Host. The saved `ja` preference is retained.
- Re-enable/reinstall once and check that Japanese restores without duplicate
  options, styles, or errors. Inspect narrow windows for clipped controls.

Remove through Plugins, or fully quit Desktop and use its bundled command:

```sh
dsh plugin --profile desktop remove @fang2hou/dsh-locale-ja
```

## Automated checks and limits

`pnpm typecheck`, `pnpm lint`, `pnpm format:check`, `pnpm build`, and
`pnpm test` are the local checks. `pnpm test` includes:

1. The built loader bundle with stand-in locale/DOM lifecycle tests.
2. The unmodified published `LocaleRuntime@0.2.0-rc.2` with a mock Host scope:
   selection, English fallback, preference writes, unload, and repeated reload.
3. `pnpm drift:compat`: the pinned reviewed-namespace source baseline, explicit
   missing-key list, exact installed version pins, unknown-key rejection,
   placeholder matching, and negative tests proving the guard fails on drift.

Typed dictionaries use `Omit` of the reviewed gaps, not unrestricted `Partial`.
An unreviewed new typed key still fails TypeScript. The source fixture records
official English copy and provenance; it is not a live upstream scan.

The separate `pnpm drift` command installs and audits the complete Web tree;
it is not part of the pinned compatibility check. CI runs Docker/Playwright
core checks with both a freshly built tarball and an exact Git source commit.
The separate mock conversation job is non-blocking because the old
chat/completions mock does not support rc.2 Messages requests (404). See
[installation checks](../DEVELOPMENT.md#installation-checks) for the commands
and boundaries. Before running a real runtime, use a fresh
isolated DSH home and explicitly disable session-log export, package inventory
uploads, product analytics, OpenTelemetry, and registry probing; a single
telemetry environment variable is not proof of zero external traffic.

These Node tests do not exercise the macOS GUI, native Desktop loader, or
settings persistence across a Desktop restart. The prior version’s user-confirmed installation is independent evidence only. The acceptance
checklist above remains required before calling the candidate Desktop-verified.

## Translation batch 1

The batch fills 168 reviewed gaps across chat, settings, models, plugin inventory,
and document/file/right/image/PDF sidebars. At the end of batch 1, the remaining 502 gaps referred only
to the original 42 namespaces; they are not the total untranslated surface of DSH.
New namespaces were outside batch 1 coverage. Source review resolves composed
status titles, elapsed-time suffixes, expanded transcript mode, and explicit pane
focus messages. Tests exercise the published pure title and duration helpers.
Rendered layout and actual keyboard-focus behavior remain untested.

The separately sealed `0.3.0-compat.1` source and package remain available as the
pre-translation checkpoint. No old Japanese values were changed in this batch.
