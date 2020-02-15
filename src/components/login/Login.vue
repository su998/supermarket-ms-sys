<template>
  <div class="login">
    <div class="login-wrapper">
       <h1 class="title">
         <i class="el-icon-menu"></i>
         华联超市管理系统-登录
        </h1>
      <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" >提交</el-button>
          </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 3, max: 12, message: '账号长度在3-5位', trigger: 'blur'}
        ],
        password: [{
          required: true, message: '密码不能为空', trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('欢迎来到华联超市后台管理系统')
          // 后续就可以把收集的账号和密码 一起发送给后端 验证用户名和密码的准确性
          // 收集账号和密码
          let params = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
          console.log(params)

          // 登陆成功跳转到首页
          this.$router.push('/')
        } else {
          alert('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less">
  .login {
    height: 100%;
    width: 100%;
    background-color: #2b3a4b;
    color: #fff;
    .login-wrapper {
      width: 500px;
      height: 350px;
      background-color: rgba(0, 0, 0, .2);
      // 垂直水平居中
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      padding: 16px 50px 0 10px;
    }
    .title {
      font-size: 24px;
      margin-left: 60px;
    }
    .el-form{
      .el-form-item {
        margin: 40px 0;
        .el-form-item__label{
          color: #fff;
        }
        .el-button--primary{
          text-align: center;
          padding: 12px 182px;
        }
      }
    }
  }
</style>
