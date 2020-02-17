<template>
  <div class="top">
    <el-row>
      <el-col :span="12">
        <div class="title">
          <i class="el-icon-s-unfold"></i>
          武汉加油后台管理系统
        </div>
      </el-col>
      <el-col :span="12">
        <div class="top-right">
          <el-row>
            <el-col :span="18">
              欢迎您,
              <el-dropdown @command="handleCommand">
                <span class="username">{{ username }}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="escLogin">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="6">
              <div class="avatar">
                <img width="100%" height="100%" :src="avatarUrl" alt="">
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import imgURL from '../../assets/avatar.jpg'
export default {
  data () {
    return {
      username: '',
      avatarUrl: imgURL
    }
  },
  created () {
    this.getUsername()
  },
  methods: {
    getUsername () { // 获取用户名
      this.username = window.localStorage.getItem('username')
    },

    handleCommand (command) { // 用户退出登录
      if (command === 'escLogin') {
        window.localStorage.removeItem('token')
        this.$router.go(0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  .el-row {
    .title {
      font-size: 28px;
      font-weight: 700;
    }
    .top-right {
      font-size: 22px;
      text-align: right;
      .username {
        color: #42b983;
        font-style: italic;
        font-weight: 700;
        font-size: 20px;
      }
      .avatar {
        width: 60px;
        height: 60px;
        margin-top: 20px;
        margin-left: 5px;
        img {
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
