<template>
  <div>
    <RouterView />
    <ModalContainer />
  </div>
</template>

<script>
import ModalContainer from "@/components/parts/ModalContainer.vue";

export default {
  components: {
    ModalContainer
  }
};
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

body {
  margin: 0;
  padding: 0;
  background-color: @cBaseTwo;
  font-family: @ffInter;
}

a {
  text-decoration: none;
}

section {
  background-color: @cBaseOne;
  margin-bottom: 20px;
  border-radius: 2px;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 0;
  }
}

h1, h2, h3, h4, h5 {
  font-family: @ffOne;
  color: @cBaseThree;
  margin: 0;
}

h1 {
  font-size: 26px;
}

p,
span {
  font-family: @ffOne;
  color: @cBaseThree;
}

h2 {
  font-size: 20px;
}

h3 {
  font-size: 18px;
}

h4 {
  font-size: 16px;
}

.p-16 {
  padding: 16px;
}

.d-flex {
  display: flex;
}
</style>
