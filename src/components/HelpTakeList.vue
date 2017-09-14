<template>
  <div>
    <x-header title="帮忙代取"></x-header>
    <div style="width:100%">
      <div class="newTips" align="center"><img width="16" src="../assets/news.png"></div>
      <div class="helpTips">您的朋友需要您帮Ta领取商品,请尽快到{{address}}领取</div>
    </div>
    <div class="takeTotal">可以领取的商品为(<span>{{takeTotal}}</span>件)</div>
    <group class="groupList">
      <help v-for= "item in takeList" :item="item" :key="item.id"></help>
    </group>
    <div class="takeTotal">缺货的商品(<span>{{shortageTotal}}</span>件)</div>
    <group class="groupList">
      <help v-for= "item in shortageList" :item="item" :key="item.id"></help>
    </group>
    <div class="bottom-take">
      <div class="bottom-label">请确保你已到{{address}},再点击取货,否者有可能造成商品丢失！</div>
      <div class="bottom-btn"><x-button type="primary" class="take-ok" link="">{{take}}</x-button></div>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group } from 'vux'
import Help from '@/components/HelpTake'

export default {
  components: {
    XHeader,
    XButton,
    Help,
    Group
  },
  data () {
    return {
      take: '取货',
      address: '花样年华T3大厅优比家',
      takeList: [
        {
          id: 1,
          title: '茉莉绿茶',
          name: 'A23',
          price: '5.00',
          number: 3
        },
        {
          id: 2,
          title: '茉莉绿茶',
          name: 'A23',
          price: '5.00',
          number: 3
        }
      ],
      shortageList: [
        {
          id: 1,
          title: '茉莉绿茶',
          name: 'A23',
          price: '5.00',
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
  background-color: #eee;
  width: 90%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #464646;
  padding-left:10%;
  float: left;
}
.takeTotal span{
  color: red;
}
.bottom-take{
  position: absolute;
  bottom: 0px;
  height:120px;
  width:100%;
  background-color: #fff;
}
.bottom-label{
  color: #999999;
  font-size: 12px;
  padding:10px 20px;
  height:40px;
}
.bottom-btn{
  width: 40%;
  margin:0 30%;
}
.take-ok{
  border-radius:99px;
  background-color:#89B53F;
}
</style>
