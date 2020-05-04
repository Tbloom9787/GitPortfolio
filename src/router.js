import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/v', redirect: '/view' },
    {
      path: '/',
      name: 'home',
      // props: true,
      component: () => import('./views/Home.vue')
    },
  ]
})
