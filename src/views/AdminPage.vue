<template>
  <div class="min-h-screen bg-light">
    <!-- Navbar -->
    <nav class="navbar navbar-dark shadow-lg" style="background-color: #3b8253;">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-white fw-bold">Painel INAE</span>
        <button @click="logout" class="btn btn-outline-light btn-lg">Sair</button>
      </div>
    </nav>

    <div class="container py-5">
      <!-- Loading -->
      <div v-if="store.loading" class="text-center py-5">
        <div class="spinner-border text-success" style="width: 4rem; height: 4rem;"></div>
        <p class="mt-3 fs-4">Carregando notícias...</p>
      </div>

      <!-- Formulário -->
      <div class="card shadow-lg mb-5 border-0">
        <div class="card-header text-white text-center fw-bold" style="background-color: #3b8253;">
          <h4 class="mb-0">{{ editingId ? 'Editar Notícia' : 'Nova Notícia' }}</h4>
        </div>
        <div class="card-body p-5">
          <form @submit.prevent="saveNews">
            <div class="row g-4">
              <div class="col-12">
                <input v-model="form.title" required class="form-control form-control-lg" placeholder="Título da notícia" />
              </div>
              <div class="col-12">
                <textarea v-model="form.description" required rows="8" class="form-control form-control-lg"
                  placeholder="Conteúdo completo da notícia..."></textarea>
              </div>

              <div class="col-md-6">
                <input type="file" accept="image/*" @change="handleImage" class="form-control form-control-lg" />
                <div v-if="form.image" class="mt-4">
                  <div class="preview-container">
                    <img :src="form.image" class="preview-img" @click="openModal(form.image)" alt="Prévia" />
                  </div>
                  <small class="text-muted text-center d-block mt-2">Clique para ampliar</small>
                </div>
              </div>

              <div class="col-md-6 d-flex align-items-center justify-content-center">
                <div class="form-check form-switch form-switch-lg">
                  <input class="form-check-input" type="checkbox" v-model="form.published" id="pub">
                  <label class="form-check-label fs-5 fw-bold text-success" for="pub">Publicar imediatamente</label>
                </div>
              </div>

              <div class="col-12 text-center mt-4">
                <button type="submit" class="btn btn-success btn-lg px-5 shadow" :disabled="store.saving || !form.image">
                  <span v-if="store.saving" class="spinner-border spinner-border-sm me-2"></span>
                  {{ editingId ? 'Atualizando...' : 'Publicando...' }}
                </button>
                <button v-if="editingId" @click="cancelEdit" type="button" class="btn btn-secondary btn-lg px-5 ms-3">
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Lista de Notícias com CONTADOR DE VISUALIZAÇÕES -->
      <h3 class="text-center text-success fw-bold mb-5">
        Notícias Cadastradas ({{ store.news.length }})
      </h3>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
        <div v-for="item in store.news" :key="item._id || item.id" class="col">
          <div class="card h-100 shadow hover-card border-0">
            <div class="preview-container-card">
              <img :src="item.image" class="preview-img-card" @click="openModal(item.image)" :alt="item.title" />
            </div>
            <div class="card-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title text-success fw-bold mb-0">{{ item.title }}</h5>
                <span class="badge rounded-pill" :class="item.published ? 'bg-success' : 'bg-warning text-dark'">
                  {{ item.published ? 'Publicada' : 'Rascunho' }}
                </span>
              </div>
              <p class="card-text flex-grow-1">{{ item.description.substring(0, 100) }}...</p>

              <!-- VISUALIZAÇÕES + DATA -->
              <div class="d-flex justify-content-between align-items-center text-muted small mt-auto">
                <span>{{ formatDate(item.createdAt) }}</span>
                <span class="d-flex align-items-center gap-1">
                  <i class="bi bi-eye-fill text-primary"></i>
                  <strong>{{ item.views || 0 }}</strong> visualizações
                </span>
              </div>

              <div class="mt-3 d-flex gap-2">
                <button @click="editNews(item)" class="btn btn-outline-success btn-sm flex-fill">Editar</button>
                <button @click="confirmDelete(item._id || item.id)" class="btn btn-outline-danger btn-sm flex-fill">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!store.loading && store.news.length === 0" class="text-center py-5">
        <h4 class="text-muted">Nenhuma notícia cadastrada ainda.</h4>
      </div>
    </div>

    <!-- Modal Imagem -->
    <teleport to="body">
      <div v-if="showModal" class="modal-backdrop" @click="showModal = false">
        <div class="modal-fullscreen" @click.stop>
          <img :src="modalImage" class="fullscreen-img" alt="Imagem ampliada">
          <button class="close-btn" @click="showModal = false">×</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNewsStore } from '@/stores/news'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const store = useNewsStore()
const auth = useAuthStore()
const router = useRouter()

const editingId = ref(null)
const form = ref({ title: '', description: '', image: '', published: true })
const modalImage = ref('')
const showModal = ref(false)

// Compressão de imagem
const handleImage = (e) => {
  const file = e.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (ev) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const MAX_WIDTH = 1200
      const scale = MAX_WIDTH / img.width
      canvas.width = MAX_WIDTH
      canvas.height = img.height * scale
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      form.value.image = canvas.toDataURL('image/jpeg', 0.8)
    }
    img.src = ev.target.result
  }
  reader.readAsDataURL(file)
}

const openModal = (src) => { modalImage.value = src; showModal.value = true }

const saveNews = async () => {
  if (!form.value.title || !form.value.description || !form.value.image) {
    alert('Preencha todos os campos e selecione uma imagem!')
    return
  }

  try {
    if (editingId.value) {
      await store.updateNews(editingId.value, form.value)
      alert('Notícia atualizada com sucesso!')
    } else {
      await store.addNews(form.value)
      alert('Notícia publicada com sucesso!')
    }
    await store.fetchNews()
    resetForm()
  } catch {
    alert('Erro ao salvar. Verifique a conexão.')
  }
}

const editNews = (item) => {
  editingId.value = item._id || item.id
  form.value = { ...item }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const cancelEdit = () => { resetForm() }

const resetForm = () => {
  form.value = { title: '', description: '', image: '', published: true }
  editingId.value = null
}

const confirmDelete = async (id) => {
  if (confirm('Tem certeza que quer excluir esta notícia?')) {
    await store.deleteNews(id)
    await store.fetchNews()
  }
}

const logout = () => {
  auth.logout()
  router.push('/admin/login')
}

const formatDate = (date) => new Date(date).toLocaleDateString('pt-MZ', {
  day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
})

onMounted(() => store.fetchNews())
</script>

<style scoped>
.hover-card:hover { transform: translateY(-8px); transition: 0.4s ease; }
.preview-container { width: 100%; height: 320px; margin: 0 auto; background: #f8f9fa; border: 4px solid #3b8253; border-radius: 16px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
.preview-img { max-width: 100%; max-height: 100%; object-fit: contain; cursor: zoom-in; }
.preview-container-card { height: 200px; overflow: hidden; border-bottom: 5px solid #3b8253; }
.preview-img-card { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; }
.preview-img-card:hover { transform: scale(1.08); }
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.95); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.fullscreen-img { max-width: 95vw; max-height: 95vh; object-fit: contain; border-radius: 12px; }
.close-btn { position: absolute; top: 20px; right: 30px; width: 50px; height: 50px; background: white; color: #000; border: none; border-radius: 50%; font-size: 28px; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,:0.5); }
</style>