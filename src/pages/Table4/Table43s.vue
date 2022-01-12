<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script>

  export default {
      name:'Table11',
    data() {
      return {
        urls: [
          require('../../assets/images/table4/31.png'),
          require('../../assets/images/table4/32.png'),
          require('../../assets/images/table4/33.png'),
          require('../../assets/images/table4/34.png'),
          require('../../assets/images/table4/35.png'),
          require('../../assets/images/table4/36.png'),
        ]
      }
    }
  }
</script>