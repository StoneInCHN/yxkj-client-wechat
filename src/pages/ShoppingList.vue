<template>
  <div>
    <x-header title="购买列表"></x-header>
    <group class="cart">
      <ShoppingCart v-for= "item in items" :item="item" :key="item.id"></ShoppingCart>
    </group>
    <div class="scan-btn-again" v-if="showScanBtn">
      <x-button type="primary" class="scan-buy">
        <img width="10%" src="../assets/scan.png">
        <span>继续扫码购买</span>
      </x-button>
    </div>
    <tabbar class="bottomTab">
      <tabbar-item class="leftTab">
        <span slot="label">清空列表</span>
      </tabbar-item>
      <tabbar-item show-dot  class="centerTab">
        <span slot="label">总计:￥{{totalPay}}</span>
      </tabbar-item>
      <tabbar-item badge="2" @on-item-click="selectPaidType"  class="rightTab">
        <span slot="label">立即支付</span>
      </tabbar-item>
    </tabbar>
    <actionsheet v-model="showPayType" class="paySelect">
      <div slot="header">
        <group>
          <span slot="title" class="payTitle">选择支付方式</span>
          <radio :options="payWays" @on-change="change" v-model="payWayDefault" class="payWay"></radio>
        </group>
        <x-button type="primary" class="payOk" link="../payComplete">确认支付</x-button>
      </div>
    </actionsheet>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Tabbar, TabbarItem, Actionsheet, Radio } from 'vux'
import ShoppingCart from '@/components/ShoppingCart'
import wp from '../assets/wechat_paid.svg'
import zp from '../assets/zhb_paid.svg'

export default {
  components: {
    XHeader,
    XButton,
    Group,
    Tabbar,
    TabbarItem,
    Actionsheet,
    Radio,
    ShoppingCart
  },
  data () {
    return {
      showScanBtn: true,
      items: [{
        id: 1,
        title: '茉莉花茶',
        price: 5,
        name: 'A23',
        number: 1
      },
      {
        id: 2,
        title: '康师傅冰红茶',
        price: 3.5,
        name: 'A23',
        number: 1
      },
      {
        id: 3,
        title: '冰红茶',
        price: 3.5,
        name: 'A23',
        number: 1
      },
      {
        id: 4,
        title: '茉莉花茶',
        price: 5,
        name: 'A23',
        number: 1
      },
      {
        id: 5,
        title: '茉莉花茶',
        price: 5,
        name: 'A23',
        number: 1
      },
      {
        id: 6,
        title: '康师傅冰红茶',
        price: 3.5,
        name: 'A23',
        number: 1
      },
      {
        id: 7,
        title: '茉莉花茶',
        price: 5,
        name: 'A23',
        number: 1
      },
      {
        id: 8,
        title: '康师傅冰红茶',
        price: 3.5,
        name: 'A23',
        number: 1
      }],
      showPayType: false,
      payWayDefault: '001',
      payWays: [{
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
  computed: {
    totalPay () {
      var totalPay = 0
      for (var i = 0; i < this.items.length; i++) {
        totalPay = totalPay + this.items[i].price * this.items[i].number
      }
      return totalPay
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
.payWay{
  text-align: left;
  height: 100px;
}
.scan-btn-again{
  margin: 20px auto 80px auto;
  padding:auto 0;
  width: 70%;
}
.bottomTab{
  position: fixed;
  bottom: 0px;
}
.bottomTab span{
  text-align: center;
  color: #fff;
}
.bottomTab .leftTab{
  background-color: #303135;
  border-right: 1px solid #bbb;
}
.bottomTab .centerTab{
  background-color: #303135;
}
.bottomTab .rightTab{
  background-color: #89B53F;
}
.payOk{
  margin: 10px auto;
  width: 60% !important;
  background-color: #89B53F;
  border-radius: 30px;
}
.payTitle{
  margin-left: 20px;
}
.paySelect .weui-cells{
  margin-top: 10px;
}
.paySelect .weui-actionsheet__cell{
  text-align: left !important;
}
</style>
