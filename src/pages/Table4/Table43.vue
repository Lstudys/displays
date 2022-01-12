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
          require('../../assets/images/table4/img31.png'),
            require('../../assets/images/table4/img32.png'),
            require('../../assets/images/table4/img33.png'),
            require('../../assets/images/table4/img34.png'),
            require('../../assets/images/table4/img35.png'),
            require('../../assets/images/table4/img36.png'),
            require('../../assets/images/table4/img37.png'),
            require('../../assets/images/table4/img38.png'),
            require('../../assets/images/table4/img39.png'),
            require('../../assets/images/table4/img310.png'),
            require('../../assets/images/table4/img311.png'),
            require('../../assets/images/table4/img312.png'),
            require('../../assets/images/table4/img313.png'),
            require('../../assets/images/table4/img314.png'),
            require('../../assets/images/table4/img315.png'),
        ]
      }
    }
  }
</script>