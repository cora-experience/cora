import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "_next/**",
    "404/**",
    "living/**",
    "og/**",
    "projects/**",
    "stays/**",
    "wears/**",
    "__next.*",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
