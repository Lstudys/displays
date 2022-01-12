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
          require('../../assets/images/table4/img41.png'),
            require('../../assets/images/table4/img42.png'),
            require('../../assets/images/table4/img43.png'),
            require('../../assets/images/table4/img44.png'),
            require('../../assets/images/table4/img45.png'),
            require('../../assets/images/table4/img46.png'),
            require('../../assets/images/table4/img47.png'),
            require('../../assets/images/table4/img48.png'),
            require('../../assets/images/table4/img49.png'),
            require('../../assets/images/table4/img410.png'),
            require('../../assets/images/table4/img411.png'),
            require('../../assets/images/table4/img412.png'),
            require('../../assets/images/table4/img413.png'),
        ]
      }
    }
  }
</script>