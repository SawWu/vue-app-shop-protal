<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon"/></van-col>
        <van-col span="16">
          <input type="text" class="search-input"/>
        </van-col>
        <van-col span="5">
          <van-button size="mini" style="margin: 0 0 0 0.5rem">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img :src="banner.imageUrl" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>

  import location from '../assets/images/location.png'
  import swiper1 from '../assets/images/1.jpg'
  import swiper2 from '../assets/images/2.jpg'
  import swiper3 from '../assets/images/3.jpg'

  export default {
    name: 'Home',
    components: {},
    computed: {},
    created() {

    },
    data: () => ({
      locationIcon: location,
      bannerPicArray: [
        {imageUrl: swiper1},
        {imageUrl: swiper2},
        {imageUrl: swiper3},
      ],
    }),
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    padding-top: .2rem;
    padding-left: .4rem;
  }

  .swiper-area {
    width: 20rem;
    clear: both;
  }

</style>
