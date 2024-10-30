import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootsrap from 'bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(router).use(bootsrap).mount('#app')
