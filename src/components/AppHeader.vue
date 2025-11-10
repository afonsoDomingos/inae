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
      </ul>
    </nav>

    <button class="Buttondenuncia">
     <Svg name="denuncia" class="denuncia"/> Denuncia
    </button>

  </header>
  
</template>

<script setup>
import { ref } from 'vue'
import Svg from '../assets/Svg/Svgs.vue'
import Svgs from '../assets/Svg/Svgs.vue'


</script>

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

.baselogo {
  width: 286px;
  height: 60px;
  right: 51px;
}

.navbar {
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  position: fixed;
}

ul {
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
}

li {
  font-family: semibold;
  font-size: var(--f3);
  padding: 1.5rem;
  list-style: none;
  color: var(--cor-branco);
}

li a {
  color: var(--cor-branco);
  text-decoration: none;
}

.logo1{
  width: 40px;
  height: 60px;
  right: 230px;
}

.Buttondenuncia{
  display: flex;
  text-align: center;
  background-color: var(--cor-branco);
  color: var(--cor-preta);
  font-family: semibold;
  margin-left: auto;
  margin-right: 50px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  gap: 2px;
}

.denuncia {
  width: 15px;
  color: var(--cor-branco);
}

</style>