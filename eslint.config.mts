import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["build", "node_mobules"]),
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,mts,cts}"],
    languageOptions: { globals: globals.browser },
    plugins: { "unused-imports": unusedImports, import: importPlugin },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal", "sibling", "parent", "index"],
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  tseslint.configs.recommended,
]);
