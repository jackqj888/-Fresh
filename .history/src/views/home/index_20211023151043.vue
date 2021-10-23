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
            <span class="course-font">
              精品课程
            </span>
            <span class="course-font1">
              进入考培 >
            </span>
          </div>
          <div class="course-introduction">
            <span class="e-font">
              The examination and training system has launched high-
              <br />
              quality courses. I wish you a smooth passing of the
              <br />
              examination and training
            </span>
            <img src="@/assets/cirlces.png" class="image1" />
          </div>
        </div>
        <div class="commodity">
          <div class="commodity-title">
            <span class="commodity-font">
              推荐商品
            </span>
            <span class="commodity-font1">
              进入商城 >
            </span>
          </div>
          <div class="commodity-introduction">
            <span class="e-font">
              Shopping mall system shelves recommended
              <br />
              goods, value for money, I wish you a happy
              <br />
              shopping
            </span>
            <img src="@/assets/cirlces1.png" class="image2" />
          </div>
        </div>
      </div>
      <div class="knowledge">
        <div>
          <p class="knowledge-font">科普知识</p>
          <p class="e-font">
            Popular science knowledge solution, your breast management expert
          </p>
          <p class="go">点击进入 ></p>
        </div>
        <div class="Preview">
          <div class="Preview-left">
            <div>
              <img src="@/assets/Preview1.png" class="Preview1" />
              <p class="Preview-title">标题一</p>
              <div class="user">
                <img src="@/assets/no-data.png" class="user-image" />

                <div class="userName">
                  <p class="userName-font">汝小果</p>
                  <p class="userName-time">2021-8-5-13 : 19 : 18</p>
                </div>
              </div>
              <p>
                <button class="btn">点击查看</button>
              </p>
              
            </div>
          </div>
          <div class="Preview-middle">
            <div>
              <img src="@/assets/Preview1.png" class="Preview1" />
              <p class="Preview-title">标题二</p>
              <div class="user">
                <img src="@/assets/no-data.png" class="user-image" />

                <div class="userName">
                  <p class="userName-font">汝小果</p>
                  <p class="userName-time">2021-8-5-13 : 19 : 18</p>
                </div>
              </div>
            </div>
          </div>
          <div class="Preview-right">
            <div>
              <img src="@/assets/Preview1.png" class="Preview1" />
              <p class="Preview-title">标题三</p>
              <div class="user">
                <img src="@/assets/no-data.png" class="user-image" />
                <div class="userName">
                  <p class="userName-font">汝小果</p>
                  <p class="userName-time">2021-8-5-13 : 19 : 18</p>
                </div>
              </div>
            </div>
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
        margin 25px 38px 2px 49px
       .course-font
          font-size 30px
          font-family PingFang SC
          font-weight bold
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
         width 45px
         height 20px
         margin-right 53px
    .commodity
      width 588px
      height 327px
      background-color #FFDDE6
      margin-left 20px
      border-radius 15px
     .commodity-title
        display flex
        justify-content space-between
        margin 25px 24px 2px 49px
        .commodity-font
          font-size 30px
          font-family PingFang SC
          font-weight bold
        .commodity-font1
          font-size 18px
          color #FE96B1
     .commodity-introduction
        display flex
        justify-content space-between
        margin-left 49px
       .e-font
         font-size 14px
       .image2
         width 20px
         height 45px
         margin-right 48px
  .knowledge
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-top 79px
    
    .knowledge-font
      font-size 30px
      font-family PingFang SC
      font-weight bold
      text-align center
      line-height 30px
      margin 0
    .e-font
      font-size 16px
      margin 2px
    .go
      font-size 22px
      text-align center
      margin-top 30px
  .Preview
    display flex
    justify-content center
    .Preview-left
      width 380px
      height 460px
      border 2px solid  #F1F1F1
      border-radius 15px
      .Preview1
        width 380px
        height 226px
        border-radius 15px
      .Preview-title
        font-size 22px
        font-family PingFang SC
        font-weight bold
      .user
        display flex
        justify-content flex-start
        margin-bottom 38px
        .user-image
          width 44px
          height 44px
          border-radius 50%
          margin-right 8px
        .userName
          width 187px
          height 16px
          
          .userName-font
            font-size 14px
            color #000
            margin 0
            margin-bottom 10px
          .userName-time
            font-size 13px
            color #9C9B9B
            margin 0

    .Preview-middle
      width 380px
      height 460px
      border 2px solid  #F1F1F1
      border-radius 15px
      .Preview1
        width 380px
        height 226px
        border-radius 15px
      .Preview-title
        font-size 22px
        font-family PingFang SC
        font-weight bold
      .user
        display flex
        justify-content flex-start
        .user-image
          width 44px
          height 44px
          border-radius 50%
          margin-right 8px
        .userName
          width 187px
          height 16px
          .userName-font
            font-size 14px
            color #000
            margin 0
            margin-bottom 10px
          .userName-time
            font-size 13px
            color #9C9B9B
            margin 0
    .Preview-right
      width 380px
      height 460px
      border 2px solid  #F1F1F1
      border-radius 15px
      .Preview1
        width 380px
        height 226px
        border-radius 15px
      .Preview-title
        font-size 22px
        font-family PingFang SC
        font-weight bold
      .user
        display flex
        justify-content flex-start
        .user-image
          width 44px
          height 44px
          border-radius 50%
          margin-right 8px
        .userName
          width 187px
          height 16px
          .userName-font
            font-size 14px
            color #000
            margin 0
            margin-bottom 10px
          .userName-time
            font-size 13px
            color #9C9B9B
            margin 0
      .btn
        width 105px
        height 60px
        color #fff
        font-size 18px
        background #FE8CAA
        border none   // 去掉边框
        outline none  // 去掉点击按钮后的边框
        border-radius 15px
        margin-right 18px            
</style>
