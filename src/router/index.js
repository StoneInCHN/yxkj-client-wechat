import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ScanCode from '@/pages/ScanCode'
import EnterCode from '@/pages/EnterCode'
import SearchStore from '@/pages/SearchStore'
import ShoppingList from '@/pages/ShoppingList'
import GoodsOutList from '@/pages/GoodsOutList'
import HelpTakeList from '@/pages/HelpTakeList'
import RefundSuccess from '@/pages/RefundSuccess'
import PayComplete from '@/pages/PayComplete'
import WaitTakeList from '@/pages/WaitTakeList'
import Main from '@/pages/Main'

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
      path: '/waitTakeList',
      name: 'WaitTakeList',
      component: WaitTakeList
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
