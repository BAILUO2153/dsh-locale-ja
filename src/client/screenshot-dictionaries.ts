// Screenshot-driven additions, source-pinned to DSH 0.2.0-rc.2.
// Exact public locale namespaces and registration evidence are in the batch 3 fixtures.
// Owning packages are outside the installed devDependency set; key unions are offline contracts.

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-settings-account/src/client/locales.ts
type Screenshot0Key =
  | "modelSignInRequired"
  | "sessionExpired"
  | "onboardingArtworkLocale"
  | "onboardingWelcome"
  | "onboardingBrand"
  | "onboardingIntroduction"
  | "onboardingStart"
  | "onboardingCredit"
  | "onboardingCreditDescription"
  | "onboardingTopUp"
  | "onboardingLater"
  | "onboardingFundedTopUp"
  | "onboardingPurposePrefix"
  | "onboardingPurposeSuffix"
  | "onboardingPurposeDescription"
  | "onboardingOffice"
  | "onboardingOfficeDescription"
  | "onboardingDevelopment"
  | "onboardingDevelopmentDescription"
  | "onboardingContinue"
  | "onboardingProcess"
  | "onboardingProcessDescription"
  | "onboardingCompact"
  | "onboardingCompactDescription"
  | "onboardingStandard"
  | "onboardingStandardDescription"
  | "onboardingDetailed"
  | "onboardingDetailedDescription"
  | "onboardingEnter"
  | "onboardingBack"
  | "onboardingSkip"
  | "onboardingSkipTitle"
  | "onboardingSkipDescription"
  | "onboardingKeepSetting"
  | "onboardingNoCreditTitle"
  | "onboardingNoCreditDescription"
  | "onboardingUnderstood"
  | "onboardingGoTopUp"
  | "onboardingSaveFailed"
  | "onboardingRetry"
  | "onboardingLoading"
  | "close"
  | "addApiKey"
  | "retry"
  | "loginTitle"
  | "loginDescription"
  | "browserTitle"
  | "browserPrompt"
  | "copyLink"
  | "copiedLink"
  | "copyFailed"
  | "browserDescription"
  | "timeoutTitle"
  | "timeoutDescription"
  | "failureTitle"
  | "platformFailed"
  | "platformRetry"
  | "loading"
  | "backToHarness"
  | "settings"
  | "contactUs"
  | "menu"
  | "nav"
  | "signedIn"
  | "signedOut"
  | "signIn"
  | "signOut"
  | "signOutUnknownDescription"
  | "signOutDescription"
  | "signOutRunningDescription"
  | "cancel"
  | "open"
  | "initializing"
  | "waiting"
  | "completing"
  | "expired"
  | "failed"
  | "settingsSignedOutTitle"
  | "settingsSignedOutDescription"
  | "signInDescription"
  | "profileUnavailable"
  | "balance"
  | "bonusBalance"
  | "balanceUnavailable"
  | "balanceSignedOut"
  | "accountInfo"
  | "more"
  | "usage"
  | "topUp"
  | "quotaTitle"
  | "quotaDescription"
  | "quotaTopUp"
  | "bonusNoticeTitle";
const screenshot0: Record<Screenshot0Key, string> = {
  modelSignInRequired: "モデルを利用できません。サインインしてから再試行してください。",
  sessionExpired: "アカウントからサインアウトしました。もう一度サインインしてください。",
  onboardingArtworkLocale: "en",
  onboardingWelcome: "ようこそ！",
  onboardingBrand: "DeepSeek Harness",
  onboardingIntroduction:
    "DeepSeek Harness はローカルフォルダーで動作し、ツールを使ってコンピューター上のファイルを読み書きします。情報の調査や整理、ドキュメントやスプレッドシートの作成、コーディング、問題の解決などを支援します。",
  onboardingStart: "使い始める",
  onboardingCredit: "クレジットを追加",
  onboardingCreditDescription:
    "DeepSeek Harness は、モデルやツールが使用したトークン数に応じてクレジットを消費します。タスクが中断されないよう、あらかじめクレジットを追加してください。残高が使われるのは、エージェントがタスクを実行している間だけです。",
  onboardingTopUp: "クレジットを追加",
  onboardingLater: "次へ",
  onboardingFundedTopUp: "クレジットを追加",
  onboardingPurposePrefix: "どのような作業を",
  onboardingPurposeSuffix: "で進めたいですか？",
  onboardingPurposeDescription: "作業に合わせて画面やツールを調整します。",
  onboardingOffice: "事務・クリエイティブ作業",
  onboardingOfficeDescription: "ドキュメントの編集、データの整理、プレゼンテーションの作成など",
  onboardingDevelopment: "コーディング・開発",
  onboardingDevelopmentDescription:
    "コードの編集、デバッグ、コマンドの実行、プロジェクトファイルの管理など",
  onboardingContinue: "続行",
  onboardingProcess: "どの程度の詳しさで進行状況を表示しますか？",
  onboardingProcessDescription:
    "変わるのは進行状況の表示だけです。DeepSeek Harness の機能は変わりません。",
  onboardingCompact: "結果のみ",
  onboardingCompactDescription: "シンプルな画面で結果だけを表示",
  onboardingStandard: "主な詳細",
  onboardingStandardDescription: "結果を中心に、重要な手順や操作だけを表示",
  onboardingDetailed: "すべての詳細",
  onboardingDetailedDescription: "全過程を表示して、デバッグや問題の解決をしやすくします",
  onboardingEnter: "アプリを開く",
  onboardingBack: "戻る",
  onboardingSkip: "スキップ",
  onboardingSkipTitle: "セットアップをスキップしますか？",
  onboardingSkipDescription:
    "進行状況、パフォーマンス、使用量の表示方法の変更やコーディングツールの有効化は、いつでも「設定 → 一般」で行えます。",
  onboardingKeepSetting: "セットアップを続ける",
  onboardingNoCreditTitle: "クレジットの追加をスキップしますか？",
  onboardingNoCreditDescription:
    "クレジットがないと、DeepSeek Harness で新しいタスクを開始できません。後から「設定 → アカウント」で追加できます。",
  onboardingUnderstood: "了解",
  onboardingGoTopUp: "クレジットを追加",
  onboardingSaveFailed: "設定を保存できませんでした。再試行してください。",
  onboardingRetry: "再試行",
  onboardingLoading: "設定を読み込み中…",
  close: "閉じる",
  addApiKey: "API キーを追加",
  retry: "もう一度サインイン",
  loginTitle: "使い始める",
  loginDescription:
    "DeepSeek アカウントにサインインするか、API キーを追加して使い始めましょう。プロジェクトとファイルはローカルに保存されます。",
  browserTitle: "サインインを待っています",
  browserPrompt: "ページが自動で開きませんか？ ",
  copyLink: "サインイン用リンクをコピー",
  copiedLink: "リンクをコピーしました",
  copyFailed: "コピーできませんでした",
  browserDescription: "。リンクをコピーできたら、ブラウザーで開いてサインインを完了してください。",
  timeoutTitle: "サインインがタイムアウトしました",
  timeoutDescription: "続行するには、もう一度サインインしてください。",
  failureTitle: "サインインできませんでした",
  platformFailed: "操作を完了できませんでした。再試行してください。",
  platformRetry: "再試行",
  loading: "読み込み中…",
  backToHarness: "DeepSeek Harness に戻る",
  settings: "設定",
  contactUs: "フィードバック",
  menu: "アカウントメニュー",
  nav: "アカウント",
  signedIn: "DeepSeek にサインイン済み",
  signedOut: "サインインしていません",
  signIn: "サインイン",
  signOut: "サインアウト",
  signOutUnknownDescription:
    "実行中のタスクを確認できませんでした。サインアウトすると、このアカウントを使用しているタスクが中断される可能性があります。今すぐサインアウトしますか？",
  signOutDescription:
    "サインアウトしてもデータは削除されません。このアカウントに再度サインインできます。",
  signOutRunningDescription:
    "現在、タスクを実行中です。サインアウトすると中断されます。今すぐサインアウトしますか？",
  cancel: "キャンセル",
  open: "ブラウザーを開く",
  initializing: "サインインを開始中…",
  waiting: "ブラウザーで続行してください",
  completing: "サインインを完了中…",
  expired: "サインインの有効期限が切れました。再試行してください。",
  failed: "操作を完了できませんでした。再試行してください。",
  settingsSignedOutTitle: "DeepSeek Harness にサインインしていません",
  settingsSignedOutDescription: "DeepSeek Harness にサインインして専用の API キーを取得",
  signInDescription: "DeepSeek アカウントで使い始めましょう。",
  profileUnavailable: "アカウント情報はまだ利用できません。",
  balance: "チャージ残高",
  bonusBalance: "付与残高",
  balanceUnavailable: "Platform で確認",
  balanceSignedOut: "サインインして確認",
  accountInfo: "アカウントの詳細情報",
  more: "その他",
  usage: "使用量を確認",
  topUp: "チャージ",
  quotaTitle: "利用可能な残高がありません",
  quotaDescription:
    "利用可能な残高がない場合、このアカウントでは DeepSeek Harness の新しいタスクを開始できません。チャージしますか？後から「設定 → アカウント」でチャージすることもできます。",
  quotaTopUp: "チャージ",
  bonusNoticeTitle: "ボーナスが付与されました",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-shortcuts/src/client/locales.ts
type Screenshot1Key =
  | "edit-label"
  | "record"
  | "record-help"
  | "web-help"
  | "unsupported-key"
  | "reserved"
  | "modifier-required"
  | "too-many-keys"
  | "macos-web-help"
  | "windows-web-help"
  | "unsupported-browser"
  | "conflict"
  | "saved"
  | "clear"
  | "retry-save"
  | "reset"
  | "reset-all"
  | "modified-count"
  | "reset-title"
  | "reset-description"
  | "cancel"
  | "reset-saved"
  | "close-confirmation"
  | "reset-failed"
  | "review"
  | "stale"
  | "write-failed"
  | "not-ready"
  | "read"
  | "invalid"
  | "future"
  | "web-document"
  | "desktop-document"
  | "web-reload"
  | "desktop-reload"
  | "using-defaults"
  | "using-accepted"
  | "native-failed"
  | "global-hint"
  | "clear-search"
  | "title"
  | "open"
  | "settings"
  | "view"
  | "description"
  | "search"
  | "close"
  | "application"
  | "input"
  | "menus"
  | "approval"
  | "unbound"
  | "empty"
  | "move"
  | "select"
  | "dismiss";
const screenshot1: Record<Screenshot1Key, string> = {
  "edit-label": "{command} のショートカットを編集",
  record: "ショートカットキーを押してください",
  "record-help": "キーを離すと保存されます。Tab で操作を切り替え、Esc でキャンセルします。",
  "web-help":
    "ブラウザーで使える組み合わせ：Mod+/、Mod+Shift+,、Mod+Shift+.。Mod は Mac では Command、それ以外では Ctrl です。",
  "unsupported-key": "このキーには対応していません。",
  reserved: "この組み合わせは、システム操作またはテキスト編集用に予約されています。",
  "modifier-required": "組み合わせに Command、Ctrl、Alt のいずれかを含めてください。",
  "too-many-keys": "修飾キー以外は同時に 2 つまで押せます。キーを離してから再試行してください。",
  "macos-web-help":
    "Command+/、Command+,、Command+Backslash、Control+Backquote、Command+Option+key、Command+Shift+key を使えます。異なる修飾キーを 3 つまたは 4 つ使う組み合わせにも対応しています。ブラウザーやシステムのショートカットは、ページに入力が届かない場合があります。",
  "windows-web-help":
    "Ctrl+/、Ctrl+,、Ctrl+Alt+key、Ctrl+Shift+key を使えます。異なる修飾キーを 3 つまたは 4 つ使う組み合わせにも対応しています。ブラウザーやシステムのショートカットは、ページに入力が届かない場合があります。",
  "unsupported-browser": "このブラウザーは、この組み合わせにまだ対応していません。",
  conflict: "「{commands}」ですでに使用されています",
  saved: "変更済み",
  clear: "削除",
  "retry-save": "保存を再試行",
  reset: "既定値に戻す",
  "reset-all": "すべて既定値に戻す",
  "modified-count": "{count} 件をカスタマイズ済み",
  "reset-title": "すべてのショートカットを既定値に戻しますか？",
  "reset-description":
    "このプラットフォームのショートカットを既定値に戻します。変更または削除したショートカットはすべて復元されます。他のプラットフォームには影響しません。",
  cancel: "キャンセル",
  "reset-saved": "ショートカットを既定値に戻しました",
  "close-confirmation": "確認画面を閉じる",
  "reset-failed":
    "既定値に戻せませんでした。ショートカットは変更されていません。再試行してください。",
  review: "最新の設定を確認しました",
  stale:
    "ショートカットの設定または利用可能なコマンドが変更されました。最新のキー割り当てを確認してから保存してください。",
  "write-failed":
    "保存できませんでした。以前のショートカットと現在の編集内容は保持されています。再試行してください。",
  "not-ready": "ショートカットの準備ができていません。再試行してください。",
  read: "{location} を読み込めませんでした。アクセス権限を確認してから、{reload}。",
  invalid:
    "{location} のショートカット設定が破損しています。この設定をバックアップして修復した後、{reload}。",
  future:
    "{location} のショートカット設定は、新しいバージョンで作成されています。Harness を更新してから再試行してください。",
  "web-document": "このサイトの localStorage 内の dsh.keybindings.v1",
  "desktop-document": "userData/keybindings.json",
  "web-reload": "ページを再読み込みしてください",
  "desktop-reload": "Harness を再起動してください",
  "using-defaults": "既定のキー割り当てを使用しています。",
  "using-accepted": "最後に正常に読み込めたキー割り当てを引き続き使用しています。",
  "native-failed":
    "デスクトップでのキー記録の保護を有効にできませんでした。キーの記録を終了してから再試行してください。",
  "global-hint": "どこからでも開く",
  "clear-search": "検索をクリア",
  title: "キーボードショートカット",
  open: "キーボードショートカットを開く",
  settings: "キーボードショートカット",
  view: "ショートカットを編集",
  description: "利用可能なショートカットと入力操作を確認・編集",
  search: "ショートカットを検索",
  close: "キーボードショートカットを閉じる",
  application: "アプリケーション",
  input: "メッセージ入力",
  menus: "メニューとダイアログ",
  approval: "承認エリア",
  unbound: "ショートカットなし",
  empty: "一致するショートカットがありません",
  move: "メニューの選択項目を移動",
  select: "メニュー項目を選択",
  dismiss: "メニューまたは最前面のダイアログを閉じる",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-layout/src/client/shortcut-locales.ts
type Screenshot2Key = "toggle";
const screenshot2: Record<Screenshot2Key, string> = {
  toggle: "左サイドバーの表示を切り替え",
};

// https://github.com/deepseek-ai/deepseek-harness/blob/639ed015397290b3745d163aafe02ffee4aa3f84/packages/client/ui-plugin-manager/src/client/locales.ts
type Screenshot3Key =
  | "panel"
  | "title"
  | "intro"
  | "infoLabel"
  | "infoDescription"
  | "loading"
  | "error"
  | "unavailable"
  | "retry"
  | "refresh"
  | "refreshError"
  | "empty"
  | "addPlugin"
  | "restartNotice"
  | "overriddenNotice"
  | "bundlesTitle"
  | "officialTitle"
  | "statusProblem"
  | "statusBeta"
  | "reasonLabel"
  | "metadataError"
  | "versionTag"
  | "partsLabel"
  | "partsEmpty"
  | "partsCountTotal"
  | "partsCountRunning"
  | "partsCountOff"
  | "partOff"
  | "partsCountFailed"
  | "partsFilter"
  | "partsFilterEmpty"
  | "partToggle"
  | "rowPhasePending"
  | "rowPhaseLoading"
  | "rowPhaseActive"
  | "rowPhaseFailed"
  | "rowPhaseUnloading"
  | "enableToggle"
  | "openDetail"
  | "backToList"
  | "crumbRoot"
  | "backToPackage"
  | "configureRow"
  | "rowStateIdle"
  | "uninstall"
  | "uninstallLabel"
  | "installTitle"
  | "installDescription"
  | "installSpecLabel"
  | "installSpecPlaceholder"
  | "installGuideToggle"
  | "installGuideHide"
  | "installGuideIdTitle"
  | "installGuideIdExample"
  | "installGuideIdHint"
  | "installGuideExampleLabel"
  | "installGitTemplateHint"
  | "installPathTemplateHint"
  | "installGuideFill"
  | "installGuideFillAria"
  | "installGuideSafety"
  | "installUpgradeNotice"
  | "registryToggle"
  | "registryLegend"
  | "registryDefault"
  | "registryOfficial"
  | "registryNpmmirror"
  | "registryCustom"
  | "registryCustomPlaceholder"
  | "registryCustomHint"
  | "registryCustomInvalid"
  | "registryListSeparator"
  | "sentenceSeparator"
  | "installRun"
  | "installChecking"
  | "installProblemInvalid"
  | "installProblemInstalled"
  | "installProblemShipped"
  | "installProblemNotFound"
  | "installProblemNotPackage"
  | "installProblemNotBundle"
  | "installProblemNetwork"
  | "installProblemNetworkAll"
  | "installProblemUnknown"
  | "installingTitle"
  | "installedTitle"
  | "installFailedTitle"
  | "installGithubFailedTitle"
  | "installGithubTimeoutTitle"
  | "installGithubFailedDescription"
  | "installUseGithubMirror"
  | "installTryAnotherWay"
  | "installPackageLabel"
  | "installEdit"
  | "installEditAria"
  | "installCancelAndEdit"
  | "installApplyingCancellationError"
  | "installReconcile"
  | "installUnknownTitle"
  | "installUnknownDescription"
  | "installResultUnconfirmed"
  | "installAwaitingAcceptance"
  | "installBackgroundUnknown"
  | "installCancel"
  | "installCloseCancels"
  | "installViewTask"
  | "installUnconfirmedTitle"
  | "installBackgroundDone"
  | "installBackgroundFailed"
  | "installBackgroundUnconfirmed"
  | "installBackgroundApplying"
  | "installStarting"
  | "installCancelling"
  | "installApplying"
  | "installCancelledShort"
  | "installCancelled"
  | "installCancelUnconfirmed"
  | "installEnableNow"
  | "installDetailsShow"
  | "installDetailsHide"
  | "installVersion"
  | "installSubjectPath"
  | "installSubjectGit"
  | "installSubjectTarball"
  | "installLocation"
  | "installRetry"
  | "installChangeRegistry"
  | "installAttempt"
  | "installAttemptBadge"
  | "installFailureNetwork"
  | "installFailureNetworkAll"
  | "installFailureNetworkHost"
  | "installFailureNotFound"
  | "installFailureNoMatchingVersion"
  | "installFailureDiskFull"
  | "installFailurePermission"
  | "installFailureBuildBlocked"
  | "installFailureBuildBlockedManual"
  | "installFailureIntegrity"
  | "installFailureTimeout"
  | "installFailurePnpmMissing"
  | "installFailureGeneric"
  | "terminalRunning"
  | "terminalFailed"
  | "terminalDone"
  | "terminalCopy"
  | "terminalCopied"
  | "terminalNoOutput"
  | "terminalCollapseAria"
  | "terminalCollapse"
  | "terminalExpandAria"
  | "terminalExpand"
  | "terminalExitCode"
  | "terminalSignal"
  | "terminalNoExitCode"
  | "installDoneNothing"
  | "installDoneRestart"
  | "installDoneApproved"
  | "installApprovalTitle"
  | "installApprovalDescription"
  | "installApprovalConsequence"
  | "installApprovalCaution"
  | "installApproveAndRetry"
  | "installClose"
  | "close"
  | "cancel"
  | "confirmUninstallTitle"
  | "confirmUninstallDescription"
  | "confirmUninstall"
  | "failedEnable"
  | "failedDisable"
  | "failedUninstall"
  | "failedRowEnable"
  | "failedRowDisable"
  | "reasonManagementRequired"
  | "reasonUnaddressable"
  | "reasonUnknownPlugin"
  | "reasonInvalidSpec"
  | "reasonAmbiguousInstall"
  | "reasonNotBundle"
  | "reasonNotRemovable"
  | "reasonStopProfile"
  | "reasonBundleInUse"
  | "reasonStaleApproval"
  | "reasonIncompatibleVersion"
  | "reasonIncompatibleVersionUnnamed"
  | "reasonIncompatibleInstall"
  | "reasonIncompatibleInstalled"
  | "reasonOperationError";
const screenshot3: Record<Screenshot3Key, string> = {
  panel: "プラグイン",
  title: "プラグイン",
  intro: "プラグインのインストール、有効化、設定",
  infoLabel: "プラグインについて",
  infoDescription:
    "公式プラグインの設定や、その他のプラグインのインストール・管理を行えます。組み込みプラグインの一覧と実行状態は、設定 → プラグイン → プラグイン一覧で確認できます。",
  loading: "プラグインを読み込み中…",
  error: "すべてのプラグインを読み込めませんでした。ネットワークに問題がある可能性があります。",
  unavailable:
    "このデプロイは管理可能なプロファイルなしで実行されているため、ここではプラグインのインストールや有効・無効の切り替えはできません。",
  retry: "再試行",
  refresh: "更新",
  refreshError: "更新に失敗しました。もう一度お試しください。",
  empty: "まだプラグインがインストールされていません。",
  addPlugin: "プラグインを追加",
  restartNotice: "変更は次回起動時に反映されます",
  overriddenNotice:
    "{name} は保存されましたが、優先度の高い設定に上書きされているため、適用されていません",
  bundlesTitle: "インストール済み",
  officialTitle: "公式",
  statusProblem: "問題あり",
  statusBeta: "試験的",
  reasonLabel: "理由",
  metadataError: "パッケージのメタデータエラー：{error}",
  versionTag: "v{version}",
  partsLabel: "コンポーネント",
  partsEmpty: "このプラグインパックにはコンポーネントが含まれていません。",
  partsCountTotal: "全 {count} 個",
  partsCountRunning: "{count} 個実行中",
  partsCountOff: "{count} 個無効",
  partOff: "無効",
  partsCountFailed: "{count} 個失敗",
  partsFilter: "コンポーネントを絞り込み",
  partsFilterEmpty: "一致するコンポーネントがありません。",
  partToggle: "コンポーネント {name} を有効化",
  rowPhasePending: "依存関係を待機中",
  rowPhaseLoading: "読み込み中",
  rowPhaseActive: "実行中",
  rowPhaseFailed: "問題あり",
  rowPhaseUnloading: "アンロード中",
  enableToggle: "{name} を有効化",
  openDetail: "{name} を表示",
  backToList: "プラグイン一覧に戻る",
  crumbRoot: "プラグイン",
  backToPackage: "{name} に戻る",
  configureRow: "{name} を設定",
  rowStateIdle: "停止中",
  uninstall: "アンインストール",
  uninstallLabel: "{name} をアンインストール",
  installTitle: "プラグインを追加",
  installDescription:
    "プラグインのパッケージ名、GitHub リポジトリのアドレス、またはローカルディレクトリのパスを入力してください。",
  installSpecLabel: "パッケージ名またはアドレス",
  installSpecPlaceholder: "例：dsh-plugin-whale-pet",
  installGuideToggle: "インストールガイドと入力例",
  installGuideHide: "ガイドを非表示",
  installGuideIdTitle: "プラグインの npm パッケージ名を入力",
  installGuideIdExample: "dsh-plugin-whale-pet",
  installGuideIdHint:
    "プラグインのパッケージ名は npm パッケージ名（dsh-xxx や @author/plugin など）です。コミュニティ製プラグインの README にあるインストールコマンドで、dsh plugin add または pnpm add の後に続く部分を入力してください。",
  installGuideExampleLabel: "例：",
  installGitTemplateHint: "実際の Git リポジトリのアドレスに置き換えてください。",
  installPathTemplateHint: "ローカルのプラグインディレクトリの実際のパスに置き換えてください。",
  installGuideFill: "入力例を使う",
  installGuideFillAria: "入力例 {example} を使う",
  installGuideSafety:
    "信頼できるプラグインのみをインストールしてください。プラグインはあなたの権限で実行され、DeepSeek Harness に損害を与えたり、データを漏えいさせたりする可能性があります。",
  installUpgradeNotice:
    "現在、インストール済みのプラグインは自動更新されません。更新するには、一度アンインストールしてから新しいバージョンをインストールしてください。今後のリリースで更新手順を改善していく予定です。",
  registryToggle: "レジストリ",
  registryLegend: "プラグインのダウンロード元の npm レジストリ",
  registryDefault: "デフォルトのレジストリ",
  registryOfficial: "公式 npm レジストリ",
  registryNpmmirror: "中国本土のミラー",
  registryCustom: "カスタムアドレス",
  registryCustomPlaceholder: "https://npm.example.com/",
  registryCustomHint:
    "http:// または https:// で始まる、社内用またはプライベートな npm レジストリのアドレスを入力してください。ログインが必要な場合は、このマシンの ~/.npmrc に認証情報を保存してください。",
  registryCustomInvalid: "http:// または https:// で始まるアドレスを入力してください",
  registryListSeparator: "、",
  sentenceSeparator: " ",
  installRun: "インストール",
  installChecking: "確認中…",
  installProblemInvalid: "インストール可能なパッケージ名またはアドレスではありません：{reason}",
  installProblemInstalled:
    "このプラグインはすでにインストールされています。更新するには、一度アンインストールしてから再インストールしてください",
  installProblemShipped:
    "このプラグインは DSH に同梱されています。DSH を更新すると、このプラグインも更新されます",
  installProblemNotFound: "該当するプラグインが見つかりませんでした",
  installProblemNotPackage: "パスが存在しないか、有効なプラグインパッケージではありません",
  installProblemNotBundle:
    "このパッケージはバンドルを宣言していないため、プラグインとしてインストールできません：{reason}",
  installProblemNetwork:
    "プラグインのレジストリに接続できませんでした。ネットワークを確認して再試行してください",
  installProblemNetworkAll:
    "どのレジストリにも接続できませんでした（試行済み：{registries}）。ネットワークやプロキシの設定を確認するか、レジストリを変更してください",
  installProblemUnknown: "プラグインを検索できませんでした：{reason}",
  installingTitle: "プラグインをインストール中…",
  installedTitle: "インストール済み",
  installFailedTitle: "プラグインをインストールできませんでした",
  installGithubFailedTitle: "GitHub にアクセスできません",
  installGithubTimeoutTitle: "GitHub への接続がタイムアウトしました",
  installGithubFailedDescription: "別のインストール元をお試しください。",
  installUseGithubMirror: "中国本土のミラーを使う",
  installTryAnotherWay: "別の方法を試す",
  installPackageLabel: "プラグインのパッケージ名",
  installEdit: "編集",
  installEditAria: "編集に戻る",
  installCancelAndEdit: "インストールをキャンセルして編集に戻る",
  installApplyingCancellationError:
    "キャンセルを確認できませんでした。インストール内容を適用中です。結果をお待ちください。{reason}",
  installReconcile: "インストール状況を確認",
  installUnknownTitle: "インストール結果を確認できません",
  installUnknownDescription:
    "ホストでは、このリクエスト ID に対応するインストールは実行されていません。再試行する前にプラグイン一覧を確認してください。",
  installResultUnconfirmed:
    "インストール結果を受信できませんでした。インストール状況を確認してください。{reason}",
  installAwaitingAcceptance:
    "ホストがインストールを受け付けるのを待っています。受け付けを確認した後、キャンセルを自動で再試行します。",
  installBackgroundUnknown: "インストール結果を確認できません。プラグイン一覧を確認してください。",
  installCancel: "インストールをキャンセル",
  installCloseCancels: "インストールをキャンセルして閉じる",
  installViewTask: "インストール状況を表示",
  installUnconfirmedTitle: "インストール状況が未確認です",
  installBackgroundDone: "インストールが完了しました。詳細を確認してください。",
  installBackgroundFailed: "インストールに失敗しました。詳細を確認してください。",
  installBackgroundUnconfirmed:
    "インストール状況が未確認です。インストールの詳細を確認してください。",
  installBackgroundApplying:
    "インストール内容を適用中のため、キャンセルできません。インストールの進行状況を確認してください。",
  installStarting: "インストールを準備中…",
  installCancelling: "インストールを停止中…",
  installApplying: "設定を適用中です。しばらくお待ちください…",
  installCancelledShort: "キャンセル済み",
  installCancelled:
    "インストールをキャンセルしました。プラグインは有効化されていませんが、ダウンロード済みのファイルが残っている可能性があります",
  installCancelUnconfirmed:
    "インストールの停止を確認できていません。キャンセルを再試行するか、インストール結果をお待ちください。{reason}",
  installEnableNow: "今すぐ有効化",
  installDetailsShow: "インストールの詳細を表示",
  installDetailsHide: "インストールの詳細を非表示",
  installVersion: "バージョン {version}",
  installSubjectPath: "ローカルディレクトリ",
  installSubjectGit: "Git リポジトリ",
  installSubjectTarball: "tar アーカイブ",
  installLocation: "インストール先：{dir}",
  installRetry: "再試行",
  installChangeRegistry: "レジストリを変更",
  installAttempt:
    "{previous} からパッケージを取得できませんでした。{registry} で再試行中です（レジストリ {total} 件中 {index} 件目）",
  installAttemptBadge: "試行 {index} · {registry}",
  installFailureNetwork: "ネットワーク接続に失敗しました",
  installFailureNetworkAll:
    "どのレジストリにも接続できませんでした（試行済み：{registries}）。ネットワークやプロキシの設定を確認するか、レジストリを変更して再試行してください。",
  installFailureNetworkHost:
    "{host} に接続できませんでした。GitHub のアドレスや .tgz リンクからの取得ではレジストリを経由しないため、このマシンから直接、またはプロキシ経由で接続できる必要があります。プラグインが npm にも公開されている場合は、代わりにパッケージ名を入力してください。",
  installFailureNotFound: "該当するプラグインが見つかりませんでした",
  installFailureNoMatchingVersion: "指定に一致するバージョンがありません",
  installFailureDiskFull: "ディスクの空き容量が不足しているため、インストールを停止しました",
  installFailurePermission: "書き込み権限がないため、プラグインをインストールできません",
  installFailureBuildBlocked:
    "インストールを続行するには、依存パッケージのインストールスクリプトの実行を許可する必要があります",
  installFailureBuildBlockedManual:
    "pnpm がインストールスクリプトの実行をブロックしました。pnpm-workspace.yaml の allowBuilds で許可してから再試行してください",
  installFailureIntegrity: "ダウンロードしたパッケージの整合性チェックに失敗しました",
  installFailureTimeout: "インストールがタイムアウトしました",
  installFailurePnpmMissing: "pnpm が見つからないため、インストールできません",
  installFailureGeneric: "インストール中に問題が発生しました。詳細を確認してください",
  terminalRunning: "実行中",
  terminalFailed: "失敗",
  terminalDone: "完了",
  terminalCopy: "コピー",
  terminalCopied: "コピーしました",
  terminalNoOutput: "出力なし",
  terminalCollapseAria: "出力を折りたたむ",
  terminalCollapse: "折りたたむ",
  terminalExpandAria: "残りの出力 {n} 行を展開",
  terminalExpand: "… 残り {n} 行",
  terminalExitCode: "終了コード {code}",
  terminalSignal: "シグナル {signal}",
  terminalNoExitCode: "終了コードなし",
  installDoneNothing: "インストールが完了しました。新しい依存パッケージは追加されませんでした。",
  installDoneRestart: "インストールが完了しました。次回起動時に読み込まれます。",
  installDoneApproved: "{names} のインストールスクリプトの実行を許可しました",
  installApprovalTitle: "インストールスクリプトの実行許可が必要です",
  installApprovalDescription:
    "これらのパッケージには、pnpm が実行しなかったインストールスクリプトが含まれています。",
  installApprovalConsequence:
    "許可すると、スクリプトはこのマシンであなたの権限で実行され、その許可はこのプロファイルに保存されます。",
  installApprovalCaution: "信頼できるパッケージのみを許可してください。",
  installApproveAndRetry: "これらのスクリプトを許可して再試行",
  installClose: "完了",
  close: "閉じる",
  cancel: "キャンセル",
  confirmUninstallTitle: "「{name}」をアンインストールしますか？",
  confirmUninstallDescription:
    "アンインストールすると、このプラグインが提供する機能は利用できなくなります。",
  confirmUninstall: "アンインストール",
  failedEnable: "有効化できませんでした：{reason}",
  failedDisable: "無効化できませんでした：{reason}",
  failedUninstall: "アンインストールできませんでした：{reason}",
  failedRowEnable: "コンポーネントを有効化できませんでした：{reason}",
  failedRowDisable: "コンポーネントを無効化できませんでした：{reason}",
  reasonManagementRequired: "プラグイン管理に必要なため、無効化やアンインストールはできません。",
  reasonUnaddressable: "プロファイルパッチでこの項目を一意に指定できません。",
  reasonUnknownPlugin: "該当するプラグインがありません。",
  reasonInvalidSpec: "有効なパッケージ名またはアドレスを入力してください。",
  reasonAmbiguousInstall:
    "依存関係の変更からは、どのパッケージがインストールされたかを特定できません。",
  reasonNotBundle: "このパッケージはバンドルを宣言していないため、プラグインとして管理できません。",
  reasonNotRemovable:
    "このパッケージはプロファイルの管理対象ではないか、プラグイン管理に必要です。",
  reasonStopProfile:
    "このプロファイルでは HMR が無効です。プロファイルを停止してから、dsh plugin でパッケージをアンインストールしてください。",
  reasonBundleInUse:
    "他の設定でこのバンドルのコンポーネントが使われています。先にそれらを無効にしてください。",
  reasonStaleApproval:
    "承認待ちのスクリプトが変更されました。再度インストールして承認対象を更新してください。",
  reasonIncompatibleVersion:
    "{plugin} は DSH {runtime} と互換性がありません（必要条件：{peers}）。実行すると、クラッシュやデータの消失が発生する可能性があります。",
  reasonIncompatibleVersionUnnamed:
    "このプラグインは実行中の DSH のバージョンと互換性がありません。実行すると、クラッシュやデータの消失が発生する可能性があります。",
  reasonIncompatibleInstall:
    "この DSH と互換性のあるバージョンのプラグインをインストールしてください。",
  reasonIncompatibleInstalled:
    "アンインストールしてから、この DSH と互換性のあるバージョンをインストールしてください。",
  reasonOperationError: "ホストからエラーが報告されました。",
};

export const SCREENSHOT_DICTS: Record<string, Record<string, string>> = {
  "settings.account": screenshot0,
  shortcuts: screenshot1,
  "shortcuts.layout": screenshot2,
  pluginManager: screenshot3,
};
