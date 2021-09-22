<template>
  <span class="btn" @click="$emit('click')">
    <slot>按钮文字</slot>
  </span>
</template>

<script>
export default {
  name: 'btn',
}
</script>

<style scoped lang="stylus">
.btn
  width 160px
  height 34px
  background rgba(238, 83, 130, 0.2)
  text-align center
  line-height 34px
  border 1px solid #EE5382
  color #EE5382
  font-size 16px
  border-radius 2px
  cursor pointer
  display inline-block
  vertical-align top
</style>