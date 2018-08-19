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
          <img :src="banner.image" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img :src="cate.image" width="90%"/>
        <span v-text="cate.mallCategoryName"></span>
      </div>
    </div>
    <div>
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%"/>
              <div v-text="item.goodsName"></div>
              <div>￥{{item.price}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floor-component :floorData="floor"/>
  </div>
</template>
<script>
  import axios from 'axios'
  import {BASE_URL} from '../constants/serviceAPI'
  import location from '../assets/images/location.png'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import FloorComponent from '../components/FloorComponent'

  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide,
      FloorComponent
    },
    data: () => ({
      locationIcon: location,
      bannerPicArray: [],
      category: [],
      adBanner: '',
      recommendGoods: [],
      floor: [],
    }),
    computed: {
      swiperOption() {
        return {
          slidesPerView: 3
        }
      }
    },
    created() {
      axios.get(`${BASE_URL}/home`).then((res) => {
        if (res.status === 200) {
          this.bannerPicArray = res.data.data.slides;
          this.category = res.data.data.category;
          this.adBanner = res.data.data.advertesPicture;
          this.recommendGoods = res.data.data.recommend;
          this.floor = res.data.data.floor1;
        }
      }).catch((err) => {

      });
    },
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

  .type-bar {
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    & > div {
      padding: .3rem;
      font-size: 12px;
      text-align: center;
    }
  }

  .recommend-area {
    background-color: #fff;
    margin-top: .3rem;

    & > .recommend-title {
      border-bottom: 1px solid #eee;
      font-size: 14px;
      padding: .2rem;
      color: #e5017d;
    }

    & > .recommend-body {
      border-bottom: 1px solid #eee;
      overflow: hidden;

      .recommend-item {
        width: 99%;
        border-right: 1px solid #eee;
        font-size: 12px;
        text-align: center;
        overflow: hidden;
      }
    }
  }

</style>
