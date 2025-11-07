<template>
  <div class="chart-card">
    <h3>{{ title }}</h3>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

// NÃO IMPORTAR defineProps
const props = defineProps({
  title: String,
  data: { type: Object, required: true }
})

const canvas = ref(null)
let chart = null

const createChart = () => {
  if (chart) chart.destroy()
  chart = new Chart(canvas.value, {
    type: 'bar',
    data: {
      labels: props.data.labels,
      datasets: [{
        label: 'Denúncias',
        data: props.data.values,
        backgroundColor: '#006400',
        borderColor: '#004d00',
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { stepSize: 10 } } }
    }
  })
}

onMounted(createChart)
watch(() => props.data, createChart, { deep: true })
</script>

<style scoped>
.chart-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.chart-card h3 {
  margin-bottom: 1rem;
  color: #006400;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
}
</style>