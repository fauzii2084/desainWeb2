import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router' // router kita buat di bawah
import './style.css' // Tailwind atau custom style

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
