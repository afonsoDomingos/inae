<template>
  <form @submit.prevent="submit" class="denuncia-form">
    <div class="form-group">
      <label>Tipo de Irregularidade</label>
      <select v-model="form.tipo" required>
        <option value="">Selecione...</option>
        <option>Comércio</option>
        <option>Turismo</option>
        <option>Educação</option>
        <option>Cultura</option>
        <option>Desporto</option>
      </select>
    </div>

    <div class="form-group">
      <label>Descrição</label>
      <textarea v-model="form.descricao" required placeholder="Descreva o problema..."></textarea>
    </div>

    <div class="form-group">
      <label>Localização</label>
      <input v-model="form.local" placeholder="Cidade, bairro, estabelecimento..." />
    </div>

    <div class="form-group">
      <label>Anexar Evidência (opcional)</label>
      <input type="file" @change="onFileChange" accept="image/*,.pdf" />
    </div>

    <button type="submit" class="btn-submit">
      Exclamation Enviar Denúncia
    </button>
  </form>
</template>
<script setup>
import { reactive } from 'vue'

defineEmits(['submit'])

const form = reactive({
  tipo: '',
  descricao: '',
  local: '',
  arquivo: null
})

const onFileChange = (e) => {
  form.arquivo = e.target.files[0]
}

const submit = () => {
  emit('submit', { ...form })
  Object.keys(form).forEach(k => form[k] = k === 'arquivo' ? null : '')
}
</script>

<style scoped>
.denuncia-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
.form-group { margin-bottom: 1.5rem; }
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #006400;
}
input, select, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}
textarea { min-height: 120px; resize: vertical; }
.btn-submit {
  background: #d32f2f;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}
.btn-submit:hover { background: #b71c1c; }
</style>