<template>
  <div class="home-footer wrap">
    
    <div class="companyName">
      <div class="image">
        <img src="@/assets/login_foot.png" alt="logo" class="logo"/>
      </div>
      <div class="name">
        <span class="company">杭州汝果智能健康科技有限公司</span>
        <span class="company1">Hangzhou Ruguo Intelligent Health Technology Co., Ltd</span>
      </div>
    </div>
    <div>
      <div class="scanCode">
        <img src="@/assets/scanCode.png" alt="scanCode" class="scanCode"/>
      </div>
      <div>
        <i ></i>
        <i ></i>
      </div>
    </div>
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="stylus">
.home-footer 
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
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
</style>