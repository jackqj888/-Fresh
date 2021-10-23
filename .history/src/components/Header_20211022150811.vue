<template>
  <div class="home-header wrap">
    <div class="top">
      <div class="logo">
        <img src="@/assets/login.png" alt="login" />
      </div>
      <div class="logo1">
        <span class="siteName">汝果AI门户系统 </span>
        <span class="siteName1">Ruguo AI portal system</span>
      </div>
      <div class="user">
        <el-button class="btn">快速登入</el-button>
        <el-button class="btn1" icon="el-icon-user" >账号登入</el-button>
<!--        <a v-if="!username" @click="Jump">{{ message }}</a>-->
<!--        <div v-else>-->
<!--          <a>用户名: {{ username }}</a>-->
<!--          <button @click="logout" style="margin-left: 10px">登出</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import {clearToken} from '@/utils/storage'

export default {
  data() {
    return {
      message: "请登入",
      
    }
  },
  computed: {
    username() {
      return this.$store.state.user
    }
  },
  methods: {
    Jump() {
      this.$router.push({
        path: `/login`
      })
    },
    goHome() {
      this.$router.push({
        path: `/productlist`
      })
    },
    logout() {
      // 这里实现登出逻辑
      api.logout.getLogout().then(() => {
        // clearToken()
        this.$store.commit('logout')
        clearToken()
        // this.$router.push('/login')
      })


    }
  }
}
</script>

<style scoped lang="stylus">
.home-header {
  background-color: #d2cdcd;
  color: #333;
  text-align: center;
  line-height: 60px;
  
}

.top 
    display: flex;
    justify-content: center 
    background-color: #fff
  .logo
    margin-right 303px
  .logo1
    margin-top 40px
    display flex
    flex-direction column
    justify-content center
    lign-items center
    width 243px
    height 66px
    margin-right 170px
    .siteName
      font-size 30px
      line-height: 30px;
      margin-bottom 20PX
     
    .siteName1
      font-size 13px
      line-height: 20px
      margin-bottom:  20PX
     
     

.router-link-active {
  text-decoration: none;

}
  
.user
   display flex
   justify-content flex-start
   margin 30px 

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
    
    .btn1
      width 177px
      height 60px
      color #fff
      font-size 18px
      background #FE5782
      border none   // 去掉边框
      outline none  // 去掉点击按钮后的边框
      border-radius 15px

.el-icon-user
 margin-right 20px      
</style>