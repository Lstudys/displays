<!--
*  @FileDescription: 第三个表格组件
*  @Author: 李永晖
*  @CreatedDate:2022/01/11
*  @LastEditors: 李永晖
*  @LastEditTime: 2022/01/11
-->

<template>
<div class="wrap">
    <div class="one">
        <h2>项目:</h2>
     <el-table
     @row-click="handle1"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="项目类别"
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
    </div>
    <div class="two">
        <h2>奖励:</h2>
         <el-table
          @row-click="handle2"
      :data="tableData2"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="获奖成果名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="奖励类别(等级)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="dates"
        label="获奖时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="person"
        label="第一获奖人"
        width="180">
      </el-table-column>
    </el-table>
    </div>
</div>
</template>

<script>
export default {
    name:'Table3',
    methods:{
       handle1(row){
        switch(row.date){
          case '1':this.$router.push('./table31');break;
          case '2':this.$router.push('./table32');break;
          case '3':this.$router.push('./table33');break;
          case '4':this.$router.push('./table34');break;
          case '5':this.$router.push('./table35');break;
          case '6':this.$router.push('./table36');break;
          case '7':this.$router.push('./table37');break;
          case '8':this.$router.push('./table38');break;
          case '9':this.$router.push('./table39');break;
          case '10':this.$router.push('./table310');break;
          case '11':this.$router.push('./table311');break;
          case '12':this.$router.push('./table312');break;
          case '13':this.$router.push('./table313');break;
        }
          
      },
        handle2(row){
        switch(row.date){
          case '1':this.$router.push('./table3s1');break;
          case '2':this.$router.push('./table3s2');break;
          case '3':this.$router.push('./table3s3');break;
          case '4':this.$router.push('./table3s4');break;
          case '5':this.$router.push('./table3s5');break;
          case '6':this.$router.push('./table3s6');break;
          case '7':this.$router.push('./table3s7');break;
        }
          
      },
    },
    data(){
        return {
            tableData: [{
            date: '1',
            name: '社会化媒体下虚拟社区消费者知识分享机理及营销策略研究 ',
            subject:'国家社科基金项目',
            person:'张洁梅 ',
            dates:'2018'
          }, {
            date: '2',
            name: '数字化背景下新兴品牌创建模式及对品牌成长绩效的影响研究',
            subject:'国家社科基金项目',
            person:'李耀 ',
            dates:'2020'
          },
          {
            date: '3',
            name: '顾客独创价值对顾客和企业的影响机理研究',
            subject:'国家自然科学基金青年项目',
            person:'李耀 ',
            dates:'2015'
          },
          {
            date: '4',
            name: '地方政府融资平台风险管理研究',
            subject:'国家社科后期资助项目',
            person:'张洁梅 ',
            dates:'2014'
          },
          {
            date: '5',
            name: '数字化背景下顾客参与顾客间价值共创的行为机制研究',
            subject:'教育部人文社科基金项目',
            person:'李耀 ',
            dates:'2019'
          },
          {
            date: '6',
            name: '基于消费者创新视角的顾客独创价值研究',
            subject:'教育部人文社科基金青年项目',
            person:'李耀 ',
            dates:'2014'
          },
          {
            date: '7',
            name: '地方政府融资平台风险评价与治理研究',
            subject:'河南省社科规划项目',
            person:'张洁梅 ',
            dates:'2017'
          },
          {
            date: '8',
            name: '河南省地方政府债务风险管理研究',
            subject:'河南省政府决策研究招标课题',
            person:'张洁梅 ',
            dates:'2018'
          },
          {
            date: '9',
            name: '新时期河南省文化产业发展战略研究',
            subject:'河南省社科规划课题',
            person:'张洁梅 ',
            dates:'2013'
          },
          {
            date: '10',
            name: '河南省装备制造业集群的知识整合研究',
            subject:'河南省科技厅软科学项目',
            person:'张洁梅 ',
            dates:'2013'
          },
          {
            date: '11',
            name: '促进河南省现代制造业与现代服务业融合发展研究',
            subject:'河南省政府决策研究招标课题',
            person:'张洁梅 ',
            dates:'2012'
          },
          {
            date: '12',
            name: '双面信息在弱势品牌传播中的应用研究',
            subject:'教育部人文社科基金项目',
            person:'刘中刚 ',
            dates:'2010'
          },
          {
            date: '13',
            name: '企业并购后的知识整合研究',
            subject:'教育部人文社科青年基金项目',
            person:'张洁梅 ',
            dates:'2010'
          },

        ],

        tableData2: [{
            date: '1',
            name: '社会资本对在线品牌社区消费者知识分享的影响研究',
            subject:'河南省社科优秀成果奖一等奖',
            person:'张洁梅 ',
            dates:'2021'
          }, {
            date: '2',
            name: '网络负面口碑、个人品牌联结与消费者积极购买意愿',
            subject:'河南省社科优秀成果奖二等奖',
            person:'张洁梅 ',
            dates:'2020'
          },
          {
            date: '3',
            name: '双面信息对辟谣效果的影响及辟谣者可信度的调节作用',
            subject:'河南省社科优秀成果奖三等奖',
            person:'刘中刚  ',
            dates:'2018'
          },
          {
            date: '4',
            name: '我国企业并购后的知识整合研究',
            subject:'河南省社科优秀成果奖二等奖',
            person:'张洁梅 ',
            dates:'2013'
          },
          {
            date: '5',
            name: '现代制造业与生产性服务业互动融合发展研究——以河南省为例',
            subject:'河南省教育厅人文社会科学研究成果二等奖',
            person:'张洁梅 ',
            dates:'2014'
          },
          {
            date: '6',
            name: '利益相关者视角的地方政府融资平台风险管理研究',
            subject:'河南省高等学校人文社会科学研究成果二等奖',
            person:'张洁梅 ',
            dates:'2020'
          },
          {
            date: '7',
            name: '社会资本对在线品牌社区消费者知识分享的影响研究',
            subject:'河南省高等学校人文社会科学研究成果特等奖',
            person:'张洁梅 ',
            dates:'2021'
          },
        ],
        
        }
    }
}
</script>