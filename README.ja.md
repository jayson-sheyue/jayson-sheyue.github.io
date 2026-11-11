# Personal Craft & Utility Hub (`personal-site`)

[English](./README.md) | [日本語](./README.ja.md) | [中文](./README.zh-CN.md)

ビルド不要の純粋な ES Modules で構築された、スキーマ駆動のモジュラー型個人プロダクト・カタログ基盤です。デスクトップアプリ、Web ツール、CLI スクリプト、実験ノートを美しい Bento グリッドに統合し、一般ユーザー向けの「OS 別インストーラー直ダウンロード（`.dmg` / `.zip` / `.exe`）・Web 即時起動」と、開発者向けの「GitHub リポジトリ・ソース確認」の二重導線を提供します。

## 主な機能

- **アダプティブ Bento グリッド**: `featured`（2カラム注目枠）、`standard`（1カラム標準枠）、`compact`（コンパクト横長枠）を自由に組み合わせてもレイアウトが崩れません。
- **二重導線（Dual-Track CTA）**:
  - **一般ユーザー導線**: アクセス元の OS（`macOS` / `Windows`）を自動判別して最適なパッケージボタンを表示し、ドロップダウンで全形式を選択可能。
  - **開発者導線**: GitHub リポジトリや Releases ページへワンクリックで移動。
- **3タブ詳細ドロワー**: 各カードの「詳細・導入手順」から、プレビュー画面、導入ステップ、パッケージ一覧をスライド表示。
- **モジュール試作サンドボックス（`+ モジュール試作`）**: ブラウザ上で新しいツールの情報を入力してライブプレビューし、`catalog/modules.js` 用の設定コードを生成・コピーできます。
- **3言語対応（初期表示 `English`、`日本語`、`中文`）& テーマ切替（`ライト` / `ダーク`）**: 選択した言語とテーマは `localStorage` に保存されます。

## クイックスタート

`personal-site` ディレクトリで任意の静的 HTTP サーバーを起動します：

```bash
cd /Users/apple/Desktop/brandbuilding/personal-site
python3 -m http.server 4173
```

ブラウザで `http://localhost:4173` を開いてください。

## 新しいツールの追加方法

`catalog/modules.js` の `INITIAL_MODULES` 配列にオブジェクトを追加するか、画面右上の **「+ モジュール試作」** ドロワーからコードを生成して貼り付けます。
