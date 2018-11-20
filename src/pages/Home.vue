<template>
  <div class="home">
    <swiper class="swiper-box" :aspect-ratio="300/800" @on-index-change="bannerClick" v-model="banner_index">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in banner_list" :key="index">
        <img :src="item.img">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'
export default {
  name: 'Home',
  components: {
    Swiper, SwiperItem
  },
  data () {
    return {
      banner_list: [
        {
          img: 'http://img5.imgtn.bdimg.com/it/u=3781038653,3368771098&fm=26&gp=0.jpg',
          url: 'javascript:'
        },
        {
          img: 'http://img3.imgtn.bdimg.com/it/u=747259859,2102027878&fm=200&gp=0.jpg',
          url: 'javascript:'
        },
        {
          img: 'http://img1.imgtn.bdimg.com/it/u=1220868171,4218401108&fm=26&gp=0.jpg',
          url: 'javascript:'
        }
      ],
      banner_index: 0
    }
  },
  methods: {
    bannerClick () {
      console.log(111)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
