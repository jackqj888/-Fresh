<template>
  <div class="pagetemplate">
    <Header :footList="footList"></Header>
    <!-- <keep-alive :exclude="/-no_cache/"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import api from '@/api'
// import { getToken } from '@/utils/storage'
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      footList:[]
    }
  },
  created() {
   this. getLogoList()
  },
  methods: {
       getLogoList(){
      api.home.LogoList().then(res=>{
        this.footList=res
        console.log('nnn',this.data1)
      })
    },
  },
  watch: {},
}
</script>

<style scoped lang="stylus">
.pagetemplate
  background: #F5F5F5
</style>
