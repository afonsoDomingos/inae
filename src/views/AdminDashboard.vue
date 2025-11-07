<template>
  <div class="admin-dashboard">
    <!-- Header -->
    <header class="admin-header">
      <div class="header-left">
        <h1>Dashboard Administrativo</h1>
        <p>Bem-vindo, <strong>Administrador</strong></p>
      </div>
      <button class="logout-btn" @click="logout">
        Sair
      </button>
    </header>

    <!-- Conteúdo -->
    <div class="container">
      <!-- Estatísticas Rápidas -->
      <div class="stats-grid">
        <StatCard
          title="Denúncias Hoje"
          :value="124"
          icon="Exclamation"
          color="#d32f2f"
        />
        <StatCard
          title="Inspeções Realizadas"
          :value="89"
          icon="Magnifying Glass"
          color="#006400"
        />
        <StatCard
          title="Pendentes"
          :value="32"
          icon="Clock"
          color="#ff9800"
        />
        <StatCard
          title="Resolvidas"
          :value="412"
          icon="Checkmark"
          color="#4caf50"
        />
      </div>

      <!-- Gráfico de Barras -->
      <div class="chart-section">
        <ChartBar
          title="Denúncias por Categoria (Últimos 30 dias)"
          :data="chartData"
        />
      </div>

      <!-- Tabela de Denúncias Recentes -->
      <div class="table-section">
        <h2 class="section-title">Denúncias Recentes</h2>
        <DenunciaTable :denuncias="recentDenuncias" />
      </div>

      <!-- Botão Ver Todas -->
      <div class="text-center">
        <router-link to="/admin/denuncias" class="btn-view-all">
          Ver Todas as Denúncias
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// COMPONENTES IMPORTADOS CORRETAMENTE
import StatCard from '@/components/admin/StatCard.vue'
import ChartBar from '@/components/admin/ChartBar.vue'
import DenunciaTable from '@/components/admin/DenunciaTable.vue'

const router = useRouter()

// DADOS SIMULADOS
const recentDenuncias = ref([
  { id: 1001, data: '2025-04-07', tipo: 'Comércio', status: 'Pendente', local: 'Maputo - Baixa' },
  { id: 1002, data: '2025-04-06', tipo: 'Turismo', status: 'Em Análise', local: 'Inhambane - Tofo' },
  { id: 1003, data: '2025-04-05', tipo: 'Educação', status: 'Resolvido', local: 'Nampula - Centro' },
  { id: 1004, data: '2025-04-04', tipo: 'Cultura', status: 'Pendente', local: 'Quelimane' },
  { id: 1005, data: '2025-04-03', tipo: 'Desporto', status: 'Em Análise', local: 'Beira - Chiveve' }
])

const chartData = {
  labels: ['Comércio', 'Turismo', 'Educação', 'Cultura', 'Desporto', 'Outros'],
  values: [45, 30, 20, 15, 10, 8]
}

// FUNÇÃO DE LOGOUT
const logout = () => {
  if (confirm('Tem certeza que deseja encerrar a sessão?')) {
    localStorage.removeItem('adminToken')
    router.push('/login')
  }
}
</script>

<style scoped>
.admin-dashboard {
  background: #f5f7fa;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
}

/* HEADER */
.admin-header {
  background: #006400;
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.header-left h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  margin: 0;
}

.header-left p {
  margin: 0.3rem 0 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

.logout-btn {
  background: #d32f2f;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.logout-btn:hover {
  background: #b71c1c;
  transform: translateY(-2px);
}

/* CONTAINER */
.container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* ESTATÍSTICAS */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* SEÇÕES */
.chart-section,
.table-section {
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  color: #006400;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 4px;
  background: #ffcc00;
  border-radius: 2px;
}

/* BOTÃO VER TODAS */
.btn-view-all {
  display: inline-block;
  background: #006400;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,100,0,0.2);
}

.btn-view-all:hover {
  background: #004d00;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,100,0,0.3);
}

.text-center {
  text-align: center;
  margin-top: 1rem;
}

/* RESPONSIVO */
@media (max-width: 992px) {
  .admin-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .admin-header h1 {
    font-size: 1.5rem;
  }
}
</style>