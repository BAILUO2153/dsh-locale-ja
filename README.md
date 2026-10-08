# DeepSeek Harness 日本語ローカライズ

DeepSeek Harness（DSH）の Desktop メイン UI・Web UI に日本語を追加するプラグインです。中文・English・日本語を切り替えて利用できます。

本仓库由 **BAILUO2153** 在 [fang2hou/dsh-locale-ja](https://github.com/fang2hou/dsh-locale-ja) 基础上维护，补充日语翻译并适配 DSH `0.2.0-rc.2`。保留原作者链接、版权声明及 MIT 协议；本 fork 的问题请在本仓库反馈。

![日本語表示のプレビュー：メイン画面](docs/images/japanese-home.png)

## インストール

**`0.3.0` はリリース準備中です。まだ `v0.3.0` タグ・GitHub Release・配布用アセットは公開していません。** npm の既存 `@fang2hou/dsh-locale-ja` は原作者の公開版で、この fork の配布物とは異なります。

### 推奨予定：Release の `.tgz`

公開後は [この fork の Releases](https://github.com/BAILUO2153/dsh-locale-ja/releases) から `fang2hou-dsh-locale-ja-0.3.0.tgz` と SHA-256 チェックサムを取得してください。GitHub の自動生成「Source code」アーカイブではなく、添付された `.tgz` を使用します。

1. DSH Desktop のバージョンが `0.2.0-rc.2` であることを確認します。
2. **Plugins → Add plugin**（プラグイン → プラグインを追加）に `.tgz` の絶対パスを入力し、内容を確認してインストール・有効化します。
3. **Settings → General → Language**（設定 → 一般 → 言語）で **日本語** を選びます。

旧版を導入済みの場合は、同じパッケージを二重に追加せず、プラグイン管理画面の削除・再インストール手順を利用してください。詳細は [Desktop の導入・確認手順](docs/desktop-compatibility.md) を参照してください。

Web プロファイルでの例（公開後にダウンロードしたファイルを指定）：

```bash
dsh plugin --profile web add /absolute/path/fang2hou-dsh-locale-ja-0.3.0.tgz
dsh web
```

### Git 指定：公開・実機検証待ち

将来の指定先は以下を予定しています。**タグは未作成で、実際の Desktop 同梱パッケージマネージャーによる導入も未検証のため、現時点では使用しないでください。**

```text
https://github.com/BAILUO2153/dsh-locale-ja.git#v0.3.0
```

Git 配布に備えてビルド済み `lib/` を収録し、CI でソースとの一致を検査します。推奨経路は引き続き `.tgz` です。

## 使い方

設定画面で **日本語** を選択すると、対応する UI と日本語システムフォントに切り替わります。言語は DSH の設定として保存され、同じホストに接続するブラウザーにも適用されます。中文・English にはいつでも戻せます。

![日本語表示のプレビュー：一般設定と言語選択](docs/images/japanese-settings.png)

画像は日本語表示のプレビューです。画像だけで `0.3.0` 配布物の受け入れ検証済みとは判断できません。

日本語を選んだままプラグインを削除すると、追加した辞書・フォント・言語の選択肢が解除されます。保存済みの `ja` 設定は残り、表示は DSH が解決する対応言語に戻ります。再インストール後は保存された日本語設定が再適用されます。

## 対応範囲・検証状況

- 対象：DSH `0.2.0-rc.2` の共有 Web レンダラー（Desktop メイン UI と Web UI）
- 収録：**52 名前空間・2,246 辞書項目**。互換性候補版 `0.3.0-compat.4` の翻訳を引き継ぎ、従来の 1,907 項目を保持しています
- 調査済みで未翻訳の範囲：**6 名前空間・369 項目**。入力用の 6 コマンドトークンは互換性のため英語を保持しています
- 未対応：Electron のネイティブメニュー・更新画面、外部サイトや埋め込みアカウントページ、画像内文字、辞書を使用しない UI、追加プラグインの未収録文字列
- 未翻訳の辞書項目は英語にフォールバックします。DSH 全体の完全日本語化は保証していません
- 候補版についてユーザーからテスト完了の報告がありますが、項目別の記録は未取得です。正式版として再ビルドした `.tgz`、Git 導入、再起動・削除・再導入を含む受け入れ確認は別途必要です

[翻訳範囲と残りの対象](docs/translation-batch3.md) / [互換性と確認チェックリスト](docs/desktop-compatibility.md)

## フィードバック・開発

誤訳・表示崩れ・この fork の導入問題は [この fork の Issues](https://github.com/BAILUO2153/dsh-locale-ja/issues) に、DSH とプラグインのバージョン、再現手順を添えて報告してください。スクリーンショットの個人情報や認証情報は除いてください。

開発・検証は [DEVELOPMENT.md](DEVELOPMENT.md)、設計は [ARCHITECTURE.md](ARCHITECTURE.md) と [ADR](docs/adr/) を参照してください。

```bash
pnpm install --frozen-lockfile
mise run check
```

## 原作者・ライセンス

原作者：**fang2hou** — [オリジナルの dsh-locale-ja](https://github.com/fang2hou/dsh-locale-ja)。元の実装と日本語翻訳に感謝します。

[MIT License](LICENSE) — `Copyright (c) 2026 fang2hou` を含む原文を変更せず保持しています。
