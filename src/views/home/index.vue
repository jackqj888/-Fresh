<template>
  <div class="wrapper">
    <div class="home-head" >
    </div>
    <div class="home-container">
      <div class="container-left" >
        <Aside></Aside>
      </div>
      <div class="container-right">
        <Main :cProductList="ProductList"></Main>
      </div>
    </div>
    <div class="home-foot">
    </div>
  </div>
</template>

<script>
import api from '@/api'
import Aside from "@/components/Aside.vue"
import Main from "@/components/Main.vue"


export default {
  name: 'home',
  components: {
  
    Aside,
    Main,
   
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
      const that = this;
      api.home.ProductList(categoryId).then((res) => {
        that.data = res
        that.ProductList = this.data.list
        console.log('vvv', that.ProductList)
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

