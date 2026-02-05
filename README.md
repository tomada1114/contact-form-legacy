# contact-form-legacy

「作って学ぶ Claude CodeによるAI駆動アプリ開発入門」第6章のハンズオン用サンプルコードです。

## シナリオ

> 退職した先輩が作った社内用問い合わせフォームを引き継いだ。来月までに機能追加が必要だが、コードが読みにくい。

このコードは**意図的に「改善の余地がある」状態**で書かれています。第6章のハンズオンで、Claude Codeを使って段階的に改善していきます。

## 改善ポイント（ネタバレ注意）

<details>
<summary>クリックして表示</summary>

- 1ファイルに全部詰め込み → コンポーネント分割
- 型なし（JavaScript）→ TypeScript化
- バリデーションがベタ書き → 関数化・ライブラリ活用
- テストなし → テスト追加
- ドキュメントなし → README・JSDoc追加

</details>

## セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/tomada1114/contact-form-legacy.git
cd contact-form-legacy

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:5173 を開くと、フォームが表示されます。

## 機能

- 名前・メールアドレス・お問い合わせ内容の入力
- 入力バリデーション
- 確認画面
- 送信処理（モック）

## 技術スタック

- React 19
- Vite 7

## ライセンス

MIT
