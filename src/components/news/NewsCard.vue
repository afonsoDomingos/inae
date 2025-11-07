<template>
  <article class="news-card" @click="$router.push('/noticias/' + noticia.id)">
    <img :src="noticia.imagem" :alt="noticia.titulo" />
    <div class="content">
      <span class="category">{{ noticia.categoria }}</span>
      <h3>{{ noticia.titulo }}</h3>
      <p>{{ noticia.resumo }}</p>
      <span class="date">{{ formatDate(noticia.data) }}</span>
    </div>
  </article>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  noticia: {
    type: Object,
    required: true
  }
})

const formatDate = (d) => new Date(d).toLocaleDateString('pt-MZ')
</script>

<style scoped>
.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: 0.3s;
}
.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
.news-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.content {
  padding: 1.5rem;
}
.category {
  background: #006400;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}
h3 {
  margin: 0.8rem 0;
  color: #006400;
  font-family: 'Montserrat', sans-serif;
}
.date {
  color: #999;
  font-size: 0.9rem;
}
</style>