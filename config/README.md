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

TypeScript 专用的代码规范配置，特点：
- 继承 `javascript.js` 的基础配置
- 集成 `@typescript-eslint` 的推荐规则
- 强制类型注解和接口定义规范
- 自定义的 TypeScript 特定规则

### react.js

React 项目的综合配置，包含：
- 继承 `typescript.js` 配置
- React Hooks 规则检查
- JSX 可访问性（a11y）规范
- React 组件编写规范
- 事件处理函数命名规范

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
