import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import "./style/main.scss"

const app = createApp(App);

app.config.globalProperties.$artRoot = "https://raw.githubusercontent.com/MModding/art/main";

app.use(router).mount('#app')
