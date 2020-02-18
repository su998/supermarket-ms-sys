<template>
  <div class="accont_add">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="title clearfix">
        <span>添加账号</span>
      </div>
      <div class="text item">
        <el-form
          :model="accontAddForm"
          status-icon
          :rules="rules"
          ref="accontAddForm"
          label-width="100px"
          class="demo-ruleForm"
          hide-required-asterisk
        >
          <el-form-item label="账号" prop="username">
            <el-input
              type="text"
              v-model="accontAddForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="accontAddForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPwd">
            <el-input
              type="password"
              v-model="accontAddForm.checkPwd"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 下拉表 -->
          <el-form-item label="活动区域" prop="authority">
            <el-select v-model="accontAddForm.authority" placeholder="请分配权限" class="my_input">
              <el-option label="普通用户" value="普通用户"></el-option>
              <el-option label="超级管理员" value="超级管理员"></el-option>
            </el-select>
          </el-form-item>
          <!-- 添加按钮&重置按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm('accontAddForm')">添加</el-button>
            <el-button @click="resetForm('accontAddForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  data () {
    // 自定义密码验证规则
    const pass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else if (value.length < 3 || value.length > 15) {
        callback(new Error('密码长度在 3-15 范围之间'))
      } else {
        if (this.accontAddForm.checkPwd !== '') {
          this.$refs.accontAddForm.validateField('checkPwd')
        }
        callback()
      }
    }
    // 自定义确认密码验证规则
    const checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else {
        if ((value !== this.accontAddForm.password)) {
          callback(new Error('两次输入的密码不一致'))
        }
      }
      callback()
    }
    return {
      accontAddForm: {
        username: '',
        password: '',
        checkPwd: '',
        authority: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 12, message: '账号长度在2-5位', trigger: 'blur' }
        ],
        password: [
          { validator: pass, trigger: 'blur' }
        ],
        checkPwd: [
          { validator: checkPass, trigger: 'blur' }
        ],
        authority: [
          { required: true, message: '请分配权限', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 添加按钮
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 后续就可以把收集的账号和密码 一起发送给后端 验证用户名和密码的准确性
          // 收集账号和密码
          let params = {
            username: this.accontAddForm.username,
            password: this.accontAddForm.password,
            authority: this.accontAddForm.authority
          }
          this.$axios.post('/account/accountAdd', params)
            .then(res => {
              if (res.status === 200) {
                this.$message({
                  showClose: true,
                  message: res.msg,
                  type: 'success',
                  offset: 30
                })
                this.$router.push('/accontManagement')
              } else {
                this.$message({
                  showClose: true,
                  message: res.msg,
                  type: 'error',
                  offset: 30
                })
              }
            })
            .catch(err => {
              console.log(err)
              this.$message.error('添加失败,服务器后台出现了问题')
            })
        } else {
          alert('添加用户失败，请重新填写表单')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.accont_add {
  .box-card {
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
