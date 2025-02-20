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
