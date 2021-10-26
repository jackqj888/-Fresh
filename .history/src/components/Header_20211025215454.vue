<template>
  <div class="home-header wrap">
    <div class="top">
      <div class="logo">
        <img src="@/assets/login.png" alt="login" />
      </div>
      <div class="logo1">
        <span class="siteName">汝果AI门户系统</span>
        <span class="siteName1">Ruguo AI portal system</span>
      </div>
      <div class="user" v-if="IdInfo1 == ''">
        <el-button class="btn">快速登入</el-button>
        <el-button class="btn1" icon="el-icon-user">账号登入</el-button>
      </div>
      <div v-else class="userName">
        <img src="@/assets/popularScience.png" alt="" class="image" />
        <span class="username">jacky</span>
        <el-dropdown>
        <el-button type="primary" class="my">
          我的订单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的课程</el-dropdown-item>
          <el-dropdown-item>我的简历</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { clearToken } from '@/utils/storage'

export default {
  data() {
    return {
      message: '请登入',
      uInfo1: [],
    }
  },
  created() {
    this.uInfo1 = JSON.parse(window.localStorage.getItem('user_info'))
    console.log('zzz', this.uInfo1)
  },
  computed: {
    username() {
      return this.$store.state.user
    },
  },
  methods: {
    Jump() {
      this.$router.push({
        path: `/login`,
      })
    },
    goHome() {
      this.$router.push({
        path: `/productlist`,
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
    },
  },
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
    margin 40px 0 40px 0
    display flex
    flex-direction column
    justify-content center
    lign-items center

    margin-right 170px
    .siteName
      font-size 30px
      line-height: 30px;
      margin-bottom 20PX

    .siteName1
      font-size 13px
      line-height: 20px
      margin-bottom:  20PX
  .userName
    width 350px
    height 70px
    display flex
    justify-content center
    margin-top 30px
    .image
      width 60px
      height 60px
    .username
      margin-left 14px
      font-size 18px
    .my
      margin-left 31px  
      background-color #FFA0B4
      border none   // 去掉边框
      outline none  // 去掉点击按钮后的边框
      width 180px
      height 60px
      font size 18px


.router-link-active
  text-decoration: none;



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
      box-shadow 5px 15px 10px 8px rgba(207,202,241,.5)



.el-icon-user
 margin-right 20px
</style>
