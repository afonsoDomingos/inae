<template>
  <section class="natureza-section">
    <!-- Background escurecido -->
    <div class="background">
      <img src="../../assets/banner01.png" alt="" />
    </div>

    <!-- Conteúdo principal -->
    <div class="content-wrapper">
      <!-- Imagem à esquerda -->
      <div class="image-box">
        <img src="../../assets/banner01.png" alt="" />
      </div>

      <!-- Texto à direita -->
      <div class="text-box">
        <h2>Natureza</h2>
        <p>
          A Inspecção Nacional das Actividades Económicas, abreviadamente designada por INAE, é uma instituição pública, dotada de personalidade jurídica e autonomia administrativa
        </p>
        <h2>Atribuição</h2>
        <p>
          A INAE tem como atribuição a fiscalização do cumprimento da legislação reguladora do exercício das actividades económicas e a defesa do consumidor.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

import Svg from '../../assets/Svg/Svgs.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

//As fotos
const slides = ref([
  {
    image: new URL('@/assets/banner01.png', import.meta.url).href
  },
  {
    image: new URL('@/assets/banner02.png', import.meta.url).href
  },
  {
    image: new URL('@/assets/banner03.png', import.meta.url).href
  }
])


export default {
  name: "SectionNatureza",
};
</script>

<style scoped>
.natureza-section {
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background */
.background {
  position: absolute;
  inset: 0;
  background-image: url('');
  background-size: cover;
  background-position: center;
  filter: blur(4px) brightness(0.4);
  z-index: 1;
}

/* Conteúdo sobreposto */
.content-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  width: 90%;
  max-width: 1200px;
  gap: 40px;
  padding: 40px 0;
  align-items: center;
}

/* Imagem esquerda */
.image-box {
  flex: 1;
}

.image-box img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
}

/* Texto direita */
.text-box {
  flex: 1;
  color: rgb(255, 255, 255);
}

.text-box h2 {
  margin-bottom: 20px;
  margin-bottom: 20px;
  font-size: var(--f5);
  font-family: bold;
  color: var(--cor-branco);
}

.text-box p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 12px;
}

/* Responsivo */
@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .image-box img {
    height: 260px;
  }
}
</style>
