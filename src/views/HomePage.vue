<template>
  <div class="home">
    <HeroBanner />
    <StatsCounter />
    <ActivityAreas />
    <LatestNews />
  </div>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue'
import StatsCounter from '@/components/home/StatsCounter.vue'
import ActivityAreas from '@/components/home/ActivityAreas.vue'
import LatestNews from '@/components/home/LatestNews.vue'

export default {
  name: 'HomePage',
  components: {
    HeroBanner,
    StatsCounter,
    ActivityAreas,
    LatestNews
  }
}
</script>

<style scoped>
.home {
  background-color: #f8f9fa;
}
</style>