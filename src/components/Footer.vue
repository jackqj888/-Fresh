<template>
  <div class="home-footer wrap">
    
    <div class="companyName">
      <div class="image">
        <img src="@/assets/login_foot.png" alt="logo" class="logo"/>
      </div>
      <div class="name">
        <p class="company">杭州汝果智能健康科技有限公司</p>
        <p class="company1">Hangzhou Ruguo Intelligent Health Technology Co., Ltd</p>
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
.home-footer {
  //height: 100px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
 
}

 .companyName
      display: flex
      justify-content: center 
      .name
        display: flex
        justify-content: center
        flex-wrap: wrap
        .image
          margin-left 400px
        
        .company
          font-size 35px
          margin-top 35px
          //height: 46px
          min-width: 60%; // 加入这两个后每个item的宽度就生效了
          max-width: 60%; // 加入这两个后每个item的宽度就生效了
    
    
        .company1
          font-size 13px
          //height: 17px
          min-width: 70%; // 加入这两个后每个item的宽度就生效了
          max-width: 70%; // 加入这两个后每个item的宽度就生效了

  
</style>