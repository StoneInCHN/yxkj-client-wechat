<template>
  <div>
    <x-header title="附近的优比家"></x-header>
    <group class="address">
      <cell :title="title"  is-link link="searchStore">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/address.svg">
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
</template>

<script>
import { XHeader, XButton, Group, Cell, Toast, Swiper, SwiperItem, Search, Tab, TabItem, Grid, GridItem } from 'vux'
import BScroll from 'better-scroll'
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
    GridItem
  },
  data () {
    return {
      title: '花样年广场T3优比家',
      message: '请确保您正在“花样年广场T3优比家”购买商品，如果不是，请选择您所在的优比家，避免造成商品丢失',
      demo03_list: urlList,
      data: [],
      list4: ['全部', '水饮牛奶', '饼干蛋糕', '肉干卤味', '香烟'],
      demo4: '水饮牛奶',
      list2: list(),
      demo2: '美食',
      index: 0
    }
  },
  created () {
    this.$vux.toast.show({
      text: this.message,
      time: 5000,
      width: '200px',
      type: 'text'
    })
  }
}
</script>

<style>
.address .weui-cells{
  margin-top: 0
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

</style>
