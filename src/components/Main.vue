<template>
  <div class="home-Main wrap">
    <div>
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
    
        <el-menu-item index="2">
          <router-link to="/productlist">
          <span>
            生鲜产品
          </span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
    <el-table :data="cProductList"
              style="width: 100%"
              height="500"
              border
    >
      <el-table-column v-for="(item, key) in cProductList[0]" :key='key'
                       :prop="key"
                       :label="key"
                       width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    cProductList: {
      type: Array,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  // methods:{
  //   // 表格头部样式
  //   headerClass() {
  //     return 'table-header-class'
  //   },
  //
  //   // element列表文字居中
  //   cellStyle () {
  //     return 'text-align:center;line-height: 8px;'
  //   },
  //
  //
  // }
}
</script>

<style scoped lang="stylus">
.home-Main {
  min-height: 550px;
  height: 550px;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;}

/deep/ th {
  padding: 0;
}
/deep/ td {
  padding: 0;
}


</style>