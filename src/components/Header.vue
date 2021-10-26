<template>
  <div class="home-header wrap">
    <div class="top">
      <div class="logo">
        <img src="@/assets/login.png" alt="login"/>
      </div>
      <div class="logo1">
        <span class="siteName">汝果AI门户系统</span>
        <span class="siteName1">Ruguo AI portal system</span>
      </div>
      <div class="user" v-if="uInfo1 === null">
        <el-button class="btn" @click="goLogin">快速登入</el-button>
        <el-button class="btn1" icon="el-icon-user" @click="goLogin">账号登入</el-button>
      </div>
      <div v-else class="userName">
        <img src="@/assets/popularScience.png" alt="" class="image"/>
        <span class="username">{{ uInfo1.username }}</span>

        <el-dropdown>
          <el-button type="primary" class="my">
            我的订单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的课程</el-dropdown-item>
            <el-dropdown-item>我的简历</el-dropdown-item>
            <el-dropdown-item @click.native="dialogVisible = true">
              修改密码
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-dialog title="修改密码" :visible.sync="dialogVisible" width="20%" @close="dialogVisibleClosed">
        <el-form :model="addForm" :rules="addFormRules" ref="addFormRefs"  class="formPosition">
          <el-form-item prop="mobile">
            <el-input placeholder="手机号码" v-model="addForm.mobile" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="+86">
                <el-option label="+852" value="1"></el-option>
                <el-option label="+81" value="2"></el-option>
              </el-select>
            </el-input>
<!--            <el-input class="put" v-model="addForm.mobile" placeholder="手机号码">-->
<!--            </el-input>-->
          </el-form-item>
          <el-form-item prop="verificationCode">
            <el-input class="put" v-model="addForm.verificationCode" placeholder="短信验证码" ></el-input>
            <el-button
                class="verificationCode"
                @click="getCode"
                :class="{ 'disabled-style': getCodeBtnDisable }"
            >
              {{ verificationCode1 }}
            </el-button>
          </el-form-item>
          <el-form-item prop="newPassword">
            <el-input class="put" v-model="addForm.newPassword" placeholder="输入新密码"></el-input>
          </el-form-item>
          <el-form-item prop="confirmNewPassword">
            <el-input class="put" v-model="addForm.confirmNewPassword" placeholder="确认新密码"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button class="btn5"  type="primary" @click="dialogVisible = false">
            完 成
          </el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import {clearToken} from '@/utils/storage'

export default {
  data() {
    return {
      dialogVisible: false,
      message: '请登入',
      uInfo1: '',
      select:'',
      verificationCode1:'获取验证码',
      addForm: {
        mobile: '',
        verificationCode: '',
        newPassword: '',
        confirmNewPassword: ''
      },
      waitTime: 30,
      res:[],
      addFormRules: {
        mobile: [
          {required: true, message: '请输入手机号码', trigger: 'blur'}
        ],
        verificationCode: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ],
        newPassword: [
          {required: true, message: '请输入新密码', trigger: 'blur'}
        ],
        confirmNewPassword: [
          {required: true, message: '请确认新密码', trigger: 'blur'}
        ]
      },


    }
  },
  computed: {
    // 用于校验手机号码格式是否正确
    phoneNumberStyle() {
      let reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.addForm.mobile)) {
        return false
      }
      return true
    },
    getCodeBtnDisable: {
      get() {
        if (this.waitTime === 30) {
          if (this.addForm.mobile) {
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
    this.uInfo1 = JSON.parse(window.localStorage.getItem('user_info'))
    console.log('zzz', this.uInfo1)
  },
  // computed: {
  //   username() {
  //     return this.$store.state.user
  //   },
  // },
  methods: {

    dialogVisibleClosed() {
      this.$refs.addFormRefs.resetFields()
    },

    getCode() {
      if (this.phoneNumberStyle) {
        // 调用获取短信验证码接口
        // api.login.getCode(this.addForm.mobile).then((res) => {
        //   this.res = res
        //   console.log('ccc', this.res)
        //   if (this.res.status === 200) {
        //     this.$message({
        //       message: '验证码已发送，请稍候...',
        //       type: 'success',
        //       center: true,
        //     })
        //   }
        // })
        // 因为下面用到了定时器，需要保存this指向
        let that = this
        that.waitTime--
        that.getCodeBtnDisable = true
        that.verificationCode1 = `${that.waitTime}s 后重新获取`
        let timer = setInterval(function () {
          if (that.waitTime > 1) {
            that.waitTime--
            that.verificationCode1 = `${that.waitTime}s 后重新获取`
          } else {
            clearInterval(timer)
            that.verificationCode1 = '获取验证码'
            that.getCodeBtnDisable = false
            that.waitTime = 30
          }
        }, 1000)
      } else {
        this.$message.error('手机号码错误！')
      }
    },
    goLogin() {
      this.$router.push({
        path: `/login`,
      })
    },
   
    logout() {
      // 这里实现登出逻辑
      api.logout.getLogout().then(() => {
        // this.$store.commit('logout')
       window.localStorage.clear();
        clearToken()
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style lang="stylus">
.home-header {
  background-color: #d2cdcd;
  color: #333;

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
    margin-bottom: 20PX

.userName

  display flex
  justify-content center
  margin-top 30px

  .image
    width 60px
    height 60px

  .username
    margin-left 14px
    font-size 18px
    margin-bottom 10px

  .my
    margin-left 31px
    background-color #FFA0B4
    border none // 去掉边框
    outline none // 去掉点击按钮后的边框
    width 180px
    height 60px
    font-size 18px

.el-dropdown-menu el-popper

  top 10px


.router-link-active
  text-decoration: none;

.el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
  border-radius 15px
}

.el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
}
  
.verificationCode
  border none 
  outline none
  position absolute
  right 0
  padding 0
  margin-top 12px
  margin-right 5px
  color: #FC7497
  background-color: #F1F1F1
.verificationCode:hover
  color: #FC7497
 

.el-form formPosition
  display flex
  justify-content center
  flex-direction: column

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
  border none
  outline none
  border-radius 15px
  margin-right 18px
.btn:hover
  background #FE8CAA
  color: #ffffff
.btn1
  width 177px
  height 60px
  color #fff
  font-size 18px
  background #FE5782
  border none
  outline none
  border-radius 15px
  box-shadow 5px 15px 10px 8px rgba(207, 202, 241, .5)
.btn1:hover
  background #FE5782
  color: #ffffff
  
.btn5
  width 100%
  background-color: #FFBCCD
  box-sizing border-box
  border none // 去掉边框
  outline none // 去掉点击按钮后的边框
.btn5:hover
  background-color: #FFBCCD

.el-dropdown
  margin 0
  
.el-dialog__body
  padding 15px 50px 0

.el-dialog__footer
  padding 0 50px 20px 50px
  box-sizing border-box


.el-input__inner
  background-color: #F1F1F1
  padding 0
.el-icon-user
  margin-right 20px
.disabled-style
  background-color #f1f1f1
  color #FFBCCD
.el-button:focus
  color #FFBCCD
.disabled-style :hover
  color #FFBCCD

.el-select
  padding-right: 0

  
</style>
