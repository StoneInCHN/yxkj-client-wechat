<template>
  <div>
    <x-header title="输码购物"></x-header>
    <group class="address">
      <cell :title="title"  is-link link="searchStore">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/address.svg">
      </cell>
    </group>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Cell, Toast } from 'vux'

export default {
  components: {
    XHeader,
    XButton,
    Group,
    Cell,
    Toast
  },
  data () {
    return {
      title: '花样年广场T3优比家',
      message: '请确保您正在“花样年广场T3优比家”购买商品，如果不是，请选择您所在的优比家，避免造成商品丢失'
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
.btn{
  margin-top: 100px
}
.address .weui-cells{
  margin-top: 0
}
.address .vux-cell-primary{
  margin-left: 10px
}
</style>
