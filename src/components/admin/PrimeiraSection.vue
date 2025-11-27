<template>
  <div class="admin-container mx-auto max-w-7xl p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Painel Administrativo - Notícias INAE</h1>

    <!-- Formulário de Nova/Edição de Notícia -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-10">
      <h2 class="text-2xl font-semibold mb-6">{{ editingId ? 'Editar' : 'Nova' }} Notícia</h2>

      <form @submit.prevent="saveNews" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Título</label>
          <input
            v-model="form.title"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Digite o título da notícia"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Descrição</label>
          <textarea
            v-model="form.description"
            required
            rows="5"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Escreva o conteúdo completo da notícia"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Imagem da Notícia</label>
          <input type="file" accept="image/*" @change="handleImage" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          
          <!-- Preview da imagem -->
          <div v-if="form.image" class="mt-4">
            <img :src="form.image" alt="Preview" class="max-h-64 rounded-lg shadow-md mx-auto" />
          </div>
        </div>

        <div class="flex items-center">
          <input type="checkbox" v-model="form.published" id="published" class="h-5 w-5 text-blue-600 rounded" />
          <label for="published" class="ml-2 text-sm font-medium text-gray-700">Publicar imediatamente</label>
        </div>

        <div class="flex gap-4">
          <button type="submit" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            {{ editingId ? 'Atualizar' : 'Publicar' }} Notícia
          </button>
          <button v-if="editingId" type="button" @click="cancelEdit" class="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition">
            Cancelar Edição
          </button>
        </div>
      </form>
    </div>

    <!-- Lista de Notícias -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <h2 class="text-2xl font-semibold p-6 bg-gray-50 border-b">Notícias Cadastradas ({{ store.news.length }})</h2>
      
      <div v-if="store.news.length === 0" class="p-10 text-center text-gray-500">
        Nenhuma notícia cadastrada ainda.
      </div>

      <div v-for="item in store.news" :key="item.id" class="border-b hover:bg-gray-50 transition p-6">
        <div class="flex flex-col md:flex-row gap-6">
          <img :src="item.image" alt="Imagem" class="w-full md:w-64 h-48 object-cover rounded-lg shadow" />

          <div class="flex-1">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-gray-800">{{ item.title }}</h3>
              <span class="px-3 py-1 text-xs font-medium rounded-full" :class="item.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                {{ item.published ? 'Publicada' : 'Rascunho' }}
              </span>
            </div>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ item.description }}</p>
            <p class="text-xs text-gray-400">Criada em: {{ formatDate(item.createdAt) }}</p>

            <div class="mt-4 flex gap-3">
              <button @click="editNews(item)" class="text-blue-600 hover:text-blue-800 font-medium">Editar</button>
              <button @click="store.deleteNews(item.id)" class="text-red-600 hover:text-red-800 font-medium">Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNewsStore } from '@/stores/news'

// Store
const store = useNewsStore()

// Formulário reativo
const editingId = ref(null)
const form = ref({
  title: '',
  description: '',
  image: '',
  published: true
})

// Upload de imagem (converte para base64 para preview e armazenamento simples)
const handleImage = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (ev) => {
      form.value.image = ev.target.result
    }
    reader.readAsDataURL(file)
  }
}

// Salvar ou atualizar
const saveNews = () => {
  if (!form.value.title || !form.value.description || !form.value.image) {
    alert('Preencha todos os campos!')
    return
  }

  if (editingId.value) {
    store.updateNews(editingId.value, form.value)
    editingId.value = null
  } else {
    store.addNews({ ...form.value })
  }

  // Reset form
  form.value = { title: '', description: '', image: '', published: true }
}

// Editar notícia
const editNews = (item) => {
  editingId.value = item.id
  form.value = {
    title: item.title,
    description: item.description,
    image: item.image,
    published: item.published
  }
  // Scroll para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const cancelEdit = () => {
  editingId.value = null
  form.value = { title: '', description: '', image: '', published: true }
}

// Formatação de data
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>