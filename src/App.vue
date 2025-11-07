<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: { AppHeader, AppFooter }
}
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { scroll-behavior: smooth; }
#app { min-height: 100vh; display: flex; flex-direction: column; }
router-view { flex: 1; }
</style>