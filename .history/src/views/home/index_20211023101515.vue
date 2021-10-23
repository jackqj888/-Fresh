<template>
  <div class="wrapper">
    <div class="home-head"></div>
    <div class="home-container">
      <Carousel></Carousel>
      <div class="navigation">
        <div class="groups">
          <img src="@/assets/groups.png" alt="" class="image" />
          <span class="item-name">人才</span>
          <span class="item-title">Personnel</span>
        </div>
        <div class="popularScience">
          <img src="@/assets/popularScience.png" alt="" class="image" />
          <span class="item-name">科普</span>
          <span class="item-title">Popularization of science</span>
        </div>
        <div class="healthy">
          <img src="@/assets/healthy.png" alt="" class="image" />
          <span class="item-name">健康</span>
          <span class="item-title">Healthy</span>
        </div>
        <div class="test">
          <img src="@/assets/test.png" alt="" class="image" />
          <span class="item-name">考试</span>
          <span class="item-title">Examination</span>
        </div>
        <div class="mall">
          <img src="@/assets/mall.png" alt="" class="image" />
          <span class="item-name">商城</span>
          <span class="item-title">Shopping Mall</span>
        </div>
      </div>
      <div class="courseCommodity">
        <div class="course">
          <div class="course-title">
            <span class="course-font" >
              精品课程
            </span>
            <span class="course-font1">
              进入考培 >
            </span>
          </div>
          <div class="course-introduction">
            <span class="e-font">
              The examination and training system has launched high-<br>quality courses. I wish you a smooth passing of the<br> examination and training
            </span>
            <img src="@/assets/cirlces.png" class="image1"  />
          </div>
        </div>
        <div class="commodity">
          <div>
            <span>
              推荐商品
            </span>
          </div>
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
  display flex
  flex-direction column
  justify-content center
  lign-items center

  .navigation
   display flex
   justify-content center
   align-items center
   width 100%
   margin-top:  110px


   .groups,.popularScience,.healthy,.test,.mall
     display flex
     flex-direction column
     justify-content center
     align-items center
     .image
        margin 0 80px
     .item-name
        font-size: 30px
        line-height 22px

        font-family PingFang SC
        margin-bottom 8px
        margin 30px  80px 0 80px
     .item-title
        font-size 20px
        font-family PingFang SC
        color #AAAAAA
        line-height 22px
        font-weight bold
        margin-top 10px
        margin 30px  80px 0 80px
  .courseCommodity
    display flex
    justify-content center
    margin-top 157px
    .course
      width 588px
      height 329px
      background-color #FFF6EF
      margin-right 20px
      border-radius 15px
      .course-title
        display flex
        justify-content space-between
        margin 25px 53px 2px 49px
       .course-font
          font-size 30px
       .course-font1
          font-size 18px 
          color #FF9F59  
      .course-introduction 
        display flex
        justify-content space-between
        margin-left 49px   
       .e-font
         font-size 14px  
       .image1
         width 46px
         height 21px   
    .commodity
      width 588px
      height 327px
      background-color #FE5782
      margin-left 20px
      border-radius 15px
      
</style>
