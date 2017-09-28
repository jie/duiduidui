import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import page from '@/components/page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'duiduidui',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page/:key',
      name: 'page',
      component: page
    }
  ]
})
