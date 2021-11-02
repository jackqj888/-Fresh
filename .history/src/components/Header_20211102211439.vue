<template>
  <div class="home-header wrap">
    <el-row class="top">
      <el-col :md="8" :sm="24">
        <div class="logo">
          <img :src="footList.logo" alt="logo" class="logo"/>
        </div>
      </el-col>
      <el-col :md="8" :sm="24">
        <div class="logo1">
          <span class="siteName">{{ footList.name }}</span>
          <!--        <span class="siteName1">{{footList.companyProfile}}</span>-->
        </div>
      </el-col>
      <el-col :md="8" :sm="24">
        <div class="user" v-if="uInfo1 === null">
          <el-button class="btn" @click="goLogin('mobile')">快速登入</el-button>
          <el-button class="btn1" icon="el-icon-user" @click="goLogin('password')">账号登入</el-button>
        </div>
        <div v-else class="userName">
          <img :src="avatar" alt="" class="image"/>
          <span class="username">{{ uInfo1.username }}</span>

          <el-dropdown placement="bottom">
            <el-button type="primary" class="my">
              我的订单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item @click.native="goTo('study')" v-if="[appCode]==='kaopei'">我的课程</el-dropdown-item>
              <el-dropdown-item @click.native="goTo('myPage')" v-if="[appCode]==='talent'">我的简历</el-dropdown-item>

              <el-dropdown-item @click.native="dialogVisible = true">
                修改密码
              </el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <el-dialog title="修改密码" :visible.sync="dialogVisible" width="360px" @close="dialogVisibleClosed">
      <el-form :model="addForm" :rules="addFormRules" ref="addForm" class="formPosition">
        <el-form-item prop="mobile">
          <el-input placeholder="手机号码" v-model="addForm.mobile" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="+86">
              <el-option label="+86" value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item prop="verificationCode">
          <el-input class="put" v-model="addForm.verificationCode" placeholder="短信验证码"></el-input>
          <el-button
              class="verificationCode"
              @click="getCode"
              :class="{ 'disabled-style': getCodeBtnDisable }"
          >
            {{ verificationCode1 }}
          </el-button>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input class="put" v-model="addForm.newPassword" placeholder="输入新密码" type="password"></el-input>
        </el-form-item>
        <el-form-item prop="confirmNewPassword">
          <el-input class="put" v-model="addForm.confirmNewPassword" placeholder="确认新密码" type="password"
                    @blur="blur"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button class="btn5" type="primary" @click="onSubmit('addForm')" :disabled="disabled">
            完 成
          </el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import api from '@/api'
import {clearToken} from '@/utils/storage'

export default {
  props: {
    footList: {
      type: Object,
      default() {
        return []
      },
    },
    menuList: {
      type: Array,
      default() {
        return []
      }
    },
  },
    data() {
      return {
        dialogVisible: false,
        message: '请登入',
        uInfo1: '',
        select: '+86',
        verificationCode1: '获取验证码',
        addForm: {
          mobile: '',
          verificationCode: '',
          newPassword: '',
          confirmNewPassword: ''
        },
        waitTime: 30,
        res: [],
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
        disabled: true,
        avatar: '',
        appCode: '',
        items:[]
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
        set() {
        },
      },
    },
    mounted(){
      this.getmenuList()
    },
    watch:{
      menuList:{
        immediate:true,
        handler(val) {
          this.items=val
          console.log('kkk',this.items);
        }
        
      }
    },
    
    created() {
      
      this.uInfo1 = JSON.parse(window.localStorage.getItem('user_info'))
      this.addForm.mobile = this.uInfo1 && this.uInfo1.phone ? this.uInfo1.phone : ''
      this.avatar = this.uInfo1 && this.uInfo1.avatar !== '' ? this.uInfo1.avatar : ""
      
    },

    methods: {
      dialogVisibleClosed() {
        this.$refs.addFormRefs.resetFields()
      },
      getCode() {
        if (this.phoneNumberStyle) {
          // 调用获取短信验证码接口
          api.login.getCode(this.addForm.mobile).then((res) => {
            if (!res) {
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
      checkTime() {
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
      },
      changePassword() {
        let params = {
          password: this.addForm.newPassword
        }
        api.login.changePassword(params).then((res) => {
          if (res) {
            this.logout()
          }
        })
      },
      goLogin(type) {
        this.$router.push({
          path: `/login`,
          query: {
            type: type
          }
        })
      },
      goTo(type) {
        if (type === 'study') {
          window.open('http://rmt-mp.ruguoai.info/prod-api/pages/my/index?activeIndex=0', '_blank')
        } else {
          window.open('http://rmt-mp.ruguoai.info/prod-api/talent/user', '_blank')
        }
      },
      logout() {
        // 这里实现登出逻辑
        api.logout.getLogout().then(() => {
          window.localStorage.clear();
          clearToken()
          this.$router.push('/login')
        })
      },
      blur() {
        if (this.addForm.confirmNewPassword === this.addForm.newPassword) {
          this.disabled = false
        } else {
          this.$message.error('两次密码不一致！')
          this.disabled = true
        }
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = this.addForm.mobile + '/' + this.addForm.verificationCode
            api.login.getCheck(params).then((res) => {
              if (!res) {
                this.changePassword()
              } else {
                this.$message.error('验证码错误！')
              }
            })
          }
        });
      },
      getmenuList(){
        this.items.map(item => {
        if (item.items.appCode === 'kaopei') {
          this.appCode = item.items.appCode
          console.log('hhh',this.appCode);
        }
      })
      }
       
    },
  }
</script>

<style lang="stylus" scoped>
.home-header {
  color: #333;
  line-height: 60px;
  background-color: #fff
}

.top
  justify-content: center
  max-width: 1200px
  margin: 0 auto

.logo
  width 175px
  height 144px

  img {
    max-height 100%
    max-width 100%
  }

.logo1
  display flex
  flex-direction column
  lign-items center

  .siteName
    font-size 30px
    line-height: 30px;
    margin-bottom 10px
    margin-top 40px
    text-align center

  .siteName1
    font-size 13px
    line-height: 20px
    margin-bottom: 10px
    text-align center

.userName

  display flex
  justify-content center
  margin-top 30px
  height 50px

  .image
    width 60px
    height 60px
    border-radius 10px

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
  outline none

// 去掉点击按钮后的边框
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

.is-disabled {
  background-color #FFBCCD !important
  color #f1f1f1
}

.el-input--suffix {
  width: 70px;
}

.el-input__inner {
  padding-left: 10px;
}

.el-dropdown-menu__item:focus, .el-dropdown-menu__item:hover {
  background-color: #ffa0b4 !important;
  color: #ffffff !important;
}

>>> .el-dialog {
  border-radius 10px
}

@media screen and ( max-width: 980px ) {
  .top {
    .logo {
      margin 0 auto
    }

    .siteName {
      margin-top 0
    }

    .userName {
      margin-bottom 30px
    }
  }
}

@media screen and ( max-width: 414px ) {
  .top {
    .userName {
      .image {
        width 40px
        height 40px
      }

      .username {
        font-size 14px
        line-height 40px
      }

      .my {
        width 120px
        height 40px
        font-size 14px
      }

      .el-dropdown {
        top: -10px
      }
    }
  }
}
</style>
