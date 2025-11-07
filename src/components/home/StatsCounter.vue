<template>
  <section class="stats">
    <div class="container">
      <div class="stat-item" v-for="stat in stats" :key="stat.label">
        <div class="stat-number" ref="numbers">
          {{ formatNumber(stat.value) }}
        </div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsCounter',
  data() {
    return {
      stats: [
        { label: 'Inspeções Mensais', value: 1247 },
        { label: 'Estabelecimentos Fiscalizados', value: 892 },
        { label: 'Denúncias Recebidas', value: 156 },
        { label: 'Empresas Apoio', value: 3200 }
      ],
      animated: false
    }
  },
  mounted() {
    this.animateCounters()
  },
  methods: {
    animateCounters() {
      const counters = this.$refs.numbers
      if (!counters) return

      counters.forEach((counter, i) => {
        const target = this.stats[i].value
        let count = 0
        const increment = target / 80
        const timer = setInterval(() => {
          count += increment
          if (count >= target) {
            counter.textContent = this.formatNumber(target)
            clearInterval(timer)
          } else {
            counter.textContent = this.formatNumber(Math.floor(count))
          }
        }, 30)
      })
    },
    formatNumber(num) {
      return num.toLocaleString('pt-MZ')
    }
  }
}
</script>

<style scoped>
.stats {
  background: #006400;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 1rem;
}

.stat-item {
  padding: 1rem;
}

.stat-number {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #ffcc00;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
}

@media (max-width: 992px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>