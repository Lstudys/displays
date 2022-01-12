<template>
  <div id="app">
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="教学成果总结报告" name="first">
       <Table1></Table1>
    </el-tab-pane>
    <el-tab-pane label="国家级和省级教学项目、奖励" name="second">
      <Table2></Table2>
    </el-tab-pane>
    <el-tab-pane label="国家级和省级科研项目、奖励" name="third">
      <Table3></Table3>
    </el-tab-pane>
    <el-tab-pane label="教育教学类论文、论著" name="fourth">
      <Table4></Table4>
    </el-tab-pane>
    <el-tab-pane label="其他奖励及荣誉" name="five">
      <Table5></Table5>
    </el-tab-pane>
    <el-tab-pane label="省级及以上新闻媒体报道" name="six">
      <Table6></Table6>
    </el-tab-pane>
    <el-tab-pane label="教学成果校外推广应用及效果证明材料" name="seven">
      <Table7></Table7>
    </el-tab-pane>
    <el-tab-pane label="教材电子文档" name="eight">
      <Table8></Table8>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import Table1 from '@/components/Table1'
import Table2 from '@/components/Table2'
import Table3 from '@/components/Table3'
import Table4 from '@/components/Table4'
import Table5 from '@/components/Table5'
import Table6 from '@/components/Table6'
import Table7 from '@/components/Table7'
import Table8 from '@/components/Table8'

export default {
  name: 'App',
  data() {
      return {
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },

    components:{
      Table1,
      Table2,
      Table3,
      Table4,
      Table5,
      Table6,
      Table7,
      Table8
    }
 
}
</script>

<style>

</style>
