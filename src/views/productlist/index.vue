<template>
  <div class="container">
    <div class="container_left">
      <div style="text-align:center" v-for="(item,index) in categoryList" :key="index">
        <button
            :class="current === 0 ? 'active ' : ''"
            @click="active(item.id)">{{ item.name }}
        </button>

      </div>

    </div>
    <div class="container_right">
      <div class="productList_top">
        <div>
          <p class="recommended">精品推荐</p>
        </div>
        <div class="seeMore">
          <p>查看更多 > </p>
        </div>
      </div>
      <div class="productList1">
        <div  class="productList">
          <div class="goods" v-for="(item, index ) in fruitsList" :key="index">
            <div class="item" @click="jump(item.id)">
              <div class="item_detail">
                <img class="item_img" src="@/assets/item.png"/>
                <span class="item_name">{{ item.name }}</span>
                <span class="item_price">￥{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import api from "@/api";

export default {
  data() {
    return {
      ProductList: [],
      productType: '水果',
      current: 0,
      ProductPageList: [],
      fruitsList: [],
      vegetablesList: [],
      seafoodList: [],
      currentStatus: '18',
      categoryList: [],
      categoryId: ''

    }
  },
  // onShow() {
  //   this.active(0)
  // },
  created() {

    this.getProductList()
    this.getCategoryList()

  },
  methods: {
    jump(id) {
      this.$router.push({name: 'details', params: {id}});
    },
    getProductList(categoryId) {

      api.home.ProductList(categoryId).then((res) => {
        this.data = res
        this.ProductList = this.data.list
        // const c = []
        // const d = {}
        // this.ProductList.forEach(item => {
        //   if (d[item.categoryId] === undefined) {
        //     d[item.categoryId] = c.length
        //     c.push([item])
        //   } else {
        //     c[d[item.categoryId]].push(item)
        //   }
        // })
        // this.ProductPageList = c
        // console.log('ttt', this.ProductPageList)

        // that.ProductList.filter(item => {
        //     this.ProductPageList.push(item)
        //   })
        //
        this.active(3)
      })
    },
    getCategoryList() {
      api.CategoryList.CategoryList().then((res) => {
            this.categoryList = res
          }
      )
    },
    active(id) {
      api.home.ProductList(id).then((res) => {
            this.data = res
        this.fruitsList= this.data.list
        console.log('ccc',this.fruitsList)
            
          }
      )
    },


  }
}
</script>

<style scoped lang="stylus">
.container
  margin: 20px 0
  display: flex
  justify-content: center

.container_left
  margin-right: 30px
  width: 180px
  height: 500px
  //background-color: #f1d0d0;
  border: 1px solid #cbcbcb

button
  background-color: #d0d0d0;
  font-size: 16px;
  border-radius: 4px;
  height: 40px;
  border: 1px solid rgb(177, 177, 177);
  width: 160px;
  margin: 5px 0;

.container_right
  width: 1360px

  background-color: #e7e7e7

  .productList_top
    display: flex
    justify-content: space-between

  .recommended
    font-size 18px
    font-weight bolder
    margin-left: 20px

  .seeMore
    font-size 18px
    margin-right 30px
    color: #8f8f8f

.productList
  display: flex
  justify-content: flex-start
  align-items: center
  flex-wrap: wrap

  .goods
    //width: 1300px
    height: 280px

    .item
      width 212px
      height 245px
      margin-left 12px
      margin-bottom 15px
      background-color #FFFFFF

      .item_detail
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-top 20px

        .item_img
          height 126px
          width: 126px

        .item_name
          font-size 16px
          font-family PingFang SC
          color #666666
          line-height 22px
          margin-top 15px

        .item_price
          font-size 12px
          font-family PingFang SC
          color #D83041
          line-height 22px
          font-weight bold
          margin-top 10px

</style>