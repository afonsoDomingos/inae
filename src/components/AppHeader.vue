<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo-inae.png" alt="INAE Logo" class="logo-img" />
      </router-link>

      <!-- Links Desktop -->
      <ul class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
        <li><router-link to="/" active-class="active" exact @click="closeMenu">Início</router-link></li>
        <li><router-link to="/sobre" active-class="active" exact @click="closeMenu">Sobre-Nós</router-link></li>
        <li><router-link to="/legislacao" active-class="active" exact @click="closeMenu">Legislação</router-link></li>
        <li><router-link to="/noticias" active-class="active" exact @click="closeMenu">Notícias</router-link></li>
        <li><router-link to="/concursos" active-class="active" exact @click="closeMenu">Concursos</router-link></li>
        <li><router-link to="/contacto" active-class="active" exact @click="closeMenu">Contacto</router-link></li>
      </ul>

      <!-- Botão Denúncia (Desktop) -->
      <router-link to="/denuncia" class="denuncia-btn desktop">
        <span class="exclamation">!</span> Denuncie
      </router-link>

      <!-- Hambúrguer -->
      <button class="hamburger" @click="toggleMenu" :class="{ active: mobileMenuOpen }">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Botão Denúncia (Mobile) -->
    <div class="mobile-denuncia" v-if="mobileMenuOpen">
      <router-link to="/denuncia" class="denuncia-btn" @click="closeMenu">
        <span class="exclamation">!</span> Denuncie
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return { mobileMenuOpen: false }
  },
  methods: {
    toggleMenu() { this.mobileMenuOpen = !this.mobileMenuOpen },
    closeMenu() { this.mobileMenuOpen = false }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto:wght@400;500&display=swap');

* { font-family: 'Roboto', sans-serif; }

.navbar {
  background-color: #006400;
  padding: 0.75rem 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo-img { height: 44px; width: auto; }

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.2rem;
  margin: 0;
  padding: 0;
  align-items: center;
  transition: all 0.3s ease;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.3px;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a:hover { color: #ffcc00; }

.nav-links a.active {
  color: #ffcc00;
  font-weight: 700;
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ffcc00;
  border-radius: 2px;
}

.denuncia-btn {
  background: white;
  color: #d32f2f;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
}

.denuncia-btn:hover {
  background: #ffebee;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.18);
}

.exclamation {
  background: #d32f2f;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger span {
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: 0.3s;
}

.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }

/* Mobile */
@media (max-width: 992px) {
  .hamburger { display: flex; }
  .denuncia-btn.desktop { display: none; }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #005a00;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
    gap: 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .nav-links.mobile-open {
    max-height: 500px;
    padding: 2rem 0;
  }

  .nav-links a {
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
    width: 100%;
    text-align: center;
  }

  .nav-links a.active::after { display: none; }

  .mobile-denuncia { padding: 0 1.5rem 1.5rem; text-align: center; }
}

@media (max-width: 480px) {
  .logo-img { height: 38px; }
}
</style>