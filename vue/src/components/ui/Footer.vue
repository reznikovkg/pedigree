<template>
    <footer class="footer">
      <div class="footer-content">
        Родословная @ {{ currentYear }}
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
    data() {
      return {
        currentYear: ''
      };
    },
    mounted() {
      this.getCurrentYear();
    },
    methods: {
      getCurrentYear() {
        const date = new Date();
        this.currentYear = date.getFullYear();
      }
    }
  };
  </script>
  
  <style scoped>
  .footer {
    width: 100%;
    height: 60px;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .footer-content {
    color: #333;
    font-weight: bold;
  }
  </style>