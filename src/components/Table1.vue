<!--
*  @FileDescription: 第一个表格组件
*  @Author: 李永晖
*  @CreatedDate:2022/01/11
*  @LastEditors: 李永晖
*  @LastEditTime: 2022/01/11
-->

<template>
    <div class="wrap">
      <el-table
     @row-click="handle"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
     
    </el-table>
    </div>
    
</template>

<script>
export default {
    name:'Table1',
    data(){
        return {
            tableData: [{
            date: '1',
            name: '教学成果总结报告 ',
          }, {
            date: '2',
            name: '查新查重证明',
          }]
        }
    },
    methods:{
      handle(row){
        console.log('row',row.date);
        if(row.date == 1){
          this.$router.push('./table11')
        }else{
          this.$router.push('./table12')
        }
          
      },
    }
}
</script>

<style scoped>
img{
  height: auto;
  width: auto;
}
</style>