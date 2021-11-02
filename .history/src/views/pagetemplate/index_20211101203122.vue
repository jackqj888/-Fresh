<template>
  <div class="pagetemplate">
    <Header></Header>
    <!-- <keep-alive :exclude="/-no_cache/"> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <Footer :footList="footList"></Footer>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import { getToken } from '@/utils/storage'
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {}
  },
  created() {
  
  },
  methods: {
    
  },
  watch: {},
}
</script>

<style scoped lang="stylus">
.pagetemplate
  background: #F5F5F5
</style>
