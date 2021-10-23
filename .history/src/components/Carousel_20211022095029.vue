<template>
  <div class="carousel-map">
    <el-carousel
      :interval="4000"
      @change="changeImg"
      style="width: 100%; margin-top: 1px;"
      trigger="click"
      height="43.5rem"
    >
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <el-image
          :class="className"
          style="width: 100%; height: 100%;"
          :src="item.imgUrl"
          fit="cover"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerList: [
        { imgUrl: require('../assets/banner/banner1.png') },
        { imgUrl: require('../assets/banner/banner2.png') },
        { imgUrl: require('../assets/banner/banner3.png') },
        { imgUrl: require('../assets/banner/banner4.png') },
      ], //轮播图地址 这块写你们的轮播图数组即可
      className: '', //轮播图名字
    }
  },
    mounted() {
      this.className = 'lun-img'
      setTimeout(() => {
        this.className = 'lun-img-two'
      }, 300)
    },
  methods: {
    // 轮播图切换
    changeImg() {
      // console.log(e, "当前下标");
      this.className = 'lun-img'
      setTimeout(() => {
        this.className = 'lun-img-two'
      }, 300)
    },
  },
}
</script>

<style scoped lang="stylus">
.carousel-map 
    width: 100%;
    height: 43.5rem;
    overflow: hidden;
    .lun-img 
      transform: scale(1.5);
    
    .lun-img-two 
      transition: all 3s;
      transform: scale(1);
    
    .el-carousel__item.is-animating 
      transition: all 0.6s;
    
    .el-carousel__button
      margin-top 40px
  
</style>
