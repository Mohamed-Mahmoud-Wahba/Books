import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/scss/global.scss'
import "sal.js/dist/sal.css";
import sal from "sal.js";
import "swiper"
import 'swiper/css';
import i18n from './i18n'
import * as apolloProvider from './apollo.provider'

window.sal = sal;

createApp(App).use(i18n).use(i18n).use(store).use(router).use(apolloProvider.prvider).mount('#app')
