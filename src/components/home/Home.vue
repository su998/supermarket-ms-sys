<template>
  <div class="home">
    <!-- 面板组件 -->
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="title clearfix">
        <span>系统信息</span>
      </div>
      <!-- body -->
      <div class="text item">
        <!-- 提醒框 -->
        <el-alert
          title="商品总数：500，已经销售的总金额：89000.00￥，商品库存2254.68"
          type="info"
          show-icon
        >
        </el-alert>
        <el-alert title="导入数据" type="info" show-icon> </el-alert>
        <!-- 主体左右表单 -->
        <el-row :gutter="20" class="main">
          <!-- 左表单 -->
          <el-col :span="12">
            <div>
              <el-card class="box-card">
                <div slot="header" class="title clearfix">
                  <span>捐赠情况</span>
                </div>
                <div class="text item">
                  <el-table :data="goodsData" style="width: 100%">
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="捐赠物品" width="210">
                    </el-table-column>
                    <el-table-column prop="number" label="数量(个)" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="募捐机构">
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="操作"
                      width="100">
                      <template>
                        <el-button type="text" size="small">编辑</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
          </el-col>
          <!-- 右表单 -->
          <el-col :span="12">
            <div>
              <el-card class="box-card">
                <div slot="header" class="title clearfix">
                  <span>缺乏物资</span>
                </div>
                <div class="text item">
                  <el-table :data="needData" style="width: 100%">
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="address" label="申请机构" width="260">
                    </el-table-column>
                    <el-table-column prop="name" label="物品" width="260">
                    </el-table-column>
                    <el-table-column prop="number" label="数量(个)">
                    </el-table-column>
                     <el-table-column
                      fixed="right"
                      label="操作"
                      width="100">
                      <template>
                        <el-button type="text" size="small">编辑</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsData: [
        {
          date: '2020-02-02',
          name: '医用一次性口罩',
          number: '2000',
          address: '湖北中心'
        },
        {
          date: '2020-02-02',
          name: 'N95口罩',
          number: '2000',
          address: '武汉红十字会'
        },
        {
          date: '2020-02-02',
          name: '医用一次性口罩',
          number: '2000',
          address: '武汉红十字会'
        },
        {
          date: '2020-02-02',
          name: '医用一次性口罩',
          number: '2000',
          address: '武汉红十字会'
        }
      ],
      needData: [
        {
          address: '湖北仁和医院',
          name: '医用一次性口罩',
          number: '2000'
        },
        {
          address: '湖北中心医院',
          name: '医用一次性口罩',
          number: '15000'
        },
        {
          address: '湖北中心医院',
          name: 'n95口罩',
          number: '12000'
        },
        {
          address: '湖北第一人民医院',
          name: '一次性防护服',
          number: '8000'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .box-card {
    .el-card__header {
      background-color: aliceblue;
      .title {
        text-align: left;
        font-size: 26px;
        font-weight: 600;
      }
    }
    .el-card__body {
      .el-alert {
        margin-bottom: 20px;
        line-height: 30px;
        background-color: #dbe3ff;
        color: #2b52c1;
      }
      .main {
        .el-col {
          .el-card__header {
            text-align: left;
          }
          .el-card__body {
            .text {
              .el-table{
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
