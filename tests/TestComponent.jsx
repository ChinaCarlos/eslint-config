// 故意违反多个ESLint规则的React组件
import React, {useEffect, useMemo, useRef, useState} from 'react'

import {omit} from 'lodash-es'

import Content from '~/Content'

import Title from './Title'

function TestComponent(props) {
  // 违反hooks命名规则
  const [val, setVal] = useState(null)
  const ref = useRef()

  // 违反hooks调用顺序规则
  if (val) {
    useEffect(() => {
      console.log(val)
    })
  }

  console.log(omit(props, ['name']))

  // 违反useMemo依赖项规则
  const memoizedValue = useMemo(() => props.value * 2, [])

  // 违反事件处理命名规则
  const click = () => {
    setVal('clicked')
  }

  // 违反ref使用规则
  const updateRef = () => {
    ref.current.style.color = 'red'
  }

  // 违反条件渲染规则
  const renderContent = val && <div>{val}</div>

  // 违反jsx-a11y规则
  return (
    <div>
      <Content />
      <Title>Test Component</Title>

      <button onClick={click}>Click me</button>
      <div ref={ref} onClick={updateRef}>
        {/* 违反props解构规则 */}
        <span>{props.name}</span>
        {/* 违反key规则 */}
        {props.items?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        {/* 违反dangerouslySetInnerHTML规则 */}
        <div dangerouslySetInnerHTML={{__html: props.html}} />
      </div>
      {renderContent}
    </div>
  )
}

export default TestComponent
