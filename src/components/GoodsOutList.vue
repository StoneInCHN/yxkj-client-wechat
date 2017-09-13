<template>
  <div>
    <x-header title="商品出柜"></x-header>
    <div v-for= "itemGoods in items">
      <span class="category">
        <div align="center" class="category-ok" v-if="itemGoods.categoryStatus">{{itemGoods.category}}</div>
        <div align="center" class="category-error" v-else>{{itemGoods.category}}</div>
      </span>
      <group class="cart">
        <goods v-for= "item in itemGoods.list" :item="item" :key="item.id"></goods>
      </group>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group } from 'vux'
import Goods from '@/components/GoodsOut'

export default {
  components: {
    XHeader,
    XButton,
    Goods,
    Group
  },
  data () {
    return {
      items: [{
        category: 'A货柜',
        categoryStatus: true,
        list: [{
          id: 1,
          title: '茉莉绿茶',
          status: '已出柜',
          number: 1
        },
        {
          id: 2,
          title: '茉莉绿茶',
          status: '已出柜',
          number: 5
        }]
      },
      {
        category: 'B货柜',
        categoryStatus: true,
        list: [{
          id: 1,
          title: '茉莉绿茶',
          status: '已出柜',
          number: 5
        },
        {
          id: 2,
          title: '茉莉绿茶',
          status: '已出柜',
          number: 5
        },
        {
          id: 3,
          title: '茉莉绿茶',
          status: '已出柜',
          number: 5
        }]
      },
      {
        category: '缺货',
        categoryStatus: false,
        list: [{
          id: 1,
          title: '茉莉绿茶',
          status: '未出柜',
          number: 1
        },
        {
          id: 2,
          title: '茉莉绿茶',
          status: '未出柜',
          number: 5
        }]
      }]
    }
  }
}
</script>

<style>
.btn{
  margin-top: 100px
}
.cart .weui-cells{
  margin-top: 0
}
.category{
  width:100%;
  height:40px;
  background-color: #aaa;
  font-size:10px;
}
.category-ok{
  width: 60px;
  height:20px;
  border-radius: 5px;
  color: #fff;
  background-color: #89B53F;
  margin:10px;
}
.category-error{
  width: 60px;
  height:20px;
  border-radius: 5px;
  color: #fff;
  background-color: #FF1E1E;
  margin:10px;
}
</style>
