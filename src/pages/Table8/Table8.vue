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
            require('../../assets/images/table8/1.jpg'),
            require('../../assets/images/table8/2.jpg'),
            require('../../assets/images/table8/3.jpg'),
            require('../../assets/images/table8/4.jpg'),
            require('../../assets/images/table8/5.jpg'),
            require('../../assets/images/table8/6.jpg'),
            require('../../assets/images/table8/7.jpg'),
            require('../../assets/images/table8/8.jpg'),
            require('../../assets/images/table8/9.jpg'),
            require('../../assets/images/table8/10.jpg'),
            require('../../assets/images/table8/11.jpg'),
            require('../../assets/images/table8/12.jpg'),
            require('../../assets/images/table8/13.jpg'),
            require('../../assets/images/table8/14.jpg'),
            require('../../assets/images/table8/15.jpg'),
            require('../../assets/images/table8/16.jpg'),
            require('../../assets/images/table8/17.jpg'),
            require('../../assets/images/table8/18.jpg'),
            require('../../assets/images/table8/19.jpg'),
            require('../../assets/images/table8/20.jpg'),
            require('../../assets/images/table8/21.jpg'),
            require('../../assets/images/table8/22.jpg'),
            require('../../assets/images/table8/23.jpg'),
            require('../../assets/images/table8/24.jpg'),
            require('../../assets/images/table8/25.jpg'),
            require('../../assets/images/table8/26.jpg'),
            require('../../assets/images/table8/27.jpg'),
            require('../../assets/images/table8/28.jpg'),
            require('../../assets/images/table8/29.jpg'),
            require('../../assets/images/table8/30.jpg'),
            require('../../assets/images/table8/31.jpg'),
            require('../../assets/images/table8/32.jpg'),
            require('../../assets/images/table8/33.jpg'),
            require('../../assets/images/table8/34.jpg'),
            require('../../assets/images/table8/35.jpg'),
            require('../../assets/images/table8/36.jpg'),
            require('../../assets/images/table8/37.jpg'),
            require('../../assets/images/table8/37.jpg'),
            require('../../assets/images/table8/39.jpg'),
            require('../../assets/images/table8/40.jpg'),
            require('../../assets/images/table8/41.jpg'),
            require('../../assets/images/table8/42.jpg'),
            require('../../assets/images/table8/43.jpg'),
            require('../../assets/images/table8/44.jpg'),
            require('../../assets/images/table8/45.jpg'),
            require('../../assets/images/table8/46.jpg'),
            require('../../assets/images/table8/47.jpg'),
        ]
      }
    }
  }
</script>