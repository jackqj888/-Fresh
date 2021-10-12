<template>
  <div>
    <div class="cartList" >
      <div class="cartListBox" v-for="(value,index) in CartAddLists" :key="index">
        <div class="cartListBox_left">
          <img src="@/assets/item.png" />
        </div>
        <div class="cartListBox_center">
          <div class="title">
            <span>{{ v }}</span>
          </div>
          <div class="num">
            1
            <p>个</p>
          </div>
          <div class="detail">
            <p class="price">
              价格
              <span style="color: #d83041;">
                ¥ 222
              </span>
            </p>
          </div>

        </div>
        <div class="cartListBox_right">
          <button class="add">增加</button>
          <button class="reduce">减少</button>
          <button class="Selected">选中</button>
          <button class="remove">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import eventBus from "@/eventBus";
export default {
  data(){
    return{
      CartAddLists:[]
    }
  },
  created() {
    eventBus.$on('add',(CartAddList)=>{
      //一些操作，message就是从top组件传过来的值
      this.CartAddLists = CartAddList
      console.log('aaa',this.CartAddLists)
    })
  }

}

</script>

<style scoped lang="stylus">
  .cartList
    width: 1000px
    height: 760px
    display: flex
    justify-content:center
    .cartListBox
      margin: 10px 0
      width: 800px
      height: 180px
      border: 1px solid #cbcbcb
      display: flex
      justify-content:space-around
      align-items: center
      .cartListBox_center
        margin-right: 120px;
      .cartListBox_right
        width: 200px
        height: 126px
        display: flex
        flex-wrap: wrap;
        justify-content:center
        align-items: center
        .add,.reduce,.Selected,.remove
          flex:1
          min-width:30%
          max-width:30%
          width: 50px
          margin:0 10px

</style>