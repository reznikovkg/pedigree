<template>
  <header class="header">
    <nav class="navbar">
      <ul class="navbar__menu">
        <li class="navbar__item">
          <router-link to="/" class="navbar__link">На главную</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
  
<script>
export default {
  name: 'HeaderComponent'
};
</script>
  
<style scoped lang="less">
.header {
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
}
  
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;

  &__menu {
    list-style: none;
    display: flex;
    align-items: center;
  }

  &__item {
    margin-right: 10px;
  }

  &__link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
}
</style>
