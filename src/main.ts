import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import messages from './messages.js';

import './assets/main.css'


const i18n = createI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages,
  })


const app = createApp(App)


app.use(i18n)
app.use(createPinia());
app.use(router);
app.mount('#app');
