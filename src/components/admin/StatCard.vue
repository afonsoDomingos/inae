<template>
  <div class="stat-card" :style="{ borderLeft: `5px solid ${color}` }">
    <div class="icon">{{ icon }}</div>
    <div class="value">{{ value }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  value: [String, Number],
  icon: String,
  color: String
})
</script>

<style scoped>
.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
}
.icon { font-size: 2rem; margin-bottom: 0.5rem; }
.value { font-size: 2.2rem; font-weight: 700; color: #006400; }
.title { color: #555; font-size: 0.95rem; }
</style>