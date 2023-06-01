import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import messages from '@intlify/unplugin-vue-i18n/messages';
import './assets/main.css';
import VueObserveVisibility from 'vue-observe-visibility';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    availableLocales: ['en', 'eus'],
    messages: messages,
});
const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(router);
app.use(VueObserveVisibility);

app.mount('#app');
