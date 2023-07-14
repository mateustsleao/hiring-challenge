module.exports = {
  "root": true,
  "env": {
    "es2021": true,
    "node": true,
  },
  "extends": "standard-with-typescript",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "rules": {
    "@typescript-eslint/no-misused-promises": "off"
  },
  'ignorePatterns': [
    '.eslintrc.js',
    'jest-unit-config.js',
    'jest-integration-config.js',
    'jest.config.js',
  ],
}
