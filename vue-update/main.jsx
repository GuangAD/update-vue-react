import {createApp, defineComponent } from './vue.esm-browser.js'
import './style.css'
const app = createApp(function rootCo() {
  return (<>
    <h1>test1</h1>
    <h1>test2</h1>
  </>);
})
// const rootOptions = defineComponent(function rootCo() {
//   return (<h1>test</h1>);
// })
// console.log(rootOptions)

// const rootCo = app.component('root-co', rootOptions)
// console.log(rootCo)

app.mount('#app')
