<template>
  <section class="secao-ultimas-noticias">
    <div class="container-noticias">
      <div class="cabecalho-secao">
        <h2 class="titulo-secao">Últimas Notícias</h2>

        <div class="botoes-navegacao">
          <!-- Botão voltar -->
          <button 
            class="btn-navegacao btn-anterior" 
            @click="voltarNoticia" 
            :disabled="indiceAtual === 0"
          >
            ←
          </button>

          <!-- Botão próximo -->
          <button 
            class="btn-navegacao btn-proximo" 
            @click="avancarNoticia"
            :disabled="indiceAtual >= noticiasFiltradas.length - noticiasVisiveis"
          >
            →
          </button>
        </div>
      </div>

      <div class="carrossel-wrapper">
        <div 
          class="carrossel-noticias"
          :style="{ transform: `translateX(-${indiceAtual * (100 / noticiasVisiveis)}%)` }"
        >
          <article 
            v-for="noticia in noticiasFiltradas" 
            :key="noticia._id" 
            class="card-noticia"
          >
            <div class="container-imagem">
              <img 
                :src="noticia.image" 
                :alt="noticia.title" 
                class="imagem-noticia" 
              />
            </div>

            <div class="conteudo-noticia">
              <h3 class="titulo-noticia">{{ noticia.title }}</h3>
              
              <p class="descricao-noticia">
                {{ noticia.description.substring(0, 130) }}...
              </p>

              <!-- VISUALIZAÇÕES + DATA (ADICIONADO) -->
              <div class="info-extra">
                <span class="data-noticia">{{ formatDate(noticia.createdAt) }}</span>
                <span class="visualizacoes">
                  <i class="bi bi-eye-fill"></i> {{ noticia.views || 0 }}
                </span>
              </div>

              <button 
                class="btn-ver-noticia" 
                @click="verNoticiaCompleta(noticia._id)"
              >
                Ver Notícia Completa →
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/news'

const router = useRouter()
const store = useNewsStore()

const indiceAtual = ref(0)
const noticiasVisiveis = ref(3)

// Carrega as notícias do backend
const noticiasFiltradas = computed(() => {
  return store.news
    .filter(n => n.published)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})

// Responsividade automática
const ajustarNoticiasVisiveis = () => {
  const largura = window.innerWidth
  if (largura < 768) noticiasVisiveis.value = 1
  else if (largura < 1024) noticiasVisiveis.value = 2
  else noticiasVisiveis.value = 3

  // Ajusta índice se passou do limite
  if (indiceAtual.value > noticiasFiltradas.value.length - noticiasVisiveis.value) {
    indiceAtual.value = Math.max(0, noticiasFiltradas.value.length - noticiasVisiveis.value)
  }
}

const avancarNoticia = () => {
  if (indiceAtual.value < noticiasFiltradas.value.length - noticiasVisiveis.value) {
    indiceAtual.value++
  }
}

const voltarNoticia = () => {
  if (indiceAtual.value > 0) indiceAtual.value--
}

const verNoticiaCompleta = (id) => {
  router.push({ name: 'noticia-detalhes', params: { id } })
}

// Formata a data bonito
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-MZ', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

onMounted(() => {
  store.fetchNews()
  ajustarNoticiasVisiveis()
  window.addEventListener('resize', ajustarNoticiasVisiveis)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', ajustarNoticiasVisiveis)
})
</script>

<style scoped>
/* EXATAMENTE O TEU CSS ORIGINAL + VISUALIZAÇÕES */
.secao-ultimas-noticias {
  width: 100%;
  padding: 60px 0;
  background-color: #f8f9fa;
}

.container-noticias {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.cabecalho-secao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.titulo-secao {
  font-size: var(--f5);
  font-family: semibold;
  color: var(--cor-preto);
  margin: 0;
}

.botoes-navegacao {
  display: flex;
  gap: 12px;
}

.btn-navegacao {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-size: 28px;
  font-weight: bold;
  color: var(--cor-vermelha);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-navegacao:hover:not(:disabled) {
  background-color: var(--cor-vermelha);
  color: white;
  transform: scale(1.1);
}

.btn-navegacao:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background-color: #eee;
  color: #999;
}

.carrossel-wrapper {
  overflow: hidden;
  border-radius: 12px;
}

.carrossel-noticias {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease-in-out;
}

.card-noticia {
  flex: 0 0 calc(33.333% - 16px);
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.card-noticia:hover {
  transform: translateY(-8px);
}

.container-imagem {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.imagem-noticia {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card-noticia:hover .imagem-noticia {
  transform: scale(1.08);
}

.conteudo-noticia {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.titulo-noticia {
  font-size: var(--f4);
  color: var(--cor-preto);
  font-family: bold;
  margin: 0 0 16px 0;
  line-height: 1.4;
}

.descricao-noticia {
  font-size: var(--f3);
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* NOVO: Info extra com data e visualizações */
.info-extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.data-noticia {
  font-weight: 500;
}

.visualizacoes {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  color: var(--cor-vermelha);
}

.btn-ver-noticia {
  margin-top: auto;
  background-color: var(--cor-vermelha);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 10px;
  font-size: var(--f3);
  font-family: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-ver-noticia:hover {
  background-color: #cf504c;
  transform: translateX(6px);
}

/* Responsividade */
@media (max-width: 1024px) {
  .card-noticia { flex: 0 0 calc(50% - 12px); }
  .container-imagem { height: 320px; }
}

@media (max-width: 768px) {
  .secao-ultimas-noticias { padding: 40px 0; }
  .card-noticia { flex: 0 0 100%; }
  .container-imagem { height: 220px; }
  .conteudo-noticia { padding: 20px; }
  .btn-navegacao { width: 44px; height: 44px; font-size: 24px; }
  .carrossel-noticias { gap: 16px; }
}
</style>