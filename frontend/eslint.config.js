import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";

export default ts.config(
  { ignores: ["dist/", "node_modules/"] },

  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],

  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
    rules: {
      // TypeScript handles undefined-variable checking; no-undef doesn't
      // understand TS globals (DOM types, setTimeout, etc.)
      "no-undef": "off",
    },
  },

  // Disable rules that conflict with Prettier (must be last)
  prettier,
  ...svelte.configs["flat/prettier"],
);
