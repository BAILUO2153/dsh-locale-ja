// Source-pinned additions for DSH 0.2.0-rc.2; no runtime platform imports.
// Registration and package export evidence: scripts/fixtures/extra-namespaces-0.2.0-rc.2.json.
// Owning packages are not installed; these explicit key unions are offline snapshot contracts.

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-sidebar-terminal/src/client/locales.ts
type extra0Key =
  | "shortcut.noSession"
  | "recoveryFailed"
  | "retryRecovery"
  | "shell"
  | "shellLoading"
  | "shellEmpty"
  | "description"
  | "title"
  | "new"
  | "loading"
  | "creating"
  | "connecting"
  | "disconnected"
  | "reconnect"
  | "readonly"
  | "control"
  | "closed"
  | "exited"
  | "failed"
  | "rename"
  | "unavailable"
  | "retry"
  | "cleanupFailed"
  | "missingTerminal"
  | "inputFull"
  | "attachmentEnded"
  | "invalidOutput"
  | "terminalLimit";
const extra0: Record<extra0Key, string> = {
  "shortcut.noSession": "先にセッションを選択してください",
  recoveryFailed: "ターミナルの復元に失敗しました：{message}",
  retryRecovery: "ターミナルの復元を再試行",
  shell: "シェルを選択",
  shellLoading: "シェルを読み込み中…",
  shellEmpty: "利用可能なシェルがありません",
  description: "セッションのワークスペースでコマンドを実行",
  title: "ターミナル",
  new: "新しいターミナル",
  loading: "ターミナル環境を読み込み中…",
  creating: "起動中…",
  connecting: "接続中…",
  disconnected: "接続が切断されました。",
  reconnect: "再接続",
  readonly: "この画面は読み取り専用です。",
  control: "入力操作を引き継ぐ",
  closed: "ターミナルは閉じられました。",
  exited: "プロセスが終了しました（{code}）",
  failed: "ターミナルエラー：{message}",
  rename: "ターミナル名",
  unavailable: "利用できません",
  retry: "再試行",
  cleanupFailed: "ターミナル「{title}」を終了できませんでした：{message}",
  missingTerminal: "このターミナルは存在しません。新しいターミナルを開いてください。",
  inputFull: "入力バッファーがいっぱいです。再接続してから再試行してください。",
  attachmentEnded: "ターミナルへの接続が終了しました。続行するには再接続してください。",
  invalidOutput: "ターミナルの画面を受信できませんでした。再接続して復旧してください。",
  terminalLimit:
    "ターミナル数が上限に達しました。使用していないターミナルを閉じてから再試行してください。終了済みのターミナルも上限に含まれます。",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-settings-shell/src/client/locales.ts
type extra1Key =
  | "title"
  | "description"
  | "timeoutMs"
  | "timeoutMsHint"
  | "maxOutputBytes"
  | "maxOutputBytesHint"
  | "overridden"
  | "reset"
  | "readOnly"
  | "unavailable"
  | "save"
  | "saving"
  | "saveFailed"
  | "invalidNumber";
const extra1: Record<extra1Key, string> = {
  title: "シェル",
  description: "各コマンドの実行時間と出力量を制限します。",
  timeoutMs: "コマンドのタイムアウト（ミリ秒）",
  timeoutMsHint: "コマンドが強制終了されるまでに実行できる時間。",
  maxOutputBytes: "ストリームごとの出力上限（バイト）",
  maxOutputBytesHint: "上限を超えた出力は破棄されず、一時ファイルに保存されます。",
  overridden: "上書き済み",
  reset: "既定値に戻す",
  readOnly: "このデプロイでは設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "このデプロイでは入力値が受け付けられませんでした。修正できるよう、入力内容は保持されています。",
  invalidNumber: "数値を入力してください。既定値を使う場合は空欄にしてください。",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-settings-agent-loop/src/client/locales.ts
type extra2Key =
  | "title"
  | "description"
  | "maxParallel"
  | "maxParallelHint"
  | "overridden"
  | "reset"
  | "readOnly"
  | "unavailable"
  | "save"
  | "saving"
  | "saveFailed"
  | "invalidNumber";
const extra2: Record<extra2Key, string> = {
  title: "エージェントループ",
  description: "エージェントによるツール呼び出しの実行方法を設定します。",
  maxParallel: "ツールの並列呼び出し数",
  maxParallelHint: "1 ステップ内で安全に並列実行できるツール呼び出しの同時実行数の上限。",
  overridden: "上書き済み",
  reset: "既定値に戻す",
  readOnly: "このデプロイでは設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "このデプロイでは入力値が受け付けられませんでした。修正できるよう、入力内容は保持されています。",
  invalidNumber: "数値を入力してください。既定値を使う場合は空欄にしてください。",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-settings-subagent/src/client/locales.ts
type extra3Key =
  | "overridden"
  | "reset"
  | "readOnly"
  | "unavailable"
  | "save"
  | "saving"
  | "saveFailed"
  | "subagentTitle"
  | "subagentDescription"
  | "subagentLimitsTitle"
  | "subagentMaxDepth"
  | "subagentDepthHelpLabel"
  | "subagentDepthHelp"
  | "subagentDepthZero"
  | "subagentDepthOne"
  | "subagentDepthOverride"
  | "subagentMaxActive"
  | "subagentCapacityHelpLabel"
  | "subagentCapacityHelp"
  | "subagentDepthInvalid"
  | "subagentCapacityInvalid"
  | "subagentModelSelectionTitle"
  | "subagentModelSelectionToggle"
  | "subagentModelSelectionChoose"
  | "subagentModelSelectionAllowed"
  | "subagentModelSelectionLoading"
  | "subagentModelSelectionLoadFailed"
  | "subagentModelSelectionRetry"
  | "subagentModelSelectionPartial"
  | "subagentModelSelectionUnavailable"
  | "subagentModelSelectionUnavailableGroup"
  | "subagentModelSelectionEmpty"
  | "subagentModelSelectionRequired"
  | "subagentModelSelectionConflict"
  | "subagentModelSelectionOff";
const extra3: Record<extra3Key, string> = {
  overridden: "上書き済み",
  reset: "既定値に戻す",
  readOnly: "このデプロイでは設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "このデプロイでは入力値が受け付けられませんでした。修正できるよう、入力内容は保持されています。",
  subagentTitle: "サブエージェント",
  subagentDescription: "サブエージェントの再帰の深さ、数、モデルを設定します。",
  subagentLimitsTitle: "制限",
  subagentMaxDepth: "再帰の深さの上限",
  subagentDepthHelpLabel: "再帰の深さの上限について",
  subagentDepthHelp: "エージェントがサブエージェントを再帰的に作成できる階層数を制限します。",
  subagentDepthZero: "サブエージェントを無効にする",
  subagentDepthOne: "メインエージェントのみサブエージェントを作成可能",
  subagentDepthOverride:
    "ツールに独自の再帰の深さの上限が設定されている場合は、その設定が優先されます。",
  subagentMaxActive: "サブエージェントの並列実行数の上限",
  subagentCapacityHelpLabel: "サブエージェントの並列実行数の上限について",
  subagentCapacityHelp:
    "同じメインエージェント配下のすべての再帰階層で、同時に稼働しているサブエージェントの合計数です。メインエージェントは含みません。上限に達すると、新たな起動要求は拒否されます。",
  subagentDepthInvalid: "0 以上の整数を入力してください。",
  subagentCapacityInvalid: "1 以上の整数を入力してください。",
  subagentModelSelectionTitle: "モデルの選択",
  subagentModelSelectionToggle: "エージェントによるサブエージェントのモデル選択を許可する",
  subagentModelSelectionChoose:
    "有効にすると、エージェントは以下の許可済みモデルから、サブエージェントごとにプロバイダー、モデル、推論強度を選択できます。新しいセッションにのみ適用されます。",
  subagentModelSelectionAllowed: "エージェントが選択できるモデル",
  subagentModelSelectionLoading: "モデルを読み込み中…",
  subagentModelSelectionLoadFailed: "モデルを読み込めませんでした。",
  subagentModelSelectionRetry: "再試行",
  subagentModelSelectionPartial:
    "一部のモデルプロバイダーを読み込めませんでした。保存済みの選択は引き続き削除できます。",
  subagentModelSelectionUnavailable: "現在利用できません",
  subagentModelSelectionUnavailableGroup: "保存済みですが現在利用できません",
  subagentModelSelectionEmpty: "現在、モデルを提供しているプロバイダーがありません。",
  subagentModelSelectionRequired: "保存する前にモデルを 1 つ以上選択してください。",
  subagentModelSelectionConflict:
    "設定が別の場所で変更されました。編集中の内容を破棄して再試行してください。",
  subagentModelSelectionOff:
    "サブエージェントは設定済みの既定モデルを使うか、親エージェントのモデルを引き継ぎます。保存済みのモデルの選択は保持されます。",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-settings-web-search/src/client/locales.ts
type extra4Key =
  | "title"
  | "description"
  | "apiKey"
  | "apiKeyHint"
  | "apiKeySet"
  | "apiKeyUnset"
  | "baseUrl"
  | "baseUrlHint"
  | "maxUses"
  | "maxUsesHint"
  | "overridden"
  | "reset"
  | "readOnly"
  | "unavailable"
  | "save"
  | "saving"
  | "saveFailed"
  | "invalidNumber";
const extra4: Record<extra4Key, string> = {
  title: "ウェブ検索",
  description: "DeepSeek の検索プロバイダーを設定します。",
  apiKey: "API キー",
  apiKeyHint: "設定ファイルとは別に保存されます。現在のキーを維持するには空欄にしてください。",
  apiKeySet: "キーが設定されています。",
  apiKeyUnset:
    "キーが設定されていません。DeepSeek アカウントのモデルを使用する会話のみ、既定のエンドポイントで検索できます。",
  baseUrl: "エンドポイント",
  baseUrlHint: "空欄の場合はプロバイダーの既定値を使用します。",
  maxUses: "リクエストごとの検索回数の上限",
  maxUsesHint: "1 回のリクエストで、回答するまでに検索できる回数の上限。",
  overridden: "上書き済み",
  reset: "既定値に戻す",
  readOnly: "このデプロイでは設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "このデプロイでは入力値が受け付けられませんでした。修正できるよう、入力内容は保持されています。",
  invalidNumber: "数値を入力してください。既定値を使う場合は空欄にしてください。",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-settings-session-log/src/client/locales.ts
type extra5Key = "title" | "description" | "saved" | "failed";
const extra5: Record<extra5Key, string> = {
  title: "公式モデル API の使用時にセッションログをアップロードする",
  description: "DeepSeek のモデルと製品の改善にご協力ください。",
  saved: "設定を保存しました",
  failed: "設定を保存できませんでした",
};

export const EXTRA_DICTS: Record<string, Record<string, string>> = {
  sidebarTerminal: extra0,
  "settings.shell": extra1,
  "settings.agentLoop": extra2,
  "settings.subagent": extra3,
  "settings.webSearch": extra4,
  "settings.sessionLog": extra5,
};
