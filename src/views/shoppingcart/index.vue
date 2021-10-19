<template>
  <div class="container">
    <div class="cartList">
      <div class="cartListBox" v-for="(value,index) in CartAddList" :key="index">
        <div class="cartListBox_left">
          <img src="@/assets/item.png"/>
        </div>
        <div class="cartListBox_center">
          <div class="title">
            <span>{{ value.productName }}</span>
          </div>
          <div class="num">
            {{ value.quantity }}
            <span>个</span>
          </div>
          <div class="detail">
            <p class="price">
              价格
              <span style="color: #d83041;">
               ¥ {{ value.price * value.quantity }}
              </span>
            </p>
          </div>

        </div>
        <div class="cartListBox_right">
          <button class="add" @click="add(index)">增加</button>
          <button class="reduce" @click="sub(index)">减少</button>
          <button class="Selected" :class="{'active':spanIndex.indexOf(index)>-1}" @click="isBlue(index,value)">选中</button>
          <button class="remove" @click="remove">删除</button>
        </div>
      </div>
      <div class="placeOrder">
        <el-button type="primary" class="placeOrder_btn">下单</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      CartAddList: [],
      cartNum: 1,
      productId: '',
      totalPrice: '',
      selected:1,
      current: '',
      isActive:true,
      spanIndex:[]
    
    }
  },
  created() {
    this.getCartList()
  },

  methods: {
    getCartList() {
      api.cart.cartList().then(res => {
        this.CartAddList = res
        console.log('zz1z', this.CartAddList)
      })
    },
    add(i) {
      this.CartAddList[i].quantity++
      this.totalPrice = this.CartAddList[i].totalPrice
      console.log('nnn', this.totalPrice)
    },
    sub(i) {
      this.CartAddList[i].quantity--
      if (this.CartAddList[i].quantity <= 0) {
        this.CartAddList.splice(i, 1)
      }
    },
    remove(i) {
      this.CartAddList.splice(i, 1)
    },
    isBlue(i) {
      let arrIndex = this.spanIndex.indexOf(i)
      console.log('bbb',arrIndex)
      if(arrIndex>-1){
        this.spanIndex.splice(arrIndex,1);
      }else {
        this.spanIndex.push(i);
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  margin: 20px 0
  display: flex
  justify-content: center

  .placeOrder
    width: 800px
    height: 30px
    .placeOrder_btn
      float: right

  .cartList
    width: 1200px
    height: 800px
    display: flex
    justify-content: center
    flex-wrap: wrap
  
    .cartListBox
      margin: 5px 0
      width: 800px
      height: 180px
      border: 1px solid #cbcbcb
      display: flex
      justify-content: space-around
      align-items: center
  
      .cartListBox_center
        width: 250px
        margin-right: 120px;
  
        .num
          margin-top: 10px
  
      .cartListBox_right
        width: 200px
        height: 126px
        display: flex
        flex-wrap: wrap;
        justify-content: center
        align-items: center
  
        .add, .reduce, .Selected, .remove
          flex: 1
          min-width: 30%
          max-width: 30%
          width: 50px
          margin: 0 10px
  
        .active
          background-color: #32bcf3
    

</style>