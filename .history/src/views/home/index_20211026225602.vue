<template>
  <div class="wrapper">
    <div class="home-head"></div>
    <div class="home-container">
      <Carousel :banner="homeBanner"></Carousel>
      <div class="navigation">
        <div class="groups" @click="goTo('talent')">
          <img src="@/assets/groups.png" alt="" class="image" />
          <span class="item-name">人才</span>
          <span class="item-title">Personnel</span>
        </div>
        <div class="popularScience" @click="goTo('kpm')">
          <img src="@/assets/popularScience.png" alt="" class="image" />
          <span class="item-name">科普</span>
          <span class="item-title">Popularization of science</span>
        </div>
        <div class="healthy" @click="goTo('health')">
          <img src="@/assets/healthy.png" alt="" class="image" />
          <span class="item-name">健康</span>
          <span class="item-title">Healthy</span>
        </div>
        <div class="test" @click="goTo('kaopei')">
          <img src="@/assets/test.png" alt="" class="image" />
          <span class="item-name">考试</span>
          <span class="item-title">Examination</span>
        </div>
        <div class="mall" @click="goTo('mall')">
          <img src="@/assets/mall.png" alt="" class="image" />
          <span class="item-name">商城</span>
          <span class="item-title">Shopping Mall</span>
        </div>
      </div>
      <div class="courseCommodity">
        <div class="course">
          <div class="course-title">
            <span class="course-font">精品课程</span>
            <span class="course-font1">
              <a class="go-jp" :href="kaopeiUrl">进入考培 ></a>
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
          <div class="swiper-jp">
            <swiper class="swiper jp" ref="swiper" :options="jpOption">
              <swiper-slide
                class="swiper-slide"
                v-for="(item, index) in course"
                :key="index"
              >
                <img
                  :src="item.imgSrc"
                  class="swiper-jp-image"
                  @click="open(item, 'kaopei')"
                />
                <span class="courseTitle" @click="open(item, 'kaopei')">
                  {{ item.name }}
                </span>
                <span class="course-price" @click="open(item, 'kaopei')">
                  ￥ {{ item.price }}
                </span>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev swiper-button-prev1"></div>
            <div class="swiper-button-next swiper-button-next1"></div>
          </div>
        </div>
        <div class="commodity">
          <div class="commodity-title">
            <span class="commodity-font">
              推荐商品
            </span>
            <span class="commodity-font1">
              <a class="go-tj" :href="mallUrl">进入商城 ></a>
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

          <div class="swiper-tj">
            <swiper class="swiper tj" ref="swiper" :options="scOption">
              <swiper-slide
                class="swiper-slide"
                v-for="(item, index) in commodity"
                :key="index"
              >
                <img
                  :src="item.imgSrc"
                  class="swiper-tj-image"
                  @click="open(item, 'mall')"
                />
                <span class="courseTitle" @click="open(item, 'mall')">
                  {{ item.name }}
                </span>
                <span class="course-price" @click="open(item, 'mall')">
                  ￥ {{ item.price }}
                </span>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev swiper-button-prev2"></div>
            <div class="swiper-button-next swiper-button-next2"></div>
          </div>
        </div>
      </div>
      <div class="knowledge">
        <div>
          <p class="knowledge-font">科普知识</p>
          <p class="e-font">
            Popular science knowledge solution, your breast management expert
          </p>
          <p class="go"><a class="go-tj" :href="kpmUrl">点击进入 ></a></p>
        </div>
        <swiper class="swiper" :options="kpOption">
          <!--          <swiper-slide>Slide 1</swiper-slide>-->
          <swiper-slide
            class="swiper-slide"
            v-for="(item, index) in kpmList"
            :key="index"
          >
            <img
              :src="item.imgSrcPc"
              class="Preview"
              @click="open(item, 'kpm')"
            />
            <p class="Preview-title" @click="open(item, 'kpm')">
              {{ item.name }}
            </p>
            <div class="user">
              <div>
                <img :src="item.article.avatar" class="user-image" />
              </div>

              <div class="userName">
                <span class="userName-font">{{ item.article.nickname }}</span>
                <span class="userName-time">{{ item.article.createTime }}</span>
              </div>
            </div>
            <div style="text-align: center;">
              <el-button class="btn" @click="open(item, 'kpm')">
                点击查看
              </el-button>
            </div>
          </swiper-slide>
        </swiper>
        <div class="kpbtn">
          <button class="btnLeft">←</button>
          <button class="btnRight">→</button>
        </div>
      </div>
      <div class="banner2">
        <img src="@/assets/banner2.png" />
      </div>
      <div class="hjealthTreatment">
        <div class="hjealthTreatment-box">
          <div class="hjealthTreatment-title">
            <span class="hjealthTreatment-font">健康疗程</span>
            <span class="hjealthTreatment-go">
              <a class="go-tj" :href="healthUrl">点击进入 ></a>
            </span>
          </div>
          <div class="hjealthTreatment-e-font">
            <p class="e-font1">
              Put forward high-quality conditioning scheme for
              <br />
              your health
            </p>
            <div class="jkbtn">
            <div class="jkLeft">&lt;</div>
            <div class="swiper-pagination-bullet"></div>
            <div class="jkRight">&gt;</div>
          </div>
          </div>
          
          <div class="carousel jk">
            <swiper class="swiper jk" :options="jkOption">
              <swiper-slide
                class="swiper-slide"
                v-for="(item, index) in healthList"
                :key="index"
              >
                <img :src="item.imgSrcPc" class="swiper-img" />
                <div style="width: 176px; text-align: center; font-size: 14px;">
                  {{ item.name }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="talents">
        <div class="talents-box">
          <div class="talents-top-left">
            <div class="talents-title">
              <span class="talents-font">精选人才</span>
              <span class="talents-go">
                <a class="go-rc" :href="talentUrl">点击进入 ></a>
              </span>
            </div>
          </div>
          <div class="talents-e-font">
            <p class="e-font1">
              Talent system to help you better select talents
            </p>
          </div>
          <div class="talents-swiper" ref="swiper" :options="rcOption">
            <div
              class="talents-image"
              v-for="(item, index) in details"
              :key="index"
            >
              <img :src="item.imgSrc" class="talents-img" />
              <p class="talents-name">{{ item.name }}</p>
            </div>
          </div>
          <div class="rcbtn">
            <div class="rcLeft">&lt;</div>
            <div class="swiper-pagination-bullet"></div>
            <div class="rcRight">&gt;</div>
          </div>
        </div>
      </div>
      <div class="healthCheck">
        <p class="healthCheck-font">健康检测</p>
        <p class="e-font">
          Health data test to check whether you are healthy. Come and
          <br />
          make an appointment
        </p>
        <p class="go">
          <a class="go-jk" :href="healthUrl">点击进入 ></a>
        </p>
        <div class="evaluate">
          <div
            class="evaluate-box"
            v-for="(item, index) in evaluate"
            :key="index"
          >
            <p class="evaluate-title">{{ item.data.title }}</p>
            <div class="evaluate-Introduction" @click="goHealthTo(item)">
              <img :src="item.imgSrc" class="cirlces4" />
              <div class="evaluate-font">
                <p class="evaluate-cn">{{ item.data.summary }}</p>
                <p class="evaluate-en">
                  Infrared risk self-test, are you really healthy?
                </p>
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
      headerOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
        },
        //设置点击箭头
        // navigation: {
        //   nextEl: 'swiper-button-next1',
        //   prevEl: '.swiper-button-prev1',
        // },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true,
      },
      jpOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        on: {
          resize: () => {
            this.$refs.swiper.$swiper.changeDirection(
              window.innerWidth <= 960 ? 'vertical' : 'horizontal',
            )
          },
        },
      },
      scOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
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
        spaceBetween: 20,
        slidesPerGroup: 3,
        navigation: {
          nextEl: '.btnLeft',
          prevEl: '.btnRight',
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
          // bulletClass: 'my-bullet',
          // bulletActiveClass: 'my-bullet-active'
        },
        navigation: {
          nextEl: '.jkLeft',
          prevEl: '.jkRight',
        },
      },
      rcOption: {
        slidesPerView: 8,
        spaceBetween: 30,
        slidesPerGroup: 8,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination-bullet',
          clickable: true,
        },
        navigation: {
          nextEl: '.rcLeft',
          prevEl: '.rcRight',
        },
      },
      course: [],
      commodity: [],
      homeBanner: [],
      evaluate: [],
      details: [],
      uInfo: null,
      channels: [],
      kpmList: [],
      kaopeiUrl: '',
      mallUrl: '',
      kpmUrl: '',
      healthUrl: '',
      talentUrl: '',
      healthList: [],
    }
  },
  created() {
    this.getHomeList()
    this.uInfo = JSON.parse(window.localStorage.getItem('user_info'))
    // console.log('zzz',this.uInfo)
  },
  methods: {
    getHomeList() {
      api.home.HomeList().then((res) => {
        this.data = res
        this.channels = this.data.channels
        this.homeBanner = this.data.banners
        this.channels.map((item) => {
          if (item.channel.appCode == 'kaopei') {
            this.course = item.details
            this.kaopeiUrl = item.channel.targetUrlPc
          } else if (item.channel.appCode == 'mall') {
            this.commodity = item.details
            this.mallUrl = item.channel.targetUrlPc
          } else if (item.channel.appCode == 'kpm') {
            this.kpmList = item.details
            this.kpmUrl = item.channel.targetUrlPc
          } else if (item.channel.appCode == 'health') {
            this.evaluate = item.items[10]
            this.healthList = item.items[12]
            this.healthUrl = item.channel.targetUrlPc
          } else if (item.channel.appCode == 'talent') {
            this.details = item.details
            this.talentUrl = item.channel.targetUrlPc
          }
        })
        console.log(this.kpmList)
      })
    },
    goTo(appCode) {
      this.channels.map((item) => {
        if (item.channel.appCode == appCode) {
          if (item.channel.targetUrlPc) {
            window.open(item.channel.targetUrlPc, '_blank')
          }
        }
      })
    },
    open(item, appCode) {
      let targetUrlPc = ''
      this.channels.map((item) => {
        if (item.channel.appCode == appCode) {
          if (item.channel.targetUrlPc) {
            targetUrlPc = item.channel.targetUrlPc
          }
        }
      })
      let openUrl = targetUrlPc + item.urlPc
      window.open(openUrl, '_blank')
    },
    goHealthTo(item) {
      let openUrl = this.healthUrl + item.urlPc
      window.open(openUrl, '_blank')
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
    margin-top: 110px


    .groups, .popularScience, .healthy, .test, .mall
      display flex
      flex-direction column
      justify-content center
      align-items center
      cursor pointer
      .image
        width 66px
        height 66px
        margin 0 80px

      .item-name
        font-size: 30px
        line-height 22px

        font-family PingFang SC
        margin-bottom 8px
        margin 30px 80px 0 80px

      .item-title
        font-size 20px
        font-family PingFang SC
        color #AAAAAA
        line-height 22px
        font-weight bold
        margin-top 10px
        margin 30px 80px 0 80px

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
      .go-tj
        color #333333
    .swiper-container{
      width: 1200px;
      margin: 0 auto;
      .swiper-slide{
        width 380px !important
        height 460px
        border 2px solid #F1F1F1
        border-radius 15px
        .Preview{
          width: 100%;
          height:227px;
          border-radius 15px
        }
        .Preview-title{
          font-size 22px
          font-family PingFang SC
          font-weight bold
          margin-left 22px
          margin-bottom 22px
        }
        .user{
          display flex
          justify-content flex-start
          .user-image{
            width 44px
            height 44px
            border-radius 50%
            margin-right 8px
          }
          .userName{
            margin 0
            display: flex
            justify-content center
            flex-direction column
            .userName-font{
              font-size 14px
              color #000
              margin 0

            }
          .userName-time{
            font-size 13px
            color #9C9B9B
            margin-top 10px

          }
          }
        }
        .btn{
          width 169px
          height 44px
          color #fff
          font-size 18px
          background #FE5782
          border none // 去掉边框
          outline none // 去掉点击按钮后的边框
          border-radius 15px
        }
      }
    }
.kpbtn
 margin-top 93px
 text-align center
.btnLeft
  width 44px
  height 44px
  border-radius 50%
  background-color #fff
  margin-right 20px
  border 2px solid #F1F1F1
  color #FE5782
  border none // 去掉边框
  outline none // 去掉点击按钮后的边框

.btnRight
  width 44px
  height 44px
  border-radius 50%
  background-color #FFDDE6
  border none // 去掉边框
  outline none // 去掉点击按钮后的边框
  color #FE5782

.banner2
  margin 57px 0 128px 0
  text-align center
.hjealthTreatment
  display flex
  justify-content center

.hjealthTreatment-box
  width 1200px
  height 513px

.hjealthTreatment-title
  margin-left 30px
  align-items left
.hjealthTreatment-font
  font-size 30px
  font-family PingFang SC
  font-weight bold

.hjealthTreatment-go
  margin 25px 30px 0 0
  ont-size 22px
  text-align center
.go-tj
  margin-left 40px
  color #000000
  font-size 22px
  text-decoration none
.hjealthTreatment-e-font
.e-font1
  font-size 16px

.talents
  display flex
  justify-content center

.talents-box
  width 1200px
  height 513px
  background-color #FFDDE6

.talents-title
  display flex
  justify-content flex-start
  align-items center

.talents-font
  margin 36px 30px 13px 33px
  font-size 30px
  text-align center
  font-family PingFang SC
  font-weight bold

.talents-go
  margin 25px 30px 0 0
  font-size 22px
  text-align center
.talents-e-font
  display flex
  justify-content flex-start
  margin-bottom 50px

.e-font1
  margin-left 33px
  font-size 16px

.talents-swiper
  width: 400px
  height: 235px
  display: flex
  justify-content flex-start
  margin-left 90px
  margin-right 27px

.talents-img
  width 183px
  height 231px
  border-radius 15px
  margin-right 27px

.talents-name
  width: 180px
  height: 27px
  text-align center
  margin 0


.healthCheck
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-top 79px

.healthCheck-font
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
  margin 30px 0 66px 0

.evaluate
   display flex
   justify-content center


.evaluate-box
  width 451px
  height 143px
  background-color #fff
  margin 0 12px
  border-radius 15px
  border none // 去掉边框
  outline none // 去掉点击按钮后的边框
  margin-bottom 93px
  box-shadow 5px 20px 10px 8px rgba(207, 202, 241, .5)


.evaluate-title
 font-size 22px
 font-family PingFang SC
 font-weight bold
 text-align center
 margin 15px 0 0 0

.evaluate-Introduction
  display flex
  justify-content center

.cirlces4
 width 36px
 height 35px
 margin-right 27px
 opacity 0.6

.evaluate-font
    display flex
    justify-content flex-start
    flex-direction column
 .evaluate-cn
    font-size 16px
    font-family PingFang SC
    font-weight bold
    color #3D3D3D
    text-align left
    margin 7px 0 0 0
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    height: 23px
    width: 313px

.evaluate-en
    font-size 14px
    font-family PingFang SC
    font-weight bold
    color #3D3D3D
    text-align left
    margin 14px 0 0 0

.courseTitle
  margin 0 0 0 10px
  font-size 16px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  width 80px
  height 22px
  display: block

.course-price
  color: #FF0F0F
  font-size 14px
  margin-left 25px

.swiper-img
  width: 176px;
  height: 247px;
  margin 0 7px

.swiper-jp, .swiper-tj
  width: 505px
  height: 110px
  margin 23px 0 0 27px
  position relative

  .swiper jp
    overflow hidden

.go-jp
  color #FF9F59
  text-decoration: none

// .go-tj
//   color #FE96B1
//   text-decoration: none

.go-rc
  color #000000
  text-decoration: none

.go-jk
  color #000000
  text-decoration: none

.swiper-jp-image, .swiper-tj-image
  width 106px
  height 106px
  border-radius 25px

.swiper-button-prev1, .swiper-button-prev2
  left: -5%;
  width 36px
  height 36px
  border-radius 50%
  background-color #fff
  border 2px solid #F1F1F1
  color #FE5782

.swiper-button-next1, .swiper-button-next2
  right: -5%;
  width 36px
  height 36px
  border-radius 50%
  background-color #fff
  border 2px solid #F1F1F1
  color #FE5782


.swiper-button-prev1, .swiper-button-next1
  --swiper-navigation-size 15px
.swiper-button-prev2, .swiper-button-next2
  --swiper-navigation-size 15px

.kp .swiper-button-prev, .kp .swiper-button-next {
  top: 90%;
}

.kp .swiper-button-prev {
  left: 45%;
}

.kp .swiper-button-next {
  right: 45%;
}
// .jk{
//   img {
//     width 176px;
//     height 247px;
//     border-radius 10px;
//   }
//   .swiper-slide{
//     margin-top: 100px;
//   }
//   .swiper-button-prev {
//     left: 80%;
//   }
//   .swiper-button-prev, .swiper-button-next {
//     top: 10%;
//   }
//   .swiper-pagination {
//     width: 200px;
//     height: 20px;
//     left: 85%;
//     top: 5%;
//     .swiper-pagination-bullet{
//       width: 7px;
//       height: 7px;
//       border-radius: 50%;
//       background: #FFDDE6;
//     }
//     .swiper-pagination-bullet-active{
//       width: 7px;
//       height: 7px;
//       border-radius: 50%;
//       background: #FE5782;
//     }
//   }
//   .swiper-button-prev, .swiper-button-next{
//     width 23px
//     height 23px
//     border-radius 50%
//     background-color #FE5782
//     border 2px solid #F1F1F1
//     color #fff
//   }
//   .swiper-button-prev:after, .swiper-button-next:after{
//     font-size :10px
//   }
// }

#pa >>> .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:#000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  #pa >>> .swiper-pagination-bullet-active {
    color:#fff;
    background: #ff51d6;
  }

.rcbtn
  width 400px
  height 50px
  display flex
  justify-content space-around
  margin 20px 0 0 50px
  align-items center
  text-align: center

.rcLeft
  width 22px
  height 22px
  border-radius 50%
  background-color #fff
  margin-right 20px
  border 2px solid #F1F1F1
  color #FE5782

.rcRight
  width 22px
  height 22px
  border-radius 50%
  background-color #fff
  border none // 去掉边框
  outline none // 去掉点击按钮后的边框
  color #FE5782

.jkbtn
  height 50px
  display flex
  justify-content flex-end
  margin 0
  align-items center
  text-align: center
.jkLeft
  width 22px
  height 22px
  border-radius 50%
  background-color #FFDDE6
  margin-right 20px
  border 2px solid #F1F1F1
  color #FE5782
.jkRight
  width 22px
  height 22px
  border-radius 50%
  background-color #FFDDE6
  border none // 去掉边框
  outline none // 去掉点击按钮后的边框
  color #FE5782
  margin 0 50px 0 50px

.carousel jk
  height 340px
</style>
