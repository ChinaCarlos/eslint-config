const {appTsConfig, appPath} = require('../utils/paths')

// TypeScript规则配置
module.exports = {
  extends: ['./javascript'],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: appTsConfig,
        tsconfigRootDir: appPath,
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // ERROR 级别规则 - 类型检查
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        // ERROR 级别规则 - 代码质量
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',

        // ERROR 级别规则 - 代码风格
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],

        // WARNING 级别规则 - 命名规范
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
          },
          {
            selector: 'typeAlias',
            format: ['PascalCase'],
          },
          {
            selector: 'enum',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'class',
            format: ['PascalCase'],
          },
          {
            selector: 'method',
            format: ['camelCase'],
          },
          {
            selector: 'property',
            format: ['camelCase', 'UPPER_CASE', 'camelCase', 'snake_case'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
          },
        ],

        // WARNING 级别规则 - 其他
        '@typescript-eslint/explicit-member-accessibility': [
          'warn',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'no-public',
            },
          },
        ],
        '@typescript-eslint/ban-types': [
          'warn',
          {
            types: {
              Object: {message: 'Use object instead'},
              Function: {message: 'Use specific function type instead'},
            },
          },
        ],
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        '@typescript-eslint/prefer-enum-initializers': 'warn',
        '@typescript-eslint/prefer-literal-enum-member': 'warn',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/unified-signatures': 'warn',

        // OFF 级别规则
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}
