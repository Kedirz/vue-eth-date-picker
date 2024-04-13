import { createApp } from 'vue'
import App from './App.vue'
import HeaderComp from './components/Header.vue'
import './assets/icons/style.css'

const app = createApp(App)
app.component('HeaderComp', HeaderComp)
app.mount('#app')
