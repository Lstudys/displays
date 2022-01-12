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
          require('../../assets/images/table3/img2.png'),
          require('../../assets/images/table3/img3.png'),
          require('../../assets/images/table3/img4.png'),
          require('../../assets/images/table3/img5.png'),
        ]
      }
    }
  }
</script>