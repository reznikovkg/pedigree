<template>
  <div class="scrolling-menu">
    <ul>
      <li v-for="(section, index) in sections" :key="index">
        <button @click="scrollToSection(section.id)">{{ section.title }}</button>
      </li>
    </ul>
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
}

.scrolling-menu ul {
  list-style-type: none;
  padding: 0;
}

.scrolling-menu li {
  margin-bottom: 5px;
}

.scrolling-menu button {
  background-color: #45475F00;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  font-size:16px;
}
</style>
