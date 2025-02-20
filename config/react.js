const {ownWebpackConfig, appTsConfig} = require('../utils/paths')

// React规则配置
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: ownWebpackConfig,
      },
      typescript: {
        project: appTsConfig,
        alwaysTryTypes: true,
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
  extends: ['./typescript', 'plugin:react/recommended'],
  plugins: ['react-hooks', 'simple-import-sort'],
  rules: {
    // ====================== ERROR 级别规则 ======================
    // React Hooks 规则
    'react-hooks/rules-of-hooks': 'error', // 强制执行 Hooks 的使用规则
    'react-hooks/exhaustive-deps': 'error', // 强制执行 useEffect 的依赖项完整性
    // 'react/no-conditional-hook-call': 'error', // 删除不存在的规则

    // JSX 语法规则
    'react/jsx-key': 'error', // 强制在迭代器中使用 key 属性
    'react/jsx-no-duplicate-props': 'error', // 禁止在 JSX 中使用重复的属性
    'react/jsx-no-useless-fragment': 'error', // 禁止使用不必要的 Fragment
    'react/jsx-pascal-case': ['error', {allowAllCaps: true}], // 强制使用 PascalCase 命名组件
    'no-nested-ternary': 'error', // 禁止使用嵌套的三元表达式

    // 组件规范
    'react/no-array-index-key': 'error', // 禁止使用数组索引作为 key
    'react/no-direct-mutation-state': 'error', // 禁止直接修改 state
    'react/jsx-props-no-spreading': 'error', // 禁止使用 props 扩展运算符
    'react/no-multi-comp': ['error', {ignoreStateless: false}], // 禁止在一个文件中定义多个组件

    // 生命周期安全
    'react/no-unsafe': [
      // 禁止使用不安全的生命周期方法
      'error',
      {
        checkAliases: true,
      },
    ],

    // 可访问性
    // 'react/alt-text': 'error', // 删除不存在的规则

    // ====================== WARNING 级别规则 ======================
    // 代码风格
    'react/jsx-handler-names': [
      // 事件处理函数命名规范
      'warn',
      {
        eventHandlerPrefix: 'handle', // 处理函数前缀
        eventHandlerPropPrefix: 'on', // props 中事件处理函数前缀
        checkLocalVariables: true, // 检查本地变量命名
        checkInlineFunction: true, // 检查内联函数命名
      },
    ],
    'react/jsx-filename-extension': [
      // 允许的 JSX 文件扩展名
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/display-name': 'warn', // 要求组件定义显示名称
    'react/self-closing-comp': 'warn', // 强制使用自闭合标签

    // ====================== OFF 级别规则 ======================
    // URL 相关
    'no-script-url': 'off', // 允许使用 javascript:URL
    'react/jsx-no-script-url': 'off', // 允许在 JSX 中使用 javascript:URL

    // 组件定义相关
    'react/prop-types': 'off', // 不强制使用 PropTypes
    'react/require-default-props': 'off', // 不强制要求默认属性
    'react/button-has-type': 'off', // 不强制按钮类型
    'react/state-in-constructor': 'off', // 允许在构造函数外定义 state
    'react/function-component-definition': 'off', // 不限制函数组件的定义方式
    'react/jsx-no-bind': 'off', // 允许在 JSX 中使用 bind

    // 可访问性相关
    'jsx-a11y/click-events-have-key-events': 'off', // 不强制要求点击事件同时绑定键盘事件
    'jsx-a11y/no-static-element-interactions': 'off', // 允许静态元素添加交互事件

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            '^react$',
            '^react-dom$',
            '^react-dom/client$',
            '^react-dom/server$',
          ],
          [
            '^react-router$',
            '^react-router-dom$',
            '^react-router-config$',
            '^@remix-run/router$',
          ],
          ['^@react-spring/.*$', '^@react-three/.*$', '^@react-dnd/.*$'],
          ['^react-query$', '^@tanstack/react-query$'],
          ['^react-hook-form$', '^@hookform/.*$'],
          ['^react-use$', '^ahooks$'],
          ['^react-.*$', '^@react-.*$'],
          ['^redux$', '^@reduxjs/.*$', '^react-redux$', '^redux-.*$'],
          ['^recoil$', '^recoil-.*$'],
          ['^mobx$', '^mobx-react.*$', '^mobx-state-tree$'],
          ['^zustand$', '^jotai$', '^valtio$'],
          [
            '^antd$',
            '^@ant-design/.*$',
            '^@mui/.*$',
            '^@chakra-ui/.*$',
            '^@mantine/.*$',
            '^@arco-design/.*$',
            '^@douyinfe/semi-ui$',
            '^tdesign-react.*$',
          ],
          [
            '^antd-mobile$',
            '^@ant-design/mobile$',
            '^@douyinfe/semi-mobile$',
            '^tdesign-mobile-react$',
            '^react-vant$',
            '^@nutui/nutui-react$',
            '^zarm$',
          ],

          ['^axios$', '^qs$', '^lodash.*$', '^ramda$'],
          ['^dayjs$', '^date-fns$', '^moment$'],
          ['^i18next$', '^react-i18next$'],
          ['^zod$', '^yup$', '^validator$'],
          ['^d3$', '^echarts$', '^@nivo/.*$'],
          ['^three$', '^@babylonjs/.*$'],
          ['^@?\\w'],
          ['^@/'],
          ['^~'],
          ['^#/'],
          ['^\\$/'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          [
            '^antd/.*\\.css$',
            '^@mui/.*\\.css$',
            '^@chakra-ui/.*\\.css$',
            '^.+\\.(css|scss|sass|less|styl)$',
          ],
          [
            '^.+\\.(png|jpg|jpeg|gif|svg|ico|webp|bmp)$',
            '^.+\\.(woff|woff2|eot|ttf|otf)$',
            '^.+\\.(mp3|mp4|wav|ogg|avi|mov|webm)$',
            '^.+\\.(pdf|doc|docx|xls|xlsx)$',
          ],
          [
            '^antd/.*.css$',
            '^@mui/.*.css$',
            '^@chakra-ui/.*.css$',
            '^.+.(css|scss|sass|less|styl)$',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // 强制组件方法排序
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],

    // 强制组件最大行数
    'max-lines-per-function': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
  },
}
