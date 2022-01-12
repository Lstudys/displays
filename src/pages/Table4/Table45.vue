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
          require('../../assets/images/table4/img51.png'),
            require('../../assets/images/table4/img52.png'),
            require('../../assets/images/table4/img53.png'),
            require('../../assets/images/table4/img54.png'),
            require('../../assets/images/table4/img55.png'),
            require('../../assets/images/table4/img56.png'),
            require('../../assets/images/table4/img57.png'),
            require('../../assets/images/table4/img58.png'),
        ]
      }
    }
  }
</script>