<template>
  <div class="accont_management">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="title clearfix">
        <span>账号管理</span>
      </div>
      <div class="text item">
        <el-table
          ref="multipleTable"
          :data="accontManageData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <!-- 多选操作 -->
          <el-table-column type="selection" width="55"> </el-table-column>
          <!-- 用户名 -->
          <el-table-column label="用户名" prop="username"> </el-table-column>
          <!-- 权限 -->
          <el-table-column prop="authority" label="权限用户组"> </el-table-column>
          <!-- 创建时间 -->
          <el-table-column  label="创建时间" show-overflow-tooltip >
            <template slot-scope="scope">
              {{scope.row.ctime | dateFmt('YYYY-MM-DD HH:mm:ss')}}
            </template>
          </el-table-column>
          <!-- 操作 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.row.id)"><i class="el-icon-edit"></i>编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.id)"><i class="el-icon-delete"></i>删除</el-button>
            </template>
          </el-table-column>

        </el-table>
        <!-- 批量删除 & 取消操作 -->
        <div style="margin-top: 20px; text-align: left">
          <el-button @click="deleteSelectedAccount()">批量删除</el-button>
          <el-button @click="cancelSelectedAccount()">取消选择</el-button>
        </div>
        <!-- 编辑弹出框 -->
          <el-dialog
            title="用户修改"
            :visible.sync="flag"
            width="22%"
            center>
            <!-- 内容 -->
            <el-form :model="accountModify" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm" hide-required-asterisk>
              <el-form-item label="账号" prop="username" >
                <el-input type="text" v-model="accountModify.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="权限分配" prop="authority">
                <el-select v-model="accountModify.authority" placeholder="请分配权限" class="my_input">
                  <el-option label="普通用户" value="普通用户"></el-option>
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="flag = false">取 消</el-button>
              <el-button type="primary" @click="hanldeAccountModify()">确 定</el-button>
            </span>
          </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data () {
    return {
      accontManageData: [],
      multipleSelection: [],
      flag: false, // 控制编辑按钮
      accountModify: { // 用户修改弹窗
        username: '',
        authority: ''
      },
      modifyId: '', // 需要修改用户的id
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 12, message: '账号长度在3-5位', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    getUserList () { // 获取用户列表
      this.$axios.get('http://127.0.0.1:666/account/accountList')
        .then(res => {
          if (res.data.status === 200) {
            this.accontManageData = res.data.userList
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 批量删除按钮
    deleteSelectedAccount () {
      let selectedId = this.multipleSelection.map(item => {
        return item.id
      })
      // 未勾选用户点击按钮不发请求
      if (!selectedId.length) {
        this.$message.error('请先勾选用户')
        return
      }
      this.$confirm('确定要删除选中的用户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.get(`http://127.0.0.1:666/account/deleteSelectedAccount?id=${selectedId}`)
          .then(res => {
            if (res.data.status === 200) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getUserList()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 取消批量选中
    cancelSelectedAccount (rows) {
      this.$refs.multipleTable.clearSelection()
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 弹出用户信息修改页面
    handleEdit (id) {
      this.modifyId = id
      this.$axios.get(`http://127.0.0.1:666/account/accountModify?id=${id}`)
        .then(res => {
          let {username, authority} = res.data.userinfo[0]
          if (res.data.status === 200) {
            this.accountModify.username = username
            this.accountModify.authority = authority
            this.flag = true
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 用户修改
    hanldeAccountModify () {
      let params = {
        username: this.accountModify.username,
        authority: this.accountModify.authority,
        modifyId: this.modifyId
      }
      this.$confirm('是否确定要修改用户信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('http://127.0.0.1:666/account/accountEdit', qs.stringify(params))
          .then(res => {
            if (res.data.status === 200) {
              this.getUserList()
              this.flag = false
            }
          })
          .catch(err => {
            console.log(err)
          })
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })
    },
    // 删除按钮
    handleDelete (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.$axios.get('http://127.0.0.1:666/account/accountDel?id=' + id)
          .then(res => {
            if (res.data.status === 200) {
              this.getUserList()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.accont_management {
  .box-card {
    .el-card__header {
      .title {
        text-align: left;
        font-size: 26px;
        font-weight: 600;
      }
    }
    .el-card__body {
      .el-table{
        font-size: 18px;
      }
    }
  }
}
</style>
