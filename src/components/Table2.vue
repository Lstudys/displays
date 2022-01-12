<!--
*  @FileDescription: 第二个表格组件
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
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="类别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="person"
        label="主持人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="dates"
        label="时间"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:'Table2',
    methods:{
       handle(row){
        switch(row.date){
          case '1':this.$router.push('./table21');break;
          case '2':this.$router.push('./table22');break;
          case '3':this.$router.push('./table23');break;
          case '4':this.$router.push('./table24');break;
          case '5':this.$router.push('./table25');break;
          case '6':this.$router.push('./table26');break;
          case '7':this.$router.push('./table27');break;
          case '8':this.$router.push('./table28');break;
        }
          
      },
    },
     data(){
        return {
            tableData: [{
            date: '1',
            name: '市场营销学 ',
            subject:'河南省本科高等学校“十四五”规划教材重点立项',
            person:'张洁梅 ',
            dates:'2020'
          }, {
            date: '2',
            name: '市场营销学 ',
            subject:'河南省高等学校精品在线开放课程',
            person:'张洁梅 ',
            dates:'2020'
          },
          {
            date: '3',
            name: '市场营销学 ',
            subject:'河南省首届教材建设奖特等奖',
            person:'张洁梅 ',
            dates:'2021'
          },
          {
            date: '4',
            name: '新媒体时代中小学教师媒介素养培育路径研究 ',
            subject:'河南省教师教育课程改革研究重点项目',
            person:'张洁梅 ',
            dates:'2019'
          },
          {
            date: '5',
            name: '新媒体时代中小学初任教师入职教育创新研究',
            subject:'河南省教师教育课程改革研究重点项目',
            person:'张洁梅 ',
            dates:'2017'
          },
          {
            date: '6',
            name: '社会需求视角的研究生培养模式创新研究',
            subject:'河南省教育科学规划重点课题',
            person:'张洁梅 ',
            dates:'2020'
          },
          {
            date: '7',
            name: '基于知识整合的高校管理类课程团队学习研究',
            subject:'河南省教育科学“十二五”规划课题',
            person:'张洁梅 ',
            dates:'2014'
          },
          {
            date: '8',
            name: '河南省教育系统教学技能竞赛',
            subject:'一等奖',
            person:'张洁梅 ',
            dates:'2009'
          },

        ]
        }
    }
}
</script>