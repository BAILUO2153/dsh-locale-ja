# Translation batch 2 — 0.3.0-compat.3

## Scope

This local candidate targets DSH `0.2.0-rc.2`, source commit
[`639ed015397290b3745d163aafe02ffee4aa3f84`](https://github.com/deepseek-ai/deepseek-harness/tree/639ed015397290b3745d163aafe02ffee4aa3f84).
It preserves all 1,294 entries from `0.3.0-compat.2` and adds 613 entries:

- 502 missing entries across the original 42 namespaces, including conversation
  tool details, workspaces, commands, plans, reminders, deliverables, permissions,
  and agent-preset guides
- 111 entries across six additional namespaces: terminal, shell settings,
  agent-loop settings, subagent settings, web-search settings, and session-log
  settings

The package now registers 48 namespaces and 1,907 localized entries. Six added
command tokens intentionally remain canonical English (`goal`, `plan`,
`feedback`, `compact`, `permission`, `export`), because the upstream parser only
recognizes its English and Chinese aliases. Their menu labels are Japanese.
Counts describe dictionary entries, not translated screens or a complete UI.

No runtime architecture, network behavior, Host persistence, fonts, dependency
pins, license, or original attribution is changed. Extra dictionaries register
through the existing public locale lifecycle, including its disposer.

## Remaining dictionary inventory

The fixed-source inventory identified 16 additional namespaces containing 819
entries beyond the original 42. Six are covered by this batch; these ten remain
outside the package:

| Namespace | Entries |
| --- | ---: |
| `settings.account` | 93 |
| `shortcuts` | 56 |
| `pluginManager` | 189 |
| `sidebarBrowser` | 26 |
| `shortcuts.layout` | 1 |
| `schedule.manager` | 187 |
| `sidebarOffice` | 15 |
| `sidebarExcel` | 15 |
| `agent-team` | 25 |
| `voice-input` | 101 |
| Total | 708 |

This is a pinned dictionary-file inventory, including optional and experimental
packages. It is not a count of every untranslated string in the application.
Inline or generated strings, external plugins, account pages, and native
Electron UI are outside this inventory. Registration evidence does not establish
that every package is enabled in a particular Desktop profile.

## Review and contracts

- The source fixture records each extra dictionary's English export, exact
  source URL, actual `locale.register` namespace, owning package, exports, and
  key-union availability
- The new packages were not installed. Extra dictionaries use explicit local
  source-pinned key unions. Several upstream unions are public and should be
  preferred in a future authorized dependency update; this check does not
  validate their emitted npm declarations
- Existing dictionary values are preserved. Placeholders and markup markers are
  checked against the English source, including repeated occurrences
- `detail.status.inactive` uses `非アクティブ`: its shared consumer represents
  multiple runtime status types and does not mean “never executed”
- The command parser and seven cron-description combinations are exercised
  using the relevant pure helpers from the installed exact-release bundles

## Validation

See the accompanying validation log for the final command results. The local
checks cover TypeScript, lint, formatting, build-envelope purity, loader
integration, repeated activation/teardown, every registered dictionary lookup
through published `LocaleRuntime@0.2.0-rc.2`, pinned fixture drift, placeholders,
and both translation-batch regression suites.

`mise` is unavailable in the execution environment. Its check components are run
explicitly using the already-installed tools. The environment's `pnpm` launcher
attempted automatic dependency preparation and failed before installation; it
was not retried. No dependencies were installed for this batch.

Not run: the installing/full-web-tree `pnpm drift` lane, Docker/Playwright E2E,
Desktop GUI, native loader, on-disk settings persistence, restart, or model API
calls. The source-fixture and mocked-Host checks are not end-to-end evidence.

## Desktop status

The user confirmed successful installation of `0.3.0-compat.2` on Desktop
`0.2.0-rc.2`. They also reported incomplete translation. This batch addresses
more of that surface, but this new package has not been installed by the user.
Three-language switching, restart persistence, layout, and full-UI acceptance
remain unconfirmed. Use the [Desktop checklist](desktop-compatibility.md).

The previous package is preserved separately as a rollback checkpoint. This
candidate is unpublished; no repository push, release tag, GitHub Release, PR,
or npm publication is part of this batch's preparation.
