module.exports = {
  root: true,

  env: {
    browser: true,
  },

  globals: {
    ethereum: 'readonly',
  },

  extends: ['@metamask/eslint-config', '@metamask/eslint-config-nodejs'],

  overrides: [
    {
      files: ['src/*.js'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['src/request.js'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js', 'dist'],
};
