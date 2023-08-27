// cores
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/route'

// styles
import './style.css'

createApp(App).use(router).mount('#app')
