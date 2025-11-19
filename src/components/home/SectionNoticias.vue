    <template>
  <section class="secao-ultimas-noticias">
    <div class="container-noticias">
      <div class="cabecalho-secao">
        <h2 class="titulo-secao"> Últimas Notícias</h2>
         
        <div class="botoes-navegacao">
          <button class="btn-navegacao btn-anterior" @click="voltarNoticia":disabled="indiceAtual === 0">
            <Svg name="nextnoticias" class="voltarbutton" />
          </button>
          
          <button class="btn-navegacao btn-proximo" @click="avancarNoticia":disabled="indiceAtual >= noticias.length - noticiasVisiveis">
            <Svg name="nextnoticias" />
          </button>
        </div>
      </div>
      
      <!-- Container do Carrossel -->
      <div class="carrossel-wrapper">
        <div 
          class="carrossel-noticias" 
          :style="{ transform: `translateX(-${indiceAtual * (100 / noticiasVisiveis)}%)` }"
        > <!--Move o carrousel para esquerda-->

          <!-- Card de Notícia Article por que a tendencia é que o html intenda que iss é um artigo-->
          <article 
            v-for="(noticia, index) in noticias" 
            :key="index"
            class="card-noticia"
          >
            <!-- Imagens de noticias encapsula todas as imagens-->
            <div class="container-imagem">
              <img 
                :src="noticia.imagem" 
                :alt="noticia.titulo"
                class="imagem-noticia"
              />
            </div>

            <!-- Conteúdo da Notícia -->
            <div class="conteudo-noticia">
              <h3 class="titulo-noticia">{{ noticia.titulo }}</h3>
              
              <p class="descricao-noticia">{{ noticia.descricao }}</p>
 
              <!-- Botão Ver Notícia Completa -->
              <button class="btn-ver-noticia" @click="verNoticiaCompleta(noticia.id)">
                Ver Notícia Completa
                <Svg name="arawnoticia" class="arawnoticia" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Svg from '../../assets/Svg/Svgs.vue'

// COMPOSABLES 
const router = useRouter()

//  ESTADO REATIVO
// Índice atual do carrossel (qual notícia está sendo mostrada primeiro)
const indiceAtual = ref(0)

// Número de notícias visíveis por vez (responsivo)
const noticiasVisiveis = ref(3)

// Controle para auto-play
const intervaloAutoPlay = ref(null)

// Para limpar/parar o auto-play do carrossel de forma segura.
// A chamada para `pararAutoPlay()` existe no `onBeforeUnmount`;
// se não houver intervalo ativo, a função apenas garante não tentar
// chamar `clearInterval` sobre um valor indefinido.
const pararAutoPlay = () => {
  if (intervaloAutoPlay.value) {
    clearInterval(intervaloAutoPlay.value)
    intervaloAutoPlay.value = null
  }
}

// Array de notícias
const noticias = ref([
  {
    id: 1,
    imagem: new URL('@/assets/img-Noticas/image1.jpg', import.meta.url).href,
    titulo: 'INAE intensifica acções contra a venda ilegal de cigarros...',
    descricao: 'maputo, 27 de fevereiro de 2025  a Inspecção nacional das actividades económicas (Inae...'
  },
  {
    id: 2,
    imagem: new URL('@/assets/img-Noticas/image2.jpg', import.meta.url).href,
    titulo: 'INAE intensifica acções contra a venda ilegal de cigarros...',
    descricao: 'A Primeira-Ministra, Maria Benvinda, Levi Emposse Hoje A Juíza Desembargadora Shaquila Aboobacur Mohomed...'
  },
  {
    id: 3,
    imagem: new URL('@/assets/img-Noticas/image3.jpg', import.meta.url).href,
    titulo: 'INAE intensifica acções contra a venda ilegal de cigarros...',
    descricao: 'A Primeira-Ministra, Maria Benvinda, Levi Emposse Hoje A Juíza Desembargadora Shaquila Aboobacur Mohamed...'
  },
  {
    id: 4,
    imagem: new URL('@/assets/img-Noticas/image4.jpg', import.meta.url).href,
    titulo: 'INAE intensifica acções contra a venda ilegal de cigarros...',
    descricao: 'A Primeira-Ministra, Maria Benvinda, Levi Emposse Hoje A Juíza Desembargadora Shaquila Aboobacur Mohomed...'
  },

  {
    id: 5,
    imagem: new URL('@/assets/img-Noticas/image1.jpg', import.meta.url).href,
    titulo: 'INAE intensifica acções contra a venda ilegal de cigarros...',
    descricao: 'A Primeira-Ministra, Maria Benvinda, Levi Emposse Hoje A Juíza Desembargadora Shaquila Aboobacur Mohomed...'
  }
 //Colocamos mas noticias
  
])

                      // MÉTODOS DE NAVEGAÇÃO

// Avança para a próxima notícia no carrossel
const avancarNoticia = () => {
  if (indiceAtual.value < noticias.value.length - noticiasVisiveis.value) {
    indiceAtual.value++
  }
}


// Volta para a notícia anterior no carrossel

const voltarNoticia = () => {
  if (indiceAtual.value > 0) {
    indiceAtual.value--
  }
}

//  RESPONSIVIDADE 

// Ajusta o número de notícias visíveis baseado no tamanho da tela
 
const ajustarNoticiasVisiveis = () => {
  const larguraTela = window.innerWidth
  
  if (larguraTela < 768) {
    // Mobile: 1 notícia
    noticiasVisiveis.value = 1
  } else if (larguraTela < 1024) {
    // Tablet: 2 notícias
    noticiasVisiveis.value = 2
  } else {
    // Desktop: 3 notícias
    noticiasVisiveis.value = 3
  }
  
  // Ajustar índice se necessário
  if (indiceAtual.value > noticias.value.length - noticiasVisiveis.value) {
    indiceAtual.value = Math.max(0, noticias.value.length - noticiasVisiveis.value)
  }
}

//  NAVEGAÇÃO 
/**
 * Redireciona para a página da notícia completa
 * @param {number} idNoticia - ID da notícia a ser visualizada
 */
const verNoticiaCompleta = (idNoticia) => {
  router.push({ name: 'noticia-detalhes', params: { id: idNoticia } })
}

// ========== LIFECYCLE HOOKS ==========
onMounted(() => {
  // Detectar tamanho da tela e ajustar número de notícias visíveis
  ajustarNoticiasVisiveis()
  window.addEventListener('resize', ajustarNoticiasVisiveis)
  
  // Iniciar auto-play (descomente a linha abaixo para ativar)
  // iniciarAutoPlay()
})

onBeforeUnmount(() => {
  // Remover event listener ao destruir componente
  window.removeEventListener('resize', ajustarNoticiasVisiveis)
  
  // Parar auto-play
  pararAutoPlay()
})
</script>

<style scoped>
/* CONTAINER PRINCIPAL  */
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

/*  CABEÇALHO DA SEÇÃO  */
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

/* BOTÕES DE NAVEGAÇÃO  */
.botoes-navegacao {
  display: flex;
  gap: 8px;
}

.btn-navegacao {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-navegacao:hover:not(:disabled) {
  background-color: var(--cor-fundo);
  transform: scale(1.05);
}

.btn-navegacao:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.voltarbutton {
  transform: scale(-1);
}

/*  CARROSSEL */
.carrossel-wrapper {
  overflow: hidden;
  width: 100%;
  padding: 0;
}

.carrossel-noticias {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

/*  CARD DE NOTÍCIA */
.card-noticia {
  flex: 0 0 calc(33.333% - 16px);
  min-width: 0;
  background-color: var(--cor-noticias);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

/*  IMAGEM DA NOTÍCIA */
.container-imagem {
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: var(--cor-cartao);
}

.imagem-noticia {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-noticia:hover .imagem-noticia {
  transform: scale(1.05);
}

/*  CONTEÚDO DA NOTÍCIA */
.conteudo-noticia {
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.titulo-noticia {
  font-size: var(--f4);
  color: var(--cor-preto);
  font-family: bold;
  margin: 0 0 12px 0;
  line-height: 1.5;
  overflow: hidden;
}

.descricao-noticia {
  font-size: var(--f3);
  color: var(--cor-descricaoNotia);
  line-height: 1.6;
  margin: 0 0 20px 0;
  display: -webkit-box;
  overflow: hidden;
}

/* BOTÃO VER NOTÍCIA */
.btn-ver-noticia {
  background-color: var(--cor-vermelha);
  color: var(--cor-branco);
  border: none;
  padding: 20px;
  border-radius: 10px;
  font-size: var(--f3);
  font-family: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-ver-noticia:hover {
  background-color: #cf504c;
  transform: translateX(4px);
}

.btn-ver-noticia .arawnoticia {
  transition: transform 0.3s ease;
}

.btn-ver-noticia:hover svg {
  transform: translateX(4px);
}

/* RESPONSIVIDADE */

/* Tablet */
@media (max-width: 1024px) {
  .card-noticia {
    flex: 0 0 calc(50% - 12px);
  }
  
  .titulo-secao {
    font-size: 28px;
  }
  
  .btn-ver-noticia {
    font-size: var(--f2);
    padding: 10px 16px;
    gap: 8px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .secao-ultimas-noticias {
    padding: 40px 0;
  }
  
  .cabecalho-secao {
    margin-bottom: 24px;
  }
  
  .titulo-secao {
    font-size: 24px;
  }
  
  .botoes-navegacao {
    gap: 8px;
  }
  
  .btn-navegacao {
    width: 40px;
    height: 40px;
  }
  
  .card-noticia {
    flex: 0 0 100%;
  }
  
  .carrossel-noticias {
    gap: 16px;
  }
  
  .container-imagem {
    height: 180px;
  }
  
  .conteudo-noticia {
    padding: 10px;
  }
  
  .titulo-noticia {
    font-size: 16px;
  }
  
  .descricao-noticia {
    font-size: 13px;
  }

  .btn-ver-noticia {
    font-size: var(--f3);
    padding: 10px;
    gap: 100px;
  }

  .arawnoticia {
    width: 40px;
  }  
}
</style>