module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'xo',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-import-helpers'],
  rules: {
    'no-useless-constructor': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'return', 'interface', 'type', 'multiline-const'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@core/',
          '/^@config/',
          '/^@application/',
          '/^@domain/',
          '/^@infra/',
          '/^@test/',
          '/^@error/',
          '/^@client/',
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        semi: true,
        bracketSpacing: true,
      },
    ],
  },
};
