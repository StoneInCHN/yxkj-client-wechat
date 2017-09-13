import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScanCode from '@/components/ScanCode'
import EnterCode from '@/components/EnterCode'
import ShoppingCart from '@/components/ShoppingCart'
import SearchStore from '@/components/SearchStore'
import ShoppingList from '@/components/ShoppingList'
import GoodsOutList from '@/components/GoodsOutList'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scanCode',
      name: 'ScanCode',
      component: ScanCode
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/enterCode',
      name: 'EnterCode',
      component: EnterCode
    },
    {
      path: '/searchStore',
      name: 'SearchStore',
      component: SearchStore
    },
    {
      path: '/shoppingList',
      name: 'ShoppingList',
      component: ShoppingList
    },
    {
      path: '/goodsOutList',
      name: 'GoodsOutList',
      component: GoodsOutList
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
