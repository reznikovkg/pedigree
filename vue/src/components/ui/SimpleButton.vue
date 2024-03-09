<template>
  <button class="simple-button" :class="`simple-button--${type}`">
    <slot />
  </button>
</template>

<script>
export default {
  name: "SimpleButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["info", "warning", "danger", "primary"].includes(value),
    },
  },
};
</script>

<style scoped lang="less">
.simple-button {
  padding: 0 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #0c0c0c;
  line-height: 36px;
  font-weight: 700;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  &--info {
    background-color: #d0d0d0;
  }

  &--warning {
    background-color: #fee606;
  }

  &--danger {
    background-color: #ff7575;
  }

  &--primary {
    background-color: #02defd;
  }
}
</style>
