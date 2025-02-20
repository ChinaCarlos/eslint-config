const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const resolveOwn = (relativePath) => path.resolve(__dirname, '.', relativePath)

const appConfig = fs.existsSync(resolveApp('config.json'))
  ? resolveApp('config.json')
  : resolveApp('config.js')

module.exports = {
  appConfig,
  appTsConfig: resolveApp('tsconfig.json'),
  // appSrc 本地测试需要改成tests 目录，发包的时候是src目录
  appSrc: resolveApp('src'),
  appPath: resolveApp('.'),
  ownWebpackConfig: resolveOwn('webpack.config.eslint'),
}
