<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script>

  export default {
      name:'Table28',
    data() {
      return {
        urls: [
           require('../../assets/images/table2/img16.png'),
        ]
      }
    }
  }
</script>