import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@", "./src"],
            ["@components", "./src/app/components"],
            ["@lib", "./src/app/lib"],
            ["@hooks", "./src/app/hooks"],
            ["@types", "./src/app/types"],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      },
    },
  },
];

export default eslintConfig;
