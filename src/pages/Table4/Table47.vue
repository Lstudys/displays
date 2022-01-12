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
         require('../../assets/images/table4/img71.png'),
            require('../../assets/images/table4/img72.png'),
            require('../../assets/images/table4/img73.png'),
            require('../../assets/images/table4/img74.png'),
            require('../../assets/images/table4/img75.png'),
            require('../../assets/images/table4/img76.png'),
            require('../../assets/images/table4/img77.png'),
            require('../../assets/images/table4/img78.png'),
            require('../../assets/images/table4/img79.png'),
            require('../../assets/images/table4/img710.png'),
            require('../../assets/images/table4/img711.png'),
            require('../../assets/images/table4/img712.png'),
        ]
      }
    }
  }
</script>