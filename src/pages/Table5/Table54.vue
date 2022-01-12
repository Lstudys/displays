<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script>

  export default {
    //   name:'Table11',
    data() {
      return {
        urls: [
             require('../../assets/images/table5/5.png'),
              require('../../assets/images/table5/6.png'),
               require('../../assets/images/table5/7.png'),
        ]
      }
    }
  }
</script>