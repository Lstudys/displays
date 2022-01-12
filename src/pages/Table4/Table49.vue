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
          require('../../assets/images/table4/img91.png'),
            require('../../assets/images/table4/img92.png'),
            require('../../assets/images/table4/img93.png'),
            require('../../assets/images/table4/img94.png'),
            require('../../assets/images/table4/img95.png'),
            require('../../assets/images/table4/img96.png'),
            require('../../assets/images/table4/img97.png'),
            require('../../assets/images/table4/img98.png'),
            require('../../assets/images/table4/img99.png'),
        ]
      }
    }
  }
</script>