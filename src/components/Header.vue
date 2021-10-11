<template>
  <div class="home-header wrap">
    <div class="top">
      <span class="app-name" @click="goHome">时代生鲜</span>
        <div class="user">
          
          <a v-if="!username" @click="Jump" >{{ message }}</a>

          <div v-else>
            <a >用户名: {{ username }}</a>
            <button @click="logout" style="margin-left: 10px">登出</button>
          </div>
          
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
      message: "请登入"
    }
  },
  computed: {
    username() {
      return this.$store.state.user
    }
  },
  methods:{
    Jump(){
      this.$router.push({
        path:`/login`
      })
    },
    goHome(){
      this.$router.push({
        path:`/productlist`
      })
    },
    logout() {
      // 这里实现登出逻辑
      api.logout.getLogout().then(()=>{  
        // clearToken()
        this.$store.commit('logout')
        clearToken()
        // this.$router.push('/login')
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