<template>
  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} INAE — Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default { name: 'AppFooter' }
</script>

<style scoped>
.footer {
  background-color: #27ae60;
  color: #fff;
  text-align: center;
  padding: 20px 10px;
  font-size: 14px;
  box-shadow: 0 -2px 6px rgba(0,0,0,0.2);
}
</style>
