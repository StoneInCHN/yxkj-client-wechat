<template>
  <div>
    <x-header title="支付完成"></x-header>
    <div style="width:100%">
      <div class="newTips" align="center"><img width="16" src="../assets/news.png"></div>
      <div class="helpTips">您购买的商品已经完成支付,请尽前往{{address}}领取商品，或者让朋友帮忙领取</div>
    </div>
    <div class="takeTotal">
      <span>可以领取的商品为(<label>{{takeTotal}}</label>件)</span>
      <span class="orderNo">订单编号{{orderNo}}</span>
    </div>
    <group class="groupList">
      <GoodsCart v-for= "item in takeList" :item="item" :key="item.id"></GoodsCart>
    </group>
    <div class="takeTotal">
      <span>缺货的商品(<label>{{shortageTotal}}</label>件)</span>
      <span class="refundBtn" @click="refund"><label>全部退款</label></span>
    </div>
    <group class="groupList">
      <RefundCart v-for= "item in shortageList" :item="item" :key="item.id"></RefundCart>
    </group>
    <div class="bottom-take">
      <div class="bottom-label">请确保你已到{{address}},再点击取货,否者有可能造成商品丢失！</div>
      <div class="bottom-btn"><x-button type="primary" class="take-ok" link="../goodsOUtList">{{take}}</x-button></div>
    </div>
    <div class="helpTake">
      <div class="bottom-label">恰好有朋友在{{address}},叫Ta帮忙代取。</div>
      <div class="bottom-btn" @click="prompting"><x-button type="primary" class="take-ok" >{{helpTake}}</x-button></div>
    </div>
    <div v-transfer-dom class="refund-dialog">
      <x-dialog v-model="showScrollBox">
          <table>
            <tr><td colspan="2" class="dialog-content">{{refundTips}}</td></tr>
            <tr class="dialog-btn">
              <td class="vux-close" @click="showScrollBox=false">取消</td>
              <td class="vux-close" @click="refundOK">确认</td>
            </tr>
          </table>
      </x-dialog>
    </div>
    <masker color="555555" :opacity="0.7" fullscreen :class="{'hide-masker': hideMasker == true}">
        <div slot="content" style="width:100%;"  align="center">
          <img class="prompting" src="../assets/prompting.png">
          <img class="know" src="../assets/know.png" @click="know">
        </div>    
    </masker>
  </div>

</template>

<script>
import { XHeader, XButton, Group, Masker, Toast, XDialog, TransferDomDirective as TransferDom } from 'vux'
import GoodsCart from '@/components/GoodsCart'
import RefundCart from '@/components/RefundCart'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    XButton,
    Group,
    Masker,
    Toast,
    XDialog,
    GoodsCart,
    RefundCart
  },
  data () {
    return {
      showScrollBox: false,
      hideMasker: true,
      take: '取货',
      helpTake: '找人代取',
      address: '花样年华T3大厅优比家',
      refundTips: '商品在光速配货中，是否要狠心退款？',
      orderNo: '10000000001',
      takeList: [
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
      ],
      shortageList: [
        {
          id: 1,
          title: '茉莉绿茶',
          name: 'A23',
          price: 5,
          number: 3
        }
      ]
    }
  },
  computed: {
    takeTotal () {
      var takeTotal = 0
      for (var i = 0; i < this.takeList.length; i++) {
        takeTotal = takeTotal + this.takeList[i].number
      }
      return takeTotal
    },
    shortageTotal () {
      var shortageTotal = 0
      for (var i = 0; i < this.shortageList.length; i++) {
        shortageTotal = shortageTotal + this.shortageList[i].number
      }
      return shortageTotal
    }
  },
  methods: {
    know: function (event) {
      this.hideMasker = true
    },
    prompting: function (event) {
      this.hideMasker = !this.hideMasker
    },
    refund: function (event) {
      this.showScrollBox = true
    },
    refundOK: function (event) {
      // this.showScrollBox = false
      window.location.href = '#/RefundSuccess'
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
.newTips{
  background-color: #F77F7A;
  width: 10%;
  height: 40px;
  float: left;
}
.newTips img{
  margin:12px auto;
}
.helpTips{
  background-color: #F77F7A;
  width: 85%;
  height: 40px;
  font-size: 12px;
  color: #fff;
  float: left;
  padding-right:5%;
}
.takeTotal{
  background-color: #f7f7f7;
  width: 95%;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  color: #464646;
  padding-left:5%;
  float: left;
}
.takeTotal label{
  color: red;
}
.orderNo{
  color: #999999;
  font-size: 12px;
  float: right;
  margin-right: 10px;
}
.bottom-take{
  position: absolute;
  bottom: 110px;
  height:110px;
  width:100%;
  background-color: #fff;
}
.bottom-label{
  color: #999999;
  font-size: 12px;
  padding:10px 20px;
  height:auto;
}
.bottom-btn{
  width: 40%;
  margin:0 30%;
}
.take-ok{
  border-radius:20px;
  background-color:#89B53F;
}
.helpTake{
  position: absolute;
  bottom: 0px;
  height:110px;
  width:100%;
  background-color: #fff;
}
.helpTake .take-ok{
  border-radius:20px;
  background-color:#FD8918;
}
.refundBtn{
  border:1px solid #ccc;
  border-radius: 10px;
  background-color:#fff;
  color: #999999;
  float: right;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  margin: 7px;
  padding: 0 5px;
  cursor: pointer;
}
.refundBtn label{
  padding: 0 7px;
  color: #999999;
}
.prompting{
  width:80%;
  margin:5px 10px auto auto;
  float:right
}
.know{
  width:20%;  
  margin: 20px auto
}
.hide-masker{
  display: none;
}
.refund-dialog .weui-dialog{
  border-radius:10px;
}
.refund-dialog table{
  border-spacing:0;
  border-collapse:collapse;
}
.refund-dialog td{
  padding: 10px;
}
.dialog-content{
  padding:20px 35px !important;
  text-align:left;
}
.dialog-btn{
  height: 50px;
}
.dialog-btn td:nth-child(1){
  color:#FD8918;
  border-top:1px solid #ccc;
  border-right:1px solid #ccc;
}
.dialog-btn td:nth-child(2){
  border-top:1px solid #ccc;
}
</style>
