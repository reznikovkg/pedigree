<template>
  <div class="scrolling-menu">
    <div v-for="(section, index) in sections" :key="index">
      <button class="scrolling-menu__btn" @click="() => scrollToSection(section.id)">{{ section.title }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollingForm',
  props: {
    sections: {
      type: Array,
      required: true
    }
  },
  methods: {
    scrollToSection (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped lang="less">
.scrolling-menu {
  position: fixed;
  top: 50px;
  left: 10px; 

  &__btn {
    background-color: #45475F00;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    font-weight: 600;
    font-size:16px;
  }
}

@media (max-width: 720px) {
  .scrolling-menu {
    display: none;
  }
} 
</style>
