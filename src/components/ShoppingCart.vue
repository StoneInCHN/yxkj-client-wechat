<template>
      <cell :title="item.title" :inlineDesc="priceStr">
        <div slot="icon" class="cart-title">
          <span class=''>{{item.name}}</span>
          <img width="40"  src="../assets/drink.svg">
        </div>
           <inline-x-number slot="value" width="25px"  v-model="item.number" :min="minValue" button-style="round"></inline-x-number>
           <p class="total-price" v-if="showTotalPrice">￥{{total}}</p>
      </cell>
</template>

<script>
import { Group, Cell, InlineXNumber } from 'vux'

export default {
  components: {
    Group,
    Cell,
    InlineXNumber
  },
  props: ['item', 'showTotalPrice'],
  data () {
    return {
      minValue: 0
    }
  },
  computed: {
    total () {
      return this.item.price * this.item.number
    },
    priceStr () {
      return '￥' + this.item.price
    }
  }
}
</script>

<style >
.cart-title span{
  font-size: 10px
}
.total-price {
  float: right;
  padding: 0 5px;
  width: 40px;
  text-align: left;
}
</style>
