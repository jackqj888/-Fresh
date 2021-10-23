<template>
  <div class="wrapper">
    <div class="home-head" >
    </div>
    <div class="home-container">
      <Carousel></Carousel>
    </div>
    <div class="home-foot">
    </div>
  </div>
</template>

<script>
import api from '@/api'
import Carousel from "@/components/Carousel.vue"



export default {
  name: 'home',
  components: {
  Carousel
   
  },
  data() {
    return {
      ProductList: []
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
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.home-container {
  display: flex;
  justify-content:center;
  min-height: 100%;
  height: 700px;
}
.container-left {
  width: 400px;
  height: 500px;
}
.container-right {
  width: 900px;
}

</style>

