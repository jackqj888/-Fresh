<template>
  <div class="wrapper">
    <div class="home-head"></div>
    <div class="home-container">
      <Carousel></Carousel>
      <div class="navigation">
        <div class="groups">
          <img src="@/assets/groups.png" alt="" />
          <span class="item-name">人才</span>
        </div>
        <div class="popularScience">
          <img src="@/assets/popularScience.png" alt="" />
          <span class="item-name">科普</span>
        </div>
        <div class="healthy">
          <img src="@/assets/healthy.png" alt="" />
          <span class="item-name">健康</span>
        </div>
        <div class="test">
          <img src="@/assets/test.png" alt="" />
          <span class="item-name">考试</span>
        </div>
        <div class="mall">
          <img src="@/assets/mall.png" alt="" />
          <span class="item-name">商城</span>
        </div>
      </div>
    </div>
    <div class="home-foot"></div>
  </div>
</template>

<script>
import api from '@/api'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    Carousel,
  },
  data() {
    return {
      ProductList: [],
    }
  },
  created() {
    this.getProductList()
  },
  methods: {
    getProductList(categoryId) {
      api.home.ProductList(categoryId).then((res) => {
        this.data = res
        this.ProductList = this.data.list
        console.log('vvv', this.ProductList)
      })
    },
  },
}
</script>

<style scoped lang="stylus">
html,
body
  height: 100%;

.wrapper
  display: flex;
  flex-direction: column;
  min-height: 100%;

.home-container
  min-height 100%;
  display: flex
  justify-content center
  flex-wrap: wrap
  width 100% 
  .navigation
   display flex
   justify-content space-around
   width 1200px
   margin-top 110px
   .groups,.popularScience,.healthy,.test,.mall
     display flex
     flex-direction column
     justify-content center
     align-items center
     .item-name  
        font-size: 30px
        line-height 22px
        margin-top 15px 
</style>
