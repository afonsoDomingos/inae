<template>
  <div class="news-filters">
    <div class="search-box">
      <input
        type="text"
        :value="search"
        @input="$emit('update:search', $event.target.value)"
        placeholder="Pesquisar notícias..."
      />
      <span class="search-icon">Magnifying Glass</span>
    </div>

    <select :value="category" @change="$emit('update:category', $event.target.value)">
      <option value="todas">Todas as Categorias</option>
      <option value="Fiscalização">Fiscalização</option>
      <option value="Tecnologia">Tecnologia</option>
      <option value="Formação">Formação</option>
      <option value="Legislação">Legislação</option>
      <option value="Parceria">Parceria</option>
      <option value="Evento">Evento</option>
      <option value="Relatório">Relatório</option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  search: String,
  category: String
})

defineEmits(['update:search', 'update:category'])
</script>

<style scoped>
.news-filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  align-items: center;
}
.search-box {
  position: relative;
  flex: 1;
  min-width: 250px;
}
.search-box input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}
.search-icon {
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: #006400;
  font-weight: bold;
}
select {
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  min-width: 200px;
}
@media (max-width: 600px) {
  .news-filters { flex-direction: column; }
  .search-box, select { width: 100%; }
}
</style>