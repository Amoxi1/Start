import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Layout from '../components/Layout'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Login
    }, {
      path: '/home',
      component: Layout,
      children: [{
        path: '',
        component: () => import('../pages/home')
      }]
    },
    {
      path: '/mocrm',
      component: Layout,
      children: [{
        path: '',
        component: () => import('../pages/mocrm')
      }]
    }
  ]
})
