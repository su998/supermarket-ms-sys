<template>
  <div class="index">
    <el-container>
      <!-- 头部 -->
      <el-header height="8%">
        <Top></Top>
      </el-header>
      <!-- 主体 -->
      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="12%">
          <Nav></Nav>
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
import Nav from '../nav/Nav.vue'
import Top from '../top/Top.vue'

export default {
  components: {
    Nav,
    Top
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
      line-height: 100px;
    }
    // 左侧
    .el-aside {
      background-color: #324157;
      color: #333;
      text-align: center;
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
