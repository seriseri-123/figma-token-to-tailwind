import StyleDictionary, { Config } from "style-dictionary";
import { formats } from "./helpers/formats";

const BUILD_PATH = "__generated__/";

/**
 * Configuration to process token files
 */
const config: Config = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: BUILD_PATH,
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
        },
      ],
    },
    references: {
      transformGroup: "js",
      buildPath: BUILD_PATH,
      files: [
        {
          destination: "references.json",
          format: "json/nested",
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
        },
      ],
    },
    typography: {
      transforms: ["attribute/cti", "name/kebab"],
      buildPath: BUILD_PATH,
      files: [
        {
          format: "typography/custom",
          filter: (token) => token.$type === "typography",
          destination: "typography.json",
        },
      ],
      options: {
        showFileHeader: false,
        outputReferences: true,
      },
    },
  },
  hooks: {
    formats,
  },
};

// Build all the platforms
const sd = new StyleDictionary(config);
sd.buildAllPlatforms();

export default config;
