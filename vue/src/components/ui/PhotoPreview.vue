<template>
  <div v-if="photo" class="photo-preview">
    <img
      class="photo-preview__img"
      :class="'photo-preview__img--' + size"
      ref = "photo"
      :src="photo" 
      @error="handleError"
      alt="Фото"
    >
  </div>
</template>

<script>
export default {
  name: 'PhotoPreview',
  props: {
    photo: {
      default: ' ',
      type: String
    },
    size: {
      default: 'middle',
      type: String
    }
  },
  data () {
    return {
      defaultImage: 'https://sneg.top/uploads/posts/2023-06/1688112950_sneg-top-p-foto-net-avatarki-vatsap-krasivo-14.jpg'
    }
  },
  methods: {
    handleError() {
      this.$refs.photo.src = this.defaultImage
    }
  }
}
</script>

<style scoped lang="less">
.photo-preview {

  &__img {
    object-fit: cover;
    border-radius: 12px;

    &--large {
      width: 200px;
      height: 300px;
    }

    &--middle {
      width: 150px;
      height: 200px;
    }

    &--small {
      width: 80px;
      height: 120px;
    }
  }
}
</style>
