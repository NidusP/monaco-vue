import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import { pinia } from './store';
import 'vuetify/dist/vuetify.css';

createApp(App).use(pinia).use(createVuetify()).mount('#app');
