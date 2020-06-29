/* 'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 9528
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      [process.env.VUE_APP_BASE_URL]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathOrigin: {
          ['^' + process.env.VUE_APP_BASE_URL]: ''
        }
      }
    }
  },
  configureWebpack: {

  }
} */