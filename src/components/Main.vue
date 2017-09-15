<template>
  <div class="main">
    <x-header title="附近的优享空间" v-if="showHeader"></x-header>
    <div class="main-content">
      <group class="address">
        <cell isLink link="searchStore">
          <img slot="icon" width="20" class="address-icon" src="../assets/address.svg">
          <span slot="title" class="white">{{title}}</span>
        </cell>
      </group>
      <swiper :list="demo03_list" auto style="margin:0 auto;" height="150px" dots-class="custom-bottom" dots-position="center"></swiper>
      <search 
      :autoFixed= false
      auto-scroll-to-top 
      ref="search"></search>
      <div>
         <tab :line-width=2 active-color='#89B53F' v-model="index">
          <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
        </tab>
        <swiper v-model="index"  :show-dots="false" class="main-menu">
          <swiper-item v-for="(item, index) in list2" :key="index">
            <div class="tab-swiper vux-center">
               <grid>
                  <grid-item label="Grid" v-for="i in 18">
                    <span slot="label" class="main-menu-item">
                      <div>
                        <span class="goods-stock">余2件</span>
                      </div>
                      <div class="goods-img">
                        <img width="100"  src="../assets/drink.svg">
                      </div>
                      <div><span class="goods-title">农夫山泉</span></div>
                     <div class="goods-footer">
                        <span class="goods-price">￥3.1</span>
                        <img class="goods-btn-plus" src="../assets/plus.svg">
                     </div>
                    </span>
                  </grid-item>
               </grid>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
    <div class="main-footer">
       <div class="cart-goods" v-if="showGoods">
          <group class="cart">
            <cell title="已选商品" value="清空列表"></cell>
            <cart v-for= "item in items" :item="item" :key="item.id" :showTotalPrice="showTotalPrice"></cart>
          </group>
       </div>
       <div class="cart-content">
          <img  class="cart-logo" src="../assets/logo.png" alt="logo" @click="showGoodsInfo">
          <badge :text="goodsCount"></badge>
          <button class="cart-btn" @click="goShoppingList">去支付</button>
          <p class="cart-info"><span>合计:￥</span><strong>50</strong></p>
       </div>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Cell, Toast, Swiper, SwiperItem, Search, Tab, TabItem, Grid, GridItem, Badge } from 'vux'
import BScroll from 'better-scroll'
import Cart from '@/components/ShoppingCart'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]

const urlList = baseList.map((item, index) => ({
  url: 'javascript:',
  img: item.img,
  title: item.title
}))

const list = () => ['全部', '水饮牛奶', '饼干蛋糕', '肉干卤味', '香烟']
export default {
  components: {
    XHeader,
    XButton,
    Group,
    Cell,
    Toast,
    Swiper,
    SwiperItem,
    Search,
    Tab,
    TabItem,
    BScroll,
    Grid,
    GridItem,
    Badge,
    Cart
  },
  data () {
    return {
      showHeader: false,
      showGoods: false,
      title: '花样年广场T3优比家',
      message: '请确保您正在“花样年广场T3优比家”购买商品，如果不是，请选择您所在的优比家，避免造成商品丢失',
      demo03_list: urlList,
      data: [],
      list4: ['全部', '水饮牛奶', '饼干蛋糕', '肉干卤味', '香烟'],
      demo4: '水饮牛奶',
      list2: list(),
      demo2: '美食',
      index: 0,
      goodsCount: 2,
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
      }],
      showTotalPrice: false
    }
  },
  created () {
    this.$vux.toast.show({
      text: this.message,
      time: 5000,
      width: '200px',
      type: 'text'
    })
  },
  methods: {
    showGoodsInfo () {
      this.showGoods = !this.showGoods
    },
    goShoppingList () {
      this.$router.push('shoppingList')
    }
  }
}
</script>

<style>
.main{
  position: relative;
}
.main-content{
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.address .weui-cells{
  margin-top: 0
}
.address-icon{
  display:block;
  margin-right:5px;
}
.white{
  color: #fff;
}
.address .vux-cell-primary{
  margin-left: 10px
}
.address .weui-cell_access{
  background-color: #89B53F!important;
  color: #ffffff !important;
}
.menu{
  height: 50px;
  border:1px solid red;
}
.box1 {
  height: 50px;
  position: relative;
  width: 100%;
}
.box1-item {
  width: 100px;
  height: 50px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 10px;
  float: left;
  text-align: center;
  line-height: 30px;
}
.box1-item:first-child {
  margin-left: 0;
}
.wrapper{
  height: 200px;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.main-menu {
  overflow: inherit !important;
}
.main-menu > .vux-swiper {
  overflow: inherit !important;
}
.main-menu-item{
  position: relative;
}
.main-menu-item .goods-stock{
    position: absolute;
    left: 0;
    top: -45px;
    border: 1px solid #999999;
    border-radius: 20px;
    padding: 2px 5px;
}
.main-menu-item .goods-img{
  margin-top: 51px;
  margin-bottom: 31px;
}
.main-menu-item .goods-title{
    position: absolute;
    left: 0;
    top: 110px;
    color: #333333;
}
.goods-footer{
  position: relative;
}
.main-menu-item .goods-price{
  float: left;
  color: #FF012F;
}
.main-menu-item .goods-btn-plus{
  float: right;
  width: 25px;
  margin-right: 10px;
}
.main-footer{
  position: absolute;
  right: 0;
  left: 0;
  bottom: -64px;
}
.cart-goods{

}
.cart-content{
  height: 50px;
  width: 100%;
  background-color:#303135;
}
.cart-logo {
  width: 50px;
  height:50px;
  float: left;
}
.cart-btn{
  width: 100px;
  float: right;
  height: 50px;
  background-color: #89B53F;
  border: 1px;
}
.cart-info{
  height: 30px;
  padding: 10px 80px;
  color: #fff;
}
.cart-content .vux-badge{
  float: left;
}
</style>
