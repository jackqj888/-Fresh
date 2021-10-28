<template>
  <div class="carousel-map">
    <swiper :options="headerOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <img :src="item.bannerSrc" />
      </swiper-slide>
      <!-- 左右箭头 -->
       <!-- <div class="swiper-button-prev" slot="button-prev"></div> 
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
    <div class="banner-pagination">
      <!-- 分页器 -->
      <div class="swiper-pagination" ></div>
    </div>
  
  </div>
</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      headerOption:{
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          centeredSlides:true
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 4000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true
      }
    }
  },
  created(){
    console.log('bbb',this.banner);
  },

  mounted() {
    this.className = 'lun-img'
    setTimeout(() => {
      this.className = 'lun-img-two'
    }, 300)
  },
  methods: {
  
  },
}
</script>

<style scoped lang="stylus">
.swiper-container 
  max-width: 100%;
  max-height: 100%;
  display: block
  margin: auto

.carousel-map
  width: 100%
  height:500px
  overflow: hidden
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  
  

.banner-pagination
  height: 30px
  width 100%
  display flex
  justify-content center
  margin-top 47px



.banner-pagination >>> .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  font-size: 12px;
  opacity: 1;
  background: #FBD0D0
  margin 0 20px
  
 
}
.banner-pagination >>> .swiper-pagination-bullet-active {
  color:#fff;
  background: #ff51d6
}
</style>
