# Development

This document describes how to develop, validate, and release
`dsh-locale-ja`.

The fork release `0.3.1` supports the DSH `0.2.0-rc.2` `web`
profile and the shared Desktop main UI. Native Desktop acceptance is pending. The `0.1.0` on npm is the older, dynamically
loaded artifact; the standard package ships from `0.2.0`.

## Compatibility preview limits

Read [Desktop compatibility](docs/desktop-compatibility.md) before installing or
starting a runtime. This preview preserves the previous 1,907 entries and extends coverage as listed
in [the batch 3 report](docs/translation-batch3.md). Reviewed English fallback
gaps are tracked explicitly. `pnpm test` includes
`pnpm drift:compat`, an offline pinned-release check. The full `pnpm drift`
and Docker E2E lanes are separate and have not been executed for this preview.
Do not treat their existing startup settings as verified privacy isolation.

## Prerequisites

The project standardizes its environment with [mise](https://mise.jdx.dev/):

| Tool                         | Managed by  | Purpose                                      |
| ---------------------------- | ----------- | -------------------------------------------- |
| Node.js LTS (24)             | `mise`      | Runtime / build                              |
| pnpm 12                      | `mise`      | Package manager (never npm/yarn)             |
| [cocogitto](https://cocogitto.ai/) (`cog`) | `mise` | Conventional Commits validation             |
| [prek](https://github.com/j178/prek)       | `mise` | Pre-commit framework                         |
| gitleaks                     | `mise`      | Secret scanning                              |
| actionlint, shellcheck       | `mise`      | Workflow and shell lint (prek hooks)         |
| TypeScript, esbuild, oxlint, oxfmt | npm devDeps | Type-check, declarations, bundle, lint, format |

TypeScript is pinned as an npm devDependency through the lockfile rather than
a mise tool: mise manages runtimes and CLI tools, while language packages
belong to pnpm. The lockfile makes the `tsc` version exactly as reproducible
as a mise pin.

## Setup

```bash
mise install          # provision runtimes and CLI tools
pnpm install          # install dev dependencies
prek install          # install git hooks (uses .pre-commit-config.yaml)
```

## Toolchain

- **Package manager**: pnpm only. Do not introduce npm or yarn.
- **Linter**: [oxlint](https://oxc.rs/docs/guide/usage/linter) (config:
  `.oxlintrc.json`). No ESLint. The `node` plugin's rules apply to `scripts/`
  and `e2e/` (the only Node-running code) through overrides;
  `no-await-in-loop` is off for the E2E/dev flows, which are sequential by
  design; `no-console` is off for build/test tooling; Playwright rules load
  through oxlint's `jsPlugins` bridge (`eslint-plugin-playwright`).
- **Formatter**: [oxfmt](https://oxc.rs/docs/guide/usage/formatter) (config:
  `.oxfmtrc.json`). No Prettier.
- **Type checker**: `tsc --noEmit` (configs: `tsconfig.json` for `src/`,
  `tsconfig.tools.json` for `scripts/` and `e2e/`; both use explicit `.ts`
  import specifiers — only declaration-only emit and Node type-stripping can
  resolve them).
- **Bundler**: esbuild (`scripts/build.ts`); it also emits declarations through
  TypeScript.
- **Commits**: Conventional Commits, validated by cocogitto (`cog`) and prek.
- **PR titles**: the title becomes the squash-merge commit subject on `main`;
  CI validates it with `cog verify` (`validate-pr-title` job in
  `.github/workflows/ci.yml`). The title reaches the script through an
  environment variable, never `${{ }}` interpolation (script-injection guard).
- **Pre-commit**: prek runs oxlint, oxfmt (check), gitleaks, actionlint
  (GitHub workflows), shellcheck, and (on push) typecheck, plus a `commit-msg`
  hook that runs `cog verify`.
- **Workspace policy** (`pnpm-workspace.yaml`): `allowBuilds` approves
  esbuild's postinstall; `minimumReleaseAge: 60` refuses resolutions
  published less than an hour ago, including the fast-moving
  `@deepseek-ai/*` prerelease line.

## Common tasks

All meaningful workflows are exposed as mise tasks (delegating to pnpm scripts):

```bash
mise run install        # pnpm install
mise run typecheck      # tsc --noEmit
mise run lint           # oxlint .
mise run format         # oxfmt --write .
mise run format-check   # oxfmt --check .
mise run build          # node scripts/build.ts -> lib/
mise run test           # pnpm test (browser-bundle integration test)
mise run check          # typecheck + lint + format-check + build + test
mise run clean          # remove lib/
mise run dev            # persistent local DSH web, hot-reloading this plugin
mise run dev-stop       # remove the dev container
```

The project's main validation entry point is:

```bash
mise run check
```

Local validation and CI use the same mise tasks so they cannot diverge.

## Build pipeline

The build produces three generated outputs:

- `lib/index.js` — Host half, emitted as ESM. Its empty `apply()` lets the
  package mount as a DSH Loader entry.
- `lib/client.js` — browser half, emitted as CommonJS inside the DSH loader
  envelope.
- `lib/types/**/*.d.ts` — TypeScript declarations emitted by `tsc`.

The browser envelope is:

```js
window.__ModuleLoader__.load({ id, factory: (require) => { ... return module.exports } })
```

`scripts/build.ts` asserts the envelope, the exposed `apply`/`inject`, the
absence of module syntax, and a zero-`require()` purity gate. `lib/` is
generated — **do not edit it by hand**; edit `src/` and rebuild.

`pnpm test` runs `scripts/client.test.ts`. It evaluates the built
`lib/client.js` through a fake `window.__ModuleLoader__` and drives it against a
stand-in locale service.

## Editing the dictionaries

Japanese copy lives in `src/client/dictionaries.ts`. Each dictionary is typed
against its namespace's shipped key union, so a renamed, removed, or added DSH
key is a compile-time error. Preserve placeholders such as `{name}` verbatim.
Follow the [Japanese translation guide](./docs/translation-guide.md) for
terminology, button wording, and checks against the actual UI.

Thirty-three of the original 42 namespaces use unions from the owning package's shipped
declarations. The other nine — `directory-browser`, `permission.access`,
`trajectory`, and the runtime-only namespaces (`documentHtml`,
`documentMarkdown`, `reference`, `sidebarCodePreview`, `sidebarImage`,
`sidebarPdf`) — use documented local copies because their owning packages do
not expose those unions through their `exports` maps; `pnpm typecheck` cannot
see drift in those nine, but the upstream drift check below can — it reads
the key contracts straight out of any DSH release (typed declarations plus
the shipped bundles' `locale.register` call sites).

The batch 2 extra dictionaries use pinned local key unions because their packages
are not installed in this bounded preview. The extra-namespace fixture records
source registration and package exports, including public type exports that can
replace local unions in a future authorized dependency update. This offline gate
is not a check of new npm declaration files or actual profile activation.

After editing a dictionary, run:

```bash
pnpm typecheck
```

This checks the typed dictionary keys at the pinned devDependency versions.
It does not validate Japanese meaning or placeholders inside string values;
review those against the shipped source strings and their UI call sites.


## End-to-end suite

`mise run e2e` (`e2e/run-e2e.ts`):
1. builds the plugin tarball from the current source (`pnpm pack`),
2. builds a Docker image pinning `@deepseek-ai/dsh@0.2.0-rc.2`
   (`e2e/Dockerfile`),
3. starts `dsh web` in a container with a throwaway in-container `$DSH_HOME`
   (booting with `--no-open`; readiness is any HTTP response, since the
   `/api` browser-trust fence answers tokenless requests with 401/303),
4. extracts the per-boot process token from the container logs
   (`harness.authUrl`) and drives the real UI with Playwright from the host
   through the authenticated entry URL, in four phases — baseline (no
   plugin), installed (日本語 selectable, applies, persists, reverses), a
   mock-LLM conversation turn rendering the Japanese reply chrome, and
   removed (back to English, menu back to 中文/English),
5. installs/removes the plugin between phases via
   `dsh plugin --profile web add/remove` inside the container, and
   tears everything down.

The suite runs a DeepSeek-compatible mock LLM (`e2e/mock-llm.ts`) on the
host and points the container's `DEEPSEEK_BASE_URL`/`DEEPSEEK_API_KEY` at
it through the `host.docker.internal` host-gateway mapping, so the
conversation phase needs no real credentials or network access.

Prerequisites: a running Docker daemon (OrbStack/Docker Desktop), and
one-time `pnpm exec playwright install chromium`. CI runs the same suite on
every PR (`e2e` job) and gates releases on it. It is deliberately not part of
`mise run check` or any git hook.

The installed phase also opens the Japanese permission confirmation and preset
duplication dialogs, checks acknowledgement and invalid-ID behavior, and cancels
both actions. The conversation phase opens the per-turn and session token-usage
panels and checks the mock's numeric values. Screenshots of these Japanese views
are saved under `e2e/.artifacts/` even on success for visual review. These checks
cover those specific flows; passing E2E does not establish linguistic accuracy
for every dictionary entry.

Compact labels also have before/after layout checks at viewport widths of 1280px
and 1024px. These reject new line breaks, clipped text, and labels that force
previously single-line neighboring text to wrap. The JSON measurements and
screenshots are retained in the same artifact directory. See the translation
guide for the text-substitution method and its scope.

The DSH under test defaults to the pinned version above; override it with
`DSH_E2E_DSH_VERSION` (an exact version, `next`, or `latest`):

```bash
mise run e2e-next                   # next @deepseek-ai/dsh
DSH_E2E_DSH_VERSION=0.1.5-rc.2 mise run e2e   # an exact upcoming version
```

## Local dev environment (Docker + hot reload)

`mise run dev` brings up a persistent, isolated DSH web for manual testing —
the same pinned image the E2E suite uses — with this repository hot-linked
into it:

1. starts the container `dsh-locale-ja-dev` at `http://127.0.0.1:13080`
   (override with `DSH_DEV_PORT`), bind-mounting the repo read-only and
   installing it through pnpm's `link:` protocol, then
2. stays in the foreground watching `src/` and the loader-level files,
   rebuilding on every change.

The environment also starts a DeepSeek-compatible mock LLM
(`e2e/mock-llm.ts`) on `127.0.0.1:13090` and wires the container's
`DEEPSEEK_BASE_URL`/`DEEPSEEK_API_KEY` to it, so manual conversations in the
dev UI complete without a real API key.

The reload chain after that is DSH's own dev mechanism (`dsh-client-hmr`):
the server stat-polls every plugin's client bundle, and when the watcher's
rebuild rewrites `lib/client.js`, the open page hot-swaps the plugin live —
no browser refresh, and the plugin's disposers run on every swap. Changes to
`cordis.patch.yml` or `package.json` restart DSH automatically (the loader
composes the plugin tree at boot).

Companion tasks: `mise run dev-stop` (remove the container; its profile state
is throwaway by design), `mise run dev-restart` (manual DSH restart),
`mise run dev-logs`. Test against another DSH with `DSH_DEV_DSH_VERSION`
(exact version, `next`, or `latest`), same override the E2E suite uses.

When moving a previously linked dev container to the new package identity,
run `mise run dev-stop`, then `mise run dev`. This discards that throwaway
container profile. The dev launcher refuses to add the new identity while the
old link remains, rather than installing both. Back up any dev state you need
before removing the container.

## Watching upstream DSH releases

DSH is a developer preview that ships faster than this plugin pins it. The
`E2E next DSH` workflow (`.github/workflows/e2e-upstream.yml`) runs twice a
day on `main` against the registry's `next` release — the prerelease line the
plugin tracks — and fails the run — and emails the repo owner — when upstream
drifts:

- **E2E on the next DSH** catches runtime breakage (locale service
  contracts, plugin loading, UI structure).
- **`mise run drift`** (`scripts/check-dict-drift.ts`) installs that
  release's full web tree into a throwaway directory and diffs the Japanese
  dictionaries against the shipped locale key contracts — every namespace,
  including all nine locally declared ones — reporting missing keys (fallback
  leaks through), stale keys, and uncovered or removed namespaces.

Both checks also run on manual dispatch, where a `dsh_version` input accepts
an exact version to preview a release before the pin moves to it. A red
nightly means: pull that DSH version into devDependencies and
`e2e/harness.ts`'s pin, refresh `src/client/dictionaries.ts`, and release.

## Testing against a real DSH

Build a package tarball, install that tarball into the `web` profile, and start
DSH:

```bash
pnpm build && pnpm pack
dsh plugin --profile web add <absolute path to the tgz>
dsh web
```

In the browser, open **Settings → Language** and choose **日本語**. The path
to the tarball must be absolute because `pnpm` runs with its working directory
set to the profile directory. Remove the local package with:

```bash
dsh plugin --profile web remove @bailuo2153/dsh-locale-ja
```

## Coding standards

- **Code language is English.** Identifiers, comments, and configuration are
  English. Only dictionary literal values (UI copy) are Japanese. No romaji or
  pinyin identifiers.
- Follow the repository's engineering guideline (standardized toolchain,
  Conventional Commits, root-cause fixes over suppression, no
  over-engineering).
- Prefer the smallest coherent change. Introduce abstractions only when they
  solve a real maintenance, correctness, or architecture problem.

## Validating a change

Before considering work complete:

```bash
mise run check        # typecheck / lint / format-check / build / test
prek run --all-files  # run all pre-commit hooks
```

Review the diff, confirm no unintended files or dependencies were added, and
that architecture invariants (see `ARCHITECTURE.md`) still hold.

## Fork releases

This fork uses `@bailuo2153/dsh-locale-ja` from `0.3.1` onward.
The scope is a package identity for GitHub distribution, not a claim of npm
account/scope ownership or a registry publication. It does not publish to the
original author's npm namespace. The tag-triggered npm release
workflow has been removed. Original release design remains documented as
historical context in [ADR-0005](./docs/adr/0005-npm-distribution-channel.md).

Before installing this release, remove `@fang2hou/dsh-locale-ja` from the
same profile and confirm removal. This is an identity migration, not an in-place
upgrade: never activate both packages together. To roll back, remove the new
package first, then install the original `v0.3.0` tarball. The existing tag and
release assets remain unchanged. New tags, releases, and npm publication require
separate approval. Original-author credits and MIT text must remain intact.

Build and review the release tarball locally:

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
pnpm test
pnpm pack --pack-destination dist
```

`lib/index.js`, `lib/client.js`, and `lib/types/` are generated by the build and
committed for Git installation. Never edit them by hand.
CI rebuilds and checks `git diff --exit-code -- lib`. `prepack` is retained;
there is no `prepare` hook. Git installation on the actual Desktop package
manager has not been verified and is not the recommended release path yet.

Release candidates are reviewed in this fork before merging. Run the automated
checks and Desktop acceptance checklist against the final tarball, then attach
that `.tgz` and its SHA-256 checksum to the fork's GitHub Release.
The release includes the tarball and a SHA-256 checksum. The README documents
both downloading that package and cloning the release tag to build it locally.

### Installation checks

The required CI matrix runs four core checks for each installation source:
baseline, install/activate/persist/revert, settings/preset actions, and uninstall.
The `tgz` lane builds and packs the checked-out source; the `git` lane installs
that exact source commit from the fork. Pull requests use the reachable head
commit, not GitHub's synthetic merge commit. Both lanes must pass.

```bash
DSH_E2E_SUITE=core pnpm e2e
DSH_E2E_SUITE=core DSH_E2E_GIT_SPEC=https://github.com/BAILUO2153/dsh-locale-ja.git#<full-commit-sha> pnpm e2e
DSH_E2E_SUITE=mock pnpm e2e
```

Without `DSH_E2E_GIT_SPEC`, the runner installs its locally built tarball.
Without `DSH_E2E_SUITE`, it runs all tests, including the known failing mock.
The independent, non-blocking mock job retains its assertions and failing exit
status: rc.2 sends Messages requests, but `e2e/mock-llm.ts` only implements
chat/completions and returns 404. No real model API is called. CI artifacts
include screenshots and container logs with process-login tokens redacted.
A green core matrix does not establish successful conversation/usage rendering
or native macOS Desktop behavior.
