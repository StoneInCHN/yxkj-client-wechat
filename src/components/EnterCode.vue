<template>
  <div>
    <x-header title="输码购物"></x-header>
    <group class="address">
      <cell isLink link="searchStore">
        <img slot="icon" width="20" class="address-icon" src="../assets/localize.png">
        <span slot="title" class="white">{{title}}</span>
      </cell>
    </group>
    <div>
      <div align="center" class="logo-div">
        <img width="80px" src="../assets/logo.png">
      </div>
      <div class="enter-div">
        <p class="enter-label">{{enterLabel}}</p>
        <input type="text" class="enter-text"/>
        <x-button type="primary" class="btn-ok" link="">{{ok}}</x-button>
      </div>      
    </div>
    <div class="bottom-div">
      <img width="100%" height="100%" src="../assets/bottom.png">
    </div>
  </div>
</template>

<script>
import { XHeader, XButton, Group, Cell, Toast, XInput } from 'vux'

export default {
  components: {
    XHeader,
    XButton,
    Group,
    Cell,
    Toast,
    XInput
  },
  data () {
    return {
      title: '花样年广场T3货柜',
      message: '请确保您正在“花样年广场T3优比家”购买商品，如果不是，请选择您所在的优比家，避免造成商品丢失',
      enterLabel: '请输编码购买',
      ok: '确定'
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
.address-icon{
  display:block;
  margin-right:5px;
}
.logo-div{
  margin:10% auto 5%;
}
.enter-div{
  margin:0 10%;
}
.enter-label{
  margin:1% 15px;
  color:#666666;
  font-family:MicrosoftYaHeiLight
}
.white{
  color: #fff;
}
.enter-text{
  border: 1px solid #FE7E00;
  border-radius: 25px;
  height: 40px;
  line-height: 40px;
  width: 99%;
  margin: 2% 0;
  text-indent: 20px;
  outline:none;
}
.btn-ok{
  border-radius:99px;
  margin: 2% 0;
  background-color:#FE7E00;
}
.bottom-div{
  position: absolute;
  bottom: 0px;
  height:30px;
  width:100%;
}
</style>
