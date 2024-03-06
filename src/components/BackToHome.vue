<template>
    <div class="back-to-home">
        <a href="/"> 
            <span class="back-arrow">&#8592;</span>
            Back To Homepage
        </a>
    </div>
</template>
  
  <script>
  export default {
    name: 'BackToHome',
  };
  </script>
  
<style scoped>
    .back-to-home {
        text-align: center;
        margin-bottom: 2rem;
    }

    .back-to-home a {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: #333;
    }   
    
    .back-arrow {
        font-size: 1.2rem;
        margin-right: 0.5rem;
    }
</style>