import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

export default new vuex.Store({
  state: {
    title: '首页'
  },
  mutations: {
    pChangeMe: function () {
      this.state.parent_text = '父元素自己改变自己'
    }
  }
})
