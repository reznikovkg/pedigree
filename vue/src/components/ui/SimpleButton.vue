<template>
  <button :class="['simple-button', `button-${type}`]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["info", "warning", "danger", "primary"].includes(value);
      },
    },
  },
};
</script>

<style scoped lang="less">
.simple-button {
  padding: 15px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-family: "Arial", sans-serif;
}

.button-info {
  background-color: #ccc;
  color: #000;
}

.button-warning {
  background-color: #ff0;
  color: #000;
}

.button-danger {
  background-color: #f00;
  color: #fff;
}

.button-primary {
  background-color: #5bc0de;
  color: #fff;
}
</style>
