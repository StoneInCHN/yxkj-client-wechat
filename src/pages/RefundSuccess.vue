<template>
  <div style="background-color:#fff;height:100%">
    <x-header title="退款成功"></x-header>
    <div style="width:100%">
      <div class="refundTotal" align="center">
        <img width="16" src="../assets/ok.png">
        <span>￥{{refundTotal.toFixed(2)}}</span>
      </div>
      <div class="refundTips">你的退款已经成功,请前往你的支付账号确认是否到账</div>
    </div>
    <div class="refundTitle">
      <span>退款商品（{{refundList.length}}件）</span>
      <span>总价：￥{{refundTotal.toFixed(2)}}</span>
    </div>
    <hr class="line">
    <group class="groupList">
      <GoodsCart v-for= "item in refundList" :item="item" :key="item.id"></GoodsCart>
    </group>
    <div style="position:absolute;bottom:0;left:0;background-color: #fff"></div>
  </div>
</template>

<script>
import { XHeader, XButton, Group } from 'vux'
import GoodsCart from '@/components/GoodsCart'

export default {
  components: {
    XHeader,
    XButton,
    GoodsCart,
    Group
  },
  data () {
    return {
      take: '取货',
      address: '花样年华T3大厅优比家',
      refundList: [
        {
          id: 1,
          title: '茉莉绿茶',
          name: 'A23',
          price: 5,
          number: 3
        },
        {
          id: 2,
          title: '茉莉绿茶',
          name: 'A23',
          price: 5,
          number: 3
        }
      ]
    }
  },
  computed: {
    refundTotal () {
      var refundTotal = 0
      for (var i = 0; i < this.refundList.length; i++) {
        refundTotal = refundTotal + this.refundList[i].number * this.refundList[i].price
      }
      return refundTotal
    }
  }
}
</script>

<style>
.groupList{
  width: 100%;
  float: left;
}
.groupList .weui-cells{
  margin-top: 0
}
.refundTotal{
  text-align: center;
  height: 100px;
  line-height: 100px;
  color: #333;
}
.refundTotal span{
  font-size: 22px;
  padding-left: 5px;
}
.refundTips{
  padding:0 15px 30px;
  font-size: 14px;
  color: #898989;
}
.refundTitle{
  padding:10px 15px;
  font-size: 13px;
  color: #AFAFAF;
}
.refundTitle span{
  padding-right:10px;
}
.line{
  background-color: #C4C4C4;
  border-width: 0;
  height: 1px;
}
</style>
