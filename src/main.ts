import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue';
import App from './App.vue'
import Router from './routes/router';

const app = createApp(App)

app.use(Router)

app.mount('#app')