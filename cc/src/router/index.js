import Vue from 'vue'
import Router from 'vue-router'
import login from '@/iview/login.vue'
import eat from '@/iview/eat.vue'
import homework from '@/iview/homework.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
      
    },
    {
      path: '/eat',
      name: 'eat',
      component: eat
      
    },
    {
      path: '/homework',
      name: 'homework',
      component: homework
      
    },
   
  ]
})

export default router;