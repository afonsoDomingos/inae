<template>
  <div class="table-container">
    <table class="denuncia-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Data</th>
          <th>Tipo</th>
          <th>Local</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in denuncias" :key="d.id">
          <td>#{{ d.id }}</td>
          <td>{{ formatDate(d.data) }}</td>
          <td><span class="tag" :class="getTagClass(d.tipo)">{{ d.tipo }}</span></td>
          <td>{{ d.local }}</td>
          <td><span class="status" :class="getStatusClass(d.status)">{{ d.status }}</span></td>
          <td><button class="btn-view" @click="viewDenuncia(d)">Ver</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  denuncias: { type: Array, default: () => [] }
})

const formatDate = (d) => new Date(d).toLocaleDateString('pt-MZ')

const getTagClass = (tipo) => {
  const map = { 'Comércio': 'tag-green', 'Turismo': 'tag-blue', 'Educação': 'tag-orange' }
  return map[tipo] || 'tag-gray'
}

const getStatusClass = (status) => {
  const map = { 'Pendente': 'status-pending', 'Em Análise': 'status-analyzing', 'Resolvido': 'status-resolved' }
  return map[status] || 'status-default'
}

const viewDenuncia = (d) => {
  alert(`#${d.id} | ${d.tipo} | ${d.local}`)
}
</script>
<style scoped>
.table-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.denuncia-table { width: 100%; border-collapse: collapse; }
.denuncia-table th, .denuncia-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}
.denuncia-table th {
  background: #006400;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
}
.denuncia-table tbody tr:hover { background: #f8f9fa; }
.tag { padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
.tag-green { background: #e8f5e8; color: #2e7d32; }
.tag-blue { background: #e3f2fd; color: #1565c0; }
.tag-orange { background: #fff3e0; color: #ef6c00; }
.tag-gray { background: #eee; color: #555; }
.status { padding: 0.3rem 0.8rem; border-radius: 6px; font-size: 0.8rem; font-weight: 600; }
.status-pending { background: #fff3e0; color: #ef6c00; }
.status-analyzing { background: #e3f2fd; color: #1565c0; }
.status-resolved { background: #e8f5e8; color: #2e7d32; }
.btn-view {
  background: #006400;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
}
.btn-view:hover { background: #004d00; }
</style>