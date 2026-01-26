# Style Dictionary & Tailwind CSS 連携

## 概要

Style Dictionary を使用して Figma のデザイントークン(JSON)を変換し、Next.js/Tailwind 側で使える形にするためのパッケージです。

## 主な機能

- Figmaデザイントークンの一元管理
- Tailwind CSS で使用可能な形式への変換（参照解決）
- カスタムTailwindクラスの自動生成

## 使用方法

### 1. デザイントークンの配置

Figmaからエクスポートしたトークンファイルを`tokens/`ディレクトリに配置します。

（このリポジトリでは例として `Primitive.Mode 1.tokens.json` / `Semantic.Mode 1.tokens.json` / `text.styles.tokens.json` が入っています）

### 2. トークンのビルド

以下のコマンドでトークンをTailwind CSS互換の形式に変換します：

```bash
npm run build
```

これにより `__generated__/` 配下に次のファイルが生成されます。

- `__generated__/references.json`: Tailwind が読む JSON（参照解決済み）
- `__generated__/variables.css`: CSS カスタムプロパティ（例: `--color-*`, `--semantic-*`, `--typography-*`）
- `__generated__/typography.json`: `typography-*` ユーティリティ（例: `typography-h1` / `typography-body-pc`。Tailwind plugin で注入）

### 3. Tailwindでの利用

リポジトリルートの `tailwind.config.ts` で生成物を import して利用しています。

```typescript
import references from "./libs/style-dicitionary/__generated__/references.json";
import typographyUtils from "./libs/style-dicitionary/__generated__/typography.json" with { type: "json" };

const { semantic, color, ...theme } = references;

const config: Config = {
  ...
  theme: {
    ...theme,
    colors: {
      ...color,
      ...SPECIAL_COLORS,
    },
    textColor: {
      ...color,
      ...semantic.text,
    },
    backgroundColor: {
      ...color,
      ...semantic.background,
    },
  },
};

export default config;
```

また、タイポグラフィユーティリティ（`typography-*`）は `typography.json` を Tailwind の plugin で注入しています。

CSS 変数（`variables.css`）は `src/app/globals.css` から `@import` されており、**`typography-*` が参照する `--typography-*` を供給**します。

## トークン更新ワークフロー

1. Figmaでトークンを更新
2. トークンをエクスポートして`tokens`ディレクトリ配下に設置
3. `npm run build`を実行
4. アプリケーションを再起動

## ディレクトリ構造

```
libs/style-dicitionary/
├── __generated__/       # 生成されたトークンファイル
│   ├── references.json  # Tailwindで使用するJSON形式
|   ├── typography.json
│   └── variables.css    # CSSカスタムプロパティ
├── tokens/
│   └── figmaから出力されたJSONファイル       # Figmaからのトークン定義
├── style-dictionary.config.ts   # Style Dictionary設定
├── package.json
└── README.md
```

※ このリポジトリではフォルダ名が `style-dicitionary` になっています（タイポですが、参照箇所も含めてこの名前で統一しています）。

## 参考リンク

- [Style Dictionary公式](https://amzn.github.io/style-dictionary/)
- [Tailwind CSS公式](https://tailwindcss.com/docs)

この運用により、Figmaとフロントエンドのデザインの一貫性が保たれます。
