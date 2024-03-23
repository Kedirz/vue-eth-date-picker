import { createApp } from 'vue'
import App from './App.vue'
import HeaderComp from './components/Header.vue'
import SvgButtons from './components/shared-assets/SvgButtons.vue'

const app = createApp(App)
app.component('HeaderComp', HeaderComp)
app.component('SvgButtons', SvgButtons)
app.mount('#app')
