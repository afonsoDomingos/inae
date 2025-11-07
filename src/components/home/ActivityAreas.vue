<template>
  <section class="areas">
    <div class="container">
      <h2 class="section-title">Áreas de Atuação</h2>
      <div class="areas-grid">
        <div v-for="area in areas" :key="area.name" class="area-card">
          <div class="area-icon">{{ area.icon }}</div>
          <h3>{{ area.name }}</h3>
          <p>{{ area.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ActivityAreas',
  data() {
    return {
      areas: [
        { name: 'Comércio', icon: 'Cart', desc: 'Fiscalização de mercados e lojas' },
        { name: 'Turismo', icon: 'Palm Tree', desc: 'Hotéis, restaurantes e agências' },
        { name: 'Educação', icon: 'Graduation Cap', desc: 'Escolas e instituições de ensino' },
        { name: 'Cultura', icon: 'Museum', desc: 'Património e eventos culturais' },
        { name: 'Desporto', icon: 'Soccer Ball', desc: 'Clubes e infraestruturas desportivas' },
        { name: 'Transversal', icon: 'Globe', desc: 'Atuação em todos os sectores' }
      ]
    }
  }
}
</script>

<style scoped>
.areas {
  padding: 5rem 0;
  background: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  color: #006400;
  margin-bottom: 3rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: #ffcc00;
  border-radius: 2px;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.area-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.area-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  background: #fff;
}

.area-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.area-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  color: #006400;
  margin-bottom: 0.8rem;
}

.area-card p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .areas-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .areas-grid {
    grid-template-columns: 1fr;
  }
}
</style>