<!--
*  @FileDescription: 第一个表格组件
*  @Author: 李永晖
*  @CreatedDate:2022/01/11
*  @LastEditors: 李永晖
*  @LastEditTime: 2022/01/11
-->

<template>
    <el-table
    @row-click="handle"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="报道标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="媒体名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="school"
        label="发布者"
        width="180">
      </el-table-column>
       <el-table-column
        prop="time"
        label="报道时间"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:'Table6',
     methods: {
            handle(){
              this.$router.push('./table61')
            }
          },
    data(){
        return {
         
            tableData:[
                {
                    title:'新书推介：市场营销学（第二版）——张洁梅',
                    name:'高教财经教学研究',
                    time:'2021-11-16',
                    school:'高教社上海'
                }
            ]
        }
    }
}
</script>