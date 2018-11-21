<template>
  <div class="home">
    <swiper class="swiper-box" :aspect-ratio="300/800" @on-index-change="bannerClick" v-model="banner_index" style="padding-bottom:0.5rem">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in banner_list" :key="index" style="padding-bottom:0.5rem">
        <!--<img :src="item.img">-->
        <x-img :src="item.img"></x-img>
      </swiper-item>
    </swiper>
    <flexbox justify="space-between" class="title-box">
      <flexbox-item><div class="left">领养机构</div></flexbox-item>
      <flexbox-item><div class="right">共20家</div></flexbox-item>
    </flexbox>
    <scroller lock-y scrollbar-x class="lyjg-box">
      <div class="list clear">
        <div class="part" v-for="item in lyjg_list" :key="item.id">
          <div class="img-box"><img :src="item.img" alt=""></div>
          <div class="name">{{ item.name }}</div>
          <div class="shop">{{ item.shop }}</div>
          <div class="score">
            <p class="num">待领养{{item.num}}只</p>
            <div class="heart-box">
              <img v-for="(sc,idx) in item.score" :key="idx" v-if="idx<item.score" src="@/assets/img/heart_full.png" alt="">
              <img v-for="(sc,idx) in 5-item.score" :key="idx" v-if="idx<5-item.score" src="@/assets/img/heart_null.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </scroller>
    <flexbox justify="space-between" class="title-box">
      <flexbox-item><div class="left">寄养中心</div></flexbox-item>
    </flexbox>
    <flexbox justify="space-between" class="jyzx-box" :gutter="10">
      <flexbox-item>
        <div class="left">
          <p>机构</p>
          <p>INSTTTUTIONS</p>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="right">
          <p>个人</p>
          <p>PERSONAL</p>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox justify="space-between" class="title-box">
      <flexbox-item><div class="left">宠萌明星</div></flexbox-item>
    </flexbox>
    <div class="cmmx-box">
      <flexbox justify="space-between" class="part" :gutter="10">
        <flexbox-item>
          <div></div>
        </flexbox-item>
        <flexbox-item><div class="right">共20家</div></flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem, XImg, Cell, Flexbox, FlexboxItem, Scroller } from 'vux'
export default {
  name: 'Home',
  components: {
    Swiper, SwiperItem, XImg, Cell, Flexbox, FlexboxItem, Scroller
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
      banner_index: 0,
      lyjg_list: [
        {
          id: 1,
          img: 'http://img1.imgtn.bdimg.com/it/u=163711717,1335413376&fm=200&gp=0.jpg',
          name: '布拉吉',
          shop: '爱助宠物之家',
          num: '20',
          score: 5
        },
        {
          id: 2,
          img: 'http://img1.imgtn.bdimg.com/it/u=3074798371,2768818906&fm=200&gp=0.jpg',
          name: '布拉吉',
          shop: '爱助宠物之家',
          num: '20',
          score: 4
        },
        {
          id: 3,
          img: 'http://img0.imgtn.bdimg.com/it/u=257643722,3894171946&fm=200&gp=0.jpg',
          name: '布拉吉',
          shop: '爱助宠物之家',
          num: '20',
          score: 5
        },
        {
          id: 4,
          img: 'http://img2.imgtn.bdimg.com/it/u=3964575684,7654796&fm=200&gp=0.jpg',
          name: '布拉吉',
          shop: '爱助宠物之家',
          num: '20',
          score: 3
        }
      ],
      aa: 'dwdwdd'
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
