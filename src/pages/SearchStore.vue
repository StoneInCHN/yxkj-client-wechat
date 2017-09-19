<template>
  <div>
    <x-header title="搜索附近的优比家"></x-header>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </search>
    <group title="最近使用">
      <cell title="花样年广场T3优比家" value="10米">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/address.svg">
      </cell>
      <cell title="花样年广场T4优比家" value="10米">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/address.svg">
      </cell>
    </group>
    <group title="附近">
      <cell title="银泰城3L优比家" value="10米"></cell>
      <cell title="新希望国际B座优比家" value="200米"></cell>
      <cell title="软件园A3优比家" value="200米"></cell>
    </group>
  </div>
</template>

<script>
import { XHeader, Search, Group, Cell, XButton } from 'vux'

export default {
  components: {
    XHeader,
    Search,
    Group,
    Cell,
    XButton
  },
  data () {
    return {
      value: '',
      results: []
    }
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      let rs = []
      for (let i = 0; i < 20; i++) {
        rs.push({
          title: `${val} result: ${i + 1} `,
          other: i
        })
      }
      this.results = val ? rs : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  }
}
</script>

<style >
.weui-cells__title{
  color: #89B53F !important;
}
.vux-label{
  color: #666666 !important;
}
.vux-header{
  background-color: #393A3F!important;
}
</style>
