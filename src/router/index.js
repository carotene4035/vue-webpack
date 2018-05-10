import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Compa from '@/components/compa'

/** lazy loadするコンポーネント */
const Compb = function () {
  import('@/components/compb')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'compa',
      component: Compa
    },
    {
      path: '/b',
      name: 'compb',
      component: Compb
    }
  ]
})
