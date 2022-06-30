const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true


  plugins: [{
    src: '~plugins/vue-scrollmagic.js',
    ssr: false
  }]
})
