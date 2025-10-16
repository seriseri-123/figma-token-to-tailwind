import { FormatFn } from "style-dictionary/types";

/**
 * Custom formatter for typography tokens
 */
export const typographyFormatter: FormatFn = ({ dictionary }) => {
  const classEntries = dictionary.allTokens.map((token) => {
    const { letterSpacing, fontWeight, fontSize, lineHeight, fontFamily } =
      token.$value;

    const formattedFontFamily = fontFamily.includes(" ")
      ? `'${fontFamily}'`
      : fontFamily;

    return [
      `.${token.name}`,
      {
        font: `var(--${token.name}) /* ${fontWeight} ${fontSize}/${lineHeight} ${formattedFontFamily} */`,
        ...(letterSpacing
          ? {
              "letter-spacing":
                letterSpacing === "0%" ? "initial" : letterSpacing.toString(),
            }
          : {}),
      },
    ];
  });

  return JSON.stringify(Object.fromEntries(classEntries), null, 2) + "\n";
};

export const formats = {
  "typography/custom": typographyFormatter,
};
