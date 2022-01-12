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
           require('../../assets/images/table4/21.png'),
          require('../../assets/images/table4/22.png'),
          require('../../assets/images/table4/23.png'),
          require('../../assets/images/table4/24.png'),
          require('../../assets/images/table4/25.png'),
          require('../../assets/images/table4/26.png'),
          require('../../assets/images/table4/27.png'),
        ]
      }
    }
  }
</script>