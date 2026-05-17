import { defineConfig } from "eslint/config";

export default defineConfig({
  ignores: ["dist/**", "out/**", "node_modules/**"],
  languageOptions: {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      project: "./tsconfig.json",
    },
  },
  plugins: {
    react: "eslint-plugin-react",
    "@typescript-eslint": "@typescript-eslint/eslint-plugin",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
  },
});
