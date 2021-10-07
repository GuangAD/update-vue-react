import VueJsx from '@vitejs/plugin-vue-jsx'

export default {
  // 配置选项
  plugins: [
    VueJsx()
  ],
  resolve: {
    alias: [
      {
        find: 'vue',
        replacement: './vue.esm-browser.js'
      }
    ]
  }
}