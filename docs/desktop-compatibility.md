# Desktop compatibility preview

This local, unpublished `0.3.0-compat.2` package targets DSH `0.2.0-rc.2`.
It retains the 1,126 original Japanese strings and adds 168 source-reviewed
translations in the first batch, for 1,294 Japanese strings in the original 42 namespaces, removes 131
keys no longer shipped there, and explicitly permits 502 new keys to use
the Host's English dictionaries. New namespaces remain outside this coverage.
This is an installable compatibility candidate, not a complete Japanese translation.

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
   `fang2hou-dsh-locale-ja-0.3.0-compat.2.tgz`, review the package preview,
   and install/enable it. Download or copy the tarball to the same computer as
   Desktop first. Enter a full absolute path without surrounding quotes or a
   `~/` abbreviation. `review.zip` and source archives are not installable
   plugin packages. This is a local tarball, not a request to install
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
dsh plugin --profile desktop add /absolute/path/fang2hou-dsh-locale-ja-0.3.0-compat.2.tgz
```

Reopen Desktop afterward. The ordinary npm-installed `dsh` cannot mutate the
Desktop profile. See the
[official bundled command contract](https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/apps/desktop/README.md#bundled-command-runtime).
Do not run a `web` install command expecting it to affect Desktop.

## Desktop acceptance checklist (full GUI validation pending)

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
3. `pnpm drift:compat`: the pinned 42-namespace source baseline, explicit
   missing-key list, exact installed version pins, unknown-key rejection,
   placeholder matching, and negative tests proving the guard fails on drift.

Typed dictionaries use `Omit` of the reviewed gaps, not unrestricted `Partial`.
An unreviewed new typed key still fails TypeScript. The source fixture records
official English copy and provenance; it is not a live upstream scan.

The separate `pnpm drift` command still installs and audits the complete Web
tree. It and Docker/Playwright E2E were **not run** for this preview. Their
version pins are synchronized, but this is not evidence their UI selectors or
startup configuration work on rc.2. Before running a real runtime, use a fresh
isolated DSH home and explicitly disable session-log export, package inventory
uploads, product analytics, OpenTelemetry, and registry probing; a single
telemetry environment variable is not proof of zero external traffic.

Desktop installation on `0.2.0-rc.2` has been reported successful by a user.
The Node tests do not exercise macOS GUI, the native Desktop loader, actual
settings file persistence, or restart. Full GUI acceptance checks above remain
pending; installation success alone does not establish complete Desktop support.

## Translation batch 1

The batch fills 168 reviewed gaps across chat, settings, models, plugin inventory,
and document/file/right/image/PDF sidebars. The remaining 502 gaps refer only
to the original 42 namespaces; they are not the total untranslated surface of DSH.
New namespaces are still outside this coverage. Source review resolves composed
status titles, elapsed-time suffixes, expanded transcript mode, and explicit pane
focus messages. Tests exercise the published pure title and duration helpers.
Rendered layout and actual keyboard-focus behavior remain untested.

`0.3.0-compat.1` was the pre-translation checkpoint. No old Japanese values were
changed in this batch.
