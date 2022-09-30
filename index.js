module.exports = {
  extends: [
    './rules/react',
    './rules/prettier',
    './rules/best-practices',
    './rules/node',
    './rules/imports',
    './rules/tests.js',
    './rules/spacing',
    './rules/accessibility.js',
  ].map(require.resolve),
  globals: {
    document: 'readonly',
    FormData: 'readonly',
    window: 'readonly',
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      rules: {
        'no-console': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'padded-blocks': 'off',
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: [
    'import',
    'markdown',
    'import',
    'jest',
    'jsx-a11y',
    'no-loops',
    'react',
  ],
};
