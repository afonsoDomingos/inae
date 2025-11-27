<template>
  <div class="min-vh-100 bg-light py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-9">
<br></br>
          <!-- Botão Voltar -->
          <button 
            @click="router.back()" 
            class="btn btn-outline-danger mb-4 d-flex align-items-center gap-2 fw-semibold shadow-sm hover-translate"
          >
            <i class="bi bi-arrow-left-circle-fill fs-5"></i>
            Voltar às notícias
          </button>

          <!-- Notícia -->
          <article v-if="noticia" class="card border-0 shadow-lg overflow-hidden">

            <!-- Imagem Hero -->
            <div class="position-relative cursor-pointer" @click="modal = true">
              <img 
                :src="imagem" 
                class="card-img-top" 
                :alt="noticia.title"
                style="height: 280px; object-fit: cover; transition: transform 0.6s ease;"
                @mouseover="$event.target.style.transform = 'scale(1.05)'"
                @mouseout="$event.target.style.transform = 'scale(1)'"
              >
              <div class="position-absolute bottom-0 start-0 end-0 bg-gradient" style="height: 180px;"></div>
              <div class="position-absolute bottom-0 start-0 p-4 text-white">
                <span class="badge bg-danger fs-6 px-4 py-3 rounded-pill shadow">
                  <i class="bi bi-patch-check-fill me-2"></i>NOTÍCIA OFICIAL
                </span>
              </div>
              <div class="position-absolute top-50 start-50 translate-middle bg-white bg-opacity-75 rounded-3 px-4 py-2 shadow">
                <i class="bi bi-zoom-in fs-4 text-danger"></i>
                <small class="fw-bold ms-2">Clique para ampliar</small>
              </div>
            </div>

            <!-- Corpo da notícia -->
            <div class="card-body p-5 p-md-6">

              <!-- Meta informações -->
              <div class="d-flex flex-wrap gap-4 mb-5 text-muted">
                <div class="d-flex align-items-center gap-2">
                  <i class="bi bi-calendar3-week-fill text-danger fs-5"></i>
                  <span class="fw-semibold">{{ formatarData(noticia.createdAt) }}</span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <i class="bi bi-eye-fill text-danger fs-5"></i>
                  <span class="fw-bold fs-5">{{ noticia.views || 0 }}</span>
                  <span class="text-muted">visualizações</span>
                </div>
              </div>

              <!-- Título -->
              <h1 class="display-5 fw-bold text-dark mb-5 lh-1">
                {{ noticia.title }}
              </h1>

              <!-- Conteúdo -->
              <div class="fs-5 text-dark lh-lg text-justify">
                <p 
                  v-for="(paragrafo, i) in paragrafos" 
                  :key="i"
                  class="mb-4 drop-cap"
                  v-html="i === 0 ? paragrafo.replace(/^./, '<span class=&quot;drop-cap-letter&quot;>$&</span>') : paragrafo"
                ></p>
              </div>

              <!-- Linha decorativa -->
              <hr class="my-5 border-danger border-2 opacity-75 w-25 mx-auto">
            </div>
          </article>

          <!-- Não encontrado -->
          <div v-else class="text-center py-5">
            <div class="card border-0 shadow">
              <div class="card-body py-5">
                <i class="bi bi-exclamation-triangle-fill text-warning display-1 mb-4"></i>
                <h3 class="text-muted">Notícia não encontrada</h3>
                <p class="text-muted">Pode ter sido removida ou o link está incorreto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Fullscreen -->
    <teleport to="body">
      <div v-if="modal" class="modal fade show d-block bg-black bg-opacity-95" tabindex="-1" @click="modal = false">
        <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div class="modal-content bg-transparent border-0" @click.stop>
            <img :src="imagem" class="img-fluid rounded-3 shadow-lg" :alt="noticia.title">
            <button 
              @click="modal = false" 
              class="btn btn-light rounded-circle position-absolute top-0 end-0 m-4 shadow-lg"
              style="width: 50px; height: 50px;"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/news'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const store = useNewsStore()
const modal = ref(false)

onMounted(async () => {
  await store.fetchNews()

  const id = route.params.id
  if (id && !sessionStorage.getItem(`viewed_${id}`)) {
    try {
      await axios.get(`https://inae-admin.onrender.com/api/news/${id}/view`)
      sessionStorage.setItem(`viewed_${id}`, 'true')
      const n = store.news.find(n => (n._id || n.id) === id)
      if (n) n.views = (n.views || 0) + 1
    } catch (e) {}
  }
})

const noticia = computed(() => {
  const id = route.params.id
  return store.news.find(n => (n._id || n.id) === id && n.published)
})

const imagem = computed(() => noticia.value?.image || '/placeholder.jpg')

const paragrafos = computed(() => 
  (noticia.value?.description || '')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0)
)

const formatarData = (d) => new Date(d).toLocaleDateString('pt-MZ', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})
</script>

<style scoped>
/* Bootstrap Icons + Drop Cap */
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');

.bg-gradient {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.drop-cap::first-letter,
.drop-cap-letter {
  font-size: 4.5rem;
  font-weight: 900;
  float: left;
  line-height: 0.8;
  margin-right: 0.5rem;
  color: #dc3545;
  font-family: Georgia, serif;
}

.cursor-pointer { cursor: pointer; }
.hover-translate:hover { transform: translateX(-4px); }

@media (max-width: 768px) {
  .drop-cap::first-letter,
  .drop-cap-letter {
    font-size: 3.8rem;
  }
  .card-img-top { height: 220px !important; }
}
</style>