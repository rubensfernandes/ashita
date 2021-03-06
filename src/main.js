import './assets/bootstrap.min.css';
import 'nprogress/nprogress.css';
import 'bootstrap';
import 'open-iconic/font/css/open-iconic-bootstrap.css';

import Vue from 'vue'
import money from 'v-money'
import App from './App'
import router from '@/router'
import http from './services/http'

import VueMask from 'v-mask'
Vue.use(VueMask);

import Breadcrumb from "@/components/Breadcrumb";
Vue.component('breadcrumb', Breadcrumb);

import AlertMessage from "@/components/AlertMessage";
Vue.component('alertMessage', AlertMessage);

Vue.use(money, {precision: 4})

Vue.prototype.$http = http;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})