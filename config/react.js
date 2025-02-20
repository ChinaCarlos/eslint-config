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
  extends: [
    './typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react-hooks', 'simple-import-sort', 'jsx-a11y'],
  rules: {
    // Import排序规则
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. React 核心库和框架
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

          // 2. React 生态相关
          ['^@react-spring/.*$', '^@react-three/.*$', '^@react-dnd/.*$'],
          ['^react-query$', '^@tanstack/react-query$'],
          ['^react-hook-form$', '^@hookform/.*$'],
          ['^react-use$', '^ahooks$'],
          ['^react-.*$', '^@react-.*$'],

          // 3. 状态管理
          ['^redux$', '^@reduxjs/.*$', '^react-redux$', '^redux-.*$'],
          ['^recoil$', '^recoil-.*$'],
          ['^mobx$', '^mobx-react.*$', '^mobx-state-tree$'],
          ['^zustand$', '^jotai$', '^valtio$'],

          // 4. UI 组件库（PC 端）
          [
            // Ant Design
            '^antd$',
            '^@ant-design/.*$',
            // Material UI
            '^@mui/.*$',
            // Chakra UI
            '^@chakra-ui/.*$',
            // Mantine
            '^@mantine/.*$',
            // Arco Design
            '^@arco-design/.*$',
            // Semi Design
            '^@douyinfe/semi-ui$',
            // TDesign
            '^tdesign-react.*$',
          ],

          // 4.1 UI 组件库（移动端）
          [
            // Ant Design Mobile
            '^antd-mobile$',
            '^@ant-design/mobile$',
            // Semi Mobile
            '^@douyinfe/semi-mobile$',
            // TDesign Mobile
            '^tdesign-mobile-react$',
            // React Vant
            '^react-vant$',
            // NutUI React
            '^@nutui/nutui-react$',
            // ZarmUI
            '^zarm$',
          ],

          // 5. 工具库
          ['^axios$', '^qs$', '^lodash.*$', '^ramda$'],
          ['^dayjs$', '^date-fns$', '^moment$'],
          ['^i18next$', '^react-i18next$'],
          ['^zod$', '^yup$', '^validator$'],
          ['^d3$', '^echarts$', '^@nivo/.*$'],
          ['^three$', '^@babylonjs/.*$'],

          // 6. 第三方工具库
          ['^@?\\w'],

          // 7. 别名路径（项目内部通用模块）
          ['^@/'], // @/components, @/utils 等
          ['^~'], // ~/helpers, ~/constants 等
          ['^#/'], // #/types 等
          ['^\\$/'], // $/shared 等

          // 8. 父级目录导入
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // 9. 当前目录导入
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // 10. 样式文件
          [
            '^antd/.*\\.css$',
            '^@mui/.*\\.css$',
            '^@chakra-ui/.*\\.css$',
            '^.+\\.(css|scss|sass|less|styl)$',
          ],

          // 11. 资源文件
          [
            // 图片
            '^.+\\.(png|jpg|jpeg|gif|svg|ico|webp|bmp)$',
            // 字体
            '^.+\\.(woff|woff2|eot|ttf|otf)$',
            // 媒体
            '^.+\\.(mp3|mp4|wav|ogg|avi|mov|webm)$',
            // 文档
            '^.+\\.(pdf|doc|docx|xls|xlsx)$',
          ],

          // 11. 样式文件
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
    // React基础规则
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 允许的JSX文件扩展名
      },
    ],
    'react/button-has-type': 'off', // 允许button不指定type
    'react/state-in-constructor': 'off', // 允许在构造函数外初始化state
    'react/no-array-index-key': 'error', // 禁止使用数组索引作为key
    'react/jsx-one-expression-per-line': 'off', // 允许一行多个JSX表达式
    'react/require-default-props': 'off', // 允许可选props不设默认值
    'react/prop-types': 'off', // 关闭props类型检查

    // React Hooks规则
    'react-hooks/exhaustive-deps': 'error', // 检查useEffect的依赖项
    'react-hooks/rules-of-hooks': 'error', // 强制执行Hooks规则

    // JSX可访问性规则
    'jsx-a11y/href-no-hash': 'off', // 允许href使用hash
    'jsx-a11y/media-has-caption': 'off', // 允许媒体元素没有字幕
    'jsx-a11y/alt-text': 'off', // 允许图片没有alt属性
    'jsx-a11y/accessible-emoji': 'off', // 允许直接使用emoji
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref'], // 只检查无效的href
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off', // 允许点击事件没有键盘事件
    'jsx-a11y/no-static-element-interactions': 'off', // 允许静态元素有交互事件
    'jsx-a11y/no-noninteractive-element-interactions': 'off', // 允许非交互元素有交互事件
  },
}
