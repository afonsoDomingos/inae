<template>
  <div class="denuncia-page">
    <section class="hero-small">
      <h1>Denuncie</h1>
      <p>Sua denúncia é anónima e ajuda a melhorar os serviços em Moçambique.</p>
    </section>

    <div class="container">
      <DenunciaForm @submit="handleSubmit" />
    </div>
  </div>
</template>

<script setup>
import DenunciaForm from '@/components/denuncia/DenunciaForm.vue'

const handleSubmit = (data) => {
  alert('Denúncia enviada com sucesso! Obrigado pela colaboração.')
  console.log('Denúncia:', data)
}
</script>

<style scoped>
.denuncia-page { background: #f8f9fa; min-height: 100vh; }
.hero-small {
  background: linear-gradient(rgba(211,47,47,0.9), rgba(150,0,0,0.8)), url('https://via.placeholder.com/1920x400/d32f2f/fff?text=Denuncie+Irregularidades');
  color: white;
  text-align: center;
  padding: 4rem 1rem;
}
.hero-small h1 { font-size: 2.8rem; font-family: 'Montserrat', sans-serif; }
.container { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
</style>