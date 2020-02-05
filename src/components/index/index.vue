<template>
  <div class="index">
    <el-container>
      <!-- 头部 -->
      <el-header height="8%">
        <h1>
        <i class="el-icon-s-fold"></i>
          华联超市后台管理系统</h1>
      </el-header>
      <!-- 主体 -->
      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="12%">
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
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
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
.index {
  height: 100%;
  .el-container {
    height: 100%;
    // 头
    .el-header {
      background-color: #242f42;
      color: #fff;
      text-align: left;
      line-height: 60px;
      font-weight: normal;
    }
    // 左侧
    .el-aside {
      background-color: #324157;
      color: #333;
      text-align: center;
      .el-menu{
        border: none;
        text-align: left;
      }
    }
    // 右侧中间
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
    }
  }
}
</style>
