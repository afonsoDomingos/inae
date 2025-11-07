<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Coluna 1: Logo + Descrição -->
      <div class="footer-col logo-col">
        <router-link to="/" class="footer-logo">
          <img src="@/assets/logo-inae.png" alt="INAE Logo" class="footer-logo-img" />
        </router-link>
        <p class="footer-desc">
          Instituto Nacional de Apoio às Empresas<br>
          Promovendo o desenvolvimento empresarial em Moçambique.
        </p>
      </div>

      <!-- Coluna 2: Links Rápidos -->
      <div class="footer-col">
        <h3 class="footer-title">Navegação</h3>
        <ul class="footer-links">
          <li><router-link to="/">Início</router-link></li>
          <li><router-link to="/sobre">Sobre-Nós</router-link></li>
          <li><router-link to="/legislacao">Legislação</router-link></li>
          <li><router-link to="/noticias">Notícias</router-link></li>
          <li><router-link to="/concursos">Concursos</router-link></li>
          <li><router-link to="/contacto">Contacto</router-link></li>
        </ul>
      </div>

      <!-- Coluna 3: Contactos -->
      <div class="footer-col">
        <h3 class="footer-title">Contactos</h3>
        <ul class="footer-contact">
          <li><i class="icon">Location</i> Av. Ahmed Sekou Touré, Maputo</li>
          <li><i class="icon">Phone</i> +258 21 300 000</li>
          <li><i class="icon">Email</i> info@inae.gov.mz</li>
        </ul>
      </div>

      <!-- Coluna 4: Denúncia + Redes -->
      <div class="footer-col">
        <h3 class="footer-title">Denuncie</h3>
        <router-link to="/denuncia" class="denuncia-btn-footer">
          <span class="exclamation">!</span> Fazer Denúncia
        </router-link>

        <div class="social-links">
          <a href="#" aria-label="Facebook"><i class="icon">Facebook</i></a>
          <a href="#" aria-label="Twitter"><i class="icon">Twitter</i></a>
          <a href="#" aria-label="LinkedIn"><i class="icon">LinkedIn</i></a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>&copy; 2025 INAE - Instituto Nacional de Apoio às Empresas. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
/* Fontes já carregadas no AppHeader */
.footer {
  background-color: #004d00;
  color: white;
  padding: 3rem 1rem 1rem;
  margin-top: 4rem;
  font-family: 'Roboto', sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.8fr 1fr 1.2fr 1fr;
  gap: 2rem;
}

.footer-col h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #ffcc00;
  position: relative;
}

.footer-col h3::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 40px;
  height: 3px;
  background: #ffcc00;
  border-radius: 2px;
}

.footer-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-top: 1rem;
}

.footer-logo-img {
  height: 50px;
  filter: brightness(0) invert(1);
}

.footer-links,
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 0.7rem;
}

.footer-links a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ffcc00;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  color: #d0d0d0;
}

.icon {
  font-style: normal;
  font-weight: bold;
  color: #ffcc00;
}

.denuncia-btn-footer {
  background-color: white;
  color: #d32f2f;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.denuncia-btn-footer:hover {
  background-color: #ffebee;
  transform: translateY(-2px);
}

.exclamation {
  background: #d32f2f;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  color: #e0e0e0;
  font-size: 1.3rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ffcc00;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #005a00;
  font-size: 0.85rem;
  color: #b0b0b0;
}

/* Responsivo */
@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .logo-col {
    grid-column: 1 / -1;
    text-align: center;
  }
  .footer-logo-img {
    height: 45px;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-col h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  .footer-contact li {
    justify-content: center;
  }
  .denuncia-btn-footer {
    display: inline-flex;
    margin: 1rem auto 0;
  }
}
</style>