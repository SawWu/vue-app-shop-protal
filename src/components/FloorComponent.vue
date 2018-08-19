<template>
  <div class="floor">
    <div class="floor-anomaly">
      <div class="floor-one"><img :src="floorData1.image" width="100%"/></div>
      <div>
        <div class="floor-two">
          <img :src="floorData2.image" width="100%"/>
        </div>
        <div>
          <img :src="floorData3.image" width="100%"/>
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item ,index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%"/>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'FloorComponent',
    props: ['floorData'],
    data: () => ({
      floorData1: {},
      floorData2: {},
      floorData3: {},
    }),
    computed: {},
    created() {
      this.floorData1 = this.floorData[0];
      this.floorData2 = this.floorData[1];
      this.floorData3 = this.floorData[2];
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .floor-anomaly {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;

    & > div {
      width: 10rem;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }

    .floor-one {
      border-right: 1px solid #ddd;

    }

    .floor-two {
      border-bottom: 1px solid #ddd;
    }
  }

  .floor-rule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;

    & div {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 10rem;
      border-bottom: 1px solid #ddd;

      &:nth-child(odd) {
        border-right: 1px solid #ddd;
      }
    }
  }
</style>
