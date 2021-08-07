module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'next',
    'next/core-web-vitals'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json',
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  ignorePatterns: ['*.js'],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
