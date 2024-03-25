<template>
  <div class="input-helper">
    <div 
      v-for="option in options" 
      :key="option" 
      class="input-helper__item" 
      @click="() => selectOption(option)"
    >
      {{ option }}
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'InputHelper',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectOption(value) {
      this.$emit('select', value);
    }
  }
}
</script>
    
<style scoped lang = "less">
.input-helper {
  &__item {
    background-color: #ffffff;
    cursor: pointer;
    padding: 10px 30px 10px 5px;
    border: 1px solid #ddd; 
    border-radius: 5px;
    margin-bottom: 5px; 
    box-shadow: 0px 5px 5px #ddd;
    color: #9d9d9d;  

    &:hover {
      background-color: #e0e0e0; 
    }
  }
}
</style>
  