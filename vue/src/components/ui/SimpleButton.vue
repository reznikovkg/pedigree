<template>
    <button class="simple-button" :class="`button-${type}`">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "SimpleButton",
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
  
    &.button-info {
      background-color: #d0d0d0;
      color: #000;
    }
  
    &.button-warning {
      background-color: #fee606;
      color: #000;
    }
  
    &.button-danger {
      background-color: #ff7575;
      color: #fff;
    }
  
    &.button-primary {
      background-color: #02defd;
      color: #fff;
    }
  }
  </style>
  