<template>
  <div class="home-header wrap">
    <div class="top">
      <span class="app-name">时代生鲜</span>
        <div class="user">
          
          <p @click="Jump" >用户名: {{ message }}</p>
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "请登入"
    }
  },
  methods:{
    Jump(){
      this.$router.push({
        path:`/login`
      })
    }
  }
}
</script>

<style scoped>
.home-header {
  background-color: #d2cdcd;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.top {
  display: flex;
  justify-content: space-around;
}

.router-link-active {
  text-decoration: none;
  
}

.user {

}
</style>