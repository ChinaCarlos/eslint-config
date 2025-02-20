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
    'react/no-array-index-key': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-unsafe': 'error',

    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/display-name': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/self-closing-comp': 'warn',

    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/state-in-constructor': 'off',

    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-is-valid': 'error',

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
  },
}
