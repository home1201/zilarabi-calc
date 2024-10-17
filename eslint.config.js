import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import vueParser from "vue-eslint-parser";

export default [
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...ts.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
];
