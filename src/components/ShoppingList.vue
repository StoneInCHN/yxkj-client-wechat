<template>
  <div>
    <x-header title="购买列表"></x-header>
    <group class="cart">
      <cart v-for= "item in items" :item="item" :key="item.id"></cart>
    </group>
  </div>
</template>

<script>
import { XHeader, XButton, Group } from 'vux'
import Cart from '@/components/ShoppingCart'

export default {
  components: {
    XHeader,
    XButton,
    Cart,
    Group
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
      ]
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
</style>
