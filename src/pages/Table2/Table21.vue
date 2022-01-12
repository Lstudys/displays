<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script>

  export default {
      name:'Table21',
    data() {
      return {
        urls: [
          require('../../assets/images/table2/img1.png'),
          require('../../assets/images/table2/img2.png'),
          require('../../assets/images/table2/img3.png'),
        ]
      }
    }
  }
</script>