'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', //bulid的时候用相对路径
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8081,
    open: false,
    proxy: null
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    // worker-loader配置
    config.module
      .rule("worker-loader")
      .test(/\.worker\.(c|m)?js$/i)
      .use("worker-loader")
      .loader("worker-loader")
      .options({
        filename: "[name].[contenthash].worker.js",
      })
      .end()
      config.module.rule('js').exclude.add(/\.worker\.js$/).end()
  }
}
