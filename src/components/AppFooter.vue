<template>
  <footer class="footer-container">
    <div class="footer">


      <!-- Seção esquerda: Logo e descrição da INAE -->
      <div class="footer-logo-section">
        <!-- Placeholder para a logo - substitua com sua imagem -->
        <div class="logo-placeholder">
          <Svg name="logofooter" class="logofooter"/>
        </div>

        <!-- Descrição institucional da INAE -->
        <p class="footer-descricao">
          A Inspeção Nacional Das Atividades Econômicas (INAE) É O
          Órgão Do Estado Responsável Por Fiscalizar E Promover O
          Cumprimento Das das normas que regulam a produção e 
          À Comercialização De Bens E Serviços Em Moçambique
        </p>
      </div>

      <!-- Seção central: Endereço da instituição -->
      <div class="footer_indereco">
        <h3>Endereço</h3>
        <p>
          Av. 10 De Novembro, Praceta Nº 1196,<br>
          3º Andar, Cidade De Maputo,<br>
          Moçambique
        </p>
      </div>

      <!-- Seção direita: Links de navegação -->
      <div class="footer-links">
        <h3>Links</h3>
        <ul>
        <li><router-link to="/" active-class="active" exact @click="closeMenu">Início</router-link></li>
        <li><router-link to="/sobre" active-class="active" exact @click="closeMenu">Sobre-Nós</router-link></li>
        <li><router-link to="/legislacao" active-class="active" exact @click="closeMenu">Legislação</router-link></li>
        <li><router-link to="/noticias" active-class="active" exact @click="closeMenu">Notícias</router-link></li>
        <li><router-link to="/concursos" active-class="active" exact @click="closeMenu">Concursos</router-link></li>
        <li><router-link to="/contacto" active-class="active" exact @click="closeMenu">Contacto</router-link></li>
        </ul>
      </div>
    </div>

    <!-- Seção intermediária: Contato e email -->
    <div class="footer-middle">
      <div class="footer-middle-content">
        <!-- Informações de contato -->
        <div class="footer-contact">
          <p class="contact-label">Contacto</p>
          <p class="contact-phone">+258 85 000 2020</p>
        </div>

        <!-- Email institucional -->
        <div class="footer-email">
          <p class="email-label">E-Mail / Seg. A Sex. Das 8h Às 15h</p>
          <p class="email-address">inspeccionacionalidasatividadeseconomicas@inae.com.mz</p>
        </div>

        <!-- Redes sociais -->
        <div class="footer-social">
          <a href="#" class="social-icon">
            <!-- Ícone Instagram -->
            <Svg name="iconfacebook" class="iconfacebook" />
          </a>
          <a href="#" class="social-icon">
            <!-- Ícone Facebook -->
            <Svg name="iconinstagram" class="iconinstagram" />
          </a>

           <a href="#" class="social-icon">
            <!-- Ícone  Linkdin-->

          </a>
        </div>
      </div>
    </div>

    <!-- Seção inferior: Copyright e brasão de Moçambique -->
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <!-- Texto de copyright -->
        <p class="copyright">
          ©2025 Inspeção nacional das atividades econômicas-INAE-Todos os direitos Reservados
        </p>

        <!-- Logo do municipio -->
        <img src="../assets/republica.png" alt="logo-da-republica" class="republica">
        
      </div>
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'AppFooter'
})

import Svg from '../assets/Svg/Svgs.vue'
</script>

<style scoped>

.footer-container {
  background-color: #000000;
  color: #ffffff;
  font-family: Arial, sans-serif;
  width: 100%;
}

.footer {
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  padding: 60px 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
}

.footer-logo-section {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

.logofooter{
  width: 120px;
  margin-bottom: 10px;
  left: 100px;
}


.footer-descricao {
  font-size: var(--f9);
  font-family: semibold;
  line-height: 1.6;
  color: var(--cor-cinza);
  max-width: 100%;
}

.footer_indereco {
  flex: 2;
  min-width: 250px;
  max-width: 300px;
}

.footer_indereco h3 {
  font-size: var(--f4);
  margin-bottom: 18px;
  font-family: semibold;
  color: var(--cor-branco);
  
}

.footer_indereco p {
  font-size: var(--f9);
  line-height: 1.7;
  color: var(--cor-cinza);
}

.footer-links {
  flex: 1;
  min-width: 150px;
  max-width: 200px;
}

.footer-links h3 {
  font-size: var(--f4);
  margin-bottom: 18px;
  font-family: semibold;
  color: var(--cor-branco);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: var(--cor-cinza);
  text-decoration: none;
  font-size: var(--f9);
  transition: all .4s;
}

.footer-links a:hover {
  margin-left: 10px;
}

/* 
   SEÇÃO intermediaria Contato e Email
    */

.footer-middle {
  max-width: 100%;
  border-top: 2px solid var(--cor-cinza-footer);
  border-bottom: 2px solid var(--cor-cinza-footer);
  padding: 50px 0;
  margin-top: 16px;
}

.footer-middle-content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

/* Informações de contato telefônico */
.footer-contact {
  flex: 1;
  min-width: 200px;
}

.contact-label {
  font-size: var(--f4);
  color: var(--cor-cinza);
  margin-bottom: 10px;
}

.contact-phone {
  font-size: var(--f5);
  font-family: semibold;
  color: var(--cor-branco);
}

/* Informações de email */
.footer-email {
  flex: 2;
  min-width: 300px;
}

.email-label {
  font-size: var(--f4);
  color: var(--cor-cinza);
  margin-bottom: 10px;
  margin-top: -24px;
}

.email-address {
   font-size: var(--f4);
  font-family: semibold;
  color: var(--cor-branco);
  margin-bottom: -15px;
}

/* Ícones de redes sociais */
.footer-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 
   Copyright 
    */

.footer-bottom {
  padding: 30px 0;
}

.footer-bottom-content {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* Texto de copyright */
.copyright {
  font-size: var(--f9);
  color: var(--cor-branco);
  flex: 1;
}

/* republica */
.republica {
  width: 50px;
}

/* 
   RESPONSIVIDADE PARA DISPOSITIVOS MÓVEIS
    */

@media (max-width: 768px) {
  /* Ajusta seção superior para coluna em telas pequenas */
  .footer {
    flex-direction: column;
    padding: 1px 0px 5px ;
  }

  /* Centraliza conteúdo em mobile */

  .footer-logo-section,
  .footer_indereco,
  .footer-links {
   width: 100%;
  }

  /* Ajusta seção do meio para coluna */
  .footer-middle-content {
    flex-direction: column;
    text-align: center;
  }

  /* Centraliza redes sociais */
  .footer-social {
    justify-content: center;
  }

  /* Ajusta seção inferior para coluna */
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>