<template>
  <footer class="footer">
    <div class="footer__content">
      Родословная @ {{ currentYear }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      currentYear: ''
    }
  },
  mounted () {
    this.getCurrentYear()
  },
  methods: {
    getCurrentYear () {
      const date = new Date()
      this.currentYear = date.getFullYear()
    }
  }
}
</script>

<style scoped lang="less">
.footer {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    color: #333;
    font-weight: bold;
  }
}
</style>
