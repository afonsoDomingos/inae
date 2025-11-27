<template>
  <header>
    <div class="baselogo">
      <Svg name="baselogo" class="baselogo" />
    </div>

    <div class="logoo">
      <Svg name="logo" class="logo1" />
    </div>

    <nav class="navbar">
       <ul class="nav-links" :class="{ 'mobile-open': mobileMenuOpen }">
        <li><router-link to="/" active-class="active" exact @click="closeMenu">Início</router-link></li>
        <li><router-link to="/sobre" active-class="active" exact @click="closeMenu">Sobre-Nós</router-link></li>
        <li><router-link to="/legislacao" active-class="active" exact @click="closeMenu">Legislação</router-link></li>
        <li><router-link to="/noticias" active-class="active" exact @click="closeMenu">Notícias</router-link></li>
        <li><router-link to="/concursos" active-class="active" exact @click="closeMenu">Concursos</router-link></li>
        <li><router-link to="/contacto" active-class="active" exact @click="closeMenu">Contacto</router-link></li>

        <!-- ADMIN / LOGIN / LOGOUT -->
        <li>
          <!-- Se estiver logado → mostra Admin ou Logout -->
          <a v-if="isLoggedIn" href="#" @click.prevent="handleAdminClick" class="admin-link">
            <i class="bi bi-shield-lock-fill"></i>
            <span v-if="showLogout">Logout</span>
            <span v-else>Admin</span>
          </a>

          <!-- Se NÃO estiver logado → mostra Login -->
          <router-link v-else to="/admin/login" @click="closeMenu" class="admin-link">
            <i class="bi bi-box-arrow-in-right"></i> Login
          </router-link>
        </li>
      </ul>
    </nav>

    <button class="Buttondenuncia">
      <Svg name="denuncia" class="denuncia"/> Denuncia 
    </button>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Svg from '../assets/Svg/Svgs.vue'
import Svgs from '../assets/Svg/Svgs.vue'

const auth = useAuthStore()
const router = useRouter()

const isLoggedIn = computed(() => auth.isLoggedIn)
const showLogout = ref(false)

// Mobile
const mobileMenuOpen = ref(false)
const closeMenu = () => mobileMenuOpen.value = false

// Clique no link Admin
const handleAdminClick = () => {
  if (showLogout.value) {
    auth.logout()
    showLogout.value = false
    router.push('/')
  } else {
    showLogout.value = true
    setTimeout(() => {
      if (isLoggedIn.value) showLogout.value = false
    }, 3000)
  }
}
</script>

<!-- 100% TEU ESTILO ORIGINAL – só adicionei o gap no ícone -->
<style scoped>
header {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: var(--cor-verde);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  align-items: center;
}

.baselogo { width: 286px; height: 60px; right: 51px; }
.navbar { display: flex; justify-content: center; text-align: center; width: 100%; position: fixed; }

ul { display: flex; align-items: center; text-decoration: none; list-style: none; }

li {
  font-family: semibold;
  font-size: var(--f3);
  padding: 1.5rem;
  list-style: none;
  color: var(--cor-branco);
  transition: all .1s;
}

li a {
  color: var(--cor-branco);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;   /* espaço entre ícone e texto */
}

li a:hover { opacity: .8; }

.logo1 { width: 40px; height: 60px; right: 230px; }

.Buttondenuncia{
  cursor: pointer;
  display: flex;
  text-align: center;
  background-color: var(--cor-branco);
  color: var(--cor-preto);
  font-family: semibold;
  margin-left: auto;
  margin-right: 50px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  gap: 2px;
  transition: .5s ease-in-out;
  z-index: 100;
}

.Buttondenuncia:hover {
  background-color: var(--cor-vermelha);
  color: var(--cor-branco);
}

.denuncia { width: 15px; color: var(--cor-branco); }

/* Destaque discreto só pro link admin/login */
.admin-link {
  background: rgba(255,255,255,0.15);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
}
</style>