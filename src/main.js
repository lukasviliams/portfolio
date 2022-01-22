import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './global.css'
import VeevalidatePlugin from './plugins/validation'

const app = createApp(App);

app.use(router)
app.use(VeevalidatePlugin)
app.mount('#app')
