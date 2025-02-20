# Config 目录说明

## 目录介绍

config 目录是本项目的核心配置目录，包含了针对不同开发场景的 ESLint 规则配置。这些配置文件可以根据项目的具体需求被单独引用或组合使用，以实现代码规范的统一管理。

## 配置文件说明

### javascript.js

基础的 JavaScript 代码规范配置，主要特点：
- 继承自 `airbnb` 规范
- 包含基础代码风格规则（如驼峰命名）
- 自定义的模块导入/导出规则
- 针对文件扩展名的特殊处理

规则分类：

#### ERROR 级别规则

| 分类 | 规则 | 说明 |
|------|------|------|
| **语法规范** | `no-debugger` | 禁止使用 debugger |
| | `no-alert` | 禁止使用 alert |
| | `no-var` | 禁止使用 var |
| | `prefer-const` | 优先使用 const |
| | `eqeqeq` | 强制使用 === 和 !== |
| | `guard-for-in` | 要求 for-in 循环中有 if 语句 |
| | `no-nested-ternary` | 禁止嵌套的三元表达式 |
| **导入规则** | `import/first` | import 必须放在文件开头 |
| | `import/no-duplicates` | 禁止重复导入 |
| | `import/newline-after-import` | import 后必须空一行 |
| | `import/no-unresolved` | 确保导入的模块可以被解析 |
| | `import/named` | 确保命名导入与命名导出相对应 |
| | `import/namespace` | 确保命名空间导入存在 |
| | `import/no-extraneous-dependencies` | 依赖项检查 |
| | `simple-import-sort/imports` | 导入排序规则 |
| | `simple-import-sort/exports` | 导出排序规则 |
| | `import/extensions` | 文件扩展名规则 |

#### WARNING 级别规则

| 分类 | 规则 | 说明 |
|------|------|------|
| **代码风格** | `no-console` | console 使用警告（允许 log/info/warn/error） |
| | `camelcase` | 强制使用驼峰命名 |
| | `no-param-reassign` | 不允许修改函数参数 |
| | `max-len` | 单行最大长度限制（100字符） |
| | `no-unneeded-ternary` | 禁止不必要的三元表达式 |
| **现代特性建议** | `prefer-template` | 建议使用模板字符串 |
| | `prefer-destructuring` | 建议使用解构赋值 |
| | `prefer-spread` | 建议使用扩展运算符 |
| | `prefer-rest-params` | 建议使用剩余参数 |
| | `arrow-body-style` | 箭头函数体风格 |

#### OFF 级别规则

| 规则 | 说明 |
|------|------|
| `no-undef` | 允许未定义的变量 |
| `no-case-declarations` | 允许在 case 子句中声明变量 |
| `import/prefer-default-export` | 允许非默认导出 |
| `import/no-cycle` | 允许循环依赖 |
| `no-continue` | 允许使用 continue |
| `no-underscore-dangle` | 允许标识符中的下划线 |
| `class-methods-use-this` | 允许类方法不使用 this |
| `no-restricted-syntax` | 允许使用特定的语法 |
| `consistent-return` | 允许不一致的返回值 |
| `no-plusplus` | 允许使用++和--操作符 |

#### 导入排序规则

| 优先级 | 分类 | 说明 |
|--------|------|------|
| 1 | 第三方包导入 | 如 `import React from 'react'` |
| 2 | 绝对路径导入 | 如 `import App from '/src/App'` |
| 3 | 相对路径导入 | 如 `import Button from './Button'` |
| 4 | 副作用导入 | 如 `import './styles.css'` |

#### 文件扩展名规则

| 文件类型 | 扩展名 | 是否需要 |
|----------|---------|----------|
| TypeScript | .ts, .tsx, .d.ts | 不需要 |
| JavaScript | .js, .jsx | 不需要 |

### 规则示例

#### ERROR 级别规则示例

**语法规范**

1. `no-debugger`: 禁止使用 debugger
```javascript
// ❌ 错误
function debug() {
  debugger;
}

// ✅ 正确
function debug() {
  console.log('Debugging...');
}
```

2. `no-alert`: 禁止使用 alert
```javascript
// ❌ 错误
alert('Hello');

// ✅ 正确
console.log('Hello');
// 或使用自定义的提示组件
showMessage('Hello');
```

3. `no-var`: 禁止使用 var
```javascript
// ❌ 错误
var name = 'John';

// ✅ 正确
const name = 'John';
let age = 25;
```

4. `prefer-const`: 优先使用 const
```javascript
// ❌ 错误
let name = 'John';  // name 从未被重新赋值

// ✅ 正确
const name = 'John';
let age = 25;  // age 后续会被修改
age = 26;
```

5. `eqeqeq`: 强制使用 === 和 !==
```javascript
// ❌ 错误
if (age == 25) {}
if (name != 'John') {}

// ✅ 正确
if (age === 25) {}
if (name !== 'John') {}
```

6. `guard-for-in`: 要求 for-in 循环中有 if 语句
```javascript
// ❌ 错误
for (const key in obj) {
  console.log(obj[key]);
}

// ✅ 正确
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log(obj[key]);
  }
}
```

7. `no-nested-ternary`: 禁止嵌套的三元表达式
```javascript
// ❌ 错误
const value = a ? b ? c : d : e;

// ✅ 正确
let value;
if (a) {
  value = b ? c : d;
} else {
  value = e;
}
```

**导入规则**

1. `import/first`: import 必须放在文件开头
```javascript
// ❌ 错误
const foo = 'bar';
import React from 'react';

// ✅ 正确
import React from 'react';
const foo = 'bar';
```

2. `import/no-duplicates`: 禁止重复导入
```javascript
// ❌ 错误
import React from 'react';
import { useState } from 'react';

// ✅ 正确
import React, { useState } from 'react';
```

#### WARNING 级别规则示例

**代码风格**

1. `no-console`: console 使用警告
```javascript
// ⚠️ 警告
console.log('debug info');

// ✅ 推荐
logger.debug('debug info');
```

2. `camelcase`: 强制使用驼峰命名
```javascript
// ⚠️ 警告
const user_name = 'John';

// ✅ 推荐
const userName = 'John';
```

3. `max-len`: 单行最大长度限制
```javascript
// ⚠️ 警告
const veryLongString = 'This is a very very very very very very very very very very very very long string';

// ✅ 推荐
const veryLongString = 
  'This is a very very very very very ' +
  'very very very very very very long string';
```

**现代特性建议**

1. `prefer-template`: 建议使用模板字符串
```javascript
// ⚠️ 警告
const greeting = 'Hello ' + name + '!';

// ✅ 推荐
const greeting = `Hello ${name}!`;
```

2. `prefer-destructuring`: 建议使用解构赋值
```javascript
// ⚠️ 警告
const name = user.name;

// ✅ 推荐
const { name } = user;
```

#### OFF 级别规则示例

1. `no-plusplus`: 允许使用++和--操作符
```javascript
// 允许使用
for (let i = 0; i < 10; i++) {
  count++;
}
```

2. `no-underscore-dangle`: 允许标识符中的下划线
```javascript
// 允许使用
const _privateVariable = 'private';
```

### typescript.js

TypeScript 专用的代码规范配置，继承自 javascript.js 的基础配置。

#### ERROR 级别规则

| 分类 | 规则 | 说明 |
|------|------|------|
| **类型安全** | `no-unsafe-assignment` | 允许不安全的赋值操作 |
| | `no-unsafe-member-access` | 允许访问 any 类型的属性 |
| | `no-unsafe-call` | 允许调用 any 类型的函数 |
| | `no-unsafe-return` | 允许返回 any 类型的值 |
| | `restrict-template-expressions` | 模板字符串表达式必须类型正确 |
| | `no-floating-promises` | 允许不处理 Promise 的返回值 |
| | `await-thenable` | 允许 await 非 Promise 值 |
| | `no-unnecessary-type-assertion` | 禁止不必要的类型断言 |
| | `no-unnecessary-condition` | 禁止不必要的条件判断 |
| | `no-unnecessary-boolean-literal-compare` | 禁止不必要的布尔值比较 |
| | `switch-exhaustiveness-check` | switch 语句必须处理所有可能的枚举值 |
| | `no-empty-interface` | 禁止空接口定义 |
| **代码质量** | `no-unused-vars` | 禁止未使用的变量 |
| | `no-shadow` | 禁止变量名称遮蔽 |
| | `no-throw-literal` | 只允许抛出 Error 对象 |
| | `no-misused-promises` | 防止错误使用 Promise |
| | `no-non-null-assertion` | 禁止使用非空断言操作符 |
| | `no-base-to-string` | 禁止隐式的 toString 调用 |
| | `no-dynamic-delete` | 禁止动态删除对象属性 |
| | `no-require-imports` | 禁止使用 require 导入 |
| | `prefer-optional-chain` | 优先使用可选链操作符 |
| | `prefer-nullish-coalescing` | 优先使用空值合并操作符 |
| | `no-invalid-void-type` | 禁止无效的 void 类型使用 |
| **代码风格** | `consistent-type-imports` | 统一使用 import type 导入类型 |
| | `member-delimiter-style` | 接口成员分隔符样式 |
| | `method-signature-style` | 方法签名风格 |

#### WARNING 级别规则

| 分类 | 规则 | 说明 |
|------|------|------|
| **命名规范** | `naming-convention` | 强制使用一致的命名规范（接口、类型、枚举等） |
| **类型使用** | `ban-types` | 禁止使用特定类型（如 Object、Function） |
| | `no-explicit-any` | 警告使用 any 类型 |
| **最佳实践** | `explicit-member-accessibility` | 要求明确的成员可访问性 |
| | `prefer-ts-expect-error` | 优先使用 @ts-expect-error 而不是 @ts-ignore |
| | `prefer-enum-initializers` | 枚举成员应该有初始值 |
| | `prefer-literal-enum-member` | 枚举成员应该是字面量 |
| | `prefer-reduce-type-parameter` | 优先使用类型参数而不是类型断言 |
| | `unified-signatures` | 合并具有相同实现的重载声明 |

#### OFF 级别规则

| 规则 | 说明 |
|------|------|
| `explicit-function-return-type` | 不强制要求函数返回类型注解 |
| `no-use-before-define` | 允许在定义前使用变量 |
| `no-namespace` | 允许使用命名空间 |
| `no-inferrable-types` | 允许推断类型的显式类型声明 |
| `unbound-method` | 允许方法在没有 this 约束的情况下使用 |

#### 规则示例

**类型安全**

1. `restrict-template-expressions`: 模板字符串表达式必须类型正确
```typescript
// ❌ 错误
const obj = {};
const msg = `value: ${obj}`;

// ✅ 正确
const str = 'hello';
const msg = `value: ${str}`;
```

2. `no-unnecessary-type-assertion`: 禁止不必要的类型断言
```typescript
// ❌ 错误
const str: string = 'hello';
const length = (str as string).length;

// ✅ 正确
const str: string = 'hello';
const length = str.length;
```

3. `no-unnecessary-condition`: 禁止不必要的条件判断
```typescript
// ❌ 错误
const str = 'hello';
if (str) {
  console.log('str exists');
}

// ✅ 正确
const str: string | undefined = getMaybeString();
if (str) {
  console.log('str exists');
}
```

4. `switch-exhaustiveness-check`: switch 语句必须处理所有可能的枚举值
```typescript
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

// ❌ 错误
function handleStatus(status: Status) {
  switch (status) {
    case Status.Active:
      return 'Active';
    case Status.Inactive:
      return 'Inactive';
  }
}

// ✅ 正确
function handleStatus(status: Status) {
  switch (status) {
    case Status.Active:
      return 'Active';
    case Status.Inactive:
      return 'Inactive';
    case Status.Pending:
      return 'Pending';
  }
}
```

**代码质量**

1. `no-non-null-assertion`: 禁止使用非空断言操作符
```typescript
// ❌ 错误
interface User {
  name?: string;
}
const user: User = {};
const name = user.name!;

// ✅ 正确
const name = user.name ?? 'default';
```

2. `prefer-optional-chain`: 优先使用可选链操作符
```typescript
// ❌ 错误
const value = obj && obj.foo && obj.foo.bar;

// ✅ 正确
const value = obj?.foo?.bar;
```

3. `no-base-to-string`: 禁止隐式的 toString 调用
```typescript
// ❌ 错误
class User {
  id: number;
  name: string;
}
const user = new User();
console.log('User: ' + user);

// ✅ 正确
class User {
  id: number;
  name: string;
  
  toString() {
    return `User(${this.id}): ${this.name}`;
  }
}
```

4. `prefer-nullish-coalescing`: 优先使用空值合并操作符
```typescript
// ❌ 错误
const value = someValue || 'default';

// ✅ 正确
const value = someValue ?? 'default'; // 只有当 someValue 为 null 或 undefined 时才使用默认值
```

**代码风格**

1. `consistent-type-imports`: 统一使用 import type 导入类型
```typescript
// ❌ 错误
import { User } from './types';

// ✅ 正确
import type { User } from './types';
```

**命名规范**

1. `naming-convention`: 命名规范示例
```typescript
// ❌ 错误
interface userInterface {}
type userType = {}
const USER_name = '';

// ✅ 正确
interface UserInterface {}
type UserType = {}
const userName = '';
const USER_NAME = '';
```

**最佳实践**

1. `explicit-member-accessibility`: 明确的成员可访问性
```typescript
// ❌ 错误
class User {
  name: string;
  getAge() {}
}

// ✅ 正确
class User {
  public name: string;
  private age: number;
  protected getAge() {}
}
```

2. `prefer-enum-initializers`: 枚举成员初始值
```typescript
// ❌ 错误
enum Direction {
  Up,
  Down
}

// ✅ 正确
enum Direction {
  Up = 'UP',
  Down = 'DOWN'
}
```

3. `prefer-ts-expect-error`: 优先使用 @ts-expect-error 而不是 @ts-ignore
```typescript
// ❌ 错误
// @ts-ignore
const result = someFunction();

// ✅ 正确
// @ts-expect-error - 这里解释为什么会有类型错误
const result = someFunction();
```

4. `unified-signatures`: 合并具有相同实现的重载声明
```typescript
// ❌ 错误
interface Example {
  log(message: string): void;
  log(message: number): void;
}

// ✅ 正确
interface Example {
  log(message: string | number): void;
}
```

### react.js

React 项目的综合配置，继承自 typescript.js 配置。

#### ERROR 级别规则

| 分类 | 规则 | 说明 |
|------|------|------|
| **Hooks 规则** | `react-hooks/rules-of-hooks` | 强制执行 Hooks 的使用规则 |
| | `react-hooks/exhaustive-deps` | 强制执行 useEffect 的依赖项完整性 |
| **JSX 语法** | `react/jsx-key` | 强制在迭代器中使用 key 属性 |
| | `react/jsx-no-duplicate-props` | 禁止在 JSX 中使用重复的属性 |
| | `react/jsx-no-useless-fragment` | 禁止使用不必要的 Fragment |
| | `react/jsx-pascal-case` | 强制使用 PascalCase 命名组件 |
| | `no-nested-ternary` | 禁止使用嵌套的三元表达式 |
| **组件规范** | `react/no-array-index-key` | 禁止使用数组索引作为 key |
| | `react/no-direct-mutation-state` | 禁止直接修改 state |
| | `react/jsx-props-no-spreading` | 禁止使用 props 扩展运算符 |
| | `react/no-multi-comp` | 禁止在一个文件中定义多个组件 |
| **生命周期** | `react/no-unsafe` | 禁止使用不安全的生命周期方法 |

#### WARNING 级别规则

| 分类 | 规则 | 说明 |
|------|------|------|
| **代码风格** | `react/jsx-handler-names` | 事件处理函数命名规范 |
| | `react/jsx-filename-extension` | 允许的 JSX 文件扩展名 |
| | `react/display-name` | 要求组件定义显示名称 |
| | `react/self-closing-comp` | 强制使用自闭合标签 |

#### 规则示例

**1. Hooks 规则**
```jsx
// ❌ 错误示例
function Component() {
  if (condition) {
    // 不能在条件语句中使用 Hooks
    const [state, setState] = useState(0)
  }

  useEffect(() => {
    console.log(data) // 缺少依赖项
  }, [])
}

// ✅ 正确示例
function Component() {
  const [state, setState] = useState(0)

  useEffect(() => {
    console.log(data)
  }, [data]) // 完整的依赖项
}
```

**2. JSX 语法规则**
```jsx
// ❌ 错误示例
function component() { // 小写开头
  return (
    <>
      <div>单个子元素不需要 Fragment</div>
    </>
  )
}

// ✅ 正确示例
function Component() { // PascalCase
  return <div>直接返回单个元素</div>
}
```

**3. 组件规范**
```jsx
// ❌ 错误示例
function Component(props) {
  return <div {...props} /> // props 透传
}

const List = () => {
  const items = ['a', 'b', 'c']
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div> // 使用索引作为 key
      ))}
    </div>
  )
}

// ✅ 正确示例
function Component({ className, style, children }) {
  return <div className={className} style={style}>{children}</div>
}

const List = () => {
  const items = ['a', 'b', 'c']
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div> // 使用稳定的值作为 key
      ))}
    </div>
  )
}
```

**4. 事件处理函数命名**
```jsx
// ❌ 错误示例
function Component() {
  const click = () => {}
  const submit = () => {}

  return (
    <div>
      <button click={click}>Click</button>
      <form submit={submit}>
        <input change={(e) => {}} />
      </form>
    </div>
  )
}

// ✅ 正确示例
function Component() {
  const handleClick = () => {}
  const handleSubmit = () => {}
  const handleChange = (e) => {}

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
      </form>
    </div>
  )
}
```

**5. 条件渲染**
```jsx
// ❌ 错误示例
function Component() {
  return (
    <div>
      {a ? b ? <C /> : <D /> : <E />} {/* 嵌套三元表达式 */}
    </div>
  )
}

// ✅ 正确示例
function Component() {
  const content = b ? <C /> : <D />
  return (
    <div>
      {a ? content : <E />} {/* 拆分复杂条件 */}
    </div>
  )
}
```

### prettier.js

代码格式化配置，用于：
- 确保代码格式的一致性
- 与 ESLint 规则的兼容处理

## 配置继承关系

```
javascript.js
    ↓
typescript.js
    ↓
react.js
```

## 使用方法

1. 基础 JavaScript 项目：
```json
{
  "extends": ["@carlos/eslint-config/javascript"]
}
```

2. TypeScript 项目：
```json
{
  "extends": ["@carlos/eslint-config/typescript"]
}
```

3. React + TypeScript 项目：
```json
{
  "extends": ["@carlos/eslint-config/react"]
}
```

4. 使用 Prettier 格式化配置：
```json
{
  "extends": [
    "@carlos/eslint-config/prettier"
  ]
}
```

## Prettier 与 ESLint 配合使用

为了获得最佳的代码规范和格式化效果，建议将 Prettier 配置与其他 ESLint 配置组合使用：

1. JavaScript + Prettier：
```json
{
  "extends": [
    "@carlos/eslint-config/javascript",
    "@carlos/eslint-config/prettier"
  ]
}
```

2. TypeScript + Prettier：
```json
{
  "extends": [
    "@carlos/eslint-config/typescript",
    "@carlos/eslint-config/prettier"
  ]
}
```

3. React + TypeScript + Prettier：
```json
{
  "extends": [
    "@carlos/eslint-config/react",
    "@carlos/eslint-config/prettier"
  ]
}
```

**注意：** Prettier 配置应始终放在 extends 数组的最后，以确保其规则能够覆盖其他配置中可能存在的冲突规则。

## 注意事项

- 使用 TypeScript 配置时，确保项目根目录存在 `tsconfig.json` 文件
- React 配置已包含 TypeScript 的所有规则，无需重复引入
- 建议同时使用 Prettier 配置以确保代码格式统一
