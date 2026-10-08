# Screenshot-focused translation batch 3 — 0.3.0-compat.4

## Baseline and scope

This unpublished candidate targets DSH `0.2.0-rc.2`, pinned upstream commit
`639ed015397290b3745d163aafe02ffee4aa3f84`.
The previously delivered `0.3.0-compat.3` installation and source-review archives
were recovered and verified byte-for-byte against the retained local artifacts:

- Installation SHA256: `f53c09a4bea107b06aceb7430c6d8887cd403d33cada04c79a41c6364061f8fa`
- Review archive SHA256: `806071f275399a9fcf6a1c878ebd673133e4fc86ea1c608b1721cfb8c3b4e869`

The baseline is compat.3, not the older remote compat.2 branch or main.
All 1,907 baseline dictionary entries are unchanged, verified by per-namespace
canonical content hashes. This batch adds 339 entries across four namespaces:

| Namespace | Entries | Scope |
| --- | ---: | --- |
| `settings.account` | 93 | Account settings, menu, sign-in and onboarding |
| `shortcuts` | 56 | Shortcut settings, reference and editor |
| `shortcuts.layout` | 1 | Layout command label |
| `pluginManager` | 189 | Plugin management, status and controls |
| Total additions | 339 | |

The result is 52 namespaces and 2,246 entries. Entry counts include canonical
values, such as command tokens, product names, paths, and the English artwork
selector; they do not mean 2,246 translated screens or full UI coverage.
No new dependencies, runtime hooks, network behavior, DOM replacement,
Host persistence, license or original-author attribution are introduced.
The existing public `locale.register` lifecycle owns all new dictionaries.

## Screenshot gaps, cause, change and verification

All eight supplied PNGs were inspected as pixels. Host version `0.2.0-rc.2`
is visible in screenshot 5. None establishes the installed Japanese plugin
revision, the loaded bundle revision, or the reason an existing translation
was not displayed.

| Screenshot | Visible English and exact keys | Finding and action |
| --- | --- | --- |
| `1/image(6).png` | Plugins: `pluginManager.panel`; Signed in to DeepSeek: `settings.account.signedIn` | Missing namespaces added. |
| `1/image(6).png`, `7/image(20261007-092810).png` | Workspace Tree, Filter sessions, archive filters: `workspace.groupBy.workspaceTree`, `filterBy.label`, `viewOptions.hideArchived/showArchived/onlyArchived` | Already translated in compat.3; preserved and tested with actual published LocaleRuntime. |
| `2/image(7).png` | Plugins breadcrumb, Components, total count: `pluginManager.crumbRoot/partsLabel/partsCountTotal`; account menu: `settings.account.settings/contactUs/signOut/signedIn` | Missing namespaces added; `{count}` interpolation tested. |
| `3/image(8).png` | Account, account information, balance and actions: `settings.account.nav/signedIn/profileUnavailable/accountInfo/balance/bonusBalance/more/usage/topUp` | Missing namespace added. |
| `4/image(9).png`, `5/image(10).png` | Keyboard shortcuts, description and Edit shortcuts: `shortcuts.settings/description/view` | Missing namespace added; exact consumer verified in pinned `Reference.tsx`. |
| `5/image(10).png` | Upload Session Log and description: `settings.sessionLog.title/description` | Already translated in compat.3; preserved and runtime-tested. |
| `6/image(20261007-092809).png` | Mode details, How to use: `settings.agentPreset.modeExplanation/howToUse` | Already translated in compat.3; preserved and runtime-tested. |
| `8/image(20261007-092811).png` | New session: `workspace.actions.newSession` | Already translated; installed rc.2 tooltip consumer and runtime lookup verified. |

No pictured control is proven to be native-shell hard-coded. The account
namespace is registered only in the Desktop renderer, but it still uses the
shared public locale service and accepts plugin-provided Japanese entries.

### Boundaries that dictionary changes cannot settle

- `Default workspace`: rc.2 `workspaceDisplayTitle()` localizes only the stored
  sentinel `default-workspace` through `common.workspace.defaultName`. Other
  stored workspace names are displayed verbatim. No user workspace was renamed.
- Screenshot 2 contains English package metadata, including this package's
  English description. That is static metadata, not an established locale key;
  it remains unchanged.
- Preset IDs `standard`, `ptc`, `minimal`, and `cordis` are identifiers.
- The upstream onboarding artwork only ships English and Chinese variants.
  `settings.account.onboardingArtworkLocale` intentionally remains `en`;
  translating this selector to `ja` would request a nonexistent asset.
- External account pages, server-delivered content, native Electron UI and
  third-party package metadata remain outside this client dictionary plugin.

## Contract and translation review

All four upstream registration files were re-read at the pinned commit, with
blob SHAs and relevant registration/binding/slot lines recorded in
`scripts/fixtures/translation-batch3-registration.json`.
The exact English key sets are preserved in the source inventory. These four
owning packages are not installed in the bounded devDependency set, so their
key unions remain explicitly source-pinned local unions, not claims of
validation against emitted package declarations.

The new account copy was checked against pinned `SignInDialog.tsx`,
`OnboardingPurposeStep.tsx`, and `OnboardingWelcomeStep.tsx`, including inline
copy-button success/failure states and split title composition. Control paths
and product labels remain canonical. Plugin navigation help uses the existing
Japanese labels: 設定 → プラグイン → プラグイン一覧.

## Verification and remaining acceptance

The final validation log records exact commands and exit statuses. Checks cover:

- TypeScript source/tool configurations, oxlint, oxfmt and generated declarations
- Build envelope, zero runtime platform imports/require, plugin manifest and loader contract
- Every registered entry through unmodified published `LocaleRuntime@0.2.0-rc.2`
- Host English dictionaries registering before or after the Japanese plugin
- English/Japanese switches, stored-Japanese activation and repeated teardown/reload
- Eleven already-translated screenshot labels through resolver functions bound before activation
- Pinned source coverage, all marker/placeholder multiplicities, and preservation of all compat.3 entries
- Existing command-token and cron-composition regression suites
- Package contents, patch applicability and SHA256 checksums

`mise` is not installed in this cloud environment. Its check components are run
with Node 24 and the retained pnpm 12.8.1 executable. The first plain pnpm run
attempted automatic dependency preparation and failed because the reused
node_modules path is a symlink. The final commands use
`--config.verifyDepsBeforeRun=false` to run installed tools without installation;
this is an invocation-only setting, not a repository policy change. All pinned
DSH dependency versions are checked by the compatibility gate.

Not verified: actual Mac installation/loading, rendered layout, native shell,
restart/on-disk persistence, account sign-in, billing or model API calls.
Docker/Playwright E2E and the installing full-tree `pnpm drift` lane are not run.
Cloud runtime tests are service-contract evidence, not Mac GUI acceptance.
The observed mixed language could involve an older or stale loaded artifact;
this remains undetermined until the Mac's actual loaded version is checked.

The fixed source inventory still contains 369 entries across six uncovered
namespaces: `sidebarBrowser` (26), `schedule.manager` (187), `sidebarOffice` (15),
`sidebarExcel` (15), `agent-team` (25), and `voice-input` (101). Optional package
activation varies by profile, and this inventory excludes inline/generated copy.

## Safe Desktop acceptance checklist

When the user chooses to test this candidate, verify the installed and loaded
plugin version is `0.3.0-compat.4`; keep compat.3 as rollback. Check the eight
pictured views, English/Chinese/Japanese switching, refresh/restart, shortcut
editor, plugin management labels, and account-menu layout. No real account,
plugin-installation or payment action is needed just to inspect translated text.
The candidate is local and unpublished: no push, PR, tag, release, or npm publish
is included in this work.
