import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ScanCode from '@/components/ScanCode'
import EnterCode from '@/components/EnterCode'
import ShoppingCart from '@/components/ShoppingCart'
import SearchStore from '@/components/SearchStore'
import ShoppingList from '@/components/ShoppingList'
import GoodsOutList from '@/pages/GoodsOutList'
import HelpTakeList from '@/pages/HelpTakeList'
import RefundSuccess from '@/pages/RefundSuccess'
import PayComplete from '@/pages/PayComplete'
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
      path: '/helpTakeList',
      name: 'HelpTakeList',
      component: HelpTakeList
    },
    {
      path: '/refundSuccess',
      name: 'RefundSuccess',
      component: RefundSuccess
    },
    {
      path: '/payComplete',
      name: 'PayComplete',
      component: PayComplete
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
