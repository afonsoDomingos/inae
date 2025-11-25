<template>
 <div class="NaturezaSection">
 <NaturezaSection />
 <CompetenciasSection />
 </div>
 
</template>

<script>
import NaturezaSection from '@/components/sobre-nos/NaturezaSection.vue';
import CompetenciasSection from '@/components/sobre-nos/CompetenciasSection.vue';

export default {
  name: 'SobrePage',
  components: {
    NaturezaSection,
    CompetenciasSection,
  }
}

</script>


