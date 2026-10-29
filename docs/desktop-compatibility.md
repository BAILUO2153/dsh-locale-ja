# Desktop compatibility and release validation

## Unreleased 0.3.2-compat.1 repair

The reported Desktop version is `0.2.1-rc.3`. The `0.3.1` package has an exact
`@deepseek-ai/dsh-client-locale: 0.2.0-rc.2` peer and no `engines.dsh`.
The official [rc.3 compatibility evaluator](https://github.com/deepseek-ai/deepseek-harness/blob/1f81c047fc48fa190a683e469daa699857e9afe8/packages/boot/app-boot/src/plugin-compatibility.ts)
checks DSH peer ranges before plugin import when `engines.dsh` is absent;
`peerDependenciesMeta.optional` does not bypass that check. This rejects the
old package on rc.3 before its client code can run. It is not a missing
Japanese dictionary, a `platform: "web"` mistake, or an npm ownership problem.

This local, unpublished candidate adds an explicit, finite `engines.dsh`
allowlist and aligns the optional peer range. The accepted versions are
`0.2.0-rc.2`, `0.2.1-rc.1`, `0.2.1-rc.2`, `0.2.1-rc.3`, `0.2.1-rc.4`, and
`0.2.2-alpha.2`; future untested versions remain excluded. Build dependencies
and the translation baseline remain pinned to rc.2. This is a loader/runtime
compatibility repair, **not** a claim that new rc.3 UI strings are translated.

The [official 0.2.2-alpha.2 locale provider](https://github.com/deepseek-ai/deepseek-harness/blob/dsh-v0.2.2-alpha.2/packages/client/locale/src/client/index.ts)
already registers Japanese and Japanese dictionaries before it exposes the
locale service. The old package then throws on duplicate `common/ja` or `ja`
registration. The candidate detects an already registered Japanese language
through the public snapshot and becomes a no-op before any dictionaries,
language, font, subscriptions, or Host writes are installed. It never steals
or disposes another provider's registration. On a release with built-in
Japanese, prefer the native language option and remove this redundant plugin.
Do not upgrade Desktop to an alpha release merely to obtain this behavior.
The guard applies to any existing `ja` owner, including a third-party pack:
it does not fill that owner's missing translations or fonts. If that provider
is later disabled or removed, disable and re-enable this plugin to activate
its own pack; it does not poll or automatically take ownership. Alpha.2
validation covers this safe no-op only, not this plugin's translation coverage.

Offline validation:

- The unchanged official rc.3 compatibility evaluator rejects the old manifest
  and accepts the candidate without any version exemption. The executed
  snapshot was fetched at rc.4 and independently verified against rc.3:
  both have Git blob `2e4ca5736a775aceadb0a2a10140af61f94ed2ac`.
- The official locale source file is byte-identical in rc.1, rc.2, rc.3, and
  rc.4. Each tagged source was tested, TypeScript-erased but otherwise unmodified,
  with a mock Host and renderer: all 2,246 existing dictionary entries resolve;
  selection writes, English fallback, and three unload/reload cycles pass.
- The alpha.2 provider source reproduces the old duplicate-registration error;
  candidate activation leaves its snapshot, dictionaries, and preference alone.
- Existing published rc.2 runtime tests, typecheck, lint, build, translation
  checks, and new existing-language regression tests remain required.

These are service-contract tests, not an installed macOS/Windows Desktop test.
The production installer feed and native application were not executed here.
Before acceptance, install the locally built
`bailuo2153-dsh-locale-ja-0.3.2-compat.1.tgz` through the same Desktop profile's
Plugin Manager, replacing this fork's old package, and run the checklist below
on rc.3. Do not keep the original-author package and this fork active together.
Back up the profile first. No `allow-version` exemption or patched DSH files are
needed; native validation is still required before calling this Desktop-verified.

The historical `0.3.1` instructions below retain their original rc.2 scope.

Version `0.3.1` changes the package identity from the published `0.3.0`
without changing its translations and targets DSH `0.2.0-rc.2`.
Earlier installation feedback included `0.3.0-compat.2`. Local-tarball
installation was also reported to work on two Macs, without a recorded version
for each machine or a full UI acceptance checklist. The `0.3.1` release tarball
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
2. If `@fang2hou/dsh-locale-ja` is installed, uninstall it in the same profile
   and confirm it disappears before proceeding. This package-name migration is
   not an in-place update; do not keep both packages active.
3. Open **Plugins → Add plugin**. Enter the absolute path to
   `bailuo2153-dsh-locale-ja-0.3.1.tgz`, review the package preview,
   and install/enable it. This is a local tarball, not a request to install
   the existing npm release. If already installed, use the manager's documented
   uninstall/reinstall flow rather than installing two copies.
4. Open **Settings → General → Language**, then select **日本語**.

The official
[Plugin Manager guide](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-plugin-manager/README.md#installing-a-bundle)
accepts a tarball or an absolute local path.

CLI alternative: use only the command registered by **Desktop → Manage dsh
Command…**, initialize Desktop once, then fully quit it. Run:

```sh
dsh --version
# Only if the old package is installed; confirm removal succeeds before adding.
dsh plugin --profile desktop remove @fang2hou/dsh-locale-ja
dsh plugin --profile desktop add /absolute/path/bailuo2153-dsh-locale-ja-0.3.1.tgz
```

Reopen Desktop afterward. The ordinary npm-installed `dsh` cannot mutate the
Desktop profile. See the
[official bundled command contract](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#bundled-command-runtime).
Do not run a `web` install command expecting it to affect Desktop.

## Desktop acceptance checklist (rebuilt release artifact; unverified)

- The installed identity is `@bailuo2153/dsh-locale-ja`; the old package is absent.
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

Remove the new package through Plugins, or fully quit Desktop and use its bundled command:

```sh
dsh plugin --profile desktop remove @bailuo2153/dsh-locale-ja
```

For rollback, confirm the new package is removed before reinstalling the original
`fang2hou-dsh-locale-ja-0.3.0.tgz`. Do not replace the published `v0.3.0` assets.
Version `0.3.1` is distributed through GitHub Releases, not npm. Its new scope
is an identity for GitHub distribution and makes no claim of npm ownership.

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
checklist above remains required before calling this release Desktop-verified.

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
