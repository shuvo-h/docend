import './assets/main.css';
import './assets/scss/root_scss.scss';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createI18n } from 'vue-i18n';
import languages from "./i18n";
import VueDOMPurifyHTML from 'vue-dompurify-html';
import { domPurifyConfig } from './shared/helpers/HTMLSanitizer';
import WootUIKit from './components';
import store_vueX from './vueX_Store/store';
// import { VTooltip } from 'v-tooltip';

const i18n = createI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'en',
    // legacy: false,
    // globalInjection: true,
    messages: languages
})

const app = createApp(App);

// vue middlewwares
app.use(VueDOMPurifyHTML, domPurifyConfig);
app.use(WootUIKit);
// app.use(VTooltip)

app.use(store_vueX);
app.use(router)
// app.use(i18n)

// providers to access them in components 

// Provide the i18n instance with the key 'i18n' to work with inject
app.provide('i18n', i18n);
app.config.globalProperties.$t = i18n.global.t;     // Make i18n $t globally accessible


app.mount('#app');
