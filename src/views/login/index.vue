<template>
  <div class="login">
    <div class="main bgimg">
      <div class="top_left"></div>
      <div class="login1">
        <div class="login-box">
          <div class="login-top">
            <div class="tabs">
              <div
                class="tab"
                :class="{ active: form.grant_type === 'mobile' }"
                @click="form.grant_type = 'mobile'"
              >
                快捷登录
              </div>
              <div
                class="tab"
                :class="{ active: form.grant_type === 'password' }"
                @click="form.grant_type = 'password'"
              >
                登录
              </div>
            </div>
            <div>
              <span>
                Without entering a password, the first SMS login is regarded as
                the first time login was successful
              </span>
            </div>
          </div>
          <template v-if="form.grant_type === 'mobile'">
            <div class="input">
              <input
                type="text"
                v-model="form.mobile"
                placeholder="输入手机号"
              />
            </div>
            <div class="input">
              <input type="text" v-model="form.code" placeholder="输入验证码" />
              <button
                class="verificationCode"
                @click="getCode"
                :class="{ 'disabled-style': getCodeBtnDisable }"
              >
                {{ verificationCode }}
              </button>
            </div>
          </template>
          <template v-else>
            <div class="input">
              <input
                type="text"
                v-model="form.username"
                placeholder="输入手机号"
              />
            </div>
            <div class="input">
              <input
                :type="inputType"
                v-model="form.password"
                placeholder="输入密码"
              />
              <div class="view">
                <img
                  src="@/assets/eye_open.svg"
                  v-if="inputType === 'text'"
                  @click="inputType = 'password'"
                />
                <img
                  src="@/assets/eye_close.svg"
                  v-else
                  @click="inputType = 'text'"
                />
              </div>
            </div>
          </template>
          <div to="/index">
            <div class="btn" @click="getLogin">登录</div>
          </div>
          <div class="pact">
            <p>
              登入则同意
              <a href="url">《汝美堂用户协议》</a>
              ? Sign In
            </p>
          </div>
        </div>
      </div>
      <div class="bottom_right"></div>
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
      waitTime: 30,
      verificationCode: '获取验证码',
      inputType: 'password',
      res: [],
      form: {
        grant_type: 'password',
        scope: 'server',
        username: '',
        password: '',
        mobile: '',
        code: '',
      },
    }
  },
  computed: {
    // 用于校验手机号码格式是否正确
    phoneNumberStyle() {
      let reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.form.mobile)) {
        return false
      }
      return true
    },
    getCodeBtnDisable: {
      get() {
        if (this.waitTime === 30) {
          if (this.form.mobile) {
            return false
          }
          return true
        }
        return true
      },
      set() {},
    },
  },
  created() {
    const a = getToken()
    if (a) {
      this.$router.replace('/index')
    }
    if(this.$route.query.type){
      this.form.grant_type = this.$route.query.type
    }
  },
  methods: {
    getCode() {
      if (this.phoneNumberStyle) {
        // 调用获取短信验证码接口
        api.login.getCode(this.form.mobile).then((res) => {
          this.res = res
          if (res) {
            this.$message({
              message: '验证码已发送，请稍候...',
              type: 'success',
              center: true,
            })
            this.checkTime()
          }
        })
      } else {
        this.$message.error('手机号码错误！')
      }
    },
    checkTime(){
      // 因为下面用到了定时器，需要保存this指向
      let that = this
      that.waitTime--
      that.getCodeBtnDisable = true
      that.verificationCode = `${that.waitTime}s 后重新获取`
      let timer = setInterval(function () {
        if (that.waitTime > 1) {
          that.waitTime--
          that.verificationCode = `${that.waitTime}s 后重新获取`
        } else {
          clearInterval(timer)
          that.verificationCode = '获取验证码'
          that.getCodeBtnDisable = false
          that.waitTime = 30
        }
      }, 1000)
    },
    getLogin() {
      if(this.form.grant_type === 'password') {
        if(this.form.username !== '' && this.form.password !== ''){
          let data = {
            username: this.form.username,
            password: this.form.password,
            grant_type: this.form.grant_type,
            scope: this.form.scope
          }
          api.login.goLogin(data).then((res) => {
            let access_token = res.access_token
            window.localStorage.setItem('access_token', access_token)
            let userInfo = res.user_info
            window.localStorage.setItem('user_info', JSON.stringify(userInfo))
            this.getMenuList(data)
            this.$router.push({name: 'home', params: {data}})
          })
          
        } else {
          this.$message.error('请输入手机号和密码！')
        }
      } else {
        if(this.form.mobile !== '' && this.form.code !== ''){
          let data = {
            mobile: this.form.mobile,
            code: this.form.code,
          }
          api.login.getlogin(data).then((res) => {
            let access_token = res.access_token
            window.localStorage.setItem('access_token', access_token)
            let userInfo = res.user_info
            window.localStorage.setItem('user_info', JSON.stringify(userInfo))
            this.getMenuList(data)
            this.$router.push({name: 'home', params: {data}})
          })
          
        } else {
          this.$message.error('请输入手机号和验证码！')
        }
      }
    },
    getMenuList(data){
      api.login.MenuList(data).then((res) => {
        this.data=res
        console.log('xxx',this.data)
      })
    }
    
    
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

    background-color: #FE8CAA
    position relative
    justify-content center
    overflow hidden
    .top_left{
      position: absolute;
      width: 750px;
      height: 750px;
      left: -16%;
      top: -40%;
      background: rgba(255, 255, 255, 0.2);
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 160px;
      transform: rotate(-45deg);
      z-index: 1;
    }
    .bottom_right{
      position: absolute;
      width: 750px;
      height: 750px;
      left: 55%;
      top: 38%;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 160px;
      transform: rotate(-45deg);
      z-index: 1;
    }
    .login1
      height 100vh
      display: flex
      justify-content: center
      align-items: center
      z-index: 100;

      .logo
        width 148px
        height 100px
        left 52px
        top 50px

      .login-box
        width 513px
        text-align center
        background #F6FBF9
        padding 50px 40px 75px
        box-sizing border-box
        border-radius: 50px
        z-index: 100;
        .login-top
          height 130px

        .input
          margin-top 18px
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
          border-radius 10px

        .verificationCode
          position absolute
          top 18px
          right 0
          background-color #909090
          border none   // 去掉边框
          outline none  // 去掉点击按钮后的边框
          color #fff
          font-size: 12px
          border-radius 20px
          width: 95px
          height: 33px


        .btn
          width 288px
          height 58px
          color #fff
          font-size 18px
          line-height 62px
          background #FE8CAA

          cursor pointer
          border-radius 10px
          display:block
          margin:30px auto 0 auto

        .router-link-active {
          text-decoration: none;
        }

        .tabs
          margin-bottom 28px
          display: flex
          justify-content: space-around

          .tab
            //margin-left 120px
            font-size 24px
            color #0c0c0c
            position relative
            line-height 33px
            cursor pointer


            &.active
              color #FE8CAA
              cursor auto

              &::after
                content ''
                display block
                position absolute
                width 40px
                height 3px
                background #FE8CAA
                border-radius 10px
                left 50%
                transform translateX(-50%)
                margin-top 5px
        .pact
          margin-top 25px
         a
           text-decoration: none
           color: #FE8CAA
.disabled-style
  background-color #EEEEEE
  color #CCCCCC
</style>
