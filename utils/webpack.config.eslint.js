const {appSrc, appConfig} = require('./paths')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '~': appSrc,
      '~config': appConfig,
    },
    enforceExtension: false,
  },
}
