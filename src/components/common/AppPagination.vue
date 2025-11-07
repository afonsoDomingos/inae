<template>
  <div class="pagination">
    <button @click="emit('change', current - 1)" :disabled="current <= 1">
      Anterior
    </button>
    <span>Página {{ current }} de {{ totalPages }}</span>
    <button @click="emit('change', current + 1)" :disabled="current >= totalPages">
      Próxima
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: Number,
  total: Number,
  perPage: { type: Number, default: 6 }
})

defineEmits(['change'])

const totalPages = computed(() => Math.ceil(props.total / props.perPage))
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  font-weight: 600;
}
button {
  padding: 0.5rem 1rem;
  border: 1px solid #006400;
  background: white;
  color: #006400;
  border-radius: 6px;
  cursor: pointer;
}
button:hover:not(:disabled) {
  background: #006400;
  color: white;
}
button:disabled { opacity: 0.5; cursor: not-allowed; }
</style>