const {ownWebpackConfig} = require('../utils/paths')

// JavaScript规则配置
module.exports = {
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: ownWebpackConfig,
      },
    },
  },
  rules: {
    // ERROR 级别规则
    'no-debugger': 'error', // 禁止使用 debugger
    'no-alert': 'error', // 禁止使用 alert
    'no-var': 'error', // 禁止使用 var
    'prefer-const': 'error', // 优先使用 const
    'no-nested-ternary': 'error', // 禁止嵌套的三元表达式
    eqeqeq: ['error', 'always'], // 强制使用 === 和 !==
    'guard-for-in': 'error', // 要求 for-in 循环中有 if 语句

    // WARNING 级别规则
    'no-console': ['warn', {allow: ['log', 'info', 'warn', 'error']}], // console.log 使用警告
    camelcase: 'warn', // 强制使用驼峰命名
    'no-param-reassign': 'warn', // 不允许修改函数参数
    'max-len': [
      // 行长度限制
      'warn',
      {
        code: 100, // 单行最大长度
        ignoreComments: true, // 忽略注释
        ignoreStrings: true, // 忽略字符串
        ignoreTemplateLiterals: true, // 忽略模板字符串
        ignoreRegExpLiterals: true, // 忽略正则表达式
      },
    ],
    'no-unneeded-ternary': 'warn', // 禁止不必要的三元表达式
    'prefer-template': 'warn', // 建议使用模板字符串
    'prefer-destructuring': 'warn', // 建议使用解构赋值
    'prefer-spread': 'warn', // 建议使用扩展运算符
    'prefer-rest-params': 'warn', // 建议使用剩余参数
    'arrow-body-style': ['warn', 'as-needed'], // 箭头函数体风格

    // OFF 级别规则
    'no-undef': 'off', // 允许未定义的变量
    'no-case-declarations': 'off', // 允许在 case 子句中声明变量
    'import/prefer-default-export': 'off', // 允许非默认导出
    'import/no-cycle': 'off', // 允许循环依赖
    'no-continue': 'off', // 允许使用 continue
    'no-underscore-dangle': 'off', // 允许标识符中的下划线
    'class-methods-use-this': 'off', // 允许类方法不使用 this
    'no-restricted-syntax': 'off', // 允许使用特定的语法
    'consistent-return': 'off', // 允许不一致的返回值
    'no-plusplus': 'off', // 允许使用++和--操作符

    // 导入规则 - Import Rules
    'import/first': 'error', // import 必须放在文件开头
    'import/no-duplicates': 'error', // 禁止重复导入
    'import/newline-after-import': 'error', // import 后必须空一行
    'import/no-unresolved': 'error', // 确保导入的模块可以被解析
    'import/named': 'error', // 确保命名导入与命名导出相对应
    'import/namespace': 'error', // 确保命名空间导入存在
    'import/no-extraneous-dependencies': [
      // 依赖项检查
      'error',
      {
        devDependencies: true, // 允许导入开发依赖
        optionalDependencies: false, // 不允许导入可选依赖
        peerDependencies: false, // 不允许导入对等依赖
      },
    ],

    // 导入排序 - Import Sorting
    'simple-import-sort/imports': [
      // 导入排序
      'error',
      {
        groups: [
          ['^@?\\w'], // 第三方包
          ['^'], // 绝对路径导入
          ['^\\.'], // 相对路径导入
          ['^\\u0000'], // 副作用导入
        ],
      },
    ],
    'simple-import-sort/exports': 'error', // 导出排序

    // 文件扩展名 - File Extensions
    'import/extensions': [
      // 文件扩展名规则
      'error',
      'always',
      {
        'd.ts': 'never', // TypeScript 声明文件不需要扩展名
        ts: 'never', // TypeScript 文件不需要扩展名
        tsx: 'never', // TypeScript JSX 文件不需要扩展名
        js: 'never', // JavaScript 文件不需要扩展名
        jsx: 'never', // JavaScript JSX 文件不需要扩展名
      },
    ],
  },
}
