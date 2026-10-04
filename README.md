<div align="center">

<img width="647" height="385" alt="DSH の日本語インターフェースの表示例" src="https://github.com/user-attachments/assets/ee9a6b90-52a5-4c23-b6a9-4aefb7e8247f" />

# dsh-locale-ja

DeepSeek Harness（DSH）の Web UI に **日本語** を追加するプラグイン

</div>

## この fork の現在の開発状況

このリポジトリは [fang2hou/dsh-locale-ja](https://github.com/fang2hou/dsh-locale-ja) を元にした MIT ライセンスの fork です。原作者の著作権表示とライセンスを維持しています。

Desktop / Web `0.2.0-rc.2` 向けの開発は [`compat/dsh-0.2.0-rc.2` ブランチ](https://github.com/BAILUO2153/dsh-locale-ja/tree/compat/dsh-0.2.0-rc.2) で進めています。現在のパッケージは `0.3.0-compat.2` です。main の実装はまだ旧 Web 版のままです。

- Desktop `0.2.0-rc.2` へのインストール成功が利用者から報告されています
- 42 名前空間に 1,294 件の日本語文字列を収録し、その範囲で残る 502 件は英語にフォールバックします。新しい名前空間やネイティブメニューなどを含む完全な日本語対応ではありません
- 型・lint・format・ビルド・言語サービスのテストは実施済みですが、実機での言語切り替え・再起動後の保持・削除と再追加・画面全体の確認は引き続き必要です
- この互換性版は npm 未公開です。以下の旧 Web 版の npm コマンドでは互換性版をインストールできません

### Desktop 互換性版の入手とインストール

Node.js 24 と pnpm 12 を用意して、互換性ブランチからパッケージを作成します。

```bash
git clone --branch compat/dsh-0.2.0-rc.2 --single-branch https://github.com/BAILUO2153/dsh-locale-ja.git
cd dsh-locale-ja
pnpm install --frozen-lockfile
pnpm typecheck && pnpm lint && pnpm format:check && pnpm build && pnpm test
pnpm pack
```

生成された `fang2hou-dsh-locale-ja-0.3.0-compat.2.tgz`（またはすでに受け取った同バージョンのテスト用パッケージ）を使用します。

1. パッケージを Desktop と同じコンピューターに保存します
2. DSH の **Plugins → Add plugin** を開き、パッケージ名／アドレス欄にファイルの絶対パスを入力します。引用符で囲まず、`~/` で省略しないでください
3. プレビューを確認してインストールし、プラグインを有効にします
4. **Settings → General → Language → 日本語** を選択します

`review.zip` やソースアーカイブはインストール用パッケージではありません。[詳しいインストール方法と確認項目](https://github.com/BAILUO2153/dsh-locale-ja/blob/compat/dsh-0.2.0-rc.2/docs/desktop-compatibility.md) を参照してください。

---

## 旧 Web 版の説明（main の実装）

以下は DSH `0.1.5-rc.2` 向けの従来の説明です。Desktop `0.2.0-rc.2` の導入には上記の互換性ブランチを使用してください。

## 機能

DSH に標準で用意されている **中文**・**English** に加えて、**日本語** を選べるようにします。

- **日本語表示**：42 の名前空間に 1,257 件の UI 文字列を収録しています。未翻訳の項目は英語で表示されます。
- **日本語フォント**：日本語の表示中は、OS 標準の日本語システムフォントを適用します。
- **選択の保持**：選んだ言語は DSH の設定として保存され、ページを再読み込みしても維持されます。
- **削除時の動作**：プラグインを削除すると、追加した辞書・フォント・言語の選択肢を取り除きます。DSH に保存された言語設定は残ります。

## 対応バージョン

- DSH `0.1.5-rc.2` の `web` プロファイル（ブラウザー UI）

## インストール

```bash
dsh plugin --profile web add @fang2hou/dsh-locale-ja
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

日本語を選択したままプラグインを削除すると、表示は英語に戻ります。保存済みの日本語設定は残るため、そのまま再インストールすると日本語表示に戻ります。

## 開発

ビルドと検証の手順は [DEVELOPMENT.md](./DEVELOPMENT.md) を、設計と互換性に関する判断は [ARCHITECTURE.md](./ARCHITECTURE.md) および [ADR](./docs/adr/) を参照してください。

```bash
mise run check   # 型チェック + lint + format-check + build + test
```

## ライセンス

[MIT](./LICENSE)
