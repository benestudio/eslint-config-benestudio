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
      rules: {
        'no-console': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'padded-blocks': 'off',
      },
    },
  ],
  parser: 'babel-eslint',
  plugins: [
    'import',
    'markdown',
    'import',
    'jest',
    'jsx-a11y',
    'no-loops',
    'react',
    'eslint-plugin-import-order-alphabetical',
  ],
};
