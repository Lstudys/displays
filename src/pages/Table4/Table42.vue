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
            require('../../assets/images/table4/img21.png'),
            require('../../assets/images/table4/img22.png'),
            require('../../assets/images/table4/img23.png'),
            require('../../assets/images/table4/img24.png'),
            require('../../assets/images/table4/img25.png'),
            require('../../assets/images/table4/img26.png'),
            require('../../assets/images/table4/img27.png'),
            require('../../assets/images/table4/img28.png'),
            require('../../assets/images/table4/img29.png'),
            require('../../assets/images/table4/img210.png'),
            require('../../assets/images/table4/img211.png'),
            require('../../assets/images/table4/img212.png'),
            require('../../assets/images/table4/img213.png'),
            require('../../assets/images/table4/img214.png'),
            require('../../assets/images/table4/img215.png'),
            require('../../assets/images/table4/img216.png'),
            require('../../assets/images/table4/img217.png'),
            require('../../assets/images/table4/img218.png'),
            require('../../assets/images/table4/img219.png'),
        ]
      }
    }
  }
</script>