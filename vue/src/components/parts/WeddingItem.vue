<template>
  <div class="wedding-item">
    <strong>{{ wedding.person.name }}</strong>
    <span>
      ({{ wedding.date_start }}<template v-if="wedding.date_end"> - {{ wedding.date_end }}</template>)
    </span>
  </div>
</template>

<script>
export default {
  name: 'WeddingItem',
  props: {
    wedding: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang ="less">
.wedding-item {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  max-width: 400px;
}
</style>
