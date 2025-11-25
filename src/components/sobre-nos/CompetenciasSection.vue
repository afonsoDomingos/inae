<template>
  <section class="competencias-section">
    <h2 class="title">Competências</h2>

    <div class="accordion">
      <div
        v-for="(item, index) in competencias"
        :key="index"
        class="accordion-item"
      >
        <button class="accordion-header" @click="toggle(index)">
          <span>{{ item.titulo }}</span>
          <span class="icon">{{ activeIndex === index ? "−" : "+" }}</span>
        </button>

        <div
          class="accordion-content"
          :class="{ open: activeIndex === index }"
        >
          <p>{{ item.texto }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionCompetencias",

  data() {
    return {
      activeIndex: null,

      // Lista de competências
      competencias: [
        { titulo: "1. a) Fiscalizar todos os locais", texto: "Fiscalizar todos os locais onde se proceda a qualquer actividade industrial, comercial ou prestação de serviços, designadamente de produtos acabados e/ou intermédios, armazéns, escritórios, cargas transportadas ou em trânsito no território nacional, entrepostos frigoríficos, empreendimentos turísticos, agências de viagens e agentes de turismo, estabelecimento de restauração e bebidas e salas de danças, empresas de animação turística, estabelecimento de bebidas, cantinas, refeitórios, armazéns portuários e terminais de cargas, recintos de diversão, estabelecimentos de produção e realização de espectáculos desportivos e/ou recreativos, estabelecimentos de produção desportivas e de publicidade." },
        { titulo: "1. b) Promover acções de natureza preventiva", texto: "Promover acções de natureza preventiva em matéria de infracções contra qualidade, genuinidade, composição, aditivos alimentares e outras substâncias e de rotulagens dos géneros alimentícios para consumo humano e dos alimentos para animais." },
        { titulo: "1. c) Fiscalizar a legalidade", texto: "Fiscalizar a legalidade do exercício da actividade de abate, preparação, tratamento e armazenamento de produtos de origem animal." },
        { titulo: "1. d) Fiscalizar em coordenação", texto: "Fiscalizar em coordenação com outros organismos competentes, a oferta de produtos e serviços, prevenir acções de açambarcamento em bens considerados essenciais ao abastecimento." },
        { titulo: "1. e) Fiscalizar a legalidade", texto: "Fiscalizar a legalidade da exploração da energia em instalações eléctricas e em postos de abastecimento de combustíveis." },
        { titulo: "1. f) Fiscalizar a conservação e venda", texto: "Fiscalizar a conservação e venda dos produtos de pesca no mercado nacional." },
        { titulo: "1. g) Aplicar multas", texto: "Aplicar multas por infracções diversas nos termos da legislação aplicável." },
        { titulo: "1. h) Proceder ao encerramento", texto: "Proceder ao encerramento de actividades económicas ilegais." },
        { titulo: "1. i) Promover acções de divulgação", texto: "Promover, junto dos interessados, acções de divulgação da legislação sobre o exercício das actividades económicas cuja fiscalização lhe esteja atribuída." },
        { titulo: "1. j) Fiscalizar a legalidade dos direitos", texto: "Fiscalizar a legalidade dos direitos da propriedade industrial, direitos de autor e conexos." },
        { titulo: "1. k) Fiscalizar os espectáculos", texto: "Fiscalizar os espectáculos e divertimentos públicos." },
        { titulo: "1. l) Promover e realizar", texto: "Promover e realizar, em articulação com as outras entidades de apoio empresarial, acções de divulgação da legislação e boas práticas do exercício das actividades económicas." },
        { titulo: "1. m) Fiscalizar as operações", texto: "Fiscalizar as operações do comércio externo." },
        { titulo: "1. n) Verificar pelo cumprimento", texto: "Verificar pelo cumprimento das leis, regulamentos, despachos e demais normas que disciplinam a actividade económica." },
        { titulo: "1. o) Estabelecer relações", texto: "Estabelecer relações com organismos similares e afins, nacionais ou estrangeiros." },
        { titulo: "1. p) Realizar quaisquer outras actividades", texto: "Realizar quaisquer outras actividades que lhe sejam incumbidas por lei." },
        { titulo: "2. Outra Competência", texto: "Para a fiscalização de matérias que a lei confere competência a outra entidade, INAE deve actuar de forma coordenada." },
      ],
    };
  },

  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.competencias-section {
  width: 100%;
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
}

.title { 
  margin-bottom: 40px;
  text-align: center;
  font-size: var(--f5);
  font-family: bold;
  color: var(--cor-verde);
}

/* Accordion container */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Accordion Item */
.accordion-item {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
}

/* Header */
.accordion-header {
  width: 100%;
  padding: 18px 22px;
  font-size: 1.15rem;
  font-weight: 600;
  background: var(--cor-clara, #f8f8f8);
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.accordion-header:hover {
  background: #e9e9e9;
}

.icon {
  font-size: 22px;
  font-weight: bold;
}

/* Content */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  background: white;
  transition: max-height 0.35s ease;
}

.accordion-content.open {
  max-height: 300px; /* suficiente para parágrafos */
}

.accordion-content p {
  padding: 18px 22px;
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}

/* Responsivo */
@media (max-width: 600px) {
  .title {
    font-size: 2.2rem;
  }

  .accordion-header {
    font-size: 1rem;
    padding: 16px;
  }

  .accordion-content p {
    padding: 15px 18px;
  }
}
</style>
