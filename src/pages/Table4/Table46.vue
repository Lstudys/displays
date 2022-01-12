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
           require('../../assets/images/table4/img61.png'),
            require('../../assets/images/table4/img62.png'),
            require('../../assets/images/table4/img63.png'),
            require('../../assets/images/table4/img64.png'),
            require('../../assets/images/table4/img65.png'),
            require('../../assets/images/table4/img66.png'),
            require('../../assets/images/table4/img67.png'),
            require('../../assets/images/table4/img68.png'),
            require('../../assets/images/table4/img69.png'),
            require('../../assets/images/table4/img610.png'),
            require('../../assets/images/table4/img612.png'),
            require('../../assets/images/table4/img613.png'),
            require('../../assets/images/table4/img614.png'),
            require('../../assets/images/table4/img615.png'),
            require('../../assets/images/table4/img616.png'),
            require('../../assets/images/table4/img617.png'),
            require('../../assets/images/table4/img618.png'),
            require('../../assets/images/table4/img619.png'),
        ]
      }
    }
  }
</script>