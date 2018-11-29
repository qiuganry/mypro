// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Swipe,SwipeItem} from 'vue-swipe'
import banner from './components/banner'
import fendian from './components/fendian'
import test from './components/test'
import jianjie from './components/jianjie'
import onlineServer from './components/onlineServer'

Vue.config.productionTip = false
//注册轮播
Vue.component('swipe',Swipe);
Vue.component('swipeItem',SwipeItem);
Vue.component('banner',banner);

//注册test
Vue.component('test',test);
//注册分店选择
Vue.component('fendian',fendian);
//注册简介
Vue.component('jianjie',jianjie);
//注册在线服务
Vue.component('onlineServer',onlineServer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
