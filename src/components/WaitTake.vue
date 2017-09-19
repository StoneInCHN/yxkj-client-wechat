<template>
      <cell is-link link="../shoppingList">
        <div slot="icon" style="margin-right:10px">
          <img width="70px" height="70px" src="../assets/logo_big.png">
        </div>
        <div slot="title">
          <table>
          <tr class="address">
            <td>{{item.address}}</td>
          </tr>
           <tr class="price">
            <td>{{priceStr}}</td>
          </tr>
          <tr class="paymentTime">
            <td>{{item.paymentTime}}</td>
          </tr>
          </table>
        </div>               
        <span slot="value">
          <span class='number'>共{{item.number}}件商品</span>
        </span>                
      </cell>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  props: ['item'],
  data () {
    return {
    }
  },
  computed: {
    priceStr () {
      return '￥' + this.item.totalPrice.toFixed(2)
    }
  }
}
</script>

<style >
.address{
  color: #333333;
  font-size: 14px;
}
.price{
  color: #FF1E1E;
  font-size: 16px;
}
.paymentTime{
  color: #999999;
  font-size: 14px;
}
.number{
  width: 300px;
  color: #666;
  font-size: 14px;
  margin-right: 10px;
}
</style>
