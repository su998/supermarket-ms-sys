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
            <el-button type="primary" @click="submitForm('passwordModify')">添加</el-button>
            <el-button @click="resetForm('passwordModify')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  data () {
    // 自定义老密码验证规则
    const pass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value.length < 3 || value.length > 15) {
        callback(new Error('密码长度在 3-15 范围之间'))
      } else {
        if (this.passwordModify.newPass !== '') {
          this.$refs.passwordModify.validateField('newPass')
        }
        callback()
      }
    }
    // 自定义新密码验证规则
    const newPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value.length < 3 || value.length > 15) {
        callback(new Error('密码长度在 3-15 范围之间'))
      } else if (value !== this.$refs.password) {
        callback(new Error('新密码不能和原密码一样'))
      } else {
        if (this.passwordModify.checkPwd !== '') {
          this.$refs.passwordModify.validateField('checkPwd')
        }
        callback()
      }
    }
    // 自定义确认密码验证规则
    const checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else {
        if ((value !== this.passwordModify.password)) {
          callback(new Error('两次输入的密码不一致'))
        }
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
