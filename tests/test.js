// ==================== 测试 ERROR 级别规则 ====================
// 1. 导入规则测试
import React from 'react'
import {Component} from 'react' // import/no-duplicates

import axios from 'axios' // simple-import-sort/imports
import _ from 'lodash'

import {helper} from 'unknown-module' // import/no-unresolved

import {namedExport} from './module' // import/named
import MyComponent from './MyComponent.jsx' // import/extensions

// 2. 基础语法规则测试
debugger // no-debugger

alert('test') // no-alert

const oldVar = 'test' // no-var

const constVar = 'should-be-const' // prefer-const

if (oldVar == true) {
  // eqeqeq
  // empty
}

// ==================== 测试 WARNING 级别规则 ====================
// 1. 控制台和命名规则
console.log('debug message') // no-console
const snake_case_variable = 'test' // camelcase

// 2. 函数参数修改
function modifyParam(param) {
  param = 'modified' // no-param-reassign
  return param
}

// 3. 代码格式和长度
const veryLongString =
  'this is a very very very very very very very very very very very very very very very long string that should trigger max-len warning'

// 4. 三元表达式
const nestedTernary = (a) =>
  a ? (b) => (b ? (c) => (c ? (d) => d : d) : c) : b // no-nested-ternary
const redundantTernary = !!true // no-unneeded-ternary

// 5. 现代特性使用建议
const str1 = 'hello'
const str2 = 'world'
const greeting = `${str1} ${str2}` // prefer-template

const obj = {x: 1, y: 2}
const {x} = obj // prefer-destructuring

function oldStyleArgs() {
  const args = Array.prototype.slice.call(arguments) // prefer-rest-params
  return args.reduce((sum, val) => sum + val, 0)
}

const spreadArray = [1, 2, 3]
Math.max.apply(Math, spreadArray) // prefer-spread

const verboseArrow = () => {
  return 'test' // arrow-body-style
}

// ==================== 测试 OFF 级别规则 ====================
// 这些规则已关闭，不会报错
globalVar = 'test' // no-undef

switch (oldVar) {
  case 'test':
    const blockVar = true // no-case-declarations
    break
}

// 将continue语句放在循环中
for (let i = 0; i < 5; i++) {
  if (i === 2) continue // no-continue
}

class TestClass {
  helperMethod() {
    // class-methods-use-this
    return 'helper'
  }
}

const _privateVar = 'test' // no-underscore-dangle

for (const key in obj) {
  // no-restricted-syntax
  console.log(key)
}

function inconsistentReturn(value) {
  // consistent-return
  if (value) {
    return true
  }
  // 没有返回值
}

// 导出测试
export {inconsistentReturn, modifyParam, oldStyleArgs, TestClass}
