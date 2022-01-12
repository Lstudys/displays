<!--
*  @FileDescription: 第七个表格组件
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
        prop="number"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="school"
        label="成果应用单位"
        width="180">
      </el-table-column>
      <el-table-column
        prop="object"
        label="面向对象"
        width="180">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:'Table7',
    data(){
        return {
            tableData:[
                {
                    number:'1',
                    school:'郑州大学',
                    object:'开设市场营销学课程的本科生'
                },
                 {
                    number:'2',
                    school:'河南工业大学',
                    object:'开设市场营销学课程的本科生'
                },
                 {
                    number:'3',
                    school:'郑州科技学院',
                    object:'开设市场营销学课程的本科生'
                },
                 {
                    number:'4',
                    school:'郑州经贸学院',
                    object:'开设市场营销学课程的本科生'
                },
                {
                    number:'5',
                    school:'高等教育出版社',
                    object:'教材使用单位'
                },
            ]
        }
    }
}
</script>