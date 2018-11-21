<template>
  <div id="app" style="height: 100%">
    <view-box ref="viewBox" body-padding-top="2.3rem">
      <x-header slot="header" :left-options="{showBack: false}" left-options.preventGoBack="true" :title="title" style="width:100%;position:absolute;left:0;top:0;z-index:100;" ><a slot="right">Feedback</a></x-header>
      <router-view/>
      <tabber-box></tabber-box>
    </view-box>
  </div>
</template>
<script>
import TabberBox from './components/Tabbar'
import { XHeader, ViewBox } from 'vux'
export default {
  name: 'App',
  components: {
    TabberBox, XHeader, ViewBox
  },
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>
<style lang="less">
  @import "./assets/css/classic.less";
</style>
