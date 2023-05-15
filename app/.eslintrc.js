module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.stories.tsx"],
      rules: {
        "no-console": "warn",
        "max-len": [
          "error",
          {
            code: 100,
          },
        ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["*.test.ts", "*.mock.ts"],
      rules: {
        "max-lines": "off",
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {},
};
