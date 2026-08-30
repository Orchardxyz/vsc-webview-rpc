import oryz from "@oryz/eslint-config";
import globals from "globals";

export default oryz(
  {
    allowDefaultProject: ["*.config.ts", "*.config.mjs"]
  },
  {
    ignores: ["dist/**", "coverage/**"]
  },
  {
    files: ["*.mjs"],
    languageOptions: {
      globals: { ...globals.node }
    }
  }
);
