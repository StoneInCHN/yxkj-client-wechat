<template>
      <cell>
        <div slot="icon">
          <img width="40"  src="../assets/drink.svg">
        </div>
        <span slot="title">
          <span class='goods-title'>{{item.title}}</span>
        </span>   
        <span slot="value" style="margin-right:40px">
          <span class='number'>x {{item.number}}</span>
        </span>                
        <x-button type="primary" class="btn-status-ok" v-if="item.status == '已出柜'">{{item.status}}</x-button>
        <x-button type="primary" class="btn-status-error" v-else>{{item.status}}</x-button>
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

  }
}
</script>

<style >
.goods-title{
  margin-left:10%;
  font-size:14px;
  width:300px;
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
  width:300px !important;
}

</style>
