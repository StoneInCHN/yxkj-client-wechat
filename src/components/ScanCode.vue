<template>
  <div>
    <div class="backImage" :style ="backImage">
    <x-header title="扫码购物"></x-header>
    <div class="scan-btn" v-if="showBtn">
      <x-button type="primary" @click.native="showScanArea" class="scan-buy">
        <img width="10%" src="../assets/scan.png">
        <span>请扫码进行购买</span>
    </x-button>
    </div>
    <div v-else class="scanArea">
        <div class="area" align="center">
          <img width="80%" src="../assets/scan_rectangle_m.png">
        </div>
        <p class="tips">将条码放入框内，即可自动扫描</p>
        <p>条码识别不出？</p>
        <p class="tips2" @click="enterCode">手动输入编码</p>
    </div>
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
      showBtn: true,
      backImage: {
        backgroundImage: 'url(' + require('../assets/scan_background.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        marginTop: '0px'
      }
    }
  },
  methods: {
    showScanArea () {
      console.log('scan')
      this.showBtn = !this.showBtn
    },
    enterCode () {
      window.location.href = '#/enterCode'
    }
  }
}
</script>

<style>
  .scan-btn{
    margin-top: 320px;
    padding: 50px;
  }
  .scan-buy{
    border-radius:30px !important;
    background-color:#FD8918 !important;
    width: 80% !important;
    height: 50px;
  }
  .scan-buy span{
    padding-left: 5px;
    height: 50px;
    line-height: 50px;
  }
  .scan-buy img{
    margin-top:10px;
  }
  .scanArea{
    padding: 100px 30px 0 30px
  }
  .area{
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
    color: #FD8918;
  }
</style>
