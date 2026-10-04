<div align="center">

<img width="647" height="385" alt="DSH の日本語インターフェースの表示例" src="https://github.com/user-attachments/assets/ee9a6b90-52a5-4c23-b6a9-4aefb7e8247f" />

# dsh-locale-ja

DeepSeek Harness（DSH）の Desktop 内のメイン UI・Web UI に **日本語** を追加するプラグイン

</div>

## この fork について

このリポジトリは [fang2hou/dsh-locale-ja](https://github.com/fang2hou/dsh-locale-ja) を元にした MIT ライセンスの fork です。原作者の著作権表示とライセンスを維持し、DSH Desktop / Web `0.2.0-rc.2` 向けの互換性対応と日本語訳の補完を進めています。

- 開発対象: [`compat/dsh-0.2.0-rc.2`](https://github.com/BAILUO2153/dsh-locale-ja/tree/compat/dsh-0.2.0-rc.2)、パッケージ `0.3.0-compat.2`
- Desktop `0.2.0-rc.2` へのインストール成功が利用者から報告されています
- 日本語対応はまだ部分的です。言語切り替え・再起動後の保持・削除と再追加・画面全体の表示は、実機 GUI での確認が引き続き必要です
- この fork の互換性プレビューは npm / GitHub Release には公開していません。既存の npm 公開版はこのプレビューではありません

## 機能

DSH に標準で用意されている **中文**・**English** に加えて、**日本語** を選べるようにします。

- **日本語表示**：42 の名前空間に 1,294 件の UI 文字列を収録しています。未翻訳の項目は英語で表示されます。
- **日本語フォント**：日本語の表示中は、OS 標準の日本語システムフォントを適用します。
- **選択の保持**：選んだ言語は DSH の設定として保存され、ページを再読み込みしても維持されます。
- **削除時の動作**：プラグインを削除すると、追加した辞書・フォント・言語の選択肢を取り除きます。DSH に保存された言語設定は残ります。

## 対応バージョン

- DSH `0.2.0-rc.2` を対象とするローカル互換性プレビュー（`0.3.0-compat.2`）
- 既存の42名前空間で502件の未翻訳キーは英語へフォールバックします。新しい名前空間も日本語対応を保証しません
- Electron のネイティブメニュー・更新ダイアログは対象外です
- 型・ビルド・言語サービスのテストは実施済みです。Desktop のインストール成功報告はありますが、切り替え・永続化を含む実機 GUI の受け入れ確認と E2E は未完了です
- [Desktop のインストール・受け入れ確認](docs/desktop-compatibility.md) を参照してください

## インストール

Node.js 24 と pnpm 12 を用意し、互換性ブランチからローカルパッケージを作成します。

```bash
git clone --branch compat/dsh-0.2.0-rc.2 --single-branch https://github.com/BAILUO2153/dsh-locale-ja.git
cd dsh-locale-ja
pnpm install --frozen-lockfile
pnpm typecheck && pnpm lint && pnpm format:check && pnpm build && pnpm test
pnpm pack
```

生成された `fang2hou-dsh-locale-ja-0.3.0-compat.2.tgz` の絶対パスを、Desktop の **Plugins → Add plugin** に指定してください。すでに受け取った同バージョンのテスト用パッケージも利用できます。npm の既存公開版と混同しないでください。

詳しくは [Desktop のインストール・受け入れ確認](docs/desktop-compatibility.md) を参照してください。次のコマンドは **Web 用** で、Desktop プロファイルには適用されません。

```bash
dsh plugin --profile web add /absolute/path/fang2hou-dsh-locale-ja-0.3.0-compat.2.tgz
dsh web
```

削除する場合は次を実行します。

```bash
dsh plugin --profile web remove @fang2hou/dsh-locale-ja
```

## 使い方

1. DSH の **Settings → General → Language**（**設定 → 一般 → 言語**）を開きます。
2. **日本語** を選択すると、UI の表示言語とフォントが切り替わります。

選択内容は DSH に保存され、ページを再読み込みしても維持されます。同じ DSH ホストに接続する別のブラウザーにも適用されます。中文や English にはいつでも切り替えられます。

日本語を選択したままプラグインを削除すると、表示は DSH が解決する対応済みのシステム／ブラウザー言語に戻ります（英語環境では English）。保存済みの日本語設定は残るため、そのまま再インストールすると日本語表示に戻ります。

## 開発

ビルドと検証の手順は [DEVELOPMENT.md](./DEVELOPMENT.md) を、設計と互換性に関する判断は [ARCHITECTURE.md](./ARCHITECTURE.md) および [ADR](./docs/adr/) を参照してください。

```bash
mise run check   # 型チェック + lint + format-check + build + test
```

## ライセンス

[MIT](./LICENSE)
