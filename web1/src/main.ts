import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import VueObserveVisibility from 'vue-observe-visibility';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueObserveVisibility);

app.mount('#app');
