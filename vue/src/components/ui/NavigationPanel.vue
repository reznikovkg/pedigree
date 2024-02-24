<template>
  <div class="navigation-panel">
    <SimpleButton type="info">Button 1</SimpleButton>
    <SimpleButton type="warning">Button 2</SimpleButton>
    <SimpleButton type="danger">Button 3</SimpleButton>
    <SimpleButton type="primary">Button 4</SimpleButton>
  </div>
</template>

<script>
import SimpleButton from "@/components/ui/SimpleButton";

export default {
  components: {
    SimpleButton
  }
};
</script>

<style scoped>
.navigation-panel {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
