import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'

/** lazy loadするコンポーネント */
const Todos = function () {
  return import('@/pages/todos')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
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
