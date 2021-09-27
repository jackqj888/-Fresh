<template>
  <div class="container">
    <div class="container_left">
      <div style="text-align:center">
        <button v-for="(item, id) in categories" :key="id" @click="btnclick(item)">{{ item.name }}</button>
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
      <div class="productList">
        <div class="goods">
          <div class="item" @click="jump">
            <div class="item_detail">
              <img class="item_img" src="@/assets/item.png" />
              <span class="item_name">电子仪</span>
              <span class="item_price">￥100</span>
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
      categories: [
        {id: 'a', name: '水果'},
        {id: 'b', name: '蔬菜'},
        {id: 'c', name: '海鲜'},

      ]
    }
  },
  methods:{
    jump(){
      this.$router.push({
        path:`/details`
      })
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
  width: 1300px
  height: 600px
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
  justify-content: center
  align-items: center
  .goods 
   width: 1200px
   height: 500px
  
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
        width:126px
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