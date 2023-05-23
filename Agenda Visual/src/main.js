import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

createApp(App).use(router).use(store).mount('#app')
