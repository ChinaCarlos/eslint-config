// 故意违反TypeScript ESLint规则的测试文件

// 违反接口命名规则（应该以I开头）
interface userProps {
  name: string
  age: number
}

// 违反类型定义规则（使用any）
const someValue: any = 'test'
console.log('someValue:', someValue)
// 违反函数返回类型规则（缺少返回类型注解）
function calculateSum(a: number, b: number) {
  return a + b
}

// 违反类型断言规则（使用as any）
const element = document.getElementById('root') as any

// 违反未使用变量规则
const unusedVar = 'unused'

// 违反类型注解空格规则
const user: userProps = {
  name: 'John',
  age: 25,
}

// 违反空接口规则
interface EmptyInterface {}

// 违反类型定义一致性规则（应该使用interface而不是type）
interface UserType {
  id: number
  name: string
}

// 违反使用前定义规则
console.log(myVariable)
const myVariable = 42

// 违反禁止使用@ts-ignore规则
// @ts-expect-error
const invalidCode: string = 42

// 违反成员分隔符样式规则
interface ProductProps {
  id: number
  name: string
  price: number
}

// 导出违反规则的内容
export {calculateSum, ProductProps, user, userProps, UserType}
