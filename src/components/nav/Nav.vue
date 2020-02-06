<template>
  <div>
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
    >
      <el-menu-item index="/">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>系统首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goodsAdd">添加商品</el-menu-item>
        <el-menu-item index="/searchGoods">查询商品</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          <span>统计管理</span>
        </template>
        <el-menu-item index="/saleStatistics">销售统计</el-menu-item>
        <el-menu-item index="/returnStatistics">退货统计</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>账号管理</span>
        </template>
        <el-menu-item index="/accontManagement">账号管理</el-menu-item>
        <el-menu-item index="/accontAdd">添加账号</el-menu-item>
        <el-menu-item index="/passwordModify">修改密码</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border: none;
  text-align: left;
}
</style>
