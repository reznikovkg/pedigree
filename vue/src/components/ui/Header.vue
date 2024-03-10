<template>
    <header class="header">
      <nav class="navbar">
        <ul class="nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link">На главную</router-link>
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
  
  <style scoped>
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
  }
  
  .nav-menu {
    list-style: none;
    display: flex;
    align-items: center;
  }
  
  .nav-item {
    margin-right: 10px;
  }
  
  .nav-link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
  </style>
  