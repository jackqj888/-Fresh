<template>
  <div>home</div>
</template>

<script>
import api from '@/api'
export default {
  name: 'home',
  data() {
    return {
    }
  },
  created() {
      api.login.getCode().then(() => {
        console.log(111222)
      })
  },
}
</script>

<style scoped>

</style>
