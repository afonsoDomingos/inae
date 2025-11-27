<template>
  <div class="min-h-screen bg-primary bg-gradient d-flex align-items-center justify-content-center py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 col-lg-4">
          <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div class="card-header bg-primary text-white text-center py-4">
              <h1 class="h3 fw-bold mb-0">
                <i class="bi bi-shield-lock me-2"></i> INAE
              </h1>
              <p class="mb-0 opacity-90">Área Administrativa</p>
            </div>
            <div class="card-body p-5">
              <form @submit.prevent="login">
                <div class="mb-4">
                  <div class="input-group input-group-lg">
                    <span class="input-group-text bg-light">
                      <i class="bi bi-key-fill"></i>
                    </span>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Senha de administrador"
                      required
                    />
                  </div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg w-100 fw-bold shadow">
                  <i class="bi bi-box-arrow-in-right me-2"></i>
                  Entrar no Painel
                </button>
              </form>

              <div v-if="error" class="alert alert-danger mt-4 text-center fw-bold">
                <i class="bi bi-exclamation-triangle"></i> Senha incorreta!
              </div>

              <div class="text-center mt-4 text-muted small">
                Dica: <code>inae2025@admin</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const password = ref('')
const error = ref(false)
const router = useRouter()
const auth = useAuthStore()

const login = () => {
  if (auth.login(password.value)) {
    router.push('/admin')
  } else {
    error.value = true
    setTimeout(() => error.value = false, 4000)
  }
}
</script>

<style scoped>
.bg-primary { background: linear-gradient(135deg, #0d47a1, #1976d2) !important; }
</style>