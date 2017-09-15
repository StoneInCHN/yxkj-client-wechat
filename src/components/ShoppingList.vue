<template>
  <div>
    <x-header title="购买列表"></x-header>
    <group class="cart">
      <cart v-for= "item in items" :item="item" :key="item.id"></cart>
    </group>
    <tabbar>
      <tabbar-item>
        <span slot="label">清空列表</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">总计:￥50</span>
      </tabbar-item>
      <tabbar-item badge="2" @on-item-click="selectPaidType">
        <span slot="label">立即支付</span>
      </tabbar-item>
    </tabbar>
    <actionsheet v-model="showPayType">
      <div slot="header">
        <group title="选择支付方式">
          <radio :options="radio001" @on-change="change" class="text-align-left"></radio>
        </group>
        <x-button>确认支付</x-button>
      </div>
    </actionsheet>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Tabbar, TabbarItem, Actionsheet, Radio } from 'vux'
import Cart from '@/components/ShoppingCart'
import wp from '../assets/wechat_paid.svg'
import zp from '../assets/zhb_paid.svg'

export default {
  components: {
    XHeader,
    XButton,
    Cart,
    Group,
    Tabbar,
    TabbarItem,
    Actionsheet,
    Radio
  },
  data () {
    return {
      items: [{
        id: 1,
        title: '统一茉莉花茶500ml',
        price: 5,
        name: 'A23',
        number: 1
      },
      {
        id: 2,
        title: '康师傅冰红茶500ml',
        price: 3.5,
        name: 'A23',
        number: 1
      }
      ],
      showPayType: false,
      radio001: [{
        icon: wp,
        key: '001',
        value: '微信支付'
      }, {
        icon: zp,
        key: '002',
        value: '支付宝支付'
      }]
    }
  },
  methods: {
    selectPaidType () {
      this.showPayType = true
    },
    change (value, label) {
      console.log('change:', value, label)
    }
  }
}
</script>

<style>
.btn{
  margin-top: 100px
}
.cart .weui-cells{
  margin-top: 0
}
.text-align-left{
  text-align: left;
}
</style>
