<!--
*  @FileDescription: 第五个表格组件
*  @Author: 李永晖
*  @CreatedDate:2022/01/11
*  @LastEditors: 李永晖
*  @LastEditTime: 2022/01/11
-->

<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="类别"
        width="180">
      </el-table-column>
       <el-table-column
        prop="dates"
        label="时间"
        width="180">
      </el-table-column>
       <el-table-column
        prop="person"
        label="获得者"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:'Table5',
    data(){
        return {
            tableData:[
            {
            date: '1',
            subject: '河南省高层次人才 C 类  ',
            dates:'2020',
            person:'张洁梅'
          },
           {
            date: '2',
            subject: '河南省高层次人才特殊支持“中原千人计划”—青年拔尖人才',
            dates:'2019',
            person:'张洁梅'
          },
          {
            date: '3',
            subject: '河南省高校科技创新人才（人文社科类）',
            dates:'2018',
            person:'张洁梅'
          },
          {
            date: '4',
            subject: '河南省高校科技创新人才（人文社科类）',
            dates:'2017',
            person:'李耀'
          },
          {
            date: '5',
            subject: '河南省高校青年骨干教师',
            dates:'2014',
            person:'张洁梅'
          },
           {
            date: '6',
            subject: '河南省高校青年骨干教师',
            dates:'2013',
            person:'刘中刚'
          },
          {
            date: '7',
            subject: '河南省教育厅学术技术带头人 ',
            dates:'2013',
            person:'张洁梅'
          },
          {
            date: '8',
            subject: '河南省优秀硕士学位论文指导教师  ',
            dates:'2020',
            person:'张洁梅'
          },
            ]
        }
    }
}
</script>