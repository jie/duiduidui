import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page/:pageName',
      name: 'page',
      component: page
    }
  ]
})
