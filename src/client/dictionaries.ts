/**
 * Japanese dictionaries for the 42 reviewed DSH locale namespaces, typed
 * against each namespace's shipped key union — key drift is a compile
 * error. Placeholders ({name}) are preserved verbatim.
 */
import { SCREENSHOT_DICTS } from "./screenshot-dictionaries.ts";
import { EXTRA_DICTS } from "./extra-dictionaries.ts";
import type {
  LocaleDictOf as CompleteLocaleDictOf,
  LocaleNamespaceMap,
} from "@deepseek-ai/dsh-client-ui-slots";
import type { ExpectedMissing } from "./expected-missing.ts";

// Only reviewed gaps are optional. Any other new upstream key still fails tsc.
type LocaleDictOf<N extends keyof LocaleNamespaceMap & keyof ExpectedMissing> = Omit<
  CompleteLocaleDictOf<N>,
  ExpectedMissing[N][number]
>;

// common, settings.locale
import type {} from "@deepseek-ai/dsh-client-locale/client";
// settings.agentPreset
import type {} from "@deepseek-ai/dsh-client-ui-agent-preset/client";
// approval
import type {} from "@deepseek-ai/dsh-client-ui-approval/client";
// chat
import type {} from "@deepseek-ai/dsh-client-ui-chat/client";
// command
import type {} from "@deepseek-ai/dsh-client-ui-commands/client";
// conversation
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client";
// cordis
import type {} from "@deepseek-ai/dsh-client-ui-cordis/client";
// deliverables
import type {} from "@deepseek-ai/dsh-client-ui-deliverables/client";
// goal
import type {} from "@deepseek-ai/dsh-client-ui-goal/client";
// slash.menu
import type {} from "@deepseek-ai/dsh-client-ui-input-trigger/client";
// job
import type {} from "@deepseek-ai/dsh-client-ui-jobs/client";
// feedback
import type {} from "@deepseek-ai/dsh-client-ui-message-feedback/client";
// model
import type {} from "@deepseek-ai/dsh-client-ui-model-selection/client";
// open-in-app
import type {} from "@deepseek-ai/dsh-client-ui-open-in-app/client";
// settings.permission
import type {} from "@deepseek-ai/dsh-client-ui-permission-presets/client";
// plan
import type {} from "@deepseek-ai/dsh-client-ui-plan/client";
// schedule.catalog
import type {} from "@deepseek-ai/dsh-client-ui-schedule/client";
// settings
import type {} from "@deepseek-ai/dsh-client-ui-settings-general/client";
// settings.models
import type {} from "@deepseek-ai/dsh-client-ui-settings-models/client";
// settings.pluginInventory
import type {} from "@deepseek-ai/dsh-client-ui-settings-plugin-inventory/client";
// settings.plugins
import type {} from "@deepseek-ai/dsh-client-ui-settings-plugins/client";
// sidebar
import type {} from "@deepseek-ai/dsh-client-ui-sidebar/client";
// sidebarDocumentPreview
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/client";
// sidebarFiles
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-files/client";
// sidebarRight
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-right/client";
// skill
import type {} from "@deepseek-ai/dsh-client-ui-skill/client";
// subagent
import type {} from "@deepseek-ai/dsh-client-ui-subagent/client";
// settings.theme
import type {} from "@deepseek-ai/dsh-client-ui-theme/client";
// question
import type {} from "@deepseek-ai/dsh-client-ui-user-questions/client";
// workflowRun
import type {} from "@deepseek-ai/dsh-client-ui-workflow-run/client";
// workspace
import type {} from "@deepseek-ai/dsh-client-ui-workspace/client";
// session-log-download
import type {} from "@deepseek-ai/dsh-session-log-export/client";
import type {} from "@deepseek-ai/dsh-client-ui-trajectory/client";

// The namespaces below ship no key union through their `exports`; each key
// set is copied from the named package, and `pnpm drift` is the only check
// that sees their upstream drift.
/** Keys of @deepseek-ai/dsh-client-ui-trajectory@0.2.0-rc.2 (union lives in a declaration the package's `exports` never exposes). */
type TrajectoryKey =
  | "view.trajectory"
  | "toolbar.aria"
  | "toolbar.duration"
  | "toolbar.useActualDuration"
  | "toolbar.useEqualWidth"
  | "toolbar.actualTime"
  | "toolbar.turns"
  | "toolbar.expandTurns"
  | "toolbar.collapseTurns"
  | "toolbar.calls"
  | "toolbar.expandCalls"
  | "toolbar.collapseCalls"
  | "toolbar.search"
  | "toolbar.searchPlaceholder"
  | "kind.system"
  | "kind.user"
  | "kind.context"
  | "kind.compacted"
  | "kind.message"
  | "kind.assistant"
  | "kind.tool"
  | "kind.subtool"
  | "kind.sub"
  | "column.input"
  | "column.output"
  | "column.think"
  | "column.time"
  | "column.model"
  | "column.tools"
  | "turn.label"
  | "section.betweenTurns"
  | "group.message"
  | "group.step"
  | "group.compaction"
  | "status.failed"
  | "status.pending"
  | "status.completed"
  | "timing.notAvailable"
  | "timing.notRecorded"
  | "timing.stepStartUnavailable"
  | "timing.firstTokenUnavailable"
  | "timing.usageUnavailable"
  | "timing.outputTokensUnavailable"
  | "timing.durationTooShort"
  | "timing.showLocalTime"
  | "timing.showUnixTimestamp"
  | "timing.started"
  | "timing.totalDuration"
  | "timing.ttft"
  | "timing.generation"
  | "timing.throughput"
  | "timing.duration"
  | "timing.source"
  | "timing.sessionTimestamps"
  | "timing.sessionTimestampsRunning"
  | "timing.request"
  | "unit.milliseconds"
  | "unit.seconds"
  | "unit.tokens"
  | "unit.tokensPerSecond"
  | "usage.tokens"
  | "usage.reasoning"
  | "usage.content"
  | "usage.notReported"
  | "usage.input"
  | "usage.cached"
  | "usage.cacheCreated"
  | "usage.other"
  | "usage.output"
  | "usage.thisRequest"
  | "usage.sessionCumulative"
  | "options.notRecorded"
  | "options.json"
  | "source.unknown"
  | "source.user"
  | "source.plugin"
  | "source.pluginNamed"
  | "source.goal"
  | "source.goalRound"
  | "source.notRecorded"
  | "source.messageJson"
  | "tab.summary"
  | "tab.rawOutput"
  | "tab.preview"
  | "tab.raw"
  | "tab.source"
  | "tab.payload"
  | "tab.result"
  | "tab.schema"
  | "tab.timing"
  | "tab.diff"
  | "tab.systemPrompt"
  | "tab.tools"
  | "tab.options"
  | "tab.usage"
  | "record.toolCallOnly"
  | "record.noContent"
  | "record.noPayload"
  | "record.noResult"
  | "record.noOutput"
  | "record.schemaUnavailable"
  | "record.parameters"
  | "record.resultJson"
  | "record.json"
  | "record.parametersJson"
  | "record.namedParametersJson"
  | "record.payloadJson"
  | "record.outputJson"
  | "record.thinking"
  | "record.wrapLines"
  | "code.source"
  | "code.output"
  | "code.copySource"
  | "code.copyOutput"
  | "code.originalJson"
  | "code.running"
  | "record.systemPromptMissing"
  | "record.toolsMissing"
  | "record.systemPrompt"
  | "record.tools"
  | "block.openSummary"
  | "block.openSummaryTitle"
  | "block.label"
  | "history.loadingTrajectory"
  | "history.loadingEarlier"
  | "history.loadingEarlierAria"
  | "history.loadEarlier"
  | "history.clickToLoadEarlier"
  | "request.label"
  | "request.labelCompaction"
  | "request.compaction"
  | "request.compactionPurpose"
  | "request.retryProgress"
  | "request.collapsedSummary"
  | "request.collapsedTurn"
  | "request.collapsedAssistant"
  | "request.rowAria"
  | "request.rowPrefix"
  | "request.rowAriaCompaction"
  | "request.noContent"
  | "summary.toolCalls.one"
  | "summary.toolCalls.other"
  | "summary.steps.one"
  | "summary.steps.other"
  | "details.event"
  | "details.resize"
  | "details.resizeTitle"
  | "details.close"
  | "details.status"
  | "details.purpose"
  | "details.provider"
  | "details.model"
  | "details.toolCalls"
  | "details.subtoolCalls"
  | "details.error"
  | "details.failure.auth"
  | "details.retry"
  | "details.scheduled"
  | "details.retryDelay"
  | "details.result"
  | "details.compacted"
  | "details.assistantMessage"
  | "details.source"
  | "details.hierarchy"
  | "details.toolCall"
  | "timeline.aria"
  | "timeline.overviewAria"
  | "timeline.noTimingData"
  | "timeline.total"
  | "timeline.started"
  | "timeline.ttftDecoding"
  | "layout.compacting"
  | "layout.compactionFailed"
  | "layout.compacted"
  | "layout.toolCallOnly"
  | "attachment.list"
  | "attachment.imageName"
  | "layout.imageCount"
  | "layout.fileAttachments"
  | "layout.initialSystemPrompt"
  | "layout.systemPromptUpdated"
  | "layout.toolsUpdated"
  | "layout.toolAdded"
  | "layout.toolRemoved"
  | "layout.toolUpdateNotice"
  | "layout.toolsAdded"
  | "layout.toolsAddedCount"
  | "layout.toolsChanged"
  | "layout.toolsRemoved"
  | "layout.toolsRemovedCount"
  | "layout.systemPromptAndToolsUpdated"
  | "layout.compactionInterrupted";

/** Keys of @deepseek-ai/dsh-client-ui-directory-picker-browse@0.2.0-rc.2 (registers through the untyped overload, no namespace merge). */
type DirectoryBrowserKey =
  | "browser.title"
  | "browser.home"
  | "browser.newFolder"
  | "browser.folderName"
  | "browser.createIn"
  | "browser.untitledFolder"
  | "browser.create"
  | "browser.cancel"
  | "browser.open"
  | "browser.editPath"
  | "browser.loading"
  | "browser.truncated"
  | "browser.showHidden";

/** Keys of @deepseek-ai/dsh-client-ui-permission-presets@0.2.0-rc.2 (registers through the untyped overload). */
type PermissionAccessKey =
  | "mode"
  | "close"
  | "preset.readOnly"
  | "preset.workspaceWrite"
  | "preset.fullAccess"
  | "confirm.title"
  | "confirm.description"
  | "confirm.acknowledge"
  | "confirm.cancel"
  | "confirm.enable"
  | "auto.label"
  | "auto.badge"
  | "auto.description"
  | "auto.confirm.title"
  | "auto.confirm.description"
  | "auto.confirm.acknowledge"
  | "auto.confirm.enable";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type DocumentHtmlKey = "title" | "frame" | "loading" | "failed";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type DocumentMarkdownKey = "viewer.label" | "code.copy" | "code.copied" | "footnotes";

/** Keys of @deepseek-ai/dsh-client-ui-reference@0.2.0-rc.2 (registers through the untyped overload). */
type ReferenceKey =
  | "section.files"
  | "section.subagents"
  | "section.sessions"
  | "candidate.noCwd"
  | "crumb.root"
  | "time.now"
  | "time.minutes"
  | "time.hours"
  | "time.days"
  | "time.months"
  | "time.years";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarCodePreviewKey = "title" | "copy" | "copied";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarImageKey =
  | "zoomControls"
  | "zoomMenu"
  | "zoomOut"
  | "zoomIn"
  | "zoomFitWidth"
  | "zoomValue"
  | "title"
  | "preview"
  | "loading"
  | "failed"
  | "unsupported";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarPdfKey =
  | "zoomControls"
  | "zoomMenu"
  | "zoomOut"
  | "zoomIn"
  | "zoomFitWidth"
  | "zoomValue"
  | "title"
  | "pageImage"
  | "loading"
  | "rendering"
  | "failed"
  | "password"
  | "workerFailed"
  | "unsupported"
  | "retry";

const approval: LocaleDictOf<"approval"> = {
  waiting: "承認待ち",
  "detail.aria": "承認の詳細",
  escalation: "ツール {toolName} が権限昇格を要求しています",
  reject: "拒否",
  allowOnce: "一度だけ許可",
};

const chat: LocaleDictOf<"chat"> = {
  "view.chat": "チャット",
  "number.groupSeparator": ",",
  "duration.compactSeconds": "{seconds}秒",
  "duration.compactMinutes": "{minutes}分{seconds}秒",
  "duration.milliseconds": "{milliseconds}ミリ秒",
  "stats.counts": "{turns} ターン {steps} ステップ",
  "stats.cacheHit": "ヒット率 {percent}%",
  "stats.dialog.title": "セッション統計",
  "stats.dialog.usageTitle": "トークン使用量",
  "stats.dialog.llmTime": "モデル所要時間",
  "stats.dialog.toolTime": "ツール呼び出し所要時間",
  "stats.dialog.ttft": "最初のトークンまでの平均時間（TTFT）",
  "stats.dialog.speed": "出力速度（TPS）",
  "chat.loadingHistory": "履歴を読み込み中",
  "chat.loadError": "履歴の読み込みに失敗しました：{message}（{code}）",
  "chat.loadOlder": "さらに前を読み込む",
  "chat.toBottom": "一番下へ",
  "chat.deepDiving": "深く探索中...",
  "chat.turnNavigation.label": "ターンナビゲーション",
  "chat.turnNavigation.jump": "ターン {turn} へジャンプ",
  "chat.turnNavigation.jumpLoad": "ターン {turn} を読み込んでジャンプ",
  "chat.turnNavigation.turn": "ターン {turn}",
  "settings.transcript.title": "会話の表示",
  "settings.transcript.description": "完了したターンの処理過程の表示方法を選択します",
  "settings.transcript.compact": "コンパクト",
  "fileOpen.title": "ファイルを開けませんでした",
  "fileOpen.unknown": "このファイルを開けませんでした",
  "message.extraBlock": "追加ブロック",
  "message.systemPrompt": "システムプロンプト",
  "message.systemPromptUpdate": "システムプロンプトの更新",
  "message.contextInjection": "コンテキスト注入",
  "message.contextRecall": "セッション横断の再利用",
  "message.referenceSummary": "参照セッション · {labels}",
  "message.referenceSeparator": "、",
  "message.context.instructions.loaded": "読み込み済み",
  "message.context.instructions.added": "追加済み",
  "message.context.instructions.updated": "更新済み",
  "message.context.instructions.removed": "削除済み",
  "message.context.catalog.replaced": "カタログを差し替え",
  "message.context.catalog.more": "他 {count} 件",
  "message.context.snapshot.supersedes": "以前のスナップショットを置き換え",
  "message.context.relay.from": "セッション {session} から",
  "message.context.recall.counts": "{retained} 件保持 · {omitted} 件省略",
  "message.context.recall.truncated": "一部省略",
  "message.compaction": "コンテキストを圧縮しました",
  "message.compaction.running": "圧縮中",
  "message.compaction.completed": "会話履歴 {items} 件を圧縮しました（約 {tokens} トークン）",
  "message.compaction.expand": "クリックして圧縮要約を表示",
  "message.compaction.unavailable": "圧縮要約は利用できません",
  "message.compaction.commandTitle": "compact",
  "message.think": "思考",
  "message.unknownSurface": "不明な surface イベント：{type}",
  "message.unknownBlock": "不明なコンテンツブロック",
  "message.turnProcess.toolCalls.one": "{count} 回のツール呼び出し",
  "message.turnProcess.toolCalls.other": "{count} 回のツール呼び出し",
  "message.turnProcess.messages.one": "{count} 件のメッセージ",
  "message.turnProcess.messages.other": "{count} 件のメッセージ",
  "message.turnProcess.subagents.one": "{count} 件のサブエージェント",
  "message.turnProcess.subagents.other": "{count} 件のサブエージェント",
  "message.turnProcess.thoughtForAWhile": "思考しました",
  "message.turnProcess.separator": " · ",
  "message.stopped": "停止しました",
  "message.branch": "新しい会話で分岐",
  "message.branchUnavailable": "完了したターンの最終メッセージからのみ分岐できます",
  "message.retry.active": "モデルリクエストを再試行中",
  "message.retry.cancelled": "モデルリクエストの再試行をキャンセルしました",
  "message.retry.started": "モデルリクエストを再試行しました",
  "message.retry.scheduled": "モデルリクエストの再試行を待機中",
  "message.retry.status": "{label}（{retry}/{maximum}）· {seconds}秒",
  "message.retry.delay": "再試行までの待機：",
  "message.retry.failure": "失敗の理由：",
  "message.failure.auth": "API キーが無効です",
  "message.turnError": "このターンの実行に失敗しました",
  "message.maxTokens": "出力トークン上限に達しました",
  "message.maxTokens.hint":
    "回答が途中で打ち切られました。これまでの出力は会話に保持されています。「続けて」と送信すると、モデルが続きを出力します。",
  "message.tokensPerSecond": "{tps} tok/s",
  "message.turnUsage.title": "このターンの使用量",
  "message.turnUsage.consumed": "使用量 {total}",
  "message.turnUsage.model": "提供元 / モデル",
  "message.turnUsage.cacheHit": "キャッシュヒット",
  "message.turnUsage.input": "未キャッシュ入力",
  "message.turnUsage.cacheRead": "キャッシュ読み取り",
  "message.turnUsage.cacheWrite": "キャッシュ書き込み",
  "message.turnUsage.output": "出力",
  "message.turnUsage.reasoning": "（うち推論 {tokens}）",
  "message.turnUsage.count": "{count} tok",
  "command.running": "実行中",
  "command.failed": "コマンド失敗",
  "command.done": "完了",
  "command.title": "コマンド",
  "row.running": "実行中",
  "row.failed": "失敗",
  "json.truncated": " 以下は省略（全 {total} 文字）",
  "clock.md": "{m}月{d}日",
  "clock.ymd": "{y}年{m}月{d}日",
  "message.stepProcess.thinking": "リクエストを分析中",
  "message.stepProcess.read": "ファイルを読み込み中",
  "message.stepProcess.readImage": "画像を読み込み中",
  "message.stepProcess.write": "ファイルを書き込み中",
  "message.stepProcess.search": "コードを検索中",
  "message.stepProcess.edit": "ファイルを編集中",
  "message.stepProcess.commands": "コマンドを実行中",
  "message.stepProcess.code": "コードを実行中",
  "message.stepProcess.webSearch": "ウェブを検索中",
  "message.stepProcess.webFetch": "ウェブページにアクセス中",
  "message.stepProcess.subagents": "サブエージェントを調整中",
  "message.stepProcess.plan": "プランを更新中",
  "message.stepProcess.questions": "操作待ち",
  "message.stepProcess.tools": "ツールを呼び出し中",
  "message.stepProcess.prepare.read": "ファイル読み込みを準備中",
  "message.stepProcess.prepare.readImage": "画像読み込みを準備中",
  "message.stepProcess.prepare.write": "ファイル書き込みを準備中",
  "message.stepProcess.prepare.search": "コード検索を準備中",
  "message.stepProcess.prepare.edit": "ファイル編集を準備中",
  "message.stepProcess.prepare.commands": "コマンド実行を準備中",
  "message.stepProcess.prepare.code": "コード実行を準備中",
  "message.stepProcess.prepare.webSearch": "ウェブ検索を準備中",
  "message.stepProcess.prepare.webFetch": "ウェブページへのアクセスを準備中",
  "message.stepProcess.prepare.subagents": "サブエージェントの調整を準備中",
  "message.stepProcess.prepare.plan": "プラン更新を準備中",
  "message.stepProcess.prepare.questions": "質問を準備中",
  "message.stepProcess.prepare.tools": "ツール呼び出しを準備中",
  "message.stepProcess.done.thinking": "分析が完了",
  "message.stepProcess.done.read": "ファイルを読み込み済み",
  "message.stepProcess.done.readImage": "画像を読み込み済み",
  "message.stepProcess.done.write": "ファイルを書き込み済み",
  "message.stepProcess.done.search": "コードを検索済み",
  "message.stepProcess.done.edit": "ファイルを編集済み",
  "message.stepProcess.done.commands": "コマンドを実行済み",
  "message.stepProcess.done.code": "コードを実行済み",
  "message.stepProcess.done.webSearch": "ウェブを検索済み",
  "message.stepProcess.done.webFetch": "ウェブページにアクセス済み",
  "message.stepProcess.done.subagents": "サブエージェントを調整済み",
  "message.stepProcess.done.plan": "プランを更新済み",
  "message.stepProcess.done.questions": "質問済み",
  "message.stepProcess.done.tools": "ツールを呼び出し済み",
  "message.stepProcess.joinTwo": "{first}、{second}",
  "message.stepProcess.comma": "、",
  "message.stepProcess.sharedPrefix": "",
  "message.stepProcess.more": "{title}など",
  "message.trigger.request": "実行リクエストを受信",
  "message.trigger.goal": "目標の実行を継続",
  "message.trigger.agent": "タスクメッセージを受信",
  "message.trigger.team": "チームメッセージを受信",
  "message.trigger.subagent": "サブタスクの状態が更新",
  "message.trigger.github": "GitHubイベントを受信",
  "message.trigger.webhook": "外部イベントを受信",
  "message.trigger.schedule": "自動化タスク",
  "message.trigger.job": "バックグラウンドタスクが更新",
  "message.trigger.plugin": "プラグインの状態が更新",
  "message.trigger.explanation": "この通知をきっかけに、この応答が生成されました。",
  "message.turnProcess.worked": "完了",
  "message.turnProcess.took": "完了・所要時間 ",
  "message.turnProcess.failed": "失敗",
  "image.open": "画像を拡大表示",
  "image.loading": "画像を読み込み中…",
  "image.failed": "画像をプレビューできません",
  "image.dialog": "画像プレビュー",
  "image.close": "画像プレビューを閉じる",
  "chat.deepDivingFor": "詳しく調査中（{duration}）···",
  "settings.performance.title": "パフォーマンスと使用量",
  "settings.performance.description": "表示するパフォーマンスと使用量の情報量を選択します",
  "settings.performance.compact": "コンパクト",
  "settings.performance.detailed": "詳細",
  "settings.links.title": "チャット内のリンクを開く場所",
  "settings.links.description": "ウェブリンクを開く場所を選択します",
  "settings.links.sidebar": "アプリ内サイドバー",
  "settings.links.newTab": "既定のブラウザー",
  "settings.transcript.standard": "標準",
  "settings.transcript.detailed": "詳細",
  "settings.transcript.verbose": "すべて展開",
  "message.toolAdded": "ツールを追加：{name}",
  "message.toolRemoved": "ツールを削除：{name}",
  "message.toolsAdded": "追加：{names}",
  "message.toolsAddedCount": "{count} 件追加",
  "message.toolsChanged": "{added} 件追加、{removed} 件削除",
  "message.toolsRemoved": "削除：{names}",
  "message.toolsRemovedCount": "{count} 件削除",
  "message.toolsUpdated": "ツールを更新",
  "message.accountStopped": "タスクを停止",
  "message.failure.accountSignedOut": "DeepSeekからサインアウトしたため停止しました。",
  "message.failure.accountSignInRequired":
    "DeepSeekにサインインし、リクエストの送信先がアカウント認証に対応していることを確認してください。",
  "message.failure.quota": "リクエスト上限に達しました。",
  "duration.secondUnit": "秒",
  "duration.minuteUnit": "分",
  "duration.hourUnit": "時間",
};

const command: LocaleDictOf<"command"> = {
  "description.compact": "これまでの会話履歴を圧縮します",
  "description.export": "現在のセッションログを ZIP としてダウンロードします",
  "description.feedback": "このセッションについてのフィードバックを送ります",
  "description.goal": "長期実行タスクの目標を設定・確認します",
  "description.permission": "権限プリセットを切り替えます（サンドボックスモードと承認ポリシー）",
  "description.plan": "プランモードを切り替えます",
  "search.placeholder": "検索",
  "search.aria": "オプションを絞り込み",
  "status.loading": "オプションを読み込み中",
  "status.applying": "適用中",
  "status.empty": "オプションなし",
  "overlay.aria": "/{command} オプション",
  "listbox.aria": "/{command} の一致項目",
  "notice.attachmentsUnsupported":
    "/{command} は添付ファイルを受け付けません。先に取り除いてください",
  "section.add": "追加",
  "section.commands": "コマンド",
  "label.goal": "目標",
  "label.plan": "プラン",
  "label.feedback": "フィードバック",
  "label.compact": "圧縮",
  "label.permission": "権限",
  "label.export": "エクスポート",
  "token.goal": "goal",
  "token.plan": "plan",
  "token.feedback": "feedback",
  "token.compact": "compact",
  "token.permission": "permission",
  "token.export": "export",
};

const common: LocaleDictOf<"common"> = {
  ok: "OK",
  cancel: "キャンセル",
  close: "閉じる",
  copy: "コピー",
  copied: "コピーしました",
  "copy.failed": "コピーに失敗しました",
  "copy.value": "値をコピー",
  "copy.json": "JSON をコピー",
  "copy.path": "プロパティのパスをコピー",
  "copy.prettyJson": "整形 JSON をコピー",
  "copy.compactJson": "コンパクト JSON をコピー",
  "copy.optionsHint": "{action}。右クリックでコピー形式を選択",
  retry: "再試行",
  loading: "読み込み中",
  "load.failed": "読み込みに失敗しました",
  submit: "送信",
  submitting: "送信中",
  next: "次へ",
  previous: "前へ",
  skip: "スキップ",
  delete: "削除",
  edit: "編集",
  save: "保存",
  search: "検索",
  more: "その他",
  collapse: "折りたたむ",
  expand: "展開",
  back: "戻る",
  "brand.localBuild": "DSH ローカルビルド",
  unknown: "不明",
  none: "なし",
  truncated: "省略されています",
  "json.label": "JSON",
  "markdown.footnotes": "脚注",
  "markdown.truncatedCharacters": "… 以下は省略（全 {total} 文字）",
  "number.thousand": "{value}K",
  "number.million": "{value}M",
  "codeBlock.title": "コードブロック",
  "codeBlock.wrap": "行を折り返す",
  "codeBlock.unwrap": "行を折り返さない",
  "workspace.defaultName": "デフォルトのワークスペース",
};

const conversation: LocaleDictOf<"conversation"> = {
  "hint.plan": "タスクを記述してプランを生成",
  "hint.goal": "目標を入力すると、エージェントが継続的に実行します",
  "hint.goal.active":
    "目標を実行中です。edit で編集 / pause で一時停止 / resume で再開 / clear でクリア",
  "placeholder.plan": "タスクを記述してプランを生成",
  "placeholder.default": "メッセージの送信やタスク実行、/ コマンド、@ ファイルやセッション",
  "placeholder.unavailable": "このセッションは利用できません",
  "placeholder.parentOffline":
    "親セッションがオフラインのため送信できません。実行中の処理は停止できます",
  "placeholder.hero": "作りたいものを入力、/ コマンド、@ ファイルやセッション",
  "placeholder.workspace": "ワークスペースを選択して開始",
  "placeholder.steerQueue": "Cmd/Ctrl+Enter で保留中のメッセージをすべて割り込み送信",
  "input.commands": "コマンド",
  "input.stop": "生成を停止",
  "input.send": "メッセージを送信",
  "input.send.queue": "キューに追加",
  "input.send.steer": "割り込み送信",
  "attachment.pending": "添付待ちのファイル",
  "attachment.scrollLeft": "添付ファイルを左へスクロール",
  "attachment.scrollRight": "添付ファイルを右へスクロール",
  "attachment.dropTitle": "ファイルや画像をここにドラッグして追加",
  "attachment.dropDesc": "画像の制限：最大 {count} 枚、各 {size}",
  "attachment.dropBlocked": "現在はファイルや画像を追加できません",
  "image.pending": "送信待ちの画像",
  "image.openOriginal": "元画像を表示",
  "image.openOriginalLabel": "{label}、クリックして元画像を表示",
  "image.remove": "画像 {name} を削除",
  "image.original": "元画像",
  "image.label": "画像",
  "image.loadFailed": "画像の読み込みに失敗しました。クリックして再試行",
  "image.loading": "画像を読み込み中",
  "image.preview": "元画像プレビュー",
  "image.closePreview": "元画像プレビューを閉じる",
  "image.unsupportedType": "対応している画像形式は PNG、JPG、WebP、GIF のみです",
  "image.tooMany": "メッセージ 1 件につき画像は {count} 枚までです",
  "image.fileTooLarge": "画像 1 枚のサイズは {size} 以下にしてください",
  "image.totalTooLarge": "画像の合計サイズが {size} を超えています。一部を削除してください",
  "image.tooManyPixels": "画像の解像度が大きすぎます。圧縮してから再試行してください",
  "image.dimensionTooLarge":
    "画像の幅と高さはそれぞれ {size}px 以内にしてください。縮小してから再試行してください",
  "image.modelUnsupported":
    "現在のモデルは画像に対応していません。画像対応のモデルに切り替えてください",
  "image.sendFailed":
    "画像の送信に失敗しました（{reason}）。画像を再度追加してから送信してください",
  "file.pending": "送信待ちのファイル",
  "file.remove": "ファイル {name} を削除",
  "file.uploading": "アップロード中…",
  "file.uploadFailed": "アップロードに失敗しました。クリックで再試行",
  "file.retry": "{name} のアップロードを再試行",
  "file.stillUploading": "ファイルをアップロード中です。完了してから送信してください",
  "file.sessionUnavailable": "セッションが利用できないため、ファイルをアップロードできません",
  "file.notStaged": "ファイルのアップロードが完了していません。追加し直してください",
  "file.label": "ファイル",
  "context.aria": "コンテキスト使用量 {percent}",
  "context.used": "コンテキスト使用量",
  "context.system": "システムプロンプト",
  "context.tools": "ツール定義",
  "context.messages": "メッセージ",
  "settings.enter.title": "実行中の送信動作",
  "settings.enter.description":
    "エージェント実行中の Enter キーと送信ボタンの動作。Cmd/Ctrl+Enter はもう一方の動作になります",
  "settings.enter.queue": "キューに追加",
  "settings.enter.steer": "割り込み送信",
  "hero.headline": "未知なるものへ",
  "hero.preview": "プレビュー",
  "hero.chooseWorkspace": "ワークスペースを選択",
  "session.hierarchy": "セッション階層",
  "todo.title": "タスク",
  "todo.progress.done": "{done} 完了",
  "todo.progress.active": "{active} 進行中",
  "todo.progress.pending": "{pending} 待機中",
  "todo.rowTitle": "タスクリストを更新",
  "todo.completed": "{done}/{total} 完了",
  "command.attachmentsUnsupported":
    "/{command} は添付ファイルを受け付けません。先に取り除いてください",
  "ask.rowTitle": "質問",
  "ask.waiting": "回答待ち",
  "ask.cancelled": "キャンセル済み",
  "ask.cancelledDetail": "この質問セットは回答の送信前にキャンセルされました。",
  "ask.interrupted": "中断済み",
  "ask.interruptedDetail": "この質問セットは回答の送信前に中断されました。",
  "ask.answered": "{answered}/{total} 回答済み",
  "ask.skipped": "未回答",
  "bash.running": "実行中",
  "bash.failed": "失敗",
  "bash.stopped": "停止済み",
  "row.running": "実行中",
  "row.failed": "失敗",
  "row.stopped": "停止済み",
  "row.input": "入力",
  "row.output": "出力",
  "row.inspect": "詳細を見る",
  "tool.title.search": "検索",
  "tool.title.read": "読み取り",
  "tool.title.bash": "Bash",
  "tool.title.write": "書き込み",
  "tool.title.edit": "編集",
  "tool.title.code": "コード",
  "tool.title.generic": "ツール呼び出し",
  "tool.title.inspect": "詳細を見る",
  "tool.title.runCordis": "Cordis プラグインを実行",
  "tool.title.stopCordis": "Cordis プラグインを停止",
  "tool.title.removeCordis": "Cordis プラグインを削除",
  "tool.title.pwsh": "Pwsh",
  "tool.title.readImage": "画像を読み取り",
  "tool.title.grep": "Grep",
  "tool.title.glob": "Glob",
  "tool.title.webSearch": "検索",
  "tool.title.webFetch": "Web 取得",
  "diff.collapseAria": "差分を折りたたむ",
  "diff.expandAria": "残り {count} 行の差分を展開",
  "diff.expandRest": "… 残り {count} 行",
  "read.window": "{total} 行中 {shown} 行を表示",
  "read.collapseAria": "内容を折りたたむ",
  "read.expandAria": "残り {count} 行を展開",
  "read.expandRest": "… 残り {count} 行",
  "search.paths": "{shown} 個のパス",
  "search.paths.truncated": "{total} 個のパス中 {shown} 個を表示",
  "search.matches": "{shown} 件の一致 · {files} 個のファイル",
  "search.matches.truncated": "{total} 件の一致中 {shown} 件を表示 · {files} 個のファイル",
  "search.noResults": "結果なし",
  "search.collapseAria": "検索結果を折りたたむ",
  "search.expandAria": "残り {count} 行の検索結果を展開",
  "search.expandRest": "… 残り {count} 行",
  "web.noResults": "結果が見つかりませんでした",
  "web.sourcesTruncated": "ソース一覧は切り詰められています",
  "web.http": "HTTP",
  "web.contentTruncated": "内容は切り詰められています",
  "details.running": "実行中",
  "queue.count": "{n} 件の保留メッセージ",
  "queue.sending": "送信中…",
  "queue.image": "待機中のメッセージ画像",
  "queue.file": "待機中のファイル {name}",
  "queue.edit": "保留メッセージを編集",
  "queue.edit.unsupported": "テキスト以外の内容が含まれているため、編集できません",
  "queue.save": "保留メッセージを保存",
  "queue.cancelEdit": "編集をキャンセル",
  "queue.remove": "保留メッセージを削除",
  "queue.steer": "割り込み送信",
  "queue.steer.unavailable": "実行中のみ割り込み送信できます",
  "queue.editFailed":
    "編集に失敗しました：このメッセージはすでに送信が始まっている可能性があります。",
  "queue.removeFailed":
    "削除に失敗しました：このメッセージはすでに送信が始まっている可能性があります。",
  "queue.steerFailed": "割り込み送信に失敗しました。再試行してください。",
  "terminal.signal": "シグナル {signal}",
  "terminal.exitCode": "終了コード {code}",
  "terminal.running": "実行中",
  "terminal.failed": "失敗",
  "terminal.done": "完了",
  "terminal.noOutput": "出力なし",
  "terminal.collapseAria": "出力を折りたたむ",
  "terminal.expandAria": "残り {n} 行の出力を展開",
  "terminal.expandRest": " 残り {n} 行",
  "terminal.sendInput": "（入力を送信）",
  "terminal.session": "ターミナル {sessionId}",
  "shortcut.newline": "改行",
  "shortcut.complementary": "もう一方の送信動作（キューに追加／割り込み送信）を使用",
  "shortcut.slash": "コマンドメニューを開く",
  "shortcut.mention": "参照メニューを開く",
  "input.file": "ファイル",
  "attachment.directoryDesktopOnly":
    "フォルダーを追加できるのはデスクトップアプリのみです。ブラウザーではファイルを個別に追加してください",
  "attachment.pathUnavailable":
    "フォルダーのパスを取得できませんでした。もう一度ドラッグしてください",
  "attachment.pathUnsupported":
    "パスに参照できない文字が含まれています。名前を変更してから再試行してください",
  "todo.status.completed": "完了",
  "todo.status.inProgress": "進行中",
  "todo.status.pending": "待機中",
  "tool.title.createGoal": "目標を作成",
  "tool.title.getGoal": "目標を表示",
  "tool.title.updateGoal": "目標を更新",
  "tool.preparing.content": "内容を準備中 {kilobytes}KB",
  "tool.title.createSchedule": "リマインダーを作成",
  "tool.title.listSchedules": "リマインダー一覧を表示",
  "tool.title.deleteSchedule": "リマインダーを削除",
  "tool.title.updateSchedule": "リマインダーを更新",
  "detail.state": "状態",
  "detail.todo.completed": "完了",
  "detail.todo.in_progress": "進行中",
  "detail.todo.pending": "待機中",
  "detail.todo.empty": "タスクリストは空です",
  "todo.diff.initial": "初回のリスト",
  "todo.diff.compare": "前回のリストからの変更",
  "todo.diff.unavailable": "前回のリストは利用できません",
  "todo.diff.noChanges": "リストに変更はありません",
  "todo.diff.added": "{count} 件追加",
  "todo.diff.updated": "{count} 件更新",
  "todo.diff.removed": "{count} 件削除",
  "todo.diff.unchanged": "{count} 件変更なし",
  "todo.diff.addedItem": "追加",
  "todo.diff.updatedItem": "状態変更",
  "todo.diff.movedItem": "並べ替え",
  "todo.diff.removedItem": "削除",
  "detail.goal.empty": "目標なし",
  "detail.goal.active": "進行中",
  "detail.goal.disarmed": "再開待ち",
  "detail.goal.paused": "一時停止中",
  "detail.goal.blocked": "ブロック中",
  "detail.goal.complete": "完了",
  "detail.goal.rounds": "実行ラウンド数",
  "detail.goal.reason": "ブロックの原因",
  "detail.days": "{count} 日",
  "detail.hours": "{count} 時間",
  "detail.minutes": "{count} 分",
  "detail.seconds": "{count} 秒",
  "detail.schedule.once": "1 回のみ",
  "detail.schedule.every": "{interval}ごと",
  "detail.schedule.when": "実行予定日時",
  "detail.schedule.frequency": "繰り返し",
  "detail.schedule.scheduled": "実行待ち",
  "detail.schedule.overdue": "予定時刻を過ぎています。セッションの再開待ちです",
  "detail.schedule.empty": "リマインダーなし",
  "detail.schedule.deleted": "削除済み",
  "detail.schedule.count": "{count} 件のリマインダー",
  "detail.schedule.daily": "毎日 {time}（{zone}）",
  "detail.schedule.weekly": "毎週 {days} {time}（{zone}）",
  "detail.schedule.cron": "Cron {expression}（{zone}）",
  "detail.weekday.1": "月",
  "detail.weekday.2": "火",
  "detail.weekday.3": "水",
  "detail.weekday.4": "木",
  "detail.weekday.5": "金",
  "detail.weekday.6": "土",
  "detail.weekday.7": "日",
  "detail.weekday.join": "、",
  "tool.title.inspectProviders": "プロバイダーを調査",
  "tool.title.queryRuntime": "ランタイムに問い合わせ",
  "tool.title.inspectPlugins": "プラグインを調査",
  "tool.title.workflow": "ワークフローを実行",
  "tool.title.ralph": "ralph ループを実行",
  "tool.title.readEvent": "イベントを読み取り",
  "tool.title.searchEvents": "イベントを検索",
  "tool.title.traceEvent": "イベントを追跡",
  "tool.title.searchSessions": "セッションを検索",
  "tool.title.traceSession": "セッションを追跡",
  "tool.title.listModels": "モデル一覧を表示",
  "tool.title.subagent": "サブエージェントを作成",
  "tool.title.listAgents": "サブエージェント一覧を表示",
  "tool.title.sendMessage": "メッセージを送信",
  "tool.title.interruptAgent": "エージェントを中断",
  "tool.title.listJobs": "バックグラウンドタスク一覧を表示",
  "tool.title.readJob": "タスクの出力を読み取り",
  "tool.title.killJob": "バックグラウンドタスクをキャンセル",
  "tool.title.openTerminal": "ターミナルを開く",
  "tool.title.readTerminal": "ターミナルを読み取り",
  "tool.title.listTerminals": "ターミナル一覧を表示",
  "tool.title.signalTerminal": "ターミナルにシグナルを送信",
  "tool.title.closeTerminal": "ターミナルを閉じる",
  "tool.title.lsp": "コードシンボルを検索",
  "tool.title.findDefinition": "定義を検索",
  "tool.title.findReferences": "参照を検索",
  "tool.title.findImplementation": "実装を検索",
  "tool.title.hoverSymbol": "シンボル情報を表示",
  "tool.title.spawnTeammate": "チームメイトを作成",
  "tool.title.createTeamTask": "チームタスクを作成",
  "tool.title.getTeamTask": "チームタスクを読み取り",
  "tool.title.updateTeamTask": "チームタスクを更新",
  "tool.title.listTeamTasks": "チームタスク一覧を表示",
  "tool.title.waitAgent": "サブエージェントを待つ",
  "detail.recordedResult": "記録された結果",
  "detail.empty": "結果なし",
  "detail.none": "なし",
  "detail.yes": "はい",
  "detail.no": "いいえ",
  "detail.moreInInspect": "残り {count} 件は「詳細を見る」で確認できます",
  "detail.status.running": "実行中",
  "detail.status.idle": "待機中",
  "detail.status.ready": "準備完了",
  "detail.status.inactive": "非アクティブ",
  "detail.status.provisioning": "準備中",
  "detail.status.failed": "失敗",
  "detail.status.completed": "完了",
  "detail.status.deleted": "削除済み",
  "detail.status.killed": "キャンセル済み",
  "detail.status.accepted": "受け付け済み",
  "detail.status.queued": "キューに追加済み",
  "detail.status.exited": "終了済み",
  "detail.field.id": "ID",
  "detail.field.revision": "リビジョン",
  "detail.field.platform": "プラットフォーム",
  "detail.field.provider": "プロバイダー",
  "detail.field.model": "モデル",
  "detail.field.role": "役割",
  "detail.field.context": "コンテキスト",
  "detail.field.owner": "担当者",
  "detail.field.ready": "開始可能",
  "detail.field.dependencies": "依存関係",
  "detail.field.writeScopes": "書き込み範囲",
  "detail.field.warnings": "警告",
  "detail.field.diagnostics": "診断情報",
  "detail.field.methods": "メソッド",
  "detail.field.inputSchema": "入力スキーマ",
  "detail.field.outputSchema": "出力スキーマ",
  "detail.field.currentPackage": "現在のパッケージ",
  "detail.field.nextPackage": "次のパッケージ",
  "detail.field.latestRun": "直近の実行",
  "detail.field.packages": "パッケージ",
  "detail.field.registrations": "登録項目",
  "detail.field.props": "プロパティ",
  "detail.field.data": "データ",
  "detail.field.source": "ソース",
  "detail.field.content": "内容",
  "detail.field.message": "メッセージ",
  "detail.field.messageId": "メッセージ ID",
  "detail.field.root": "ルート",
  "detail.field.pid": "プロセス ID",
  "detail.field.type": "種類",
  "detail.field.time": "時刻",
  "detail.field.seq": "イベント番号",
  "detail.field.turn": "ターン",
  "detail.field.step": "ステップ",
  "detail.field.callId": "呼び出し ID",
  "detail.field.agents": "起動したエージェント数",
  "detail.field.result": "結果",
  "detail.field.parent": "親",
  "detail.field.depth": "階層の深さ",
  "detail.field.exitCode": "終了コード",
  "detail.field.signal": "シグナル",
  "detail.field.previousStatus": "以前の状態",
  "detail.field.agent": "エージェント ID",
  "detail.field.job": "タスク ID",
  "detail.field.task": "タスク",
  "detail.field.processGroup": "プロセスグループ",
  "detail.field.availability": "利用可否",
  "detail.field.bestMatch": "最も関連性の高いイベント",
  "detail.field.target": "対象イベント",
  "detail.field.surface": "記録状態",
  "detail.agents.count": "{count} 件のエージェント",
  "detail.jobs.count": "{count} 件のバックグラウンドタスク",
  "detail.terminals.count": "{count} 件のターミナル",
  "detail.tasks.count": "{count} 件のチームタスク",
  "detail.tasks.nextPage": "続きのタスクがあります。次のカーソルは {cursor} です",
  "detail.locations.count": "{count} か所",
  "detail.location": "{line} 行、{column} 列",
  "detail.receipt.delivered": "メッセージを配信しました",
  "detail.receipt.interrupt": "中断を要求しました",
  "detail.receipt.started": "開始しました",
  "detail.receipt.cancel": "キャンセルを要求しました",
  "detail.receipt.alreadyFinished": "すでに終了しています",
  "detail.receipt.signal": "シグナルを送信しました",
  "detail.receipt.closed": "終了しました",
  "detail.receipt.closing": "終了中",
  "detail.wait.noProgress": "実行中のサブエージェントはありません",
  "detail.wait.title": "サブエージェントの動作状況",
  "detail.wait.timeout": "待機がタイムアウトしました",
  "detail.wait.changed": "変更を検出しました",
  "detail.agent.reply": "エージェントの応答",
  "detail.models.title": "利用可能なモデル",
  "detail.output.lines": "全 {total} 行中 {begin}～{end} 行",
  "detail.output.truncated": "出力は切り詰められています",
  "detail.providers.count": "{count} 件の検査プロバイダー",
  "detail.plugins.count": "{count} 件の動的プラグイン",
  "detail.workflow.script": "ワークフロースクリプト",
  "detail.ralph.reportedComplete": "ワーカーが完了を報告しました",
  "detail.ralph.reportedBlocker": "ワーカーがブロックの原因を報告しました",
  "detail.ralph.limit": "ラウンド数の上限に達しました",
  "detail.report.nextSteps": "残りの作業",
  "detail.trace.replacedBy": "置換先",
  "detail.trace.replacementChain": "置換の連鎖",
  "detail.trace.replaces": "置換されたイベント",
  "detail.trace.sources": "元のイベント",
  "detail.trace.derived": "派生イベント",
  "detail.trace.ancestors": "祖先セッション",
  "detail.trace.descendants": "子孫セッション",
  "detail.matches.count": "{count} 件の一致",
  "detail.matches.capped": "結果の上限に達しました。検索範囲を絞り込んでください",
  "detail.event.neighbors": "前後のイベント",
  "ask.pending": "作業を再開しました。引き続き回答できます",
  "ask.pendingDetail": "保留中の質問には、引き続きメッセージ入力欄から回答できます。",
  "ask.reopen": "回答する",
  "ask.review": "回答を表示",
  "ask.closed": "終了済み",
  "ask.closedDetail": "この質問は終了しました。結果は下の会話で確認できます。",
  "row.preparing": "ツール呼び出しを準備中",
  "tool.autoReviewRejected": "自動レビューにより拒否されました",
  "tool.autoReviewNotExecuted": "ツールは実行されませんでした。理由：{reason}",
  "tool.autoReviewReasonFallback": "自動レビューはこの操作を許可しませんでした",
  "error.sessionInUse":
    "このセッションはすでに使用中です。別の DSH インスタンス（dsh web やデスクトップアプリなど）で使用されている可能性があります。他の実行中の DSH インスタンスを終了してから再試行してください。",
  "terminal.noExitCode": "終了コードなし",
};

const cordis: LocaleDictOf<"cordis"> = {
  "row.defineTitle": "Cordis プラグインを登録",
  "row.runTitle": "Cordis プラグインを実行",
  "row.updateTitle": "Cordis プラグインを更新",
  "row.stopTitle": "Cordis プラグインを停止",
  "row.removeTitle": "Cordis プラグインを削除",
  "purpose.missing": "（用途未入力）",
  "status.idle": "有効化待ち",
  "status.awaitingApproval": "承認待ち",
  "status.failed": "実行失敗",
  "status.clientPending": "Client 有効化待ち",
  "status.running": "実行中",
  "status.removed": "削除済み",
  "status.superseded": "更新あり",
  "run.removed": "パッケージが存在しません",
  "run.superseded": "より新しい実行カードがあります。下を確認してください",
  "panel.hint": "実行操作は、画面左下の設定の上にある Cordis パネルにあります",
  "panel.plugins.aria": "Cordis プラグイン",
  "panel.approvals.aria": "Cordis 承認",
  "panel.trigger": "Cordis プラグイン",
  "panel.runningCount": "{count} 件実行中",
  "panel.title": "Cordis プラグイン",
  "panel.empty": "まだプラグインが定義されていません",
  "panel.loading": "読み込み中",
  "panel.readFailed": "プラグイン一覧の読み込みに失敗しました：{message}",
  "panel.group.current": "現在のセッション",
  "panel.group.others": "その他のセッション",
  "panel.version": "バージョン",
  "panel.current": "現在：{packageId}",
  "panel.next": "切り替え待ち：{packageId}",
  "action.approve": "許可",
  "action.approveOnce": "このバージョンのみ許可",
  "action.approvePlugin": "このプラグインの今後のバージョンを許可",
  "action.decline": "拒否",
  "action.run": "実行",
  "action.stop": "停止",
  "action.remove": "削除",
  "action.retry": "再試行",
  "action.rollback": "ロールバック",
  "action.inspect": "詳細を見る",
  "render.failedAbdicated": "{slot} のレンダリングに失敗し、デフォルト画面に戻しました：",
  "render.failedHeld": "{slot} のレンダリングに失敗しました：",
  "a11y.defining": "プラグインを定義中",
  "a11y.failed": "定義失敗",
  "a11y.stopped": "定義が中断されました",
  "body.source": "プラグインコード",
  "body.hostCode": "Host",
  "body.clientCode": "Client",
  "body.output": "結果",
  "body.copy": "コピー",
  "body.copied": "コピーしました",
  "a11y.preparing": "Cordis ツール呼び出しを準備中",
};

const deliverables: LocaleDictOf<"deliverables"> = {
  "presented.nativeUnavailable":
    "このファイルには利用可能なホストパスがありません。サイドバーでプレビューしてください",
  "presented.revealError": "ファイルマネージャーで表示できませんでした。再試行してください",
  "presented.directoryError": "親フォルダーを開けませんでした。再試行してください",
  "presented.directoryOpening": "親フォルダーを開いています…",
  "presented.directoryOpened": "親フォルダーを開くよう要求しました",
  "presented.revealed": "ファイルマネージャーでの表示を要求しました",
  "presented.revealing": "ファイルマネージャーに表示しています…",
  "presented.unavailable": "このホストにはファイルやフォルダーを開けるデスクトップがありません",
  "presented.retry": "再試行",
  "presented.hostError": "ホストのデスクトップ情報を読み取れませんでした",
  "presented.preview": "サイドバーでプレビュー",
  "presented.previewButton": "{name} をサイドバーで開く",
  "presented.previewCard": "{name} をサイドバーでプレビュー",
  "presented.all": "すべての {count} 個のファイル",
  "presented.expandAria": "提示された {count} 個のファイルをすべて表示",
  "presented.collapse": "折りたたむ",
  "presented.collapseAria": "提示されたファイル一覧を折りたたむ",
  "presented.opening": "開いています…",
  "presented.opened": "デフォルトのアプリで開きました",
  "presented.error": "開けませんでした。クリックで再試行",
  "presented.file": "ファイル",
  "row.title": "ファイルを提示",
  "row.running": "提示中",
  "row.ok": "提示済み",
  "row.error": "提示に失敗",
  "row.stopped": "中断済み",
  "row.inspect": "呼び出しを見る",
  "row.preparing": "成果物を準備中",
  "changes.title": "{count} 個のファイルを編集",
  "changes.singleTitle": "{name} を編集",
  "changes.added": "+{count}",
  "changes.deleted": "-{count}",
  "changes.binary": "バイナリ",
  "changes.openReview": "このターンの変更をサイドバーでレビュー",
  "changes.all": "全 {count} 個のファイル",
  "changes.expandAria": "変更された {count} 個のファイルをすべて表示",
  "changes.collapse": "折りたたむ",
  "changes.collapseAria": "変更されたファイル一覧を折りたたむ",
  "changes.oversized": "サイズ超過",
  "changes.viewDiff": "{name} の変更を表示",
  "review.title": "レビュー · ターン {turn}",
  "review.selectFile": "レビューするファイルを選択",
  "review.split": "左右分割表示に切り替え",
  "review.unified": "統合表示に切り替え",
  "review.splitAria": "左右分割表示",
  "review.wrap": "行の折り返しを有効化",
  "review.nowrap": "行の折り返しを無効化",
  "review.wrapAria": "行の折り返し",
  "review.openFile": "ファイル全体をサイドバーで開く",
  "review.openFileAria": "{name} をサイドバーで開く",
  "diff.loading": "変更を読み込み中…",
  "diff.missing": "このターンの変更内容は利用できなくなりました",
  "diff.error": "変更を読み込めませんでした",
  "diff.binary": "バイナリファイルのため、変更を表示できません",
  "diff.oversized": "ファイルが大きすぎるため、変更を表示できません",
  "diff.created": "このターンで作成",
  "diff.deleted": "このターンで削除",
  "diff.unchanged": "変更前後の内容は同一です",
  "diff.coarse": "行の比較がタイムアウトしたため、ファイル全体の置き換えとして表示しています",
  "diff.truncated": "先頭の {count} 行を表示しています",
};

const directoryBrowser: Omit<
  Record<DirectoryBrowserKey, string>,
  ExpectedMissing["directory-browser"][number]
> = {
  "browser.title": "ワークスペースディレクトリを選択",
  "browser.home": "ホーム",
  "browser.newFolder": "新規フォルダー",
  "browser.folderName": "フォルダー名",
  "browser.createIn": "「{name}」に新規フォルダーを作成",
  "browser.untitledFolder": "無題のフォルダー",
  "browser.create": "作成",
  "browser.cancel": "キャンセル",
  "browser.open": "開く",
  "browser.editPath": "パスを編集",
  "browser.loading": "読み込み中",
  "browser.truncated": "フォルダーが多すぎるため、先頭部分のみ表示しています。",
  "browser.showHidden": "隠しファイルを表示",
};

const documentHtml: Omit<
  Record<DocumentHtmlKey, string>,
  ExpectedMissing["documentHtml"][number]
> = {
  title: "HTML",
  frame: "HTML ドキュメントのプレビュー",
  loading: "HTML プレビューを準備中…",
  failed: "この HTML ドキュメントはプレビューできませんでした。",
};

const documentMarkdown: Omit<
  Record<DocumentMarkdownKey, string>,
  ExpectedMissing["documentMarkdown"][number]
> = {
  "viewer.label": "Markdown",
  "code.copy": "コピー",
  "code.copied": "コピーしました",
  footnotes: "脚注",
};

const feedback: LocaleDictOf<"feedback"> = {
  "action.like": "良い回答",
  "action.likeActive": "評価を取り消す",
  "action.dislike": "問題のある回答",
  "action.dislikeActive": "評価を取り消す",
  "dialog.title": "フィードバックを送信",
  "dialog.categories": "フィードバックのカテゴリー",
  "dialog.detail": "フィードバックの詳細",
  "dialog.hint": "改善に役立つ詳細を書いてください。送信内容には現在の会話ログが含まれます",
  "category.task-result": "タスクの結果",
  "category.instruction-following": "指示の理解と追従",
  "category.product-interaction": "製品の機能と操作",
  "category.service-stability": "安定性と速度",
  "category.resource-cost": "リソース使用量とコスト",
  "category.security-privacy-permission": "セキュリティ・プライバシー・権限",
  "category.other": "その他",
  "toast.recorded": "フィードバックありがとうございます",
  "error.conflict": "このフィードバックは別の場所で変更されました。最新の状態を表示しています",
  "error.load": "フィードバックの読み込みに失敗しました",
  "error.generic": "フィードバックの保存に失敗しました",
  "error.noteTooLarge": "説明が長すぎます。短くしてから再度送信してください",
};

const goal: LocaleDictOf<"goal"> = {
  "phase.active": "進行中の目標",
  "phase.active.disarmed": "未実行の目標",
  "phase.paused": "一時停止中の目標",
  "phase.blocked": "ブロックされた目標",
  "objective.aria": "目標の内容",
  "commandInput.aria": "コマンド入力",
  "action.save": "目標を保存",
  "action.cancel": "編集をキャンセル",
  "action.pause": "目標を一時停止",
  "action.resume": "目標を再開",
  "action.edit": "目標を編集",
  "action.clear": "目標をクリア",
};

const job: LocaleDictOf<"job"> = {
  "count.live.one": "{count} 件のバックグラウンドタスクを実行中",
  "count.live.other": "{count} 件のバックグラウンドタスクを実行中",
  "count.idle.one": "{count} 件のバックグラウンドタスク",
  "count.idle.other": "{count} 件のバックグラウンドタスク",
  "list.aria": "バックグラウンドタスク",
  "status.running": "実行中",
  "status.stopping": "停止中",
  "status.completed": "完了",
  "status.killed": "キャンセル済み",
  "status.failed": "失敗",
  "duration.seconds": "{seconds}秒",
  "duration.minutes": "{minutes}分{seconds}秒",
  "duration.hours": "{hours}時間{minutes}分",
  "duration.title.live": "{duration} 経過",
  "duration.title.done": "所要時間 {duration}",
  "section.live": "実行中",
  "section.settledCount": "終了 {count} 件",
  "section.clear": "クリア",
  "row.expandAria": "{label} のリアルタイム出力を表示",
  "row.collapseAria": "{label} のリアルタイム出力を非表示",
  "kill.stop": "タスク {label} を停止",
  "kill.confirm": "もう一度クリックして確定",
  "kill.confirmAction": "停止を確定",
  "kill.failed": "停止に失敗しました",
  "output.gap": "… 以前の出力は破棄されました …",
  "output.error": "リアルタイム出力が中断されました：{error}",
  "terminal.signal": "シグナル {signal}",
  "terminal.exitCode": "終了コード {code}",
  "terminal.noExitCode": "終了コードなし",
  "terminal.running": "実行中",
  "terminal.failed": "失敗",
  "terminal.done": "完了",
  "terminal.copy": "コピー",
  "terminal.copied": "コピーしました",
  "terminal.noOutput": "（出力なし）",
  "terminal.collapse": "折りたたむ",
  "terminal.collapseAria": "出力を折りたたむ",
  "terminal.expand": "さらに {n} 行を表示",
  "terminal.expandAria": "折りたたまれた出力 {n} 行を展開",
};

const model: LocaleDictOf<"model"> = {
  "command.description": "この会話で使用するモデルを選択",
  "option.loadError": "カタログの読み込みに失敗しました：{message}",
  "trigger.fallback": "モデルを選択",
  "trigger.loading": "モデルを読み込み中…",
  "trigger.selectAria": "モデルを選択",
  "trigger.aria": "モデルを選択、現在 {model}",
  "trigger.ariaEffort": "モデルを選択、現在 {model}、思考レベル {effort}",
  "menu.aria": "モデルと思考レベル",
  "menu.model": "モデル",
  "menu.effort": "思考レベル",
  "effort.providerDefault": "デフォルト",
  "status.loading": "モデル一覧を更新中",
  "error.action": "モデルの操作に失敗しました：{message}",
  "action.reload": "再読み込み",
  "warning.groupLoad": "{name} の読み込みに失敗しました：{message}",
  "empty.models": "利用可能なモデルがありません。",
  "empty.efforts": "このモデルには思考レベルが設定されていません。",
  "provider.account": "DeepSeek アカウント",
  "command.label": "モデル",
  "error.sessionInUse":
    "このセッションはすでに使用中です。別の DSH（dsh web やデスクトップアプリなど）で実行されている可能性があります。他に実行中の DSH を終了してから、再試行してください。",
  "search.placeholder": "モデルを検索…",
  "search.clear": "検索をクリア",
  "search.empty": "一致するモデルがありません。",
};

const openInApp: LocaleDictOf<"open-in-app"> = {
  "open.title": "{app} でワークスペースを開く",
  "open.tooltip": "ローカルで開く",
  "app.cursor": "Cursor",
  "app.vscode": "VS Code",
  "app.vscodeinsiders": "VS Code Insiders",
  "app.windsurf": "Windsurf",
  "app.zed": "Zed",
  "app.sublimetext": "Sublime Text",
  "app.xcode": "Xcode",
  "app.androidstudio": "Android Studio",
  "app.intellij": "IntelliJ IDEA",
  "app.pycharm": "PyCharm",
  "app.webstorm": "WebStorm",
  "app.phpstorm": "PhpStorm",
  "app.goland": "GoLand",
  "app.rider": "Rider",
  "app.rustrover": "RustRover",
  "app.fork": "Fork",
  "app.sourcetree": "Sourcetree",
  "app.github": "GitHub Desktop",
  "app.tower": "Tower",
  "app.gitkraken": "GitKraken",
  "app.smartgit": "SmartGit",
  "app.sublimemerge": "Sublime Merge",
  "app.ghostty": "Ghostty",
  "app.warp": "Warp",
  "app.iterm": "iTerm2",
  "app.kitty": "kitty",
  "app.windowsterminal": "Windows ターミナル",
  "app.gitbash": "Git Bash",
  "app.gnometerminal": "GNOME 端末",
  "app.konsole": "Konsole",
  "app.finder": "Finder",
  "app.explorer": "エクスプローラー",
  "app.filemanager": "ファイル",
  "app.terminal": "ターミナル",
  "path.appDefault": "{app}（デフォルト）",
  "path.appsError": "アプリ一覧を読み込めませんでした",
  "shortcut.busy": "ワークスペースを開いています",
  "shortcut.unavailable": "現在のワークスペースまたはローカルアプリが利用できません",
  "path.open": "開く",
  "path.more": "その他の開き方",
  "path.reveal": "ファイルの場所を表示",
  "path.openError": "開けませんでした。再試行してください。",
  "path.revealError": "ファイルの場所を表示できませんでした。再試行してください。",
};

const permissionAccess: Omit<
  Record<PermissionAccessKey, string>,
  ExpectedMissing["permission.access"][number]
> = {
  "preset.readOnly": "閲覧のみ",
  "preset.workspaceWrite": "ワークスペース内の書き込み",
  "preset.fullAccess": "フルアクセス",
  "confirm.title": "フルアクセスを有効にしますか？",
  "confirm.description":
    "フルアクセスを有効にすると、エージェントの確認ステップが減り、機密性の高い操作、ファイル変更、外部コマンドを含むより多くの操作を直接実行できるようになります。現在のタスクを信頼できる場合にのみ使用してください。",
  "confirm.acknowledge": "リスクを理解した上で続行します",
  "confirm.cancel": "キャンセル",
  "confirm.enable": "フルアクセスを有効化",
  mode: "アクセスモード、現在：{name}",
  close: "閉じる",
  "auto.label": "自動レビュー",
  "auto.badge": "実験的",
  "auto.description":
    "ネイティブツール呼び出しと PTC 内部呼び出しのたびに、同じモデルによる実験的なレビューを行い、サンドボックスなしで実行します。",
  "auto.confirm.title": "自動レビュー（実験的）を有効にしますか？",
  "auto.confirm.description":
    "自動レビューはサンドボックスなしで動作します。ネイティブツール呼び出しと PTC 内部呼び出しのたびに、現在のエージェントと同じモデルが実行を許可するかレビューします。モデルが拒否した呼び出しは、それぞれユーザーが承認または拒否します。この機能は実験的であり、誤って許可または拒否する場合があります。また、追加のトークンを使用します。",
  "auto.confirm.acknowledge": "これらのリスクを理解した上で続行します",
  "auto.confirm.enable": "自動レビューを有効化",
};

const plan: LocaleDictOf<"plan"> = {
  "chip.label": "プラン",
  "chip.on.aria": "プランモードはオンです。押してオフにします",
  "chip.on.title": "プランモードはオン。クリックでオフ（/plan off）",
  "chip.exitFailed": "プランモードから抜けられませんでした",
  "preview.title": "プラン",
  "preview.document": "プラン · Markdown",
  "preview.action": "開く",
  "preview.open": "プランをサイドバーで開く",
  "preview.full": "プラン全体を表示",
  "preview.openNamed": "プランを開く：{title}",
  "preview.loading": "プランを読み込み中…",
  "preview.failed": "プランを読み込めませんでした",
  "preview.invalidAddress": "プランのアドレスが無効です",
  "preview.historyUnavailable": "セッション履歴を利用できません",
  "preview.notFound": "このプランが見つかりませんでした",
  "preview.unavailable": "プランのプレビューを利用できません",
  "preview.expired":
    "この一時的なプランのプレビューは期限切れです。レビュー待ちのカードから開き直してください。",
};

const question: LocaleDictOf<"question"> = {
  "error.incomplete": "先にこの質問に回答してください。",
  "error.unanswered": "オプションを選択するか、カスタム回答を入力してください。",
  "nav.prev": "前の質問",
  "nav.next": "次の質問",
  "nav.minimize": "質問カードを折りたたむ",
  "nav.maximize": "質問カードを展開",
  "nav.cancel": "すべての質問を破棄",
  "option.recommended": "推奨",
  "custom.placeholder": "回答を入力",
  "action.skip": "この質問をスキップ",
  "action.next": "次へ",
  "plan.header": "プランレビュー",
  "plan.approve": "承認",
  "plan.decline": "拒否",
  "plan.discuss": "チャットで相談",
  "error.unavailable": "現在は送信できません。少し待ってから再試行してください。",
  "error.resubmit": "作業が続行されるまでに回答が届きませんでした。もう一度送信してください。",
  "status.sent": "回答は送信されましたが、パネルを閉じられませんでした。",
  "wait.takeTime": "ゆっくり回答する",
  "wait.countdown": "{seconds} 秒後に続行",
  "wait.paused": "一時停止中 · 残り {seconds} 秒",
  "wait.held": "回答があるまで待機中",
  "wait.continued": "作業は続行されました。引き続き回答できます",
  "review.status": "回答済み",
  "review.skipped": "この質問はスキップされました。",
  "reply.label": "以前の未回答の質問に回答",
  "reply.open": "質問の詳細を開く",
  "reply.close": "質問の詳細を閉じる",
  "reply.answerLabel": "回答：",
  "reply.skipped": "スキップ済み",
  "nav.close": "パネルを閉じる（ツール呼び出しから開き直せます）",
};

const reference: Omit<Record<ReferenceKey, string>, ExpectedMissing["reference"][number]> = {
  "section.files": "ファイルとフォルダー",
  "section.sessions": "セッション",
  "candidate.noCwd": "（作業ディレクトリなし）",
  "crumb.root": "ワークスペース",
  "time.now": "たった今",
  "time.minutes": "{n}分",
  "time.hours": "{n}時間",
  "time.days": "{n}日",
  "time.months": "{n}ヶ月",
  "time.years": "{n}年",
  "section.subagents": "サブエージェント",
};

const scheduleCatalog: LocaleDictOf<"schedule.catalog"> = {
  "trigger.one": "{count} 件のリマインダー",
  "trigger.other": "{count} 件のリマインダー",
  "list.aria": "有効なリマインダー",
  "frequency.once": "1 回のみ",
  "frequency.every": "{value} {unit}ごと",
  "unit.day.one": "日",
  "unit.day.other": "日",
  "unit.hour.one": "時間",
  "unit.hour.other": "時間",
  "unit.minute.one": "分",
  "unit.minute.other": "分",
  "unit.second.one": "秒",
  "unit.second.other": "秒",
  "relative.now": "今が期限",
  "relative.future": "{value} {unit}後",
  "relative.overdue": "{value} {unit}超過",
  "trigger.label": "リマインダー",
  "list.loading": "リマインダーを読み込み中…",
  "list.error": "リマインダーを読み込めませんでした。",
  "list.retry": "再試行",
  "delete.action": "削除",
  "delete.pending": "削除中…",
  "delete.label": "リマインダーを削除：{title}",
  "list.open": "リマインダーの詳細を開く：{title}",
  "list.nextRun": "次回の実行",
  "time.locale": "ja-JP",
  "time.utcPrefix": "UTC",
  "frequency.daily": "毎日 {time}（{timeZone}）",
  "frequency.dailyLocal": "毎日 {time}",
  "frequency.weekly": "毎週 {weekdays} {time}（{timeZone}）",
  "frequency.weeklyLocal": "毎週 {weekdays} {time}",
  "frequency.cron": "Cron {expression}（{timeZone}）",
  "frequency.cronLocal": "Cron {expression}",
  "frequency.cronRule": "{rule}（{timeZone}）",
  "cron.list.join": "、",
  "cron.part.join": " ",
  "cron.weekday.name": "{weekday}",
  "cron.weekday.range": "{from}～{to}",
  "cron.months": "（{months}のみ）",
  "cron.day.every": "毎日{months}",
  "cron.day.weekdays": "毎週 {weekdays}{months}",
  "cron.day.monthDays": "毎月 {days} 日{months}",
  "cron.day.both": "毎月 {days} 日、または {weekdays}{months}",
  "cron.day.bothStarred": "毎月 {days} 日のうち {weekdays} に当たる日{months}",
  "cron.hours.range": "{from}～{to}",
  "cron.hours.list": "{hours}",
  "cron.time.everyMinute": "毎分",
  "cron.time.everyMinutes": "{step} 分ごと",
  "cron.time.joinedEveryMinute": "毎分",
  "cron.time.joinedEveryMinutes": "{step} 分ごと",
  "cron.time.everyHour": "毎時",
  "cron.time.joinedEveryHour": "毎時",
  "cron.time.everyNHours": "{count} 時間ごと",
  "cron.time.joinedEveryNHours": "{count} 時間ごと",
  "cron.time.hourlyAt": "毎時 {minutes} 分",
  "cron.time.joinedHourlyAt": "毎時 {minutes} 分",
  "cron.time.hoursEveryMinute": "{hours} 時台の毎分",
  "cron.time.hoursEveryMinutes": "{hours} 時台に {step} 分ごと",
  "cron.time.at": "{times}",
  "cron.time.hoursAt": "{hours} 時台の {minutes} 分",
  "frequency.weekday.join": "、",
  "frequency.weekday.1": "月曜日",
  "frequency.weekday.2": "火曜日",
  "frequency.weekday.3": "水曜日",
  "frequency.weekday.4": "木曜日",
  "frequency.weekday.5": "金曜日",
  "frequency.weekday.6": "土曜日",
  "frequency.weekday.7": "日曜日",
  "mark.aria": "{count} 件の予約済みタスク",
  "hover.more": "ほか {count} 件",
};

const sessionLogDownload: LocaleDictOf<"session-log-download"> = {
  "header.more": "その他の操作",
  "menu.download": "セッションログをダウンロード",
  "dialog.preparingTitle": "セッションをエクスポート中",
  "dialog.preparingDescription":
    "現在のセッション、子セッション、添付ファイルを含む ZIP ファイルを準備しています。",
  "dialog.successTitle": "セッションのダウンロードを開始しました",
  "dialog.successDescription": "ブラウザーがセッションの ZIP ファイルをダウンロードしています。",
  "dialog.errorTitle": "セッションのエクスポートに失敗しました",
  "dialog.close": "閉じる",
  "dialog.commandFailed": "セッションのエクスポートを開始できませんでした。",
  "menu.feedback": "フィードバック",
};

const settings: LocaleDictOf<"settings"> = {
  trigger: "設定",
  title: "設定",
  close: "閉じる",
  openDocument: "設定ファイルを開く",
  "openDocument.error": "設定ファイルを開けませんでした",
  "general.nav": "一般",
  "connection.error": "接続エラー",
  "connection.connecting": "再接続中",
  "connection.connected": "接続済み",
  "connection.reconnect": "接続エラー。今すぐ再接続",
  "connection.restart": "接続が切断され、自動再試行中です。クリックで今すぐ再接続",
  "shortcut.open": "設定を開く",
  "desktop.update.available": "更新",
  "desktop.update.checking": "更新を確認中…",
  "desktop.update.progress": "{percent}%",
  "desktop.update.verifying": "更新ファイルを検証中…",
  "desktop.update.installing": "再起動を準備中…",
  "desktop.update.ready": "インストールして再起動",
  "desktop.update.retry": "更新を再試行",
  "desktop.update.versionDetail": "{label}：{version}",
  "desktop.update.downloadDetail":
    "更新をダウンロード中：{percent}%\n更新先のバージョン：{version}",
  "desktop.update.checkFailed": "更新を確認できませんでした。しばらくしてから再試行してください。",
  "desktop.update.downloadFailed": "更新をダウンロードできませんでした。再試行してください。",
  "desktop.update.installFailed":
    "更新をインストールできませんでした。しばらくしてから再試行してください。",
  "desktop.update.checkNetworkFailed":
    "更新を確認できませんでした。接続を確認して再試行してください。",
  "desktop.update.downloadNetworkFailed":
    "更新をダウンロードできませんでした。接続を確認して再試行してください。",
  "desktop.update.installNetworkFailed":
    "更新をインストールできませんでした。接続を確認して再試行してください。",
  "desktop.update.stopFailed":
    "タスクを安全に停止できませんでした。更新はインストールされていません。しばらくしてから再試行してください。",
  "desktop.update.tasksChanged":
    "新しいタスクが開始されました。タスクを停止して更新するには、もう一度確認してください。",
  "desktop.update.tasksUnavailable":
    "タスクの状態を取得できません。ワークスペースの準備ができたら、更新を再試行してください。",
  "general.currentVersion": "現在のバージョン：{version}",
  "developerTools.title": "コーディングビューを表示",
  "developerTools.error": "保存できませんでした。再試行してください。",
  "developerTools.description":
    "トレース、コードの差分、すべてのエージェントプリセットを表示します",
};

const settingsAgentPreset: LocaleDictOf<"settings.agentPreset"> = {
  seatHint: "次に開始するセッションで使用するエージェントプリセット",
  headerHint: "このセッションで実行中のエージェントプリセット（開始時に固定）",
  nav: "プリセット",
  sectionIntro:
    "プリセットとは、セッションのエージェントが実行するプラグイン構成（ツール、プロンプト、能力）です。既存のプリセットをコピーして自分用に編集するか、クリエイターモードでエージェントに作成させることができます。",
  setDefault: "デフォルトに設定",
  view: "表示",
  presetStandardName: "スタンダード",
  presetStandardDescription:
    "ファイル編集、シェル、ファイルおよびウェブ検索、スキル、プラン、目標、サブエージェント、ワークフローをサポートする、フル機能のコーディングエージェントです。",
  presetPtcName: "PTC モード",
  presetPtcDescription:
    "ワークフローツールを除くフル機能のコーディングエージェントです。他のツールは PTC モード SDK 経由で提供され、モデルは複数の操作を 1 つの TypeScript プログラムにまとめられます。",
  presetMinimalName: "ミニマル",
  presetMinimalDescription:
    "状態を保持するシェルのみを備えた単一ツールのコーディングエージェントです。",
  presetCordisName: "クリエイター",
  presetCordisDescription:
    "カスタムエージェントプリセットの作成向け。スタンダードモードの全能力に加え、実行時インスペクト、プラグイン実験、プリセット作成のガイダンスを提供します。",
  inUse: "使用中",
  builtInGroup: "ビルトイン",
  customGroup: "カスタム",
  noDescription: "説明はありません。",
  brokenBadge: "読み込み失敗",
  switchRefused: "{name} に切り替えられませんでした：{reason}",
  close: "閉じる",
  creatorDraft: "クリエイターモードでカスタムプリセットを作成",
  modeExplanation: "モードの詳細",
  howToUse: "使い方",
  guideSections: "ガイドの項目",
  guideExampleTask: "タスクの例",
  guideCopy: "コピー",
  guideCopied: "コピーしました",
  guideFootnotes: "補足",
  guideStandardIntro:
    "新しいタスクを始めるときは、スタンダードモードを選んでください。達成したいこと、関連するファイル、結果の確認方法を伝えます。",
  guideStandardExplanation:
    "### 仕組み\n\nエージェントはツールを直接呼び出して、ファイルの読み取り・編集、検索、ターミナルコマンドの実行を行います。スキル、プラン、目標、サブエージェント、ワークフロー、コンテキストの圧縮を利用できます。\n\n### 適した用途\n\n日常的なコーディング、ファイル操作、調査には、まずこのモードを使ってください。スタンダードモードでもスクリプトの作成やファイルの一括処理ができます。PTC はツールの呼び出し方を変えるもので、一括処理に必須ではありません。",
  guideStandardUsage:
    "### バグを修正する\n\n> 検索フォームを2回送信すると結果が消える原因を調べてください。修正して関連するテストを実行し、原因と変更内容を説明してください。\n\n期待する成果物：コードの変更、関連するテストの結果、原因の説明。\n\n### プロジェクトのメモを整理する\n\n> このプロジェクトの Markdown メモを読んでください。合意した事項と未解決の疑問を、元のファイルへのリンク付きでまとめてください。\n\n期待する成果物：元のメモと照合できる参照先付きの要約。",
  guidePtcIntro:
    "新しいタスクを始めるときに PTC モードを選び、入力ファイル、処理ルール、出力形式を指定してください。コードはエージェントが作成します。",
  guidePtcExplanation:
    "### ツールの呼び出し方\n\nPTC は Programmatic Tool Calling（プログラムによるツール呼び出し）の略です。この組み込みプリセットでは、エージェントが run_code を使って TypeScript プログラムを作成し、生成された SDK 経由でツールを呼び出します。必要に応じて、ループ、条件分岐、エラー処理、並行呼び出しを使用できます。\n\n### モデルに渡される情報\n\nツールの結果は最初にプログラムへ渡され、そこで絞り込みや統合ができます。モデルが受け取るのはプログラムが出力または返す内容で、画像の結果は別途添付されます。入れ子になったツール呼び出しも記録され、ツールの権限設定が適用されます。\n\n### スタンダードモードとの比較\n\nどちらのモードもコーディングや一括処理に対応しています。スタンダードモードは個々のツールを直接使用し、PTC はコードでツール呼び出しを組み立てます。現在の PTC プリセットではワークフローツールが無効になっています。速度やトークン使用量は、タスクやプログラムによる結果の処理方法によって異なります。",
  guidePtcUsage:
    "### 複数の設定ファイルを確認する\n\n> configs/ 内のすべての JSON ファイルを確認してください。schema.json と照合して、必須フィールドの不足や無効な値を列挙してください。問題ごとに1行の CSV を保存してください。読み取れないファイルもレポートに含め、残りの確認を続けてください。元のファイルは変更しないでください。\n\n期待する成果物：問題の要約と CSV レポート。プログラムは同じ確認を繰り返し、個別の失敗に対処し、結果を集約できます。\n\n### エラーログをまとめる\n\n> logs/ 内のログファイルを分析してください。サービスとエラーの種類ごとに分類し、件数の多い上位10グループと各グループの例を1件ずつ示してください。すべての集計結果を CSV に保存してください。\n\n期待する成果物：主なエラーグループと全件の集計表。途中のデータは、要約をモデルへ渡す前にプログラム内で集約できます。",
  guideMinimalIntro:
    "新しいタスクでミニマルモードを選んでください。比較する際は、モデル、権限、入力、ワークスペースの初期状態を各実行で揃えてください。",
  guideMinimalExplanation:
    "### 含まれるもの\n\n状態を保持するシェルツール1つと、固定のシステムプロンプトです。この組み込みプリセットでは、スキル、プランニング、コンテキストの圧縮、標準のランタイムコンテキストは読み込まれません。\n\n### 適した用途\n\n実験や比較の基準として使用してください。シェルコマンドでファイルを読み取ったり、スクリプトを実行したりできますが、長いタスクを管理するための組み込み機能は少なくなります。ツールが少ないからといって、初心者にとって簡単とは限りません。",
  guideMinimalUsage:
    "### 小さなバグ修正で性能を比較する\n\n> このプロジェクトのテストを実行し、失敗の原因を調べて最小限の修正をしてください。関連するテストを再実行し、結果を報告してください。\n\n同じ初期状態から、スタンダードモードとミニマルモードで同じタスクをそれぞれ実行してください。タスクの完了状況、ツール呼び出し、変更結果を比較します。ミニマルモードはターミナルコマンドで作業を進めます。",
  guideCordisIntro:
    "新しいタスクでクリエイターモードを選んでください。追加したい機能、表示する場所、確認方法を伝えます。",
  guideCordisExplanation:
    "### 作成できるもの\n\nクリエイターモードには標準のタスク用ツールに加え、ランタイムの調査、永続的なプラグイン管理、Cordis プラグインやエージェントプリセットを作成するためのガイドが含まれています。機能や UI を追加するプラグインや、特定の作業に合わせてツールとプロンプトを組み合わせるプリセットを作成できます。\n\n### プラグインとモード\n\nプラグインは、ツール、サービスへの接続、UI の項目などの機能を DSH に追加します。モードは、使用するツールとタスクの進め方を定めるエージェントプリセットです。カスタムプリセットにプラグインを含めることもできます。\n\n### 作成したものを有効にするには\n\nソースコードの生成だけでなく、インストールと動作確認もエージェントに依頼してください。プラグインは変更内容によって、すぐに読み込まれる場合と再起動が必要な場合があります。新しく作成したプリセットは、新規タスクの開始時に選択します。",
  guideCordisUsage:
    "### UI を追加する\n\n> サイドバーにプロジェクトメモの項目を追加する DSH プラグインを作成してください。このワークスペースの Markdown ファイルを一覧し、選んだメモをプレビューできるようにしてください。インストールして、ページが開くことを確認してください。\n\n期待する成果物：項目とプレビューページが動作するインストール済みプラグイン、および残っている有効化の手順。\n\n### ツールを追加する\n\n> このプロジェクトのテストレポートを読み取り、失敗したテストを要約するツールを備えたプラグインを作成してください。登録して、サンプルのレポートで動作を確認してください。\n\n期待する成果物：呼び出し可能なツールを備えたプラグインと、検証済みのサンプル呼び出し。\n\n### 自分用のモードを作成する\n\n> スタンダードモードを基に「コードレビュー」モードを作成してください。バグの可能性とテストの不足を優先して確認し、ファイルパスと行番号を示し、ファイルを変更する前に確認するようにしてください。選択できるプリセットとして保存してください。\n\n期待する成果物：新規タスク用のカスタムプリセット。レビューの指示はエージェントの振る舞いを導き、権限設定は実行できる操作を定めます。",
};

const settingsLocale: LocaleDictOf<"settings.locale"> = {
  "language.title": "言語",
};

const settingsModels: LocaleDictOf<"settings.models"> = {
  nav: "モデル",
  title: "モデル",
  intro: "各プロバイダーの API キーを入力すると、そのモデルを利用できます。",
  edit: "編集",
  editProvider: "{provider} を編集",
  remove: "削除",
  removeProvider: "{provider} を削除",
  deleteTitle: "{provider} を削除しますか？",
  deleteDescription:
    "{provider} を削除すると、その設定が削除されます。使用している認証情報（ある場合）は別の場所で管理されるため保持されます。",
  deleteDescriptionWithCredential:
    "{provider} を削除すると、その設定と保存済みの API キーが削除されます。",
  deleteConfirm: "{provider} を削除",
  deleting: "{provider} を削除中",
  add: "プロバイダーを追加",
  provider: "プロバイダー",
  close: "閉じる",
  cancel: "キャンセル",
  apply: "保存",
  applying: "保存中",
  savedProvider: "{provider} を保存しました。",
  credentialConfigured: "API キー設定済み",
  credentialMissing: "API キーが未設定",
  readOnly: "このデプロイでは設定ファイルが読み取り専用です。",
  loadFailed: "プロバイダーカタログの読み込みに失敗しました",
  conflict:
    "このカードを開いている間に、設定が別の場所で変更されました。閉じて再度開き、現在の値で編集してください。",
  retry: "再試行",
  keyInput: "API キー",
  keyPlaceholder: "API キーを入力",
  keyPlaceholderNative: "API キーを入力（環境の認証情報を使う場合は空欄のまま）",
  keyStored: "設定済み。新しい値を入力すると置き換わります",
  keyEnvLocked: "起動環境から取得（読み取り専用）",
  customized: "カスタム設定",
  baseUrl: "エンドポイント",
  baseUrlDefault: "プロバイダーのデフォルト",
  models: "モデルカタログ",
  modelsInherited: "アダプターのデフォルトモデルを使用中",
  modelsCustomized: "モデルカタログをカスタマイズ済み",
  resetModels: "デフォルトのモデルに戻す",
  model: "モデル",
  modelId: "モデル ID",
  modelName: "表示名",
  modelNamePlaceholder: "空欄の場合はモデル ID を使用",
  contextWindow: "コンテキストウィンドウ",
  contextWindowPlaceholder: "プロバイダーのデフォルトを使用",
  maxTokens: "最大出力トークン数",
  maxTokensPlaceholder: "プロバイダーのデフォルトを使用",
  modelAdvanced: "容量",
  addModel: "モデルを追加",
  removeModel: "モデルを削除",
  modelsEmpty: "モデルセレクターには何も表示されません。一覧にない ID もそのまま送信できます。",
  keyBlank: "API キーを入力してください。空欄の場合は保存済みのキーを維持します。",
  keyBlankNew:
    "API キーを入力してください。このプロバイダーが別の方法で認証する場合は空欄にできます。",
  keyIllegalCharacters: "API キーの形式が正しくありません。確認してください。",
  modelIdRequired: "モデル ID は必須です。",
  modelIdDuplicate: "モデル ID は重複できません。",
  modelNameInvalid: "表示名は必須です。",
  modelContextInvalid: "コンテキストウィンドウは正の数で指定してください（例：131072、256K、1M）。",
  modelMaxTokensInvalid: "最大出力トークン数は正の数で指定してください（例：8192、64K、1M）。",
  advancedHint:
    "その他のフィールドは settings.yaml にあります。該当セクションを直接編集してください。",
  modelCapacityInvalid: "容量は数値で指定してください。末尾に K または M を付けられます。",
  modelDuplicate: "モデル ID は重複できません。",
  fetchModels: "利用可能なモデルを取得",
  fetching: "プロバイダーに問い合わせ中",
  fetchNeedsBaseUrl: "先にエンドポイントを入力してから取得してください。",
  fetchEmpty: "このプロバイダーにはモデルが登録されていません。手動で追加してください。",
  fetchTitle: "追加するモデルを選択",
  fetchDescription:
    "以下はプロバイダーで利用可能なモデルです。追加するモデルにチェックを入れてください。",
  fetchSearch: "モデルを検索",
  fetchNoMatches: "一致するモデルがありません。",
  fetchSelectAll: "すべて選択",
  fetchDeselectAll: "すべて解除",
  fetchAdopt: "選択した項目を追加",
  customTag: "カスタム",
  customRoute: "プロバイダー ID",
  customRouteHint:
    "小文字で始まる ID。リクエスト内でこのプロバイダーを一意に識別し、認証情報名としても使用されます。",
  customRouteInvalid: "小文字で始める必要があります。以降は小文字、数字、ハイフンが使用できます。",
  customRouteTaken: "この ID はすでに別のプロバイダーで使用されています。",
  customDisplayName: "表示名",
  customApi: "API プロトコル",
  customApiUnset: "未選択",
  customNeedsBaseUrl: "カスタムプロバイダーにはエンドポイントが必要です。",
  customBaseUrlInvalid: "有効な HTTP または HTTPS の URL を入力してください。",
  customNeedsModels: "カスタムプロバイダーにはモデルが 1 つ以上必要です。",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  settingsPathUnresolvable: "設定パスを解決できません",
  create: "プロバイダーを作成",
  creating: "作成中",
  welcomeTitle: "内部テストのお知らせ",
  welcomeBody:
    "DeepSeek Harness 0.1 は Harness 開発者向けのテスト段階にあり、改善すべき点がまだ多く残っています。皆様からのフィードバックをお待ちしております。DeepSeek Harness のコアプラグインと基本 API は、今後しばらく急速に進化していく予定です。\n\nオープンソースで開かれた、再利用と組み合わせが自由なインフラを土台に、世界中の開発者とともに知性の限界を探求できることを楽しみにしています。各国の Harness 開発者の皆様が DSH プラグインエコシステムに参加してくださることを歓迎します。",
  welcomeContinue: "続行",
  welcomeError: "確認状態を一時的に保存できません。再試行してください。",
  onboardingTitle: "API キーを追加して始める",
  onboardingDescription: "DeepSeek の公式モデルを設定すると、すぐに使い始められます。",
  onboardingLater: "後で設定",
  onboardingSave: "保存して続行",
  onboardingSaving: "保存中",
  keyRequired: "続行するには API キーを入力してください。",
  deepSeekAccount: "DeepSeekアカウント",
  addMode: "追加方法",
  addCatalog: "サードパーティーのモデルプロバイダー",
  addCustom: "カスタムモデルAPI",
  addCatalogHint:
    "組み込みカタログからOpenAI、Anthropic、Kimiなどのプロバイダーを選び、そのAPIキーを入力します。",
  addCustomHint:
    "ベースURL、プロトコル、モデルを指定して、中継サービスやセルフホストサーバーなど、OpenAIまたはAnthropic互換のエンドポイントに接続します。",
  addCatalogExhausted: "カタログ内のすべてのプロバイダーは設定済みです。",
  addCustomUnavailable: "指定できるAPIプロトコルがありません。",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic",
  deepSeekEndpointHint: "Anthropic Messages互換のAPIエンドポイントを使用してください。",
  modelInputTypes: "入力形式",
  modelInputText: "テキスト",
  modelInputImage: "画像",
  protocolOpenAiCompletions: "OpenAI Chat Completions",
  protocolOpenAiResponses: "OpenAI Responses",
  protocolAnthropicMessages: "Anthropic Messages",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
};

const settingsPermission: LocaleDictOf<"settings.permission"> = {
  title: "権限",
  description: "新しいセッションのデフォルトの権限モードを選択",
  loading: "読み込み中",
  unavailable: "利用不可",
  "preset.readOnly": "閲覧のみ",
  "preset.workspaceWrite": "ワークスペース内の書き込み",
  "preset.fullAccess": "フルアクセス",
  "confirm.title": "フルアクセスを有効にしますか？",
  "confirm.description":
    "フルアクセスを有効にすると、新しいセッションでの確認ステップが減り、機密性の高い操作、ファイル変更、外部コマンドを含むより多くの操作を直接実行できるようになります。以降のタスクを信頼できる場合にのみ使用してください。",
  "confirm.acknowledge": "リスクを理解した上で続行します",
  "confirm.cancel": "キャンセル",
  "confirm.enable": "フルアクセスを有効化",
};

const settingsPluginInventory: LocaleDictOf<"settings.pluginInventory"> = {
  tab: "プラグイン一覧",
  loading: "プラグインを読み込み中",
  error: "プラグインを一時的に読み込めません。",
  retry: "再試行",
  search: "プラグインを検索",
  empty: "利用可能なプラグインがありません。",
  emptySearch: "一致するプラグインがありません。",
  presetTitle: "セッションプラグイン",
  presetSubtitle: "エージェントプリセットがセッションごとに構成します",
  countUnit: "個",
  switcherLabel: "確認するエージェントプリセットを選択",
  presetOptionDefault: "{name}（デフォルト）",
  presetOptionBroken: "{name}（読み込み失敗）",
  globalTitle: "グローバルプラグイン",
  globalSubtitle: "システムとすべてのセッションで共有されます",
  presetProvidedDetail: "グローバルでは無効。エージェントプリセットがセッションごとに提供します",
  enabledIn: "有効な場所",
  viewInPreset: "プリセットグループで表示",
  matchesInOtherPresets: "他のプリセットにさらに {count} 件の一致：",
  failedCountLabel: "失敗",
  enabledTag: "有効",
  disabledTag: "無効",
  conditionalTag: "条件付きで有効",
  presetEnabledTag: "プリセット経由で有効",
  failedTag: "失敗",
  moduleLabel: "モジュール",
  fromPreset: "提供元",
  condition: "無効にする条件",
  configuration: "設定状態",
  runtime: "実行状態",
  unobserved: "未実行",
  pending: "依存関係を待機中",
  loadingPhase: "読み込み中",
  active: "実行中",
  failed: "起動失敗",
  unloading: "アンロード中",
  clientSyncing: "このページのプラグインを同期中…",
  clientSyncFailed:
    "このページで一部のプラグインを同期できませんでした。ホスト側の有効化状態は変更されていません。",
  clientSyncRetry: "このページで再試行",
  metadataError: "パッケージのメタデータエラー：{error}",
};

const settingsPlugins: LocaleDictOf<"settings.plugins"> = {
  nav: "プラグイン",
  title: "プラグイン",
  intro: "このデプロイにインストール済みのプラグインを設定・確認します。",
  tabs: "プラグインビュー",
  empty: "このデプロイではプラグイン設定が公開されていません。",
};

const settingsTheme: LocaleDictOf<"settings.theme"> = {
  "appearance.title": "外観",
  "appearance.light": "ライト",
  "appearance.dark": "ダーク",
  "appearance.system": "システム",
  "fontSize.title": "文字サイズ",
  "fontSize.description": "会話の本文にのみ適用されます",
  "fontSize.unit": "px",
  "fontSize.increase": "文字を大きくする",
  "fontSize.decrease": "文字を小さくする",
};

const sidebar: LocaleDictOf<"sidebar"> = {
  "session.new": "新規セッション",
  "session.new.label": "新規セッションを作成",
  "toggle.open": "サイドバーを開く",
  "toggle.collapse": "サイドバーを折りたたむ",
  "panels.label": "グローバルパネル",
};

const sidebarCodePreview: Omit<
  Record<SidebarCodePreviewKey, string>,
  ExpectedMissing["sidebarCodePreview"][number]
> = {
  title: "コード",
  copy: "コピー",
  copied: "コピーしました",
};

const sidebarDocumentPreview: LocaleDictOf<"sidebarDocumentPreview"> = {
  loading: "読み込み中",
  loadMore: "さらに読み込む",
  changed: "ファイルが更新されました。表示中の内容は更新前のものです。",
  reloadNow: "再読み込み",
  reload: "ファイルを再読み込み",
  "wrap.enable": "自動折り返しをオン",
  "wrap.disable": "自動折り返しをオフ",
  "wrap.aria": "折り返し",
  openWith: "開き方",
  "viewer.text": "プレーンテキスト",
  resourceUnavailable: "ファイルリソースサービスが利用できません。",
  rendererUnavailable: "{name} プレビューは利用できません。",
  "error.notFound": "ファイルが見つかりません。移動または削除された可能性があります。",
  "error.tooLarge": "このページは {limit} の上限を超えるため読み込めません。",
  "error.notText": "テキストファイルではないため、現時点ではプレビューできません。",
  "error.notRegularFile": "通常のファイルではないため、表示できる内容がありません。",
  "error.unavailable": "読み込みに失敗しました：{message}",
  retry: "再試行",
  autoRefresh: "自動更新",
  "autoRefresh.enable": "自動更新を有効にする",
  "autoRefresh.disable": "自動更新を無効にする",
  unsupportedFile: "このファイル形式のプレビューにはまだ対応していません。",
};

const sidebarFiles: LocaleDictOf<"sidebarFiles"> = {
  "type.label": "ファイル",
  "guide.title": "ワークスペースのファイル",
  "guide.description": "このセッションのワークスペース内のファイルを閲覧",
  loading: "読み込み中",
  empty: "空のディレクトリ",
  truncated: "項目が多すぎるため、一部のみ表示しています。",
  noWorkspace: "このセッションにはワークスペースディレクトリがありません。",
  reload: "再読み込み",
  "entry.other": "ファイルでもディレクトリでもないため、開けません。",
  "error.notFound": "そのディレクトリは存在しません。移動または削除された可能性があります。",
  "error.outsideWorkspace":
    "そのディレクトリはワークスペース外のため、サイドバーでは読み取りません。",
  "error.notDirectory": "それはディレクトリではありません。",
  "error.unavailable": "読み込みに失敗しました：{message}",
  "shortcut.noSession": "先にセッションを選択してください",
  autoRefresh: "自動更新",
  "autoRefresh.enable": "自動更新を有効にする",
  "autoRefresh.disable": "自動更新を無効にする",
};

const sidebarImage: Omit<
  Record<SidebarImageKey, string>,
  ExpectedMissing["sidebarImage"][number]
> = {
  title: "画像",
  preview: "画像プレビュー：{name}",
  loading: "画像を開いています…",
  failed: "この画像は表示できませんでした。",
  unsupported: "画像のプレビューにはファイル全体の内容が必要です。",
  zoomControls: "ズーム操作",
  zoomMenu: "表示倍率を選択",
  zoomOut: "縮小",
  zoomIn: "拡大",
  zoomFitWidth: "幅に合わせる",
  zoomValue: "{percent}%",
};

const sidebarPdf: Omit<Record<SidebarPdfKey, string>, ExpectedMissing["sidebarPdf"][number]> = {
  title: "PDF",
  pageImage: "PDF の {page} ページ",
  loading: "PDF を開いています…",
  rendering: "ページを描画中…",
  failed: "PDF を表示できません：{message}",
  password:
    "この PDF にはパスワードが必要です。パスワード保護されたプレビューには対応していません。",
  workerFailed: "PDF 描画プロセスを継続できませんでした。再試行してください。",
  unsupported: "PDF のプレビューにはファイル全体の内容が必要です。",
  retry: "再試行",
  zoomControls: "ズーム操作",
  zoomMenu: "表示倍率を選択",
  zoomOut: "縮小",
  zoomIn: "拡大",
  zoomFitWidth: "幅に合わせる",
  zoomValue: "{percent}%",
};

const sidebarRight: LocaleDictOf<"sidebarRight"> = {
  "chrome.expand": "サイドバーを開く",
  "chrome.expandAria": "右サイドバーを開く",
  "chrome.collapse": "サイドバーを折りたたむ",
  "chrome.collapseAria": "右サイドバーを折りたたむ",
  "chrome.toFullscreen": "全画面",
  "chrome.exitFullscreen": "全画面を終了",
  "dock.emptyPane": "空のペイン",
  "dock.splitPane": "分割",
  "dock.splitPaneDisabled": "上限は 2 ペインです",
  "dock.splitPaneNarrow": "幅が足りないため分割できません。サイドバーを広げてください",
  "dock.closeTab": "閉じる",
  "dock.addTab": "新しいタブ",
  "dock.dockFloat": "サイドバーに戻す",
  "dock.closeFloat": "閉じる",
  "dock.drop.center": "ここへ移動",
  "dock.drop.left": "左に分割して追加",
  "dock.drop.right": "右に分割して追加",
  "dock.drop.top": "上に分割して追加",
  "dock.drop.bottom": "下に分割して追加",
  "tab.guide.title": "はじめる",
  "tab.unavailable": "この種類のコンテンツを表示できるビューはまだありません。",
  "command.close": "現在のページまたはウィンドウを閉じる",
  "command.refresh": "現在のページを再読み込み",
  "command.noRefresh": "このページは再読み込みできません",
  "command.toggle": "右サイドバーの表示を切り替え",
  "command.fullscreen": "パネルの全画面表示を切り替え",
  "command.noSession": "先にセッションを選択してください",
  "command.noFocus": "先に右サイドバーのペインにフォーカスしてください",
  "command.stale": "ページが変わりました。もう一度フォーカスしてください",
  "command.collapsed": "先に右サイドバーを展開してください",
  "command.float": "フローティングパネルではこの操作は使えません",
  "command.empty": "先にページを開いてください",
  "command.budget": "ペインは2つまでです",
  "command.width": "分割するには幅が足りません。サイドバーを広げてください",
};

const skill: LocaleDictOf<"skill"> = {
  "row.title": "スキル",
  "row.running": "スキルを読み込み中",
  "row.failed": "スキルの読み込みに失敗しました",
  "row.stopped": "スキルの読み込みが中止されました",
  "row.instructions": "説明",
  "row.inspect": "詳細を見る",
  "menu.userOnly": "ユーザーのみ",
  "row.preparing": "スキルの読み込みを準備中",
};

const slashMenu: LocaleDictOf<"slash.menu"> = {
  command: "コマンド",
  skill: "スキル",
  subagent: "サブエージェント",
  loading: "読み込み中",
  "drill.aria": "フォルダーを参照",
  "drill.hint": "フォルダーを参照",
  "drill.key": "Tab",
  "crumbs.aria": "フォルダー階層ナビゲーション",
  "suggestions.aria": "トリガー候補の提案",
};

const subagent: LocaleDictOf<"subagent"> = {
  "duration.seconds": "{seconds}秒",
  "duration.minutes": "{minutes}分{seconds}秒",
  "duration.hours": "{hours}時間{minutes}分{seconds}秒",
  "duration.days": "{days}日",
  "duration.daysHours": "{days}日{hours}時間",
  "duration.months": "約{months}ヶ月",
  "duration.monthsDays": "約{months}ヶ月{days}日",
  "duration.years": "約{years}年",
  "duration.yearsMonths": "約{years}年{months}ヶ月",
  "duration.exactDays": "{days}日{hours}時間{minutes}分{seconds}秒",
  "duration.exactTitle": "合計アクティブ時間：{duration}",
  "tokens.thousand": "{value}K",
  "tokens.million": "{value}M",
  "tokens.total": "{value} tok",
  "loading.label": "サブエージェントを読み込み中",
  "load.error": "サブエージェントを読み込めません",
  retry: "再試行",
  "mode.oneShot": "ワンショット",
  "mode.continuable": "継続可能",
  "activity.running": "実行中",
  "activity.inactive": "停止中",
  "branch.collapse": "{label} 配下のサブエージェントを折りたたむ",
  "branch.expand": "{label} 配下のサブエージェントを展開",
  "count.total.one": "{count} 件のサブエージェント",
  "count.total.other": "{count} 件のサブエージェント",
  "count.running.one": "{count} 件のサブエージェントが実行中",
  "count.running.other": "{count} 件のサブエージェントが実行中",
  "switcher.aria": "サブエージェントを切り替え：{title}",
  "tree.aria": "サブエージェントセッション",
  "readonly.oneShot.title": "ワンショットサブエージェントレコード",
  "readonly.title": "このサブエージェントは一時的に読み取り専用です",
  "readonly.oneShot.body":
    "ワンショットタスクでは追加メッセージに対応していません。ここで完全な実行レコードを確認できます。",
  "readonly.body":
    "親セッションが現在オフラインです。親セッションを再度開くとメッセージの送信を再開できます。",
  "mode.unknown": "不明なモード",
  "readonly.unknown.body": "子セッションを開き、継続できるか確認してください。",
  "activity.completed": "完了",
  "open.sidebar": "サイドバーで開く",
  "open.sidebar.aria": "{label} をサイドバーで開く",
  "sidebar.chat": "チャット",
};

const trajectory: Omit<Record<TrajectoryKey, string>, ExpectedMissing["trajectory"][number]> = {
  "view.trajectory": "トレース",
  "toolbar.aria": "トレースツールバー",
  "toolbar.duration": "所要時間",
  "toolbar.useActualDuration": "実際の所要時間を使用",
  "toolbar.useEqualWidth": "操作の幅を揃える",
  "toolbar.actualTime": "実際の時間",
  "toolbar.turns": "ターン",
  "toolbar.expandTurns": "ターンを展開",
  "toolbar.collapseTurns": "ターンを折りたたむ",
  "toolbar.calls": "ツール呼び出し",
  "toolbar.expandCalls": "ツール呼び出しを展開",
  "toolbar.collapseCalls": "ツール呼び出しを折りたたむ",
  "toolbar.search": "トレースを検索",
  "toolbar.searchPlaceholder": "検索",
  "kind.system": "システム",
  "kind.user": "ユーザー",
  "kind.context": "コンテキスト",
  "kind.compacted": "圧縮済み",
  "kind.message": "メッセージ",
  "kind.assistant": "アシスタント",
  "kind.tool": "ツール",
  "kind.subtool": "サブツール",
  "kind.sub": "サブ",
  "column.input": "入力",
  "column.output": "出力",
  "column.think": "思考",
  "column.time": "時間",
  "column.model": "モデル",
  "column.tools": "ツール",
  "turn.label": "ターン {turn}",
  "section.betweenTurns": "ターン間",
  "group.message": "メッセージ",
  "group.step": "ステップ {step}",
  "group.compaction": "圧縮 {seq}",
  "status.failed": "失敗",
  "status.pending": "待機中",
  "status.completed": "完了",
  "timing.notAvailable": "利用できません",
  "timing.notRecorded": "記録なし",
  "timing.stepStartUnavailable": "ステップ開始時刻なし",
  "timing.firstTokenUnavailable": "最初のトークンの時刻なし",
  "timing.usageUnavailable": "使用量なし",
  "timing.outputTokensUnavailable": "出力トークン数なし",
  "timing.durationTooShort": "時間が短すぎます",
  "timing.showLocalTime": "ローカル時刻を表示",
  "timing.showUnixTimestamp": "Unix タイムスタンプを表示",
  "timing.started": "開始",
  "timing.totalDuration": "合計時間",
  "timing.ttft": "最初のトークンまでの時間",
  "timing.generation": "生成",
  "timing.throughput": "スループット",
  "timing.duration": "所要時間",
  "timing.source": "計測ソース",
  "timing.sessionTimestamps": "セッションのタイムスタンプ",
  "timing.sessionTimestampsRunning": "セッションのタイムスタンプ（実行中）",
  "timing.request": "リクエストの計測",
  "unit.milliseconds": "{value} ミリ秒",
  "unit.seconds": "{value} 秒",
  "unit.tokens": "{value} tok",
  "unit.tokensPerSecond": "{value} tok/s",
  "usage.tokens": "トークン",
  "usage.reasoning": "推論",
  "usage.content": "内容",
  "usage.notReported": "使用量は報告されていません",
  "usage.input": "入力",
  "usage.cached": "キャッシュ読み取り",
  "usage.cacheCreated": "キャッシュ書き込み",
  "usage.other": "その他",
  "usage.output": "出力",
  "usage.thisRequest": "このリクエスト",
  "usage.sessionCumulative": "セッション累計",
  "options.notRecorded": "オプションは未記録です",
  "options.json": "リクエストオプションの JSON",
  "source.unknown": "不明",
  "source.user": "ユーザー",
  "source.plugin": "プラグイン",
  "source.pluginNamed": "プラグイン · {plugin}",
  "source.goal": "目標",
  "source.goalRound": "目標 · ラウンド {round}",
  "source.notRecorded": "ソースは未記録です",
  "source.messageJson": "メッセージソースの JSON",
  "tab.summary": "概要",
  "tab.rawOutput": "生の出力",
  "tab.preview": "プレビュー",
  "tab.raw": "生データ",
  "tab.source": "ソース",
  "tab.payload": "パラメーター",
  "tab.result": "結果",
  "tab.schema": "スキーマ",
  "tab.timing": "計測",
  "tab.diff": "差分",
  "tab.systemPrompt": "システムプロンプト",
  "tab.tools": "ツール",
  "tab.options": "オプション",
  "tab.usage": "使用量",
  "record.toolCallOnly": "（ツール呼び出しのみ）",
  "record.noContent": "内容なし",
  "record.noPayload": "取得したパラメーターはありません",
  "record.noResult": "取得した結果はありません",
  "record.noOutput": "出力なし",
  "record.schemaUnavailable": "スキーマは利用できません",
  "record.parameters": "パラメーター",
  "record.resultJson": "結果の JSON",
  "record.json": "JSON",
  "record.parametersJson": "パラメーターの JSON",
  "record.namedParametersJson": "{name} のパラメーター JSON",
  "record.payloadJson": "パラメーターの JSON",
  "record.outputJson": "結果の JSON",
  "record.thinking": "思考",
  "record.systemPromptMissing": "このリクエストにシステムプロンプトはありません",
  "record.toolsMissing": "このリクエストにツールはありません",
  "record.systemPrompt": "システムプロンプト",
  "record.tools": "ツール",
  "block.openSummary": "ブロック #{index} のツール呼び出し概要を開く",
  "block.openSummaryTitle": "ツール呼び出しの概要を開く",
  "block.label": "ブロック #{index} {type}",
  "history.loadingTrajectory": "トレースを読み込み中…",
  "history.loadingEarlier": "より前の履歴を読み込み中…",
  "history.loadingEarlierAria": "より前の履歴を読み込み中…",
  "history.loadEarlier": "より前の履歴を読み込む",
  "history.clickToLoadEarlier": "クリックでより前の履歴を読み込む",
  "request.label": "リクエスト #{request}",
  "request.labelCompaction": "リクエスト #{request} · 圧縮",
  "request.compaction": "圧縮 · {section}",
  "request.compactionPurpose": "圧縮",
  "request.retryProgress": "{retry}/{maximum}",
  "request.collapsedSummary": "折りたたまれた{kind}の概要、{summary}",
  "request.collapsedTurn": "ターン",
  "request.collapsedAssistant": "アシスタント",
  "request.rowAria": "{request}{kind}、{content}",
  "request.rowPrefix": "リクエスト {request}、",
  "request.rowAriaCompaction": "リクエスト {request}、圧縮",
  "request.noContent": "内容なし",
  "summary.toolCalls.one": "{count} 回のツール呼び出し",
  "summary.toolCalls.other": "{count} 回のツール呼び出し",
  "summary.steps.one": "{count} ステップ",
  "summary.steps.other": "{count} ステップ",
  "details.event": "イベントの詳細",
  "details.resize": "イベント詳細の幅を調整",
  "details.resizeTitle": "ドラッグでサイズ変更。ダブルクリックで戻す。",
  "details.close": "詳細を閉じる",
  "details.status": "状態",
  "details.purpose": "用途",
  "details.provider": "提供元",
  "details.model": "モデル",
  "details.toolCalls": "ツール呼び出し",
  "details.subtoolCalls": "サブツール呼び出し",
  "details.error": "エラー",
  "details.failure.auth": "API キーが無効です",
  "details.retry": "再試行",
  "details.scheduled": "予定済み",
  "details.retryDelay": "再試行の待機時間",
  "details.result": "結果",
  "details.compacted": "圧縮済み",
  "details.assistantMessage": "アシスタントのメッセージ",
  "details.source": "ソース",
  "details.hierarchy": "階層",
  "details.toolCall": "ツール呼び出し",
  "timeline.aria": "トレースのタイムライン",
  "timeline.overviewAria": "タイムラインの概要。水平にドラッグしてイベントにフォーカス",
  "timeline.noTimingData": "計測データなし",
  "timeline.total": "合計 {duration}",
  "timeline.started": "{time} に開始",
  "timeline.ttftDecoding": "最初のトークンまで {ttft} · デコード {decoding}",
  "layout.compacting": "圧縮中",
  "layout.compactionFailed": "コンテキスト圧縮に失敗",
  "layout.compacted": "コンテキストを圧縮しました",
  "layout.toolCallOnly": "ツール呼び出しのみ",
  "layout.fileAttachments": "ファイル ×{count}",
  "layout.initialSystemPrompt": "初期システムプロンプト",
  "layout.systemPromptUpdated": "システムプロンプトを更新",
  "layout.toolsUpdated": "ツールを更新",
  "layout.systemPromptAndToolsUpdated": "システムプロンプトとツールを更新",
  "layout.compactionInterrupted": "コンテキスト圧縮は完了前に中断されました。",
  "record.wrapLines": "行を折り返す",
  "code.source": "コード",
  "code.output": "出力",
  "code.copySource": "コードをコピー",
  "code.copyOutput": "出力をコピー",
  "code.originalJson": "元の JSON",
  "code.running": "実行中…",
  "attachment.list": "添付ファイル",
  "attachment.imageName": "画像 {index}",
  "layout.imageCount": "画像 ×{count}",
  "layout.toolAdded": "ツールを追加：{name}",
  "layout.toolRemoved": "ツールを削除：{name}",
  "layout.toolUpdateNotice": "ツールを更新しました",
  "layout.toolsAdded": "追加：{names}",
  "layout.toolsAddedCount": "{count} 個を追加",
  "layout.toolsChanged": "{added} 個を追加、{removed} 個を削除",
  "layout.toolsRemoved": "削除：{names}",
  "layout.toolsRemovedCount": "{count} 個を削除",
};

const workflowRun: LocaleDictOf<"workflowRun"> = {
  "run.title": "{name}",
  "run.members.one": "{count} メンバー",
  "run.members.other": "{count} メンバー",
  "run.empty": "開始済みのメンバーはいません",
  "phase.unassigned": "フェーズ未割り当て",
  "phase.empty": "空のフェーズ名",
  "statusCount.running": "実行中 {count}",
  "statusCount.completed": "完了 {count}",
  "statusCount.failed": "失敗 {count}",
  "statusCount.cancelled": "キャンセル済み {count}",
  "statusCount.interrupted": "中断済み {count}",
  "member.empty": "空のメンバー名",
  "member.open": "{name} を開く",
  "status.running": "実行中",
  "status.completed": "完了",
  "status.failed": "失敗",
  "status.cancelled": "キャンセル済み",
  "status.interrupted": "中断済み",
};

const workspace: LocaleDictOf<"workspace"> = {
  "group.ungrouped": "未グループ化",
  "session.new": "新規セッション",
  "section.workspaces": "ワークスペース",
  "section.sessions": "セッション",
  "viewOptions.label": "表示設定",
  "groupBy.label": "グループ化",
  "groupBy.workspace": "ワークスペース別",
  "groupBy.flat": "リスト表示",
  "orderBy.label": "並べ替え",
  "orderBy.manual": "手動",
  "orderBy.updated": "更新日時順",
  "sessions.expand": "残り {n} 件のセッションを表示",
  "sessions.collapse": "折りたたむ",
  "empty.none": "セッションがありません",
  "empty.noMatches": "一致する結果がありません",
  "workspace.add": "ワークスペースを追加",
  "search.sessions.aria": "セッションを検索",
  "search.placeholder": "セッションを検索",
  "search.clear": "検索をクリア",
  "search.results.aria": "検索結果",
  "search.pending": "セッション履歴を検索中",
  "search.noMatches": "一致するセッションがありません",
  "search.hasMore": "最初の {n} 件のみ表示されています。検索範囲を絞り込んでください。",
  "menu.addWorkspace": "ワークスペースを追加",
  "picker.loading": "ワークスペースを読み込み中",
  "conflict.named": "「{name}」という名前のワークスペースはすでに存在します。",
  "folderError.title": "フォルダーを開けません",
  "folderError.retry": "再選択",
  rename: "名前を変更",
  "rename.workspace.title": "ワークスペースの名前を変更",
  "rename.session.title": "セッションの名前を変更",
  "field.workspaceName": "ワークスペース名",
  "field.sessionName": "セッション名",
  "delete.workspace": "ワークスペースを削除",
  "delete.desc":
    "「{name}」をワークスペースリストから削除します。フォルダーとセッション記録は保持され、そのセッションは「未グループ化」の下に表示されます。",
  "delete.pending": "ワークスペースを削除中",
  "menu.fork": "セッションをフォーク",
  "menu.archiveSession": "セッションをアーカイブ",
  "sessions.count.one": "{n} セッション",
  "sessions.count.other": "{n} セッション",
  "actions.workspace.aria": "ワークスペース「{name}」の操作",
  "actions.session.aria": "セッション「{name}」の操作",
  "actions.newSession.aria": "「{name}」に新規セッションを作成",
  "status.running": "実行中",
  "status.subagentsRunning.one": "{n} 件のサブエージェントが実行中",
  "status.subagentsRunning.other": "{n} 件のサブエージェントが実行中",
  "status.idle": "待機中",
  "status.waitingApproval": "承認待ち",
  "status.planReview": "プランレビュー待ち",
  "status.waitingAnswer": "回答待ち",
  "status.completed": "完了",
  "hover.created": "{time} に作成",
  "hover.copied": "コピーしました",
  "date.ymd": "{y}年{m}月{d}日",
  "time.now": "たった今",
  "time.minutes": "{n}分",
  "time.hours": "{n}時間",
  "time.days": "{n}日",
  "time.months": "{n}ヶ月",
  "time.years": "{n}年",
  "time.ago": "{t}前",
  "defaultWorkspace.failed":
    "デフォルトのワークスペースを作成できませんでした。「ワークスペースを選択」からフォルダーを選んでください。",
  "session.untitled": "無題",
  "shortcut.noSession": "先にセッションを選択してください",
  "shortcut.noPicker": "フォルダー選択を利用できません",
  "shortcut.directoryBusy": "ワークスペースを選択または追加しています",
  "shortcut.noCompletedTurn": "このセッションには完了したターンがありません",
  "shortcut.forkFailed": "セッションをフォークできませんでした。再試行してください。",
  "groupBy.workspaceTree": "ワークスペースのツリー表示",
  "filterBy.label": "セッションを絞り込む",
  "viewOptions.hideArchived": "アーカイブ済みを非表示",
  "viewOptions.showArchived": "すべての会話（アーカイブ済みも表示）",
  "viewOptions.onlyArchived": "アーカイブ済みのみ",
  "empty.noneArchived": "アーカイブ済みのセッションはありません",
  "empty.viewOthers": "他のセッションを表示",
  "menu.unarchiveSession": "セッションのアーカイブを解除",
  "menu.pinSession": "セッションをピン留め",
  "menu.unpinSession": "セッションのピン留めを解除",
  "row.archived": "アーカイブ済み",
  "row.pinned": "ピン留め済み",
  "toast.archivedNotOpenable":
    "アーカイブ済みのセッションは開けません。アーカイブを解除すると表示できます。",
  "toast.archived": "セッションをアーカイブしました。",
  "toast.stoppedAndArchived": "セッションを停止してアーカイブしました。",
  "archive.confirm.title": "このセッションを停止してアーカイブしますか？",
  "archive.confirm.desc":
    "「{title}」ではまだ作業が進行中です。アーカイブすると、先に作業が停止されます。後でサイドバーの「すべての会話（アーカイブ済みも表示）」フィルターからセッションを復元できます。停止した作業が自動的に再開されることはありません。",
  "archive.confirm.activity": "停止される作業",
  "archive.confirm.turn": "進行中のターン",
  "archive.confirm.subagents.one": "実行中のサブエージェント {n} 件：{names}",
  "archive.confirm.subagents.other": "実行中のサブエージェント {n} 件：{names}",
  "archive.confirm.jobs.one": "バックグラウンドタスク {n} 件：{names}",
  "archive.confirm.jobs.other": "バックグラウンドタスク {n} 件：{names}",
  "archive.confirm.schedules.one": "予約済みのリマインダー {n} 件：{names}",
  "archive.confirm.schedules.other": "予約済みのリマインダー {n} 件：{names}",
  "archive.confirm.other.one": "その他の作業 {n} 件（{kind}）",
  "archive.confirm.other.other": "その他の作業 {n} 件（{kind}）",
  "archive.confirm.listSeparator": "、",
  "archive.confirm.action": "停止してアーカイブ",
  "archive.confirm.pending": "停止してアーカイブ中…",
  "toast.archivedUndo": "元に戻す",
  "toast.archivedOr": " または ",
  "toast.archivedFilter": "アーカイブ済みを表示",
  "toast.pinFailed": "ピン留めに失敗しました。後で再試行してください。",
  "toast.unpinFailed": "ピン留めの解除に失敗しました。後で再試行してください。",
  "toast.createFailed": "新規セッションの作成に失敗しました：{message}",
  "actions.archive": "アーカイブ",
  "actions.unarchive": "アーカイブを解除",
  "actions.pin": "ピン留め",
  "actions.unpin": "ピン留めを解除",
  "actions.newSession": "新規セッション",
  "status.compact.approval": "承認",
  "status.compact.planReview": "プランレビュー",
  "status.compact.answer": "回答",
};

export const DICTS: Record<string, Record<string, string>> = {
  ...EXTRA_DICTS,
  ...SCREENSHOT_DICTS,
  approval: approval,
  chat: chat,
  command: command,
  common: common,
  conversation: conversation,
  cordis: cordis,
  deliverables: deliverables,
  "directory-browser": directoryBrowser,
  documentHtml: documentHtml,
  documentMarkdown: documentMarkdown,
  feedback: feedback,
  goal: goal,
  job: job,
  model: model,
  "open-in-app": openInApp,
  "permission.access": permissionAccess,
  plan: plan,
  question: question,
  reference: reference,
  "schedule.catalog": scheduleCatalog,
  "session-log-download": sessionLogDownload,
  settings: settings,
  "settings.agentPreset": settingsAgentPreset,
  "settings.locale": settingsLocale,
  "settings.models": settingsModels,
  "settings.permission": settingsPermission,
  "settings.pluginInventory": settingsPluginInventory,
  "settings.plugins": settingsPlugins,
  "settings.theme": settingsTheme,
  sidebar: sidebar,
  sidebarCodePreview: sidebarCodePreview,
  sidebarDocumentPreview: sidebarDocumentPreview,
  sidebarFiles: sidebarFiles,
  sidebarImage: sidebarImage,
  sidebarPdf: sidebarPdf,
  sidebarRight: sidebarRight,
  skill: skill,
  "slash.menu": slashMenu,
  subagent: subagent,
  trajectory: trajectory,
  workflowRun: workflowRun,
  workspace: workspace,
};
