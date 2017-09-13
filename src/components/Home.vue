<template>
  <div>
    <x-header title="自助货柜"></x-header>
    <group >
      <cell title="message"  class="message"></cell>
    </group>
    <tabbar>
      <tabbar-item>
        <span slot="label" class="nav-span">
          <span @click="goShopping">购物</span>
          <ul class="nav-li" v-if="shopping">
            <li><a href="#/scanCode">扫码购物</a></li>
            <li><a href="#/enterCode">输码购物</a></li>
        </ul>
        </span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label" class="nav-span">
           <span @click="goPickUp">取货</span>
           <ul class="nav-li" v-if="pickUp">
            <li><a href="#/main">线上货柜</a></li>
            <li><a href="#/shoppingList">待取商品</a></li>
          </ul>
        </span>
      </tabbar-item>
      <tabbar-item badge="2">
        <span slot="label" class="nav-span">
           <span @click="callService">客服</span>
           <ul class="nav-li" v-if="service">
            <li><a href="">028-657367</a></li>
           </ul>
        </span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, Group, Cell, Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    XHeader,
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      shopping: false,
      pickUp: false,
      service: false
    }
  },
  methods: {
    goShopping () {
      this.pickUp = false
      this.service = false
      this.shopping = !this.shopping
    },
    goPickUp () {
      this.shopping = false
      this.service = false
      this.pickUp = !this.pickUp
    },
    callService () {
      this.shopping = false
      this.pickUp = false
      this.service = !this.service
    }
  }
}
</script>

<style scoped>
.message{
  text-align: center;
  height:100px;
}
.nav-span{
  position: relative;
  height: 50px;
  display: block;
}
.nav-span span{
  display: block;
}
.nav-li{
  position: absolute;
  bottom: 50px;
  width: 100%

}
.nav-li li{
  border:1px solid #999999;
  list-style-type: none;
}
</style>
