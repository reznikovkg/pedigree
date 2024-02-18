<template>
  <div v-if="photo">
    <img :class="'img__' + size" :src="photo"  alt="">
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
    .img__large{
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
    }

    .img__middle{
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
    }

    .img__small{
        width: 80px;
        height: 120px;
        object-fit: cover;
        border-radius: 12px;
    }
</style>