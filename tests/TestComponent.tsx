// 故意违反多个ESLint规则的React组件
import React, {useCallback, useEffect, useState} from 'react'

import {omit} from 'lodash-es'

import Content from '~/Content'

import Title from './Title'

interface testProps {
  foo: string
  bar: number
}

// 违反interface命名规则
interface props extends testProps {
  name: string
  age?: any // 违反any类型使用规则
}

// 违反组件命名规则
function testComponent({name, age}: props) {
  // 违反useState类型定义规则
  const [state, setState] = useState<any>(null)
  console.log(omit({foo: 'bar', baz: 'qux'}, ['foo']))
  // 违反useCallback依赖项规则
  const handleClick = useCallback(() => {
    setState({foo: 'bar'})
  }, []) // 缺少依赖项

  // 违反useEffect依赖项规则
  useEffect(() => {
    console.log(name, age)
  }, []) // 缺少依赖项

  // 违反函数返回类型规则
  const getValue = (): any => state

  // 违反条件类型规则
  type Status = string | number | boolean

  // 违反类型断言规则
  const value = state

  // 违反可选链使用规则
  const data = state?.data?.value

  // 违反jsx-a11y规则和事件处理规则
  return (
    <div onClick={handleClick}>
      <Title />
      <Content />
      <span>{name}</span>
      <input onChange={(e) => setState(e.target.value)} />{' '}
      {/* 内联事件处理器 */}
      {/* 违反条件渲染规则 */}
      {!!state && <p>{getValue()}</p>}
      {/* 违反图片可访问性规则 */}
      <img src="test.jpg" />
    </div>
  )
}

export default testComponent
