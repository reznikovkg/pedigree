<template>
  <button class="simple-button" :class="`simple-button--${type}`">
    <slot></slot>
  </button>
</template>

<script>
import NavigationPanel from "@/components/ui/NavigationPanel";

export default {
  name: "SimpleButton",
  components: {
    NavigationPanel,
  },
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["info", "warning", "danger", "primary"].includes(value),
    },
  },
};
</script>

<style scoped lang="less">
.simple-button {
  padding: 15px 20px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &--info {
    background-color: #d0d0d0;
    color: #000;
  }

  &--warning {
    background-color: #fee606;
    color: #000;
  }

  &--danger {
    background-color: #ff7575;
    color: #fff;
  }

  &--primary {
    background-color: #02defd;
    color: #fff;
  }
}
</style>
