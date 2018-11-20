<template>
  <tabbar  icon-class="icon" @on-index-change="clickTab">
    <tabbar-item link="/"  selected>
      <img class="icon" src="@/assets/img/home.png" slot="icon">
      <img src="@/assets/img/home_fill.png" slot="icon-active">
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/Forum">
      <img src="@/assets/img/forum.png" slot="icon">
      <img src="@/assets/img/forum_fill.png" slot="icon-active">
      <span slot="label">论坛</span>
    </tabbar-item>
    <tabbar-item link="/Service">
      <img src="@/assets/img/service.png" slot="icon">
      <img src="@/assets/img/service_fill.png" slot="icon-active">
      <span slot="label">服务</span>
    </tabbar-item>
    <tabbar-item link="/User">
      <img src="@/assets/img/user.png" slot="icon">
      <img src="@/assets/img/user_fill.png" slot="icon-active">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux'
export default {
  name: 'TabberBox',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
    }
  },
  methods: {
    clickTab (newIndex, oddIndex) {
      console.log(newIndex, oddIndex)
      if (newIndex === 0) {
        this.$store.state.title = '首页'
      } else if (newIndex === 1) {
        this.$store.state.title = '论坛'
      } else if (newIndex === 2) {
        this.$store.state.title = '服务'
      } else if (newIndex === 2) {
        this.$store.state.title = '我的'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
