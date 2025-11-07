<template>
  <section class="hero-banner">
    <div class="carousel">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <!-- Fundo -->
        <div class="slide-bg" :style="{ backgroundImage: `url(${slide.image})` }"></div>

        <!-- Overlay -->
        <div class="slide-overlay"></div>

        <!-- Conteúdo -->
        <div class="slide-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.subtitle }}</p>
          <router-link to="/denuncia" class="btn-denuncia">
            Exclamation Fazer Denúncia
          </router-link>
        </div>
      </div>
    </div>

    <!-- Botões de Navegação (INFERIORES) -->
    <button class="nav-btn prev" @click="prevSlide">
      Previous
    </button>
    <button class="nav-btn next" @click="nextSlide">
      Next
    </button>

    <!-- Indicadores -->
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 3 BANNERS REAIS
const slides = ref([
  {
    title: 'Fiscalização com Integridade',
    subtitle: 'Garantimos a qualidade e segurança dos serviços em Moçambique.',
    image: new URL('@/assets/banner01.png', import.meta.url).href
  },
  {
    title: 'Denuncie Irregularidades',
    subtitle: 'Sua voz faz a diferença. Denuncie anonimamente.',
    image: new URL('@/assets/banner02.png', import.meta.url).href
  },
  {
    title: 'Desenvolvimento Empresarial',
    subtitle: 'Apoiamos o crescimento sustentável das empresas.',
    image: new URL('@/assets/banner03.png', import.meta.url).href
  }
])

const currentSlide = ref(0)
let interval = null

const startAutoPlay = () => {
  interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }, 6000)
}

const goToSlide = (index) => {
  currentSlide.value = index
  clearInterval(interval)
  startAutoPlay()
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
  goToSlide(currentSlide.value)
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  goToSlide(currentSlide.value)
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.hero-banner {
  position: relative;
  height: 80vh;
  overflow: hidden;
  margin-bottom: 4rem;
  font-family: 'Montserrat', sans-serif;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
  display: flex;
  align-items: center;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}

.slide-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.75);
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 100, 0, 0.85), rgba(0, 50, 0, 0.6));
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 2rem 4rem;
  color: white;
}

.slide-content h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}

.slide-content p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);
}

.btn-denuncia {
  background: #ffffff;
  color: #d32f2f;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-denuncia:hover {
  background: #ffebee;
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 30px rgba(211,47,47,0.3);
}

.exclamation {
  background: #d32f2f;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
}

/* BOTÕES DE NAVEGAÇÃO INFERIORES */
.nav-btn {
  position: absolute;
  bottom: 2.5rem;
  background: rgba(255, 255, 255, 0.25);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.prev {
  left: 2rem;
}

.next {
  right: 2rem;
}

/* Indicadores */
.dots {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 3;
}

.dots span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: all 0.4s ease;
}

.dots span.active {
  background: #ffcc00;
  transform: scale(1.4);
  box-shadow: 0 0 10px rgba(255,204,0,0.6);
}

/* Responsivo */
@media (max-width: 992px) {
  .hero-banner { height: 70vh; }
  .slide-content { padding: 2rem; max-width: 100%; text-align: center; }
  .slide-content h1 { font-size: 2.4rem; }
  .slide-content p { font-size: 1.1rem; }
  .btn-denuncia { padding: 0.9rem 1.8rem; font-size: 1rem; }
  .nav-btn { width: 45px; height: 45px; font-size: 1.2rem; }
  .prev { left: 1rem; }
  .next { right: 1rem; }
}

@media (max-width: 600px) {
  .hero-banner { height: 60vh; }
  .slide-content h1 { font-size: 2rem; }
  .slide-content p { font-size: 1rem; }
  .btn-denuncia { padding: 0.8rem 1.5rem; font-size: 0.95rem; }
  .nav-btn { width: 40px; height: 40px; font-size: 1.1rem; }
}
</style>