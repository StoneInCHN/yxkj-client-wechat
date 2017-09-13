<template>
  <div>
    <x-header title="扫码购物"></x-header>
    <div class="scan-btn" v-if="showBtn">
      <x-button class="btn" @click.native="showScanArea">请扫码进行购买</x-button>
    </div>
    <div v-else class="scanArea">
        <div class="area"></div>
        <p class="tips">将条码放入框内，即可自动扫描</p>
        <p>条码识别不出？</p>
        <p class="tips2" @click="en">手动输入商品编码</p>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton } from 'vux'

export default {
  components: {
    XHeader,
    XButton
  },
  data () {
    return {
      showBtn: true
    }
  },
  methods: {
    showScanArea () {
      console.log('scan')
      this.showBtn = !this.showBtn
    }
  }
}
</script>

<style>
  .btn{
    margin-top: 300px;
  }
  .scan-btn{
    padding: 50px;
  }
  .scanArea{
    padding: 100px 30px 0 30px
  }
  .area{
    height: 200px;
    border: 1px solid #b1b2b2;
    margin-bottom: 20px;
  }
  .scanArea p{
    text-align: center;
    font-size: 10px;
    margin-top: 10px;
  }
  .tips{
    margin-bottom: 50px;
  }
  .tips2{
    color: blue;
  }
</style>
