<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script>

  export default {
      name:'Table22',
    data() {
      return {
        urls: [
          require('../../assets/images/table2/img4.png'),
          require('../../assets/images/table2/img5.png'),
          require('../../assets/images/table2/img6.png'),
          require('../../assets/images/table2/img7.png')
        ]
      }
    }
  }
</script>