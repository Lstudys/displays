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
            require('../../assets/images/table4/img1.png'),
            require('../../assets/images/table4/img2.png'),
            require('../../assets/images/table4/img3.png'),
            require('../../assets/images/table4/img4.png'),
            require('../../assets/images/table4/img5.png'),
            require('../../assets/images/table4/img6.png'),
            require('../../assets/images/table4/img7.png'),
            require('../../assets/images/table4/img8.png'),
            require('../../assets/images/table4/img9.png'),
            require('../../assets/images/table4/img10.png'),
            require('../../assets/images/table4/img11.png'),
            require('../../assets/images/table4/img12.png'),
            require('../../assets/images/table4/img13.png'),
            require('../../assets/images/table4/img14.png'),
            require('../../assets/images/table4/img15.png'),
            require('../../assets/images/table4/img16.png'),
            require('../../assets/images/table4/img17.png'),
            require('../../assets/images/table4/img18.png'),
        ]
      }
    }
  }
</script>