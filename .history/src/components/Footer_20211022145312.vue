<template>
  <div class="home-footer wrap">
    <div class="companyName">
      <div class="image">
        <img src="@/assets/login_foot.png" alt="logo" class="logo" />
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
            <img src="@/assets/phone .png" alt="logo" class="phone " />
            <span>+91 9876 543 210</span>
          </div>
        </div>
      </div>
      <div>
        <i></i>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
        margin-top 35px
      .company
        font-size 35px
        margin-top 35px
      .company1
        font-size 13px
        margin-bottom: 10px
        line-height: 30px
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
        justify-content center
        .mail
         margin-right 5px
        
</style>
