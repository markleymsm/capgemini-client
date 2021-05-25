import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Deposito from '@/components/Deposito'
import Saque from '@/components/Saque'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/deposito',
      name: 'Deposito',
      component: Deposito
    },
    {
      path: '/saque',
      name: 'Saque',
      component: Saque
    }
  ]
})
