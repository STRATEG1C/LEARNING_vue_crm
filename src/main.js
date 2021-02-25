import { createApp } from 'vue';
import { VuelidatePlugin } from '@vuelidate/core';
import router from './router';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

createApp(App).use(store).use(VuelidatePlugin).use(router).mount('#app');
