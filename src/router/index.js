import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import User from '@/pages/User'
import Forum from '@/pages/Forum'
import Service from '@/pages/Service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Forum',
      name: 'Forum',
      component: Forum
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})
