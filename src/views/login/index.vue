<template>
  <div class="login ">
    <div class="slider bgimg"></div>
    <div class="main bgimg ">
      <div class="login1">
        <div class="login-box">
          <div class="login-top">
            <img src="@/assets/logo.png" alt="logo" class="logo"/>
            <div class="tabs flex-around">
              <div class="tab" :class="{ active: form.grant_type === 'mobile' }" @click="form.grant_type = 'mobile'">
                快捷登录
              </div>
              <div class="tab" :class="{ active: form.grant_type === 'password' }"
                   @click="form.grant_type = 'password'">
                账号登录
              </div>
            </div>
          </div>
          <template v-if="form.grant_type === 'mobile'">
            <div class="input">
              <input type="text" v-model="form.mobile" placeholder="用户名/手机号码"/>
            </div>
            <div class="input">
              <input type="text" v-model="form.code" placeholder="短信验证码"/>
              <div class="get-code" @click="getCode">{{ text }}</div>
            </div>
          </template>
          <template v-else>
            <div class="input">
              <input type="text" v-model="form.username" placeholder="用户名/手机号码"/>
            </div>
            <div class="input">
              <input :type="inputType" v-model="form.password" placeholder="密码"/>
              <div class="view">
                <img src="@/assets/eye_open.svg" v-if="inputType === 'text'" @click="inputType = 'password'"/>
                <img src="@/assets/eye_close.svg" v-else @click="inputType = 'text'"/>
              </div>
            </div>
          </template>
          <div class="btn" @click="login">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import {getToken} from '@/utils/storage'

export default {
  name: 'login',
  data() {
    return {
      inputType: 'password',
      form: {
        grant_type: 'username',
        scope: 'server',
        username: '',
        password: '',
        mobile: '',
        code: '',
        TERMINAL: 'web',
      },
    }
  },
  created() {
    const a = getToken()
    if (a) {
      this.$router.replace('/index')
    }
  },
  methods: {
    async login() {
      let res = null
      if (this.form.grant_type === 'mobile') {
        console.log(111)
      } else {
        if (!this.form.username) {
          return this.$message('请输入用户名')
        }
        if (!this.form.password) {
          return this.$message('请输入密码')
        }
        const formData = new FormData()
        formData.append('grant_type', 'password')
        formData.append('username', this.form.username)
        formData.append('password', this.form.password)
        formData.append('scope', this.form.scope)
        res = await api.login.loginWidthPassword(formData)
        console.log(res)
      }
      // setToken(res.access_token)
      // this.$store.commit('setUser', res.user_info)
      // api.login.getUserInfo().then((res) => {
      //   this.$store.commit('setUser', res)
      // })
      this.$router.push('/index')
    },
  },
}
</script>

<style scoped lang="stylus">
.bgimg
  background-repeat no-repeat
  background-size cover
  background-position center

.login
  display flex
  justify-content: space-between

  .slider
    height 100vh
    width 22vw
    width 420px
    background-image url('~@/assets/login_slider.png')

  .main
    height 100vh
    flex 1
    background-image url('~@/assets/login_bg.png')
    position relative
    justify-content center

    .login1
      height 100vh
      display: flex
      justify-content: center
      align-items: center
      
      .login-top
        display: flex
        justify-content: space-around
      .logo
        width 148px
        height 100px
        left 52px
        top 50px

      .login-box
        width 440px
        text-align center
        background #fff
        padding 50px 40px 75px
        box-sizing border-box


        .input
          margin-top 20px
          position relative

          .get-code
            color #EE5382
            position absolute
            right 10px
            top 20px
            line-height 22px
            padding 0 10px
            cursor pointer

          .view img
            color #EE5382
            position absolute
            right 10px
            top 22px
            padding 0 10px
            cursor pointer
            width 18px
            height 18px

        input
          background #F1F1F1
          width 100%
          height 62px
          text-indent 1em
          font-size 16px
          display block

        .btn
          height 62px
          color #fff
          font-size 18px
          line-height 62px
          background rgba(238, 83, 130, 0.4)
          margin-top 30px
          cursor pointer

        .tabs
          margin-bottom 68px

          .tab
            //margin-left 120px
            font-size 24px
            color #999999
            position relative
            line-height 33px
            cursor pointer

            &.active
              color #000
              cursor auto

              &::after
                content ''
                display block
                position absolute
                width 40px
                height 3px
                background #EE5382
                border-radius 3px
                left 50%
                transform translateX(-50%)
                margin-top 5px


</style>
