<template>
  <div class="password-modify">
     <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="title clearfix">
        <span>密码修改</span>
      </div>
      <div class="text item">
        <el-form
          :model="passwordModify"
          status-icon
          :rules="rules"
          ref="passwordModify"
          label-width="100px"
          class="demo-ruleForm"
          hide-required-asterisk
        >
          <el-form-item label="密码" prop="password">
            <el-input
              type="text"
              v-model="passwordModify.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              type="password"
              v-model="passwordModify.newPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPwd">
            <el-input
              type="password"
              v-model="passwordModify.checkPwd"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 添加按钮&重置按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('passwordModify')">修改</el-button>
            <el-button @click="resetForm('passwordModify')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  data () {
    // 自定义老密码验证规则
    const pass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        let params = {
          username: window.localStorage.getItem('username'),
          password: value
        }
        this.$axios.post('http://127.0.0.1:666/account/checkOldPwd', qs.stringify(params))
          .then(res => {
            if (res.data.status !== 200) {
              callback(new Error('原密码不正确！'))
            } else {
              callback()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
    // 自定义新密码验证规则
    const newPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空'))
      } else if (value.length < 3 || value.length > 26) {
        callback(new Error('密码长度在 3-26 范围之间'))
      } else if (value === this.passwordModify.password) {
        callback(new Error('新密码不能和原密码一样'))
      } else {
        if (this.passwordModify.checkPwd !== '') {
          this.$refs.passwordModify.validateField('checkPass')
        }
      }
      callback()
    }
    // 自定义确认密码验证规则
    const checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else {
        if ((value !== this.passwordModify.newPassword)) {
          callback(new Error('两次输入的密码不一致'))
        }
        callback()
      }
    }
    return {
      passwordModify: {
        password: '',
        newPassword: '',
        checkPwd: ''
      },
      rules: {
        password: [
          { validator: pass, trigger: 'blur' }
        ],
        newPassword: [
          { validator: newPass, trigger: 'blur' }
        ],
        checkPwd: [
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) { // 修改密码按钮
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {'newPassword': this.passwordModify.newPassword}
          this.$axios.post('http://127.0.0.1:666/account/passwordModify', qs.stringify(params))
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.password-modify {
.el-card {
  .el-card__header {
      .title {
        text-align: left;
        font-size: 26px;
        font-weight: 600;
      }
    }
  .el-card__body {
      .el-form {
        width: 400px;
        .el-form-item {
            height: 40px;
            line-height: 40px;
            margin-top: 30px;
            .my_input{
              width: 300px;
            }
        }
      }
    }
}
}
</style>
