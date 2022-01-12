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
          require('../../assets/images/table4/img910.png'),
            require('../../assets/images/table4/img911.png'),
            require('../../assets/images/table4/img912.png'),
            require('../../assets/images/table4/img913.png'),
        ]
      }
    }
  }
</script>