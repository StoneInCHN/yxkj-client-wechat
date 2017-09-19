<template>
      <cell>
        <div slot="icon" style="margin:auto 10px">
          <img width="40" src="../assets/drink.svg">
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
        <span class="sub-plus">
          <inline-x-number slot="value" width="30px" v-model="item.number" :min="minValue" button-style="round" style="font-size:10px"></inline-x-number>
        </span>             
        <span slot="value">
          <p class="total-price">￥{{total}}</p>
        </span>                
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
  props: ['item'],
  data () {
    return {
      minValue: 0
    }
  },
  computed: {
    total () {
      return (this.item.price * this.item.number).toFixed(2)
    },
    priceStr () {
      return '￥' + this.item.price.toFixed(2)
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
  padding: 0 15px;
  width: 40px;
  text-align: left;
  color: #FF1E1E;
}
.sub-plus{
  font-size: 12px;
}
.sub-plus .vux-number-selector{
  width: 15px !important;
  height: 15px !important;
}
.sub-plus .vux-number-selector-plus{
  border: 1px solid #89B53F !important;
  background-color: #89B53F;
}
.sub-plus .vux-number-selector-sub{
  border: 1px solid #89B53F !important;
}
.sub-plus .vux-number-input{
  font-size: 15px;
  padding-bottom: 5px;
  height: 15px;
  padding: 3px 1px;
}
.sub-plus .vux-number-selector svg{
  width: 13px;
  height: 13px;
}
.sub-plus .vux-number-selector-plus svg{
  position: relative !important;
  fill: #fff !important;
  top: -4px !important;
}
.sub-plus .vux-number-selector-sub svg{
  fill: #89B53F !important;
  top: -4px !important;
}
</style>
