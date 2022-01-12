<template>
    <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
</template>

<script>

  export default {
      name:'Table24',
    data() {
      return {
        urls: [
         require('../../assets/images/table2/img11.png'),
         require('../../assets/images/table2/img12.png'),
        ]
      }
    }
  }
</script>