const {appTsConfig, appPath} = require('../utils/paths')
// TypeScript规则配置
module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        project: appTsConfig,
        alwaysTryTypes: true,
      },
    },
  },
  extends: ['./javascript'],
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: appTsConfig,
        tsconfigRootDir: appPath,
      },
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // TypeScript特定规则
        '@typescript-eslint/explicit-function-return-type': 'off', // 不要求显式返回类型
        '@typescript-eslint/no-explicit-any': 'off', // 允许使用any类型

        '@typescript-eslint/no-unused-vars': 'error', // 禁止未使用的变量
        '@typescript-eslint/no-use-before-define': 'error', // 禁止在定义前使用
        '@typescript-eslint/no-shadow': 'error', // 禁止变量声明覆盖
        '@typescript-eslint/type-annotation-spacing': 'error', // 类型注解空格
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ], // 使用interface定义类型
        '@typescript-eslint/no-empty-interface': 'error', // 禁止空接口
        '@typescript-eslint/ban-ts-comment': 'warn', // 禁止@ts-ignore等注释
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
            modifiers: ['exported'],
          },
          {
            selector: 'function',
            format: ['camelCase'],
            modifiers: ['global'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['UPPER_CASE'],
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            // 接口成员分隔符样式
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
      },
    },
  ],
}
