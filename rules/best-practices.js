module.exports = {
  rules: {
    'no-array-constructor': 2,
    'no-case-declarations': 'off',
    'no-catch-shadow': 2,
    'no-console': 'warn',
    'no-const-assign': 2,
    'no-continue': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-else-return': 2,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-floating-decimal': 2,
    'no-global-assign': [2, { exceptions: ['object'] }],
    'no-lonely-if': 2,
    'no-loops/no-loops': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-nested-ternary': 2,
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': 0,
    'no-this-before-super': 2,
    'no-trailing-spaces': [2, { skipBlankLines: false }],
    'no-undef-init': 2,
    'no-underscore-dangle': [
      'error',
      { allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] },
    ],
    'no-unneeded-ternary': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': 2,
    'no-use-before-define': [2, 'nofunc'],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': 2,

    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-promise-reject-errors': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,

    radix: 2,
  },
};
