<template>
  <div id="app">
    <x-header :left-options="{showBack: false}" left-options.preventGoBack="true" :title="title"><a slot="right">Feedback</a></x-header>
    <router-view/>
    <tabber-box></tabber-box>
  </div>
</template>
<script>
import TabberBox from './components/Tabbar'
import { XHeader } from 'vux'
export default {
  name: 'App',
  components: {
    TabberBox, XHeader
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
