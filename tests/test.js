// 故意违反多个ESLint规则的JavaScript文件

// 违反命名规范
const camelCase_variable = 'test'

// 未使用的变量
const unusedVariable = 'unused'

// 违反格式规则
function badlyFormattedFunction(param1, param2) {
  return param1 + param2
}

// 违反no-var规则
const oldVar = 'old'

// 违反prefer-const规则
const shouldBeConst = 'constant'

// 违反no-console规则
console.log('debug')

// 违反空格规则
if (oldVar === 'test') {
  console.log('test')
}

// 违反数组方法规则
const numbers = [1, 2, 3]
numbers.forEach((num) => num * 2)

// 违反promise-executor-return规则
const promise = new Promise((resolve) => {
  const value = 'test'
  value === 'test'
})

// 违反no-param-reassign规则
function mutateParam(obj) {
  obj.prop = 'modified'
}

// 违反no-prototype-builtins规则
const obj = {}
obj.hasOwnProperty('test')

// 违反prefer-template规则
const name = 'world'
const greeting = `Hello ${name}`

// 违反no-return-await规则
async function fetchData() {
  return await Promise.resolve('data')
}

// 违反prefer-rest-params规则
function restParams() {
  const args = arguments
  return args[0]
}

// 违反no-nested-ternary规则
const nested = true ? (false ? 0 : 1) : 2

// 导出违反export规则
export const test = {
  camelCase_variable,
  badlyFormattedFunction,
  nested,
  restParams,
  fetchData,
  greeting,
  mutateParam,
}
