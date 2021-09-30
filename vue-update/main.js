import './style.css'
import {createApp, defineComponent } from './vue.esm-browser'
const app = createApp({})
const rootOptions = defineComponent({
  data() {},
})
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
