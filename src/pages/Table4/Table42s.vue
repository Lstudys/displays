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
          require('../../assets/images/table1/img1.png'),
          require('../../assets/images/table1/img2.png'),
          require('../../assets/images/table1/img3.png'),
          require('../../assets/images/table1/img4.png'),
          require('../../assets/images/table1/img5.png'),
          require('../../assets/images/table1/img6.png'),
          require('../../assets/images/table1/img7.png'),
          require('../../assets/images/table1/img8.png'),
          require('../../assets/images/table1/img9.png'),
          require('../../assets/images/table1/img10.png'),
          require('../../assets/images/table1/img11.png'),
          require('../../assets/images/table1/img12.png'),
        ]
      }
    }
  }
</script>