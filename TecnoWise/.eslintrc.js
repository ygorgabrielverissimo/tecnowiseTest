module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    ecmaVersion: 2018,
    sourceType: 'module',
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'promise',
    'import',
    'unused-imports',
    'react-hooks',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  ignorePatterns: [
    'node_modules/',
    'e2e',
    '__mocks__',
    '__mocks__',
    'coverage',
    '_templates',
    '.eslintrc.js',
    '__tests__/'
  ],
  rules: {
    // @TODO: Remover essa regra assim que for feito o fix na lib do CheckBox
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-unused-vars': 0, //'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': "error",
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'sonarjs/no-nested-template-literals': 0,
    'import/extensions': 0,
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'class-methods-use-this': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'array-callback-return': 0,
    'react/jsx-props-no-spreading': 0,
    'no-duplicate-imports': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'react/state-in-constructor': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    },
    react: {
      version: 'detect',
    },
  },
};




