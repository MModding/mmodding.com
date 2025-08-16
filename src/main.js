import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "./style/main.scss"

const app = createApp(App).use(router).mount('#app');
