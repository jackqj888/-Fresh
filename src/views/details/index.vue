<template>
  <div class="wrapper">
    <div class="box">
      <div class="box-left">
        <div class="gallery-top">
          <img src="@/assets/item.png"/>
        </div>
      </div>
      <div class="box-center">
        <div class="title">
          <span>{{ goodsInfo.name }}</span>
        </div>
        <div class="centerBox">
          <div class="detail">
            <p class="price">
              价格
              <span style="color: #d83041;">
                ¥ {{ goodsInfo.price }}
              </span>
            </p>
          </div>
        </div>
        <div class="detailInfo">
          <div>
            <span>详情</span>
          </div>
          <div class="num">
            <span>数量</span>
            <el-input-number
                size="small"
                v-model="cartNum"
                :min="1"
                :max="99"
            ></el-input-number>
          </div>
          <div class="buyBox">
            <div class="single" @click="add">
              加入购物车
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      goodsInfo: {},
      cartNum: 1,
      id: '',
      min: 1,
      max: 99,
      add1: [],
      productId: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.getGoodsInfo()


  },

  methods: {
    getGoodsInfo() {

      api.details.GoodsInfo(this.id).then(res => {
        this.goodsInfo = res
        this.productId = this.goodsInfo.id
        console.log('bbb', this.goodsInfo)
      })
    },
    add() {
      let data = {
        productId: this.productId,
        count: this.cartNum
      }
      api.details.CartAdd(data).then(res => {
        this.$router.push({name: 'shoppingcart', params: {data}});
        console.log('zzz', res)
      })
      
    }
  },
  watch: {},
}
</script>

<style scoped lang="stylus">
.box
  height 700px
  display flex
  justify-content: center

  .box-left
    margin-top 40px
    width 420px

    .gallery-top
      width 420px
      height 280px

      img
        width 100%
        max-height: 100%;
        max-width: 100%;

  .box-center
    width 420px
    margin-left 40px
    margin-right 30px
    margin-top 50px

    .title
      font-size 20px
      color #333333

    .centerBox
      width 420px
      margin-top 10px

    .detail
      padding-bottom 10px
      background #F5F5F5

      p
        font-size 14px

        color #999999
          .price
            padding-top 10px
            padding-left 10px

            span
              color #191919
              margin-left 24px

            .unLine
              text-decoration line-through

    .detailInfo
      margin-left 10px
      color #999999

    .num
      margin-top 15px

      .el-input-number
        margin-left 24px
        height 40px
        line-height 40px

        /deep/ span
          line-height 40px
          height 40px
          border-right 0
          border-left 0
          background #ffffff

        /deep/ input
          line-height 42px
          height 42px

        /deep/ .el-input-number__decrease:hover, /deep/ .el-input-number__increase:hover
          color initial

        /deep/ .el-input-number__decrease:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled),
        /deep/ .el-input-number__increase:hover:not(.is-disabled) ~ .el-input .el-input__inner:not(.is-disabled)
          border-color #DCDFE6

    .buyBox
      display flex
      margin-top 30px

      .single, .buyNow
        width 140px
        line-height 40px
        background rgba(238, 83, 130, 0.3)
        color #EE5382
        text-align center
        border 1px solid #EE5382
        margin-left 53px
        cursor pointer

      .buyNow
        background #EE5382
        color #ffffff
        border 0
        margin-left 15px
</style>
