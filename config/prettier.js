// Prettier规则配置
module.exports = {
  extends: [
    'prettier', // Prettier兼容配置
    'plugin:prettier/recommended', // Prettier推荐配置
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80, // 每行最大长度
        semi: false, // 不使用分号
        singleQuote: true, // 使用单引号
        trailingComma: 'es5', // ES5中的尾随逗号
        bracketSpacing: false, // 对象字面量中的括号不加空格
        jsxBracketSameLine: false, // JSX结束标签换行
        requirePragma: false, // 不需要特殊注释即可格式化
      },
    ],
  },
}
