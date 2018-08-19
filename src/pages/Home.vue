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
              <div>￥{{item.price | moneyFilter}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floor-component :floorData="floor1" :floorTitle="floorName.floor1"/>
    <floor-component :floorData="floor2" :floorTitle="floorName.floor2"/>
    <floor-component :floorData="floor3" :floorTitle="floorName.floor3"/>
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item, index) in hotGoods" :key="index">
              <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
  import {toMoney} from '../filter/moneyFilter'
  import axios from 'axios'
  import {BASE_URL} from '../constants/serviceAPI'
  import location from '../assets/images/location.png'
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import FloorComponent from '../components/FloorComponent'
  import goodsInfo from '../components/GoodsComponent'

  export default {
    name: 'Home',
    components: {
      swiper,
      swiperSlide,
      FloorComponent,
      goodsInfo
    },
    data: () => ({
      locationIcon: location,
      bannerPicArray: [],
      category: [],
      adBanner: '',
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: [],
      loading: false,
      finished: false
    }),
    filters: {
      moneyFilter(money) {
        return toMoney(money)
      }
    },
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
          this.floor1 = res.data.data.floor1;
          this.floor2 = res.data.data.floor2;
          this.floor3 = res.data.data.floor3;
          this.floorName = res.data.data.floorName;
          this.hotGoods = res.data.data.hotGoods;
        }
      }).catch((err) => {

      });
    },
    methods: {
      onLoad() {

      }
    }
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

  .hot-area {
    text-align: center;
    font-size: 14px;
    line-height: 1.8rem;
  }

</style>
