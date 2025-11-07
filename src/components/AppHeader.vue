<template>
  <header class="header">
    <nav class="nav">
      <h1 class="logo" @click="$router.push('/')">INAE</h1>
      <ul class="nav-links">
        <li><router-link to="/" class="nav-item">Início</router-link></li>
        <li><router-link to="/sobre" class="nav-item">Sobre</router-link></li>
        <li><router-link to="/contacto" class="nav-item">Contacto</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default { name: 'AppHeader' }
</script>

<style scoped>
.header {
  background-color: #27ae60; /* verde */
  color: #fff;
  padding: 15px 40px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-item:hover {
  color: #dff0d8; /* verde claro */
  transform: scale(1.05);
}

.router-link-active {
  border-bottom: 2px solid #dff0d8;
  padding-bottom: 2px;
}
</style>
