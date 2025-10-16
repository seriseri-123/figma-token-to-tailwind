# Figma Token to Tailwind

Figma のデザイントークンを Tailwind CSS クラスにマッピングするためのデモプロジェクトです。

## 概要

このプロジェクトでは、以下のワークフローを実装しています:

1. **Figma トークンのエクスポート** - Design Tokens Manager プラグインで JSON に出力
2. **Style Dictionary による変換** - 参照解決と Tailwind 用形式への変換
3. **Tailwind Config への取り込み** - カスタムクラスの自動生成
4. **shadcn/ui のカスタマイズ** - ブランドに合わせたコンポーネント実装

## 技術スタック

- **Next.js** - React フレームワーク
- **Tailwind CSS** - ユーティリティファースト CSS
- **shadcn/ui** - Radix UI + Tailwind のコンポーネントライブラリ
- **Style Dictionary** - デザイントークン変換ツール
- **TypeScript** - 型安全な開発環境

## プロジェクト構成

```
├── src/
│   ├── components/ui/     # shadcn/ui カスタムコンポーネント
│   └── app/              # Next.js App Router
├── libs/
│   └── style-dicitionary/ # デザイントークン管理(詳細はREADME参照)
│       ├── tokens/       # Figmaからのトークンファイル
│       ├── __generated__/ # Style Dictionary出力ファイル
│       └── style-dictionary.config.ts
└── tailwind.config.ts    # カスタムトークンを含むTailwind設定
```

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. デザイントークンのビルド

```bash
cd libs/style-dicitionary
npm run build
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でアプリケーションを確認できます。

## デザイントークン管理

デザイントークンの詳細な管理方法については、[libs/style-dicitionary/README.md](./libs/style-dicitionary/README.md) を参照してください。

### トークン更新ワークフロー

1. Figma 上でデザイントークンを更新
2. Design Tokens Manager プラグインでエクスポート
3. `libs/style-dicitionary/tokens/` に配置
4. `cd libs/style-dicitionary && npm run build` を実行
5. アプリケーションを再起動

## 特徴

### 🎨 デザインシステムとの連携

- Figma の変数をそのまま Tailwind クラスとして利用
- 参照関係も含めて自動解決
- タイポグラフィの一括スタイル適用

### 🔧 柔軟なカスタマイズ

- shadcn/ui の利点(アクセシビリティ・キーボード操作)を維持
- ブランドに合わせたスタイルの自由な変更
- 不要な variant の削除も可能

## Learn More

- [shadcn/ui Documentation](https://ui.shadcn.com/) - コンポーネントライブラリの詳細
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - デザイントークン変換ツール
- [Tailwind CSS](https://tailwindcss.com/docs) - ユーティリティファースト CSS
