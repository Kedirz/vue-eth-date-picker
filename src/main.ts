import { createApp } from 'vue'
import App from './App.vue'
import HeaderComp from './components/Header.vue'

const app = createApp(App)
app.component('HeaderComp', HeaderComp)
app.mount('#app')
