import references from "./libs/style-dicitionary/__generated__/references.json";
import typographyUtils from "./libs/style-dicitionary/__generated__/typography.json" with { type: "json" };

import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const SPECIAL_COLORS = {
  current: "currentColor",
  inherit: "inherit",
  transparent: "transparent",
};

const { semantic, color, ...theme } = references;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(typographyUtils);
    }),
  ],
};

export default config;
