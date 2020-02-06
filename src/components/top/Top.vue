<template>
  <div class="top">
    <el-row>
      <el-col :span="20">
        <div class="title">
          <i class="el-icon-s-unfold"></i>
          华联超市后台管理系统
        </div>
      </el-col>
      <el-col :span="4">
        <div class="top-right">
          <el-row>
            <el-col :span="13">
              欢迎您, <span class="username">{{ username }}</span>
            </el-col>
            <el-col :span="11">
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
      username: '苏怀平',
      avatarUrl: imgURL
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
      .username {
        color: #42b983;
        font-style: italic;
        font-weight: 700;
      }
      .avatar {
        width: 60px;
        height: 60px;
        margin-top: 20px;
        img {
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
