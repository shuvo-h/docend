import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createI18n } from 'vue-i18n';
import languages from "./i18n";

const i18n = createI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'en',
    // legacy: false,
    // globalInjection: true,
    messages: languages
})

const app = createApp(App)

app.use(router)
// app.use(i18n)

// Provide the i18n instance with the key 'i18n'
app.provide('i18n', i18n);

app.config.globalProperties.$t = i18n.global.t; // Make $t globally accessible


app.mount('#app')
