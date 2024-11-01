import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import MonacoContainer from './components/MonacoContainer.vue';
import './utils/monaco';

createApp(MonacoContainer).mount('#app');
