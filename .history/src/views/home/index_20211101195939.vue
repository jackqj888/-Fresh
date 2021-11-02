<template>
  <div class="wrapper">
    <div class="home-head"></div>
    <div class="home-container">
      <div class="banner">
        <swiper class="swiper" :options="headerOption">
          <swiper-slide v-for="(item, index) in homeBanner" :key="index">
            <img :src="item.bannerSrc" alt="" class="image"/>
          </swiper-slide>
        </swiper>
        <div class="headerPagination" slot="pagination"></div>
      </div>
      <div class="navigation" style="margin: 75px auto 0 auto">
        <swiper class="swiper jk" :options="navigationOption">
          <swiper-slide class="swiper-slide" v-for="(item, index) in navigationList" :key="index">
            <div class="groups" @click="navigationTo(item)">
              <img :src="item.imgPcSrc" alt="" class="image"/>
              <div class="item-name">{{item.title}}</div>
<!--                <div class="item-title">Personnel</div>-->
            </div>
          </swiper-slide>
        </swiper>
        <div class="navigationPagination"></div>
      </div>
      <div class="courseCommodity">
        <el-row :gutter="24">
          <el-col :lg="12" :md="24">
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
              <br/>
              quality courses. I wish you a smooth passing of the
              <br/>
              examination and training
            </span>
                <img src="@/assets/cirlces.png" class="image1"/>
              </div>
              <div class="swiper-jp">
                <swiper class="swiper jp" ref="swiper" :options="jpOption">
                  <swiper-slide class="swiper-slide" v-for="(item, index) in course" :key="index">
                    <img :src="item.imgSrc" class="swiper-jp-image" @click="open(item, 'kaopei')"/>
                    <span class="courseTitle" @click="open(item, 'kaopei')">{{ item.name }}</span>
                    <span class="course-price" @click="open(item , 'kaopei')">￥ {{ item.price }}</span>
                  </swiper-slide>
                </swiper>
                <div class="swiper-button-prev swiper-button-prev1"></div>
                <div class="swiper-button-next swiper-button-next1"></div>
              </div>
            </div>
          </el-col>
          <el-col :lg="12" :md="24">
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
              <br/>
              goods, value for money, I wish you a happy
              <br/>
              shopping
            </span>
                <img src="@/assets/cirlces1.png" class="image2"/>
              </div>
              <div class="swiper-tj">
                <swiper class="swiper tj" ref="swiper" :options="scOption">
                  <swiper-slide class="swiper-slide" v-for="(item, index) in commodity" :key="index">
                    <img :src="item.imgSrc" class="swiper-tj-image" @click="open(item, 'mall')"/>
                    <span class="courseTitle" @click="open(item , 'mall')">{{ item.name }}</span>
                    <span class="course-price" @click="open(item, 'mall')">￥ {{ item.price }}</span>
                  </swiper-slide>

                </swiper>
                <div class="swiper-button-prev swiper-button-prev2"></div>
                <div class="swiper-button-next swiper-button-next2"></div>
              </div>
            </div>
          </el-col>
        </el-row>
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
          <swiper-slide class="swiper-slide" v-for="(item, index) in kpmList" :key="index">
            <img :src="item.imgSrcPc" class="Preview" @click="open(item, 'kpm')"/>
            <p class="Preview-title" @click="open(item, 'kpm')">{{item.name}}</p>
            <div class="user">
              <div>
                <img :src="item.article.avatar" class="user-image"/>
              </div>
              <div class="userName">
                <span class="userName-font">{{item.article.nickname}}</span>
                <span class="userName-time">{{item.article.createTime}}</span>
              </div>
            </div>
            <div style="text-align: center;">
              <el-button class="btn" @click="open(item, 'kpm')">点击查看</el-button>
            </div>
          </swiper-slide>
        </swiper>
        <div style="text-align: center;margin-top: 30px">
          <button class=" btnLeft">←</button>
          <button class=" btnRight">→</button>
        </div>
      </div>
      <div class="banner2">
        <img src="@/assets/banner2.png"/>
      </div>
      <div class="healthTreatment">
        <div class="healthTreatment-box">
          <div class="healthTreatment-title">
            <span class="healthTreatment-font">健康疗程</span>
            <span class="healthTreatment-go"><a class="go-tj" :href="healthUrl">点击进入 ></a></span>
          </div>
          <div class="healthTreatment-e-font">
            <div class="e-font1">
              Put forward high-quality conditioning scheme for
              <br/>
              your health
            </div>
            <div style="display: flex;justify-content: right;align-items: center;flex: 1">
              <div class="jkLeft" >&lt;</div>
              <div class="jkPagination"></div>
              <div class="jkRight">&gt;</div>
            </div>
          </div>
          <div class="carousel">
            <swiper class="swiper jk" :options="jkOption">
              <swiper-slide class="swiper-slide" v-for="(item, index) in healthList" :key="index">
                <div class="swiper-img">
                  <img :src="item.imgSrcPc" @click="open(item, 'health')"/>
                </div>
                <div style="width: 176px; text-align: center; font-size: 14px; cursor: pointer"
                     @click="open(item, 'health')">{{item.name}}</div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="talents">
        <div class="talents-box">
          <div style="display: flex">
            <div>
              <div class="talents-top-left">
                <div class="talents-title">
                  <span class="talents-font">精选人才</span>
                  <span class="talents-go">
                <a class="go-rc" :href="talentUrl">点击进入 ></a>
              </span>
                </div>
              </div>
              <div class="talents-e-font">
                <p class="e-font1">Talent system to help you better select talents</p>
              </div>
              <div class="talents-swiper">
                <swiper class="swiper" :options="bigTalentOption">
                  <swiper-slide class="swiper-slide" v-for="(item, index) in details" :key="index">
                    <img :src="item.imgSrc" class="talents-img" @click="open(item, 'talent')"/>
                    <p class="talents-name" @click="open(item, 'talent')">{{ item.name }}</p>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="smallTalent">
              <swiper class="swiper" :options="smallTalentOption">
                <swiper-slide class="swiper-slide" v-for="(item, index) in details" :key="index">
                  <img :src="item.imgSrc" class="talents-img" @click="open(item, 'talent')"/>
                  <div class="talents-name" @click="open(item, 'talent')">{{ item.name }}</div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="talent-pagination-box">
            <div class="talentLeft" >&lt;</div>
            <div class="talent-pagination"></div>
            <div class="talentRight" >&gt;</div>
          </div>
        </div>
      </div>
      <div class="healthCheck">
        <p class="healthCheck-font">健康检测</p>
        <p class="e-font">
          Health data test to check whether you are healthy. Come and
          <br/>
          make an appointment
        </p>
        <p class="go">
          <a class="go-jk" :href="healthUrl">点击进入 ></a></p>
        <div class="evaluate">
          <el-row :gutter="24">
            <el-col :sm="24" :md="8" v-for="(item,index) in evaluate" :key="index">
              <div class="evaluate-box">
                <p class="evaluate-title">{{ item.data.title }}</p>
                <div class="evaluate-Introduction" @click=goHealthTo(item)>
                  <img :src="item.imgSrc" class="cirlces4"/>
                  <div class="evaluate-font">
                    <p class="evaluate-cn">{{ item.data.summary }}</p>
                    <p class="evaluate-en">
                      Infrared risk self-test, are you really healthy?
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="home-foot"></div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'home',
  components: {},
  data() {
    return {
      ProductList: [],
      headerOption: {
        pagination: {
          el: '.headerPagination',
        },
        //开启循环模式
        loop: true,
      },
      navigationOption: {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        pagination: {
          el: '.navigationPagination',
          clickable: true,
        },
      },
      jpOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
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
      },
      kpOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        navigation: {
          nextEl: '.btnLeft',
          prevEl: '.btnRight'
        }
      },
      jkOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.jkPagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.jkLeft',
          prevEl: '.jkRight',
        },
      },
      bigTalentOption:{
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.talentLeft',
          prevEl: '.talentRight',
        },
      },
      smallTalentOption:{
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerColumnFill : 'row',
        spaceBetween: 30,
        pagination: {
          el: '.talent-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.talentLeft',
          prevEl: '.talentRight',
        },
      },
      course: [],
      commodity: [],
      homeBanner: [],
      evaluate: [],
      details: [],
      uInfo:null,
      channels: [],
      kpmList: [],
      kaopeiUrl: "",
      mallUrl: "",
      kpmUrl: "",
      healthUrl: "",
      talentUrl: "",
      healthList: [],
      navigationList: []
    }
  },
  created() {
    // this.getHomeList()
    this.getLogoList()
    this.uInfo=JSON.parse(window.localStorage.getItem('user_info'))
    // console.log('zzz',this.uInfo)
  },
  methods: {
    // getHomeList() {
    //   api.home.HomeList().then(res=>{
    //     this.data = res
    //     this.channels = this.data.channels
    //     this.homeBanner = this.data.banners
    //     console.log(this.homeBanner)
    //     this.channels.map(item => {
    //       if(item.channel.appCode == 'kaopei'){
    //         this.course = item.details
    //         this.kaopeiUrl = item.channel.targetUrlPc
    //       } else if(item.channel.appCode == 'mall'){
    //         this.commodity = item.details
    //         this.mallUrl = item.channel.targetUrlPc
    //       } else if(item.channel.appCode == 'kpm'){
    //         this.kpmList = item.details
    //         this.kpmUrl = item.channel.targetUrlPc
    //       } else if(item.channel.appCode == 'health') {
    //         this.evaluate = item.items[10]
    //         this.healthList = item.items[12]
    //         this.healthUrl = item.channel.targetUrlPc
    //       } else if(item.channel.appCode == 'talent') {
    //         this.details = item.details
    //         this.talentUrl = item.channel.targetUrlPc
    //       }
    //     })
    //     this.data.navigation.map(item => {
    //       item.map(eItem => {
    //         this.navigationList.push(eItem)
    //       })
    //     })
    //   })
    // },
    getLogoList(){
      api.home.LogoList().then(res=>{
        this.data1=res
        console.log('nnn',this.data1)
      })
    },
    navigationTo(item){
      window.open(item.url, '_blank')
    },
    goTo(appCode){
      this.channels.map(item => {
        if(item.channel.appCode == appCode){
          if(item.channel.targetUrlPc){
            window.open(item.channel.targetUrlPc, '_blank')
          }
        }
      })
    },
    open(item, appCode){
      let targetUrlPc = ''
      this.channels.map(item => {
        if(item.channel.appCode == appCode){
          if(item.channel.targetUrlPc){
            targetUrlPc = item.channel.targetUrlPc
          }
        }
      })
      let openUrl = targetUrlPc + item.urlPc
      window.open(openUrl, '_blank')
    },
    goHealthTo(item){
      let openUrl = this.healthUrl + item.urlPc
      window.open(openUrl, '_blank')
    }
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
  background #ffffff
  .banner{
    width 100%
    height 500px
    .swiper-container{
      height 100%
      width 100%
      img{
        object-fit: cover
      }
    }
    >>> .swiper-pagination-bullets{
      margin-top 47px
      text-align center
      .swiper-pagination-bullet{
        background  #FBD0D0
      }
      .swiper-pagination-bullet-active{
        background #FE5782
      }
    }
  }
  .navigation
    width 1200px
    margin-top: 75px
    .groups, .popularScience, .healthy, .test, .mall
      cursor pointer
      text-align center
      .image
        width 66px
        height 66px
      .item-name
        font-size: 30px
        line-height 22px
        font-family PingFang SC
        margin-bottom 8px
        margin-top 28px
      .item-title
        font-size 20px
        font-family PingFang SC
        color #AAAAAA
        line-height 22p
        font-weight bold
        margin-top 20px
    >>> .swiper-pagination-clickable{
      text-align center
      margin-top 60px
      .swiper-pagination-bullet{
        background  #FBD0D0
      }
      .swiper-pagination-bullet-active{
        background #FE5782
      }
    }
  @media screen and ( max-width: 980px ) {
    .navigation{
      min-width 1200px
      .groups{
        .image{
          width 40px
          height 40px
        }
        .item-name {
          font-size 20px
          margin-top 15px
        }
        .item-title{
          font-size 12px
          margin-top 10px
          margin-bottom 10px
        }
      }
    }
  }
  .courseCommodity
    display flex
    justify-content center
    margin-top 83px
    .course
      width 588px
      height 329px
      background-color #FFF6EF
      margin-right 20px
      border-radius 15px

      .course-title
        display flex
        justify-content space-between
        padding 25px 38px 2px 49px

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
      padding 25px 24px 2px 49px

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
  @media screen and ( max-width: 1200px ) {
    .courseCommodity{
      .course, .commodity{
        margin 0 auto
      }
      .commodity{
        margin-top 20px
      }
    }
  }
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
    .swiper{
      height 520px
    }
    .swiper-container{
      width: 1200px;
      min-width 1200px
      margin: 0 auto;
      .swiper-slide:hover{
        box-shadow: 0px 25px 33px rgba(108, 93, 211, 0.25);
      }
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
          border-radius 14px
        }
      }
    }

  .btnLeft
    width 44px
    height 44px
    border-radius 50%
    background-color #fff
    margin-right 20px
    color #FE5782
    border: 2px solid #f0eeff;
  .btnRight
    width 44px
    height 44px
    border-radius 50%
    background-color #fff
    outline none
    color #FE5782
    border: 2px solid #f0eeff;
  .btnLeft:hover, .btnRight:hover{
    border none
    background-color #FFDDE6
  }
  .banner2
    margin 57px 0 128px 0
    text-align center

  .healthTreatment
    display flex
    justify-content center

    .healthTreatment-box
      width 1200px
      min-width 1200px
      height 513px

      .healthTreatment-title
        align-items left

        .healthTreatment-font
          font-size 30px
          font-family PingFang SC
          font-weight bold

        .healthTreatment-go
          margin 25px 30px 0 0
          font-size 22px
          text-align center
          .go-tj
            margin-left 40px
            color: #000000
            text-decoration: none
      .healthTreatment-e-font
        display flex
        .e-font1
          font-size 16px
          margin-top 13px
        .jkLeft, .jkRight{
          width 23px
          height 23px
          border-radius 50%
          background-color #FFDDE6
          border none // 去掉边框
          outline none // 去掉点击按钮后的边框
          color #FE5782
          text-align center
          cursor pointer
        }
        .jkLeft:hover , .jkRight:hover {
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
        .jkLeft{
          margin-right 10px
        }
        .jkPagination{
          margin-right 20px
          >>>.swiper-pagination-bullet{
            background  #FBD0D0
          }
          >>>.swiper-pagination-bullet-active{
            background #FE5782
          }
        }

  .talents
    display flex
    justify-content center

    .talents-box
      width 1200px
      min-width 1200px
      height 535px
      background-color #FFDDE6

      .talents-title
        display flex
        justify-content flex-start
        align-items center

        .talents-font
          margin 36px 30px 13px 9px
          font-size 30px
          text-align center
          font-family PingFang SC
          font-weight bold

        .talents-go
          margin 25px 30px 0 0
          font-size 22px
          text-align center

      .talents-e-font
        margin-bottom 62px
        .e-font1
          margin-left 9px
          font-size 16px

      .talents-swiper
        width: 400px
        height: 273px
        display: flex
        justify-content flex-start
        margin-left 90px
        margin-right 27px

        .talents-img
          width 183px
          height 231px
          border-radius 15px
          margin-right 27px
          cursor pointer

        .talents-name
          width: 180px
          height: 27px
          text-align center
          margin 0
          margin-top 15px
          font-size 16px
          cursor pointer

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
      text-align center
      color: rgba(0, 0, 0, 0.6);

    .go
      font-size 22px
      text-align center
      margin 20px 0 56px 0

    .evaluate
      width 1400px
      .evaluate-box
        width 451px
        height 143px
        background-color #fff
        margin 0 12px
        border-radius 15px
        border none // 去掉边框
        outline none // 去掉点击按钮后的边框
        margin-bottom 93px
        cursor pointer
        border: 2px solid #F0EEFF;
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
      .evaluate-box:hover
        box-shadow 5px 20px 10px 8px rgba(207, 202, 241, .5)
    @media screen and ( max-width: 992px ) {
      .evaluate{
        max-width: 500px;
        .evaluate-box{
          margin 10px auto 0 auto
        }
      }
    }
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
  cursor pointer

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

.go-tj
  color #FE96B1
  text-decoration: none

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
.jk{
  img {
    width 100%
    height 100%
    border-radius 10px
  }
  .swiper-slide{
    margin-top: 50px;
  }
}
  .smallTalent{
    flex 1
    margin-top 49px
    .swiper-container{
       width 456px
      .swiper-wrapper{
        width 456px
      }
      .swiper-slide{
        width: 129px !important;
        height: 209px;
        img{
          width 129px
          height 164px
          margin-bottom 12px
          border-radius 20px
        }
        .talents-name{
          text-align center
        }
      }
    }
  }
  .talent-pagination-box{
    display flex
    color #FE5782
    justify-content center
    margin-bottom 20xp
    .talent-pagination{
      text-align center
      width auto
    }
    .talentLeft{
      width 22px
      height 22px
      border-radius 50%
      background-color #FFDDE6
      margin-right 20px
      border none
      color #FE5782
      text-align center
    }
    .talentRight{
      width 22px
      height 22px
      border-radius 50%
      background-color #FFDDE6
      border none // 去掉边框
      outline none // 去掉点击按钮后的边框
      color #FE5782
      margin-left 30px
      text-align center
    }
    .talentLeft:hover , .talentRight:hover {
      background: rgba(254, 87, 130, 0.2);
      cursor pointer
    }
  }
>>> .swiper-pagination-bullet{
  background: #fff
  opacity 1
  margin-left 10px
}
>>> .swiper-pagination-bullet-active{
  background: #FE5782
}
</style>
