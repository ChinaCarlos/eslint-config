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
    // 基本规则
    camelcase: 'error', // 强制使用驼峰命名
    'no-undef': 'off', // 关闭未定义变量检查
    'no-case-declarations': 'off', // 允许在case子句中声明变量

    // 导入规则
    'import/no-cycle': 'off', // 允许循环依赖
    'import/first': 'error', // import必须放在文件开头
    'import/newline-after-import': 'error', // import后必须空一行
    'import/no-duplicates': 'error', // 禁止重复导入
    'import/prefer-default-export': 'off', // 允许非默认导出
    'import/no-unresolved': 'off', // 关闭模块解析检查

    // 导入排序规则
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'], // 第三方包导入
          ['^'], // 绝对路径导入
          ['^\\.'], // 相对路径导入
          ['^\\u0000'], // 副作用导入
        ],
      },
    ],
    'simple-import-sort/exports': 'error', // 强制export排序

    // 导入文件扩展名规则
    'import/extensions': [
      'error',
      'always',
      {
        'd.ts': 'never', // TypeScript声明文件不需要扩展名
        ts: 'never', // TypeScript文件不需要扩展名
        tsx: 'never', // TypeScript JSX文件不需要扩展名
        js: 'never', // JavaScript文件不需要扩展名
        jsx: 'never', // JavaScript JSX文件不需要扩展名
      },
    ],
  },
}
