<template>
  <div class="wrapper">
    <div class="home-head"></div>
    <div class="home-container">
      <Carousel></Carousel>
      <div class="navigation">
        <div class="groups">
          <img src="@/assets/groups.png" alt="" />
        </div>
        <div class="popularScience">
          <img src="@/assets/popularScience.png" alt="" />
        </div>
        <div class="healthy">
          <img src="@/assets/healthy.png" alt="" />
        </div>
        <div class="test">
          <img src="@/assets/test.png" alt="" />
        </div>
        <div class="mall">
          <img src="@/assets/mall.png" alt="" />
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
  .navigation
   display flex
   justify-content space-around
</style>
