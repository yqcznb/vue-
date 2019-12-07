// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import axios from 'axios'
import 'vant/lib/index.css';
import './assets/js/mock'//此部分引入的是我们所编写的mockjs文档
import '@vant/touch-emulator';
Vue.use(Vant);
Vue.prototype.axios = axios
// Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
