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
        // ============ ERROR 级别规则 ============

        // 类型安全
        // 允许不安全的赋值操作
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // 允许访问 any 类型的属性
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // 允许调用 any 类型的函数
        '@typescript-eslint/no-unsafe-call': 'off',
        // 允许返回 any 类型的值
        '@typescript-eslint/no-unsafe-return': 'off',
        // 模板字符串表达式必须类型正确
        '@typescript-eslint/restrict-template-expressions': 'error',
        // 允许不处理 Promise 的返回值
        '@typescript-eslint/no-floating-promises': 'off',
        // 允许 await 非 Promise 值
        '@typescript-eslint/await-thenable': 'off',
        // 禁止不必要的类型断言
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        // 禁止不必要的条件判断
        '@typescript-eslint/no-unnecessary-condition': 'error',
        // 禁止不必要的布尔值比较
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        // switch 语句必须处理所有可能的枚举值
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        // 禁止空接口定义
        '@typescript-eslint/no-empty-interface': 'error',

        // 代码质量
        // 禁止未使用的变量
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        // 禁止变量名称遮蔽
        '@typescript-eslint/no-shadow': 'error',
        // 只允许抛出 Error 对象
        '@typescript-eslint/no-throw-literal': 'error',
        // 防止错误使用 Promise
        '@typescript-eslint/no-misused-promises': 'error',
        // 禁止使用非空断言操作符
        '@typescript-eslint/no-non-null-assertion': 'error',
        // 禁止隐式的 toString 调用
        '@typescript-eslint/no-base-to-string': 'error',
        // 禁止动态删除对象属性
        '@typescript-eslint/no-dynamic-delete': 'error',
        // 禁止使用 require 导入
        '@typescript-eslint/no-require-imports': 'error',
        // 优先使用可选链操作符
        '@typescript-eslint/prefer-optional-chain': 'error',
        // 优先使用空值合并操作符
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        // 禁止无效的 void 类型使用
        '@typescript-eslint/no-invalid-void-type': 'error',

        // 代码风格
        // 统一使用 import type 导入类型
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
          },
        ],
        // 统一使用 interface 定义类型
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        // 接口成员分隔符样式
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
        // 方法签名风格
        '@typescript-eslint/method-signature-style': ['error', 'property'],

        // ============ WARNING 级别规则 ============

        // 命名规范
        // 强制使用一致的命名规范
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

        // 类型使用
        // 禁止使用特定类型
        '@typescript-eslint/ban-types': [
          'warn',
          {
            types: {
              Object: {message: 'Use object instead'},
              Function: {message: 'Use specific function type instead'},
            },
          },
        ],
        // 警告使用 any 类型
        '@typescript-eslint/no-explicit-any': 'warn',

        // 最佳实践
        // 要求明确的成员可访问性
        '@typescript-eslint/explicit-member-accessibility': [
          'warn',
          {
            accessibility: 'explicit',
            overrides: {
              constructors: 'no-public',
            },
          },
        ],
        // 优先使用 @ts-expect-error 而不是 @ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': 'warn',
        // 枚举成员应该有初始值
        '@typescript-eslint/prefer-enum-initializers': 'warn',
        // 枚举成员应该是字面量
        '@typescript-eslint/prefer-literal-enum-member': 'warn',
        // 优先使用类型参数而不是类型断言
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        // 合并具有相同实现的重载声明
        '@typescript-eslint/unified-signatures': 'warn',

        // ============ OFF 级别规则 ============
        // 不强制要求函数返回类型注解
        '@typescript-eslint/explicit-function-return-type': 'off',
        // 允许在定义前使用变量
        '@typescript-eslint/no-use-before-define': 'off',
        // 允许使用命名空间
        '@typescript-eslint/no-namespace': 'off',
        // 允许推断类型的显式类型声明
        '@typescript-eslint/no-inferrable-types': 'off',
        // 允许方法在没有 this 约束的情况下使用
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}
