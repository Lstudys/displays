<!--
*  @FileDescription: 第八个表格组件
*  @Author: 李永晖
*  @CreatedDate:2022/01/11
*  @LastEditors: 李永晖
*  @LastEditTime: 2022/01/11
-->

<template>
    <el-table
    @row-click="handle1"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="school"
        label="出版单位"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:'Table8',
    methods: {
      handle1(){
            this.$router.push('./table8');
      }
    },
    data(){
        return {
            tableData:[
                {
                    name:'市场营销学 ',
                    school:'高等教育出版社'
                }
            ]
        }
    }
}
</script>