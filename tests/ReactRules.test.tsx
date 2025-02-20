import React, {useEffect, useState} from 'react'

// ❌ Error: 禁止在一个文件中声明多个组件 (react/no-multi-comp)
function AnotherComponent() {
  return <div>Another</div>
}

// ❌ Error: 组件名必须使用 PascalCase (react/jsx-pascal-case)
function invalidNameComponent() {
  return <div>Invalid Name</div>
}

console.log('invalidNameComponent:', invalidNameComponent)

// ❌ Error: 禁止使用数组索引作为key (react/no-array-index-key)
function ListComponent() {
  const items = ['a', 'b', 'c']
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}

// ❌ Error: useEffect 依赖检查 (react-hooks/exhaustive-deps)
function HooksComponent() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
  }, []) // 缺少 count 依赖

  return <div>{count}</div>
}

// ❌ Error: 禁止透传props (react/jsx-props-no-spreading)
function SpreadComponent(props: any) {
  return <div {...props} />
}

// ❌ Error: 禁止在JSX中使用条件语句 (react/jsx-no-script-url)
function LinkComponent() {
  return <a href="javascript:void(0)">Click me</a>
}

// ❌ Error: 禁止不必要的 Fragment (react/jsx-no-useless-fragment)
function FragmentComponent() {
  return <div>Single Child</div>
}

// ❌ Error: 限制JSX中的条件表达式嵌套 (no-nested-ternary)
function NestedTernaryComponent() {
  const condition1 = true
  const condition2 = false
  return <div>{condition1 ? 'True' : condition2 ? 'False' : 'Neither'}</div>
}

// ✅ 正确的组件示例
function ValidComponent() {
  const items = ['a', 'b', 'c']
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count]) // 正确的依赖项

  const handleClick = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      {/* 使用稳定的key */}
      {items.map((item, index) => (
        <div key={`item-${item}`}>{item}</div>
      ))}

      {/* 正确的条件渲染 */}
      {count > 0 ? <div>Count is positive</div> : <div>Count is zero</div>}

      {/* 正确的事件处理 */}
      <button onClick={handleClick}>
        Count:
        {count}
      </button>

      {/* 正确的链接使用 */}
      <a href="#about">About</a>
    </div>
  )
}

export default ValidComponent
