import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue';
import App from './App.vue'
import Router from './routes/router';
import Store from './store';

createApp(App)
.use(Router)
.use(Store)
.mount('#app')