<template>
  <div class="home-page">
    <h2>Bem-vindo à INAE</h2>
    <p>Esta é a página inicial do sistema.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'  // nome multi-word
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 100px;
}

h2 {
  color: #27ae60; /* verde */
  font-size: 2rem;
  margin-bottom: 15px;
}

p {
  font-size: 1.1rem;
  color: #333;
}
</style>
