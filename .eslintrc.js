module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true, // ?
    jest: true, // ?
    mocha: true, // ?
  },
  extends: [
    'airbnb-base',
  ],
  globals: {},
  parserOptions: {
    ecmaVersion: 2021,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['prefer-arrow', 'import', 'unused-imports'], // ?
  root: true, //
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'consistent-return': 'off',
    'default-case': 'off',
    'global-require': 'off',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    // https://eslint.org/docs/rules/indent#enforce-consistent-indentation-indent
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ignoredNodes: [
          'TemplateLiteral',
          'MemberExpression',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['warn', 200],
    'no-console': 'warn',
    'no-debugger': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_'},
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {multiline: true, minProperties: 5},
        ObjectPattern: {multiline: true},
        ImportDeclaration: 'never',
        ExportDeclaration: {multiline: true, minProperties: 5},
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'prefer-destructuring': ['error', {object: true, array: false}],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'space-before-function-paren': ['error', 'always'],
  },
};
