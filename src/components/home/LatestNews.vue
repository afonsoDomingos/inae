<template>
  <section class="news">
    <div class="container">
      <h2 class="section-title">Últimas Notícias</h2>
      <div class="news-grid">
        <article v-for="noticia in noticias" :key="noticia.id" class="news-card">
          <div class="news-image">
            <img :src="noticia.image" :alt="noticia.titulo" />
          </div>
          <div class="news-content">
            <span class="news-date">{{ formatDate(noticia.data) }}</span>
            <h3>{{ noticia.titulo }}</h3>
            <p>{{ noticia.resumo }}</p>
            <router-link to="/noticias" class="read-more">
              Ler mais
            </router-link>
          </div>
        </article>
      </div>
      <div class="text-center">
        <router-link to="/noticias" class="btn-secondary">
          Ver Todas as Notícias
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LatestNews',
  data() {
    return {
      noticias: [
        {
          id: 1,
          titulo: 'INAE reforça fiscalização no sector hoteleiro',
          resumo: 'Mais de 200 estabelecimentos inspecionados na província de Maputo.',
          data: '2025-04-01',
          image: 'https://via.placeholder.com/400x250/006400/ffffff?text=Notícia+1'
        },
        {
          id: 2,
          titulo: 'Lançamento do Portal de Denúncias Online',
          resumo: 'Nova plataforma facilita denúncias anónimas em tempo real.',
          data: '2025-03-28',
          image: 'https://via.placeholder.com/400x250/d32f2f/ffffff?text=Denúncias'
        },
        {
          id: 3,
          titulo: 'Capacitação de 500 empresários em boas práticas',
          resumo: 'Programa de formação concluído com sucesso em Nampula.',
          data: '2025-03-25',
          image: 'https://via.placeholder.com/400x250/ffcc00/006400?text=Formação'
        }
      ]
    }
  },
  methods: {
    formatDate(date) {
      const d = new Date(date)
      return d.toLocaleDateString('pt-MZ', { day: '2-digit', month: 'long', year: 'numeric' })
    }
  }
}
</script>

<style scoped>
.news {
  padding: 5rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  color: #006400;
  margin-bottom: 3rem;
  text-align: center;
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.news-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.news-content {
  padding: 1.5rem;
}

.news-date {
  color: #d32f2f;
  font-size: 0.85rem;
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.news-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  color: #006400;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.news-content p {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  color: #006400;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.read-more::after {
  content: '→';
  transition: transform 0.3s ease;
}

.read-more:hover::after {
  transform: translateX(5px);
}

.btn-secondary {
  background: #006400;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-secondary:hover {
  background: #004d00;
  transform: translateY(-2px);
}

.text-center {
  text-align: center;
}

@media (max-width: 992px) {
  .news-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>