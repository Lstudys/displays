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
          require('../../assets/images/table4/1.png'),
          require('../../assets/images/table4/2.png'),
          require('../../assets/images/table4/3.png'),
          require('../../assets/images/table4/4.png'),
          require('../../assets/images/table4/5.png'),
          require('../../assets/images/table4/6.png'),
          require('../../assets/images/table4/7.png'),
        ]
      }
    }
  }
</script>