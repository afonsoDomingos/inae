// vue.config.js
const path = require('path')

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,

  // ESSA LINHA É A MÁGICA → faz o @ funcionar
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
}