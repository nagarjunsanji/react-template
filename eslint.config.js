// eslint.config.js

import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import eslintImport from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPrettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    js.configs.recommended,
    prettierConfig, // Disables rules that conflict with Prettier
    {
        ignores: ["node_modules/", "dist/", "build/"], // Ignore compiled files
    },
    {
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: "./tsconfig.json",
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            react,
            "react-hooks": reactHooks,
            "jsx-a11y": jsxA11y,
            import: eslintImport,
            prettier: eslintPrettier,
        },
        rules: {
            // ✅ TypeScript Rules
            "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-explicit-any": "warn",

            // ✅ React Rules
            "react/jsx-uses-react": "off", // Not needed in React 17+
            "react/react-in-jsx-scope": "off", // Not needed in React 17+
            "react/prop-types": "off", // Not needed with TypeScript
            "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],

            // ✅ React Hooks
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // ✅ Redux-Specific Rules
            "no-param-reassign": ["error", { props: true }], // Avoid state mutation

            // ✅ Import Rules
            "import/order": [
                "warn",
                {
                    groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                    "newlines-between": "always",
                },
            ],
            "import/no-unresolved": "error",
            "import/named": "error",
            "import/no-duplicates": "warn",

            // ✅ Accessibility (JSX-A11y)
            "jsx-a11y/alt-text": "warn",
            "jsx-a11y/anchor-is-valid": "warn",

            // ✅ Prettier
            "prettier/prettier": ["error", {}],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
