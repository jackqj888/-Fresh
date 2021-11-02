<template>
  <div class="home-footer wrap">
    <div class="companyName" >
      <div class="foot">
        <div class="image">
          <img :src="footList.logo" alt="logo" class="logo" />
        </div>
        <div class="name">
          <span class="company">杭州汝果智能健康科技有限公司</span>
          <span
            style="width: auto; display: block; text-align: left;"
            class="company1"
          >
            Hangzhou Ruguo Intelligent Health Technology Co., Ltd
          </span>
        </div>
      </div>
      <div>
        <div class="scanCode">
          <div class="scanCode-left">
            <img src="@/assets/scanCode.png" alt="scanCode" class="scanCode1" />
          </div>
          <div class="scanCode-right">
            <div class="email">
              <img src="@/assets/mail.png" alt="logo" class="mail" />
              <span>support@bhalani.com</span>
            </div>
            <div class="telephone">
              <img src="@/assets/phone .png" alt="logo" class="phone" />
              <span>+91 9876 543 210</span>
            </div>
          </div>
        </div>
        <div>
          <div class="safeCode">
            <span>公安备案号 - © {{ item.ipcRecordNumber }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  // props: {
  //   footList: {
  //     type: Array,
  //     default() {
  //       return {}
  //     },
  //   },
  // },
  data() {
    return {
      footList: null,
    }
  },
  created() {
    this.getLogoList()
  },
  methods: {
    getLogoList() {
      api.home.LogoList().then((res) => {
        this.footList = res
        console.log('nnn', this.footList)
      })
    },
  },
}
</script>

<style scoped lang="stylus">
.home-footer
  background-color: #ffffff;
  color: #333;
  text-align: center;

  .companyName
      display: flex
      justify-content: center
      .name
        display flex
        flex-direction column
        justify-content center
        lign-items center
      .logo
        margin-top 25px
      .company
        font-size 35px
        margin-top 25px
      .company1
        font-size 13px
        margin-bottom: 10px
        line-height: 30px
      .image
        width 103px
        height 85px
        img
          max-width 100%
          max-height 100%
  .scanCode
    display: flex
    justify-content center
    margin-top 30px
    .scanCode-left
      margin-right 343px
    .scanCode-right
        display flex
        flex-direction column
        justify-content center
        lign-items center
      .email
        display flex
        justify-content flex-start
        .mail
         margin-right 10px
         margin-bottom: 15px
         font-size: 18px
      .telephone
        display flex
        justify-content flex-start
        .phone
          font-size: 18px
          margin-right 10px

.safeCode{
  margin-top 63px
  padding-bottom 36px
  font-size 16px
  color: #464B70;
}
</style>
