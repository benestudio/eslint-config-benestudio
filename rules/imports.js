module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/default': 'error',
    'import/extensions': [
      'error',
      'never',
      ['png', 'scss', 'json', 'jpg', 'tsx', 'ts'].reduce(
        (acc, k) => ({ ...acc, [k]: 'always' }),
        {}
      ),
    ],
    'import/first': 'error',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config

          // overwrite patterns:
          '**/__stories__/*.story.js',
          '**/scripts/*.js',
          '**/test/**/*.js',
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/prefer-default-export': 'off',

    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
  },
  settings: {
    'import/core-modules': [],
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
