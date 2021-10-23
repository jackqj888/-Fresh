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
            <img src="@/assets/Preview1.png" class="Preview1" />
            <p class="Preview-title">标题一</p>
            <div class="user">
              <img src="@/assets/no-data.png" class="user-image" />
              <div class="userName">
                <p class="userName-font">汝小果</p>
                <p class="userName-time">2021-8-5-13 : 19 : 18</p>
              </div>
            </div>
            <div style="text-align: center;">
              <el-button class="btn">点击查看</el-button>
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
              <div style="text-align: center;">
                <el-button class="btn">点击查看</el-button>
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
              <div style="text-align: center;">
                <el-button class="btn">点击查看</el-button>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          <button class="btn1">←</button>
          <button class="btn2">→</button>
        </div>
      </div>
      <div class="banner2">
        <img src="@/assets/banner2.png" class="banner2" />
      </div>
      <div class="hjealthTreatment">
        <div class="hjealthTreatment-box">
          <div class="hjealthTreatment-title">
            <span class="hjealthTreatment-font">健康疗程</span>
            <span class="hjealthTreatment-go">点击进入 ></span>
          </div>
          <div class="hjealthTreatment-e-font">
            <p class="e-font1">
              Put forward high-quality conditioning scheme for
              <br />
              your health
            </p>
          </div>
          <div class="carousel">
            <swiper class="swiper jk" :options="jkOption">
              <swiper-slide
                class="swiper-slide"
                v-for="(item, index) in carouselArr1"
                :key="index"
              >
                <img :src="item" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
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
      headerOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true,
      },
      carouselArr: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F27%2F20140927123921_3wcGw.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637566152&t=b20087e9c028676a1f1ed8a3b3ec1a66',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F26%2F20170126150835_YBKeL.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637566275&t=74230dc00d7ffbd8b5bfeaff3e989acb',
      ],
      jpOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? 'vertical' : 'horizontal',
            )
          },
        },
      },
      kpOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      jkOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      carouselArr1: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F27%2F20140927123921_3wcGw.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637566152&t=b20087e9c028676a1f1ed8a3b3ec1a66',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F26%2F20170126150835_YBKeL.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637566275&t=74230dc00d7ffbd8b5bfeaff3e989acb',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190124%2Fc602bf5eb25b4c58ac3f73e06327237b.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637569375&t=ddf4829aec6788dba094c0620f499147',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10114%2F440%2Fw640h600%2F20190416%2F7ea8-hvsckth5821051.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637569375&t=51d1095c66990b66aaf980b4ee2d556f',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F20181%2F28%2F2018128122935_B2FfX.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637569375&t=bbecbe70af00064affe09bba3de2951e',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F31%2F20170331090940_P2cRe.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637569375&t=5471a9ec63096163bbbcb6354f51991f',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F29%2F20181129225734_hpntk.thumb.700_0.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637569375&t=840d415a0cbbac2f56f48251e87070fe',
      ],
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
    margin-bottom 93px
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
      margin 0 13px
      background-color #ffffff
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
     .btn
        width 169px
        height 44px
        color #fff
        font-size 18px
        background #FE5782
        border none   // 去掉边框
        outline none  // 去掉点击按钮后的边框
        border-radius 15px
   .btn1
     width 44px
     height 44px
     border-radius 50%
     background-color #fff
     margin-right 20px
     border 2px solid  #F1F1F1
     color #FE5782
   .btn2
     width 44px
     height 44px
     border-radius 50%
     background-color #FFDDE6
     border none   // 去掉边框
     outline none  // 去掉点击按钮后的边框
     color #FE5782

.banner2
  margin 57px 0 90px 0
  text-align center
.hjealthTreatment
  display flex
  justify-content center
  .hjealthTreatment-box
    width 1417px
    height 513px
    .hjealthTreatment-title
      display flex
      justify-content flex-start
      align-items center
      .hjealthTreatment-font
        margin 36px 30px 13px 108px
        font-size 30px
        text-align center
        font-family PingFang SC
        font-weight bold
      .hjealthTreatment-go
        margin 25px 30px 0 0
        font-size 22px
        text-align center
    .hjealthTreatment-e-font
       display flex
       justify-content space-between
       .e-font1
         margin-left 108px
         font-size 16px
img{
    width: 176px;
    height: 247px;
}         
.jk .swiper-wrapper{
    padding-top: 50px;
}         
.jk .swiper-button-prev{
    left: 80%;
}
.jk .swiper-button-prev, .jk .swiper-button-next{
    top: 10%;
}
.jk .swiper-pagination{
    width: 200px;
    height: 20px;
    left: 85%;
    top: 5%;
}
</style>
