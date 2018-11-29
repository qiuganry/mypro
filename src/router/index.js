import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import home from '@/components/home'
//import banner from '@/components/banner'
import home from '@/components/home'
import order from '@/components/order'
import buyCard from '@/components/buyCard'
import my from '@/components/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
    	path: '/HelloWorld',
      name: 'HelloWorld',
      component:HelloWorld
    },
    {
    	path: '/order',
      name: 'order',
      component:order
    },
    {
    	path: '/buyCard',
      name: 'buyCard',
      component:buyCard
    },
    {
    	path: '/my',
      name: 'my',
      component:my
    }
  ]
})