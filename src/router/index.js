import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'

/** lazy loadするコンポーネント(ほぼ全て) */
const Todos = function () {
  return import('@/pages/todos')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
  ]
})
