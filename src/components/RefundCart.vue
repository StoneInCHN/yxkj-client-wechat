<template>
      <cell>
        <div slot="icon" style="margin:auto 20px">
          <img width="40" style=""  src="../assets/drink.svg">
        </div>
        <div slot="title">
          <table>
          <tr class="title">
            <td>{{item.title}}</td>
          </tr>
           <tr class="name">
            <td>{{item.name}}</td>
          </tr>
          <tr class="price">
            <td>{{priceStr}}</td>
          </tr>
          </table>
        </div>               
        <span slot="value">
          <span class='number'>{{item.number}} 件</span>
          <br>
          <span class="refundBtn" @click="refund"><label>退款</label></span>
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
      showScrollBox: false
    }
  },
  computed: {
    priceStr () {
      return '￥' + this.item.price.toFixed(2)
    }
  },
  methods: {
    refund: function (event) {
      this.showScrollBox = true
      alert(this.showScrollBox)
    }
  }
}
</script>

<style >
.title{
  color: #333333;
  font-size: 14px
}
.name{
  color: #999999;
  font-size: 12px
}
.price{
  color: #FF1E1E
}
.cart-title span{
  font-size: 10px
}
.btn-status-ok {
  border-radius:5px;
  font-size:6px;
  color:#fff;
  padding:2px 8px;
  background-color:#89B53F;
}
.btn-status-error{
  border-radius:5px;
  font-size:6px;
  color:#fff;
  padding:2px 8px;
  background-color:#cccccc;
}
.number{
  width: 300px;
  color: #666;
  margin-right: 10px;
}
</style>
