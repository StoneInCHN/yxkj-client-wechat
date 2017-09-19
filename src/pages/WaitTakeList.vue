<template>
  <div>
    <x-header title="待取商品"></x-header>
    <group class="cart">
      <WaitTake v-for= "item in items" :item="item" :key="item.id"></WaitTake>
    </group>
  </div>
</template>

<script>
import { XHeader, XButton, Group } from 'vux'
import WaitTake from '@/components/WaitTake'

export default {
  components: {
    XHeader,
    XButton,
    Group,
    WaitTake
  },
  data () {
    return {
      items: [{
        id: 1,
        address: '华阳年华T3大厅',
        totalPrice: 25,
        paymentTime: '2017-08-31 14:56:23',
        number: 5
      }]
    }
  },
  methods: {
  }
}
</script>

<style>
.btn{
  margin-top: 100px
}
.cart .weui-cells{
  margin: 0
}
</style>
