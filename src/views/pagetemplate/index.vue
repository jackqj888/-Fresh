<template>
  <div class="pagetemplate">
    <Header :footList="footList" :menuList="menuList"></Header>

    <router-view></router-view>

    <Footer :footList="footList" :QrCode="linksQrCodeImg"></Footer>
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
      footList: {},
      linksQrCodeImg: [],
      menuList:[]
    }
  },
  created() {
    this.getLogoList()
    this.getMenuList()
  },
  methods: {
    getLogoList() {
      api.home.LogoList().then(res => {
        this.footList = res
        this.linksQrCodeImg = this.footList.linksQrCodeImg
      })
    },
    getMenuList(){
      api.login.MenuList().then((res) => {
        this.menuList=res
        console.log('xxx',this.menuList)
      })
    }
  },
  watch: {},
}
</script>

<style scoped lang="stylus">
.pagetemplate
  background: #F5F5F5
</style>
