<template>
  <div v-if="photo">
    <img id="photo_preview" :class="'img--' + size" :src="photo"  alt="">
  </div>
</template>

<script>
  export default{
    name: 'PhotoPreview',
    props: {
      photo: {
        default: null,
        type: String
      },
      size: {
        default: 'middle',
        type: String
      }
   }
}
</script>

<style scoped lang="less">
  #photo_preview{
    object-fit: cover;
    border-radius: 12px;
  }
  .img--large{
    width: 200px;
    height: 300px;
  }

  .img--middle{
    width: 150px;
    height: 200px;
}

  .img--small{
    width: 80px;
    height: 120px;
  }
</style>