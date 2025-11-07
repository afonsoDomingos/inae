<template>
  <div class="noticias-page">
    <section class="hero-small">
      <h1>Notícias</h1>
      <p>Fique por dentro das últimas atualizações do INAE</p>
    </section>

    <div class="container">
      <NewsFilters v-model:search="search" v-model:category="category" />
      
      <div class="news-grid" v-if="filteredNoticias.length">
        <NewsCard v-for="noticia in paginatedNoticias" :key="noticia.id" :noticia="noticia" />
      </div>

      <div class="empty-state" v-else>
        <p>Nenhuma notícia encontrada.</p>
      </div>

      <AppPagination
        :current="currentPage"
        :total="filteredNoticias.length"
        :per-page="perPage"
        @change="currentPage = $event"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NewsFilters from '@/components/news/NewsFilters.vue'
import NewsCard from '@/components/news/NewsCard.vue'

import AppPagination from '@/components/common/AppPagination.vue'

const search = ref('')
const category = ref('todas')
const currentPage = ref(1)
const perPage = 6

const noticias = ref([
  { id: 1, titulo: 'INAE reforça fiscalização no sector hoteleiro', resumo: 'Mais de 200 estabelecimentos...', data: '2025-04-01', categoria: 'Fiscalização', imagem: 'https://via.placeholder.com/400x250/006400/fff?text=Fiscalização' },
  { id: 2, titulo: 'Lançamento do Portal de Denúncias', resumo: 'Nova plataforma facilita denúncias...', data: '2025-03-28', categoria: 'Tecnologia', imagem: 'https://via.placeholder.com/400x250/d32f2f/fff?text=Portal' },
  { id: 3, titulo: 'Capacitação de 500 empresários', resumo: 'Programa concluído em Nampula...', data: '2025-03-25', categoria: 'Formação', imagem: 'https://via.placeholder.com/400x250/ffcc00/006400?text=Formação' },
  { id: 4, titulo: 'Balanço anual de actividades', resumo: 'Resultados do ano 2024...', data: '2025-01-15', categoria: 'Relatório', imagem: 'https://via.placeholder.com/400x250/006400/fff?text=Relatório' },
  { id: 5, titulo: 'Nova legislação para comércio', resumo: 'Alterações entram em vigor...', data: '2025-02-10', categoria: 'Legislação', imagem: 'https://via.placeholder.com/400x250/004d00/fff?text=Lei' },
  { id: 6, titulo: 'Parceria com sector privado', resumo: 'Acordo para melhorar serviços...', data: '2025-03-01', categoria: 'Parceria', imagem: 'https://via.placeholder.com/400x250/006400/fff?text=Parceria' },
  { id: 7, titulo: 'Feira de empreendedorismo', resumo: 'INAE participa em Maputo...', data: '2025-04-05', categoria: 'Evento', imagem: 'https://via.placeholder.com/400x250/ffcc00/006400?text=Feira' }
])

const filteredNoticias = computed(() => {
  return noticias.value.filter(n => {
    const matchSearch = n.titulo.toLowerCase().includes(search.value.toLowerCase()) ||
                       n.resumo.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = category.value === 'todas' || n.categoria === category.value
    return matchSearch && matchCategory
  })
})

const paginatedNoticias = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filteredNoticias.value.slice(start, start + perPage)
})
</script>

<style scoped>
.noticias-page { background: #f8f9fa; min-height: 100vh; }
.hero-small {
  background: linear-gradient(rgba(0,100,0,0.8), rgba(0,50,0,0.7)), url('https://via.placeholder.com/1920x400/006400/fff?text=Notícias+INAE');
  background-size: cover;
  color: white;
  text-align: center;
  padding: 4rem 1rem;
}
.hero-small h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}
.container { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; }
.news ? NewsCard.vue
.news-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; margin: 2rem 0; }
.empty-state { text-align: center; padding: 3rem; color: #666; }
</style>