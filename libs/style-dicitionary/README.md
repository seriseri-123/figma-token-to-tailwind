# Style Dictionary & Tailwind CSS 連携

## 概要

Style Dictionaryを使用してFigmaのデザイントークンを変換し、Tailwind CSSで利用できるようにするパッケージです。これによりデザインシステムの一貫性を維持しながら効率的な開発が可能になります。

## 主な機能

- Figmaデザイントークンの一元管理
- Tailwind CSSで使用可能な形式への変換
- カスタムTailwindクラスの自動生成

## 使用方法

### 1. デザイントークンの配置

Figmaからエクスポートしたトークンファイルを`tokens/`ディレクトリに配置します。

```json
// 例: tokens/token.json
{
  "color": {
    "primary": { "value": "#0455c5" },
    "secondary": { "value": "#8D74AC" },
    "error": { "value": "#eb0000" }
  }
}
```

### 2. トークンのビルド

以下のコマンドでトークンをTailwind CSS互換の形式に変換します：

```bash
yarn build
```

これにより`__generated__/references.json`、`__generated__/variables.css`、`__generated__/typography.json`ファイルが生成されます。

### 3. Tailwindでの利用

`tailwind.config.ts`ファイルで生成されたファイルをimportして使用します：

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
    textColor: () => ({
      ...semantic.text,
      ...color,
    }),
    backgroundColor: () => ({
      ...semantic.background,
      ...color,
    }),
  },
};

export default config;
```

## トークン更新ワークフロー

1. Figmaでトークンを更新
2. トークンをエクスポートして`tokens`ディレクトリ配下に設置
3. `npm run build`を実行
4. アプリケーションを再起動

## ディレクトリ構造

```
libs/style-dictionary/
├── __generated__/       # 生成されたトークンファイル
│   ├── references.json  # Tailwindで使用するJSON形式
|   ├── typography.json
│   └── variables.css    # CSSカスタムプロパティ
├── tokens/
│   └── figmaから出力されたJSONファイル       # Figmaからのトークン定義
├── style-dictionary.config.mjs  # Style Dictionary設定
├── package.json
└── README.md
```

## 参考リンク

- [Style Dictionary公式](https://amzn.github.io/style-dictionary/)
- [Tailwind CSS公式](https://tailwindcss.com/docs)

この運用により、Figmaとフロントエンドのデザインの一貫性が保たれます。
