<!--
*  @FileDescription: 第四个表格组件
*  @Author: 李永晖
*  @CreatedDate:2022/01/11
*  @LastEditors: 李永晖
*  @LastEditTime: 2022/01/11
-->

<template>
    <div class="wrap">
        <el-table
        @row-click="handle1"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="number"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="论文题目"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="期刊名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="subject"
        label="期刊等级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发表时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="person"
        label="作者"
        width="180">
      </el-table-column>
    </el-table>
    <el-divider>分割线</el-divider>

        <el-table
         @row-click="handle2"
      :data="tableData2"
      style="width: 100%">
       <el-table-column
        prop="number"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="论著名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="school"
        label="出版社"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bool"
        label="是否独著"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出版时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="person"
        label="作者"
        width="180">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name:'Table4',
    methods:{
       handle1(row){
        switch(row.number){
          case '1':this.$router.push('./table41');break;
          case '2':this.$router.push('./table42');break;
          case '3':this.$router.push('./table43');break;
          case '4':this.$router.push('./table44');break;
          case '5':this.$router.push('./table45');break;
          case '6':this.$router.push('./table46');break;
          case '7':this.$router.push('./table47');break;
          case '8':this.$router.push('./table48');break;
          case '9':this.$router.push('./table49');break;
          case '10':this.$router.push('./table410');break;
        }
          
      },
        handle2(row){
        switch(row.number){
          case '1':this.$router.push('./table41s');break;
          case '2':this.$router.push('./table42s');break;
          case '3':this.$router.push('./table43s');break;
        }
          
      },
    },
    data(){
        return {
            tableData:[
            {
              number:'1',
            title: 'Relationships Between User Knowledge Sharing in Virtual Community with Community Loyalty and Satisfaction',
            name: 'Psychology Research and Behavior Management',
            subject:'SSCI',
            person:'张洁梅 ',
            date:'2021'
          },
           {
              number:'2',
            title: 'A Receiver Perspective on Knowledge Sharing Impact on Consumer–Brand Relationship in Virtual Communities',
            name: 'Frontiers in Psychology',
            subject:'SSCI',
            person:'张洁梅 ',
            date:'2021'
          },
          {
             number:'3',
            title: '网络负面口碑对消费者冲动性购买意愿的影响——负面情绪的中介作用',
            name: '管理评论',
            subject:'CSSCI',
            person:'张洁梅 ',
            date:'2021'
          },
          {
             number:'4',
            title: '社会资本对虚拟社区用户忠诚的影响',
            name: '科研管理',
            subject:'CSSCI',
            person:'张洁梅 ',
            date:'2021'
          },
          {
             number:'5',
            title: '基于区块链的我国数字版权商业模式研究',
            name: '出版发行研究',
            subject:'CSSCI',
            person:'张洁梅 ',
            date:'2020'
          },
          {
             number:'6',
            title: '网络负面口碑、个人品牌联结与消费者积极购买意愿',
            name: '经济管理',
            subject:'CSSCI',
            person:'张洁梅 ',
            date:'2019'
          },
           {
              number:'7',
            title: '利益相关者视角的地方政府融资平台风险管理研究',
            name: '管理评论',
            subject:'CSSCI',
            person:'张洁梅 ',
            date:'2019'
          },
           {
              number:'8',
            title: '新媒体环境下中小学教师媒介素养教育分析',
            name: '教育现代化',
            subject:'CN',
            person:'张洁梅 ',
            date:'2019'
          },
           {
              number:'9',
            title: '媒介生态融合背景下的商业模式创新——以《博物》为例',
            name: '出版发行研究',
            subject:'CSSCI',
            person:'张洁梅 ',
            date:'2019'
          },
          {
             number:'10',
            title: '新媒体时代中小学初任教师入职教育创新研究',
            name: '教育现代化',
            subject:'CN',
            person:'张洁梅 ',
            date:'2018'
          },
      ],

      tableData2:[
          {
             number:'1',
            name: '虚拟社区知识分享对消费者—品牌关系的影响研究',
            school: '中国经济出版社',
            bool:'否',
            date:'2021 ',
            person:'张洁梅'
          },
           {
              number:'2',
            name: '社会资本对在线品牌社区消费者知识分享的影响研究',
            school: '中国经济出版社',
            bool:'否',
            date:'2020 ',
            person:'张洁梅'
          },
          {
             number:'3',
            name: '网络负面口碑对消费者态度的积极影响研究',
            school: '中国经济出版社',
            bool:'否',
            date:'2019',
            person:'张洁梅'
          },
      ]
        }
    }
}
</script>