# Figma Token to Tailwind

下記の記事 / スライド用に作った、**Figma のデザイントークン(JSON)を Tailwind CSS のクラスとして使う**ためのデモリポジトリです。

- 記事: [「shadcn/ui × 自社デザインシステム」実践ガイド──FigmaトークンからTailwindまでの連携術](https://zenn.dev/peoplex_blog/articles/8df87dab4776d2)
- スライド: [「shadcn/ui × 自社デザインシステム」実践ガイド──FigmaトークンからTailwindまでの連携術](https://speakerdeck.com/seriseri/ui-x-zi-she-dezainsisutemu-shi-jian-gaido-figmatokunkaratailwindmadenolian-xi-shu)

## このリポジトリでわかること

- **Figma → JSON(Design Tokens Manager 等) → Style Dictionary → 生成物**の流れ
- 生成したトークンを **`tailwind.config.ts` に取り込み**、`bg-*` / `text-*` などのクラスとして使う方法
- タイポグラフィを **`typography-*` のユーティリティ**としてまとめて使う方法

## セットアップ / 動かし方

このリポジトリは「Next.js アプリ」と「Style Dictionary(トークン変換)」が別パッケージです。両方 install します。

```bash
# 1) Next.js 側
npm install

# 2) Style Dictionary 側
cd libs/style-dicitionary
npm install
```

トークン生成:

```bash
cd libs/style-dicitionary
npm run build
```

アプリ起動:

```bash
# リポジトリルートで
npm run dev
```

`http://localhost:3000` を開くと、トークンを使ったサンプル UI（`src/app/content.tsx`）が表示されます。

## どう繋がっているか（最短で理解する）

### 1) 入力: Figma から出した JSON

- 配置先: `libs/style-dicitionary/tokens/**/*.json`

### 2) 変換: Style Dictionary

- 設定: `libs/style-dicitionary/style-dictionary.config.ts`
- 出力先: `libs/style-dicitionary/__generated__/`
  - `references.json`: Tailwind から読み込む用（参照解決済み）
  - `variables.css`: CSS カスタムプロパティ
  - `typography.json`: `typography-*` ユーティリティ（Tailwind plugin で注入）

### 3) 利用: Tailwind / アプリ側

- `tailwind.config.ts` が `references.json` と `typography.json` を読み込んで、クラスを生やしています
  - 例: `bg-primary`, `bg-light`, `text-l-main`, `text-success` など
  - 例: `typography-h1`, `typography-button`, `typography-body-pc` など
- `src/app/globals.css` が `variables.css` を `@import` しており、**タイポユーティリティが参照する CSS 変数**（`--typography-*`）を供給しています

## トークン更新フロー（記事の手順をこのリポジトリで再現）

1. Figma 上でデザイントークンを更新
2. JSON をエクスポートして `libs/style-dicitionary/tokens/` を更新
3. `cd libs/style-dicitionary && npm run build`
4. `npm run dev` を起動中なら、表示をリロード（必要なら再起動）

## ディレクトリ構成

```
.
├── src/
│   ├── app/                 # Next.js(App Router)
│   └── components/ui/       # shadcn/ui のコンポーネント（必要に応じてカスタム）
├── libs/
│   └── style-dicitionary/   # トークン変換（Style Dictionary）
│       ├── tokens/          # Figma から出した JSON
│       ├── __generated__/   # 生成物（Tailwind / CSS から参照）
│       └── style-dictionary.config.ts
└── tailwind.config.ts       # 生成トークンを Tailwind に取り込む設定
```

## 参考

- `libs/style-dicitionary/README.md`（トークン変換側の詳細）
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Tailwind CSS](https://tailwindcss.com/docs)
