const { error } = require('console');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
module.exports = [
  eslintPluginPrettierRecommended,
  {
    ignores: ['node_modules/', 'dist/', 'build/'], // Ignore unnecessary folders
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'), // Use TypeScript parser
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'off',
      'no-console': 'warn',
      'no-unused-expression': 'error',
      'prefer-const': 'error',
      'no-undef': 'error',
    },
    globals: {
      process: 'readonly',
    },
  },
];
