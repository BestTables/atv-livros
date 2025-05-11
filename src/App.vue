<script setup>
import { ref } from 'vue';
import madeiraBranca from '@/assets/madeiraBranca.png';
import mesaRustica from '@/assets/mesaRustica.png';
import mesabranca from "@/assets/mesabranca.png";
import mesapreta from "@/assets/mesapreta.png";
import mesabizarra from "@/assets/mesabizarra.png";
import mesaRedondaNairobi from "@/assets/-mesa-de-jantar-redonda-nairobi-verniz-nozes-4-lugares.png";

const favoritos = ref([]);

const limparCarrinho = () => {
  carrinho.value = [];
};


const mostrarCarrinho = ref(false);
const carrinho = ref([]);

const lancamentos = ref([
  {
    id: 10,
    nome: 'Mesa De Jantar Branca 10 Lugares Madeira',
    descricao: 'Criados artesanalmente cada móvel é único. Feitos em madeira pura, sem adição de fibras sintéticas ou aglomerados.',
    preco: 4283.93,
    imagem: madeiraBranca
  },
  {
    id: 11,
    nome: 'Mesa Sala De Jantar Em Madeira Maciça',
    descricao: 'Garantimos sua resistência sem sofrer deformações por umidade ou luz solar, se bem cuidados, podendo durar diversos anos em ótimas condições',
    preco: 3699.02,
    imagem: mesaRustica
  },
  {
    id: 8,
    nome: "Mesa Ripada Avelã Vidro Off White Inspirare",
    descricao: "Com acabamento ripado em avelã e tampo de vidro off white, essa mesa une charme contemporâneo e funcionalidade para sua sala de jantar.",
    preco: 2735.79,
    imagem: mesabranca
  },
  {
    id: 7,
    nome: "Mesa De Madeira Champagne Tampo Vidro",
    descricao: "Com design elegante, a mesa de madeira champagne com tampo de vidro preto combina sofisticação e modernidade para seu ambiente.",
    preco: 1999.00,
    imagem: mesapreta
  },
  {
    id: 6,
    nome: "Mesa de Jantar Russell",
    descricao: "Design moderno com tampo em laca e vidro fendi, base capuccino, perfeita para valorizar sua sala de jantar.",
    preco: 2870.00,
    imagem: mesabizarra
  },
  {
    id: 5,
    nome: "Mesa redonda Nairobi Verniz",
    descricao: "Design elegante com acabamento em verniz nozes, ideal para modernizar sua sala de jantar.",
    preco: 996.00,
    imagem: mesaRedondaNairobi
  },


]);

const toggleCarrinho = () => {
  mostrarCarrinho.value = !mostrarCarrinho.value;
};

const mostrandoMensagem = ref(false);
const mensagem = ref('');


const adicionarAoCarrinho = (mesa) => {
  const itemExistente = carrinho.value.find(item => item.mesa.id === mesa.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.value.push({
      mesa,
      quantidade: 1
    });
  }

  mensagem.value = `"${mesa.nome}" adicionado ao carrinho!`;
  mostrandoMensagem.value = true;

  setTimeout(() => {
    mostrandoMensagem.value = false;
  }, 2500);
};

const finalizarCompra = () => {
  alert('Compra finalizada!');
};
const toggleFavorito = (id) => {
  const index = favoritos.value.indexOf(id);
  if (index === -1) {
    favoritos.value.push(id);
  } else {
    favoritos.value.splice(index, 1);
  }
  console.log("Favoritos agora:", favoritos.value);
};
import { computed } from 'vue';

const totalCarrinho = computed(() =>
  carrinho.value.reduce((total, item) => total + item.mesa.preco * item.quantidade, 0)
);

const removerDoCarrinho = (mesa) => {
  const index = carrinho.value.findIndex(item => item.mesa.id === mesa.id);

  if (index !== -1) {
    if (carrinho.value[index].quantidade > 1) {
      carrinho.value[index].quantidade -= 1;
    } else {
      carrinho.value.splice(index, 1);
    }
  }
};
</script>


<template>
  <header>
    <div class="container">
      <a href="#">
        <img src="@/assets/logo.png" alt="logo">
      </a>
      <span class="divididor"></span>
      <h1>Apreço a <br> mesas</h1>
      <div class="pesquisar">
        <input type="text" placeholder="Pesquisar..." class="input">
        <img src="@/assets/lupa.png" alt="lupa" class="lupa">
      </div>
      <div class="coisas">
        <a href="#">Termos</a>
        <a href="#">Equipe</a>
        <a href="#">Envio</a>
        <a href="#">Devoluções</a>
        <div class="img_header">

          <div @click="toggleCarrinho" class="icone-carrinho">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="icon-carrinho" />
          </div>
          <transition name="carrinho-fade">
            <div v-if="mostrarCarrinho" class="carrinho">
              <h3>Seu Carrinho</h3>


              <div class="vazio" v-if="carrinho.length === 0">
                <p>Carrinho vazio</p>
              </div>
              <ul v-else>
                <li v-for="item in carrinho" :key="item.mesa.id">
                  <div class="item">
                    <img :src="item.mesa.imagem" :alt="item.mesa.nome" class="imagem-item" />
                    <span class="nome-mesa">{{ item.mesa.nome }}</span>
                    <div class="precoCarrinho">
                      - R$ {{ item.mesa.preco.toFixed(2) }} x{{ item.quantidade }}
                    </div>
                    <button class="botaoInd" @click="removerDoCarrinho(item.mesa)">-</button>
                  </div>
                </li>
                <p><strong>Total: R$ {{ totalCarrinho.toFixed(2) }}</strong></p>
              </ul>


              <div class="botoesCarrinho" v-if="carrinho.length > 0">
                <button @click="finalizarCompra">Finalizar Compra</button>
                <button @click="limparCarrinho">Limpar Carrinho</button>
                <button @click="mostrarCarrinho = false">Fechar carrinho</button>
              </div>
            </div>
          </transition>
          <div class="divididorDois"></div>
          <font-awesome-icon :icon="['fas', 'heart']" class="icons" />
          <div class="divididorDois"></div>
          <font-awesome-icon :icon="['fas', 'user']" class="icons" />
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="linhaAntes"></div>
    <section class="sobre1">
      <div class="sobre">
        <div class="quadrado">
          <p>MESA DO MÊS</p>
        </div>
        <h3>Mesa de Peroba Rosa <br> circular pé de aranha</h3>
        <ul>
          <li>
          </li>
          <li>
            <p class="textosafado">
              Feita em peroba rosa de demolição, essa mesa tem estilo e resistência. O pé de aranha garante firmeza
              e um visual diferente do comum, com aquele toque retrô que chama atenção sem exagero.
              Perfeita pra quem curte madeira de verdade e quer uma peça durável com personalidade.
              Sem firula, só madeira boa e um design que funciona.
            </p>
          </li>
          <li>
            <p class="medidas">
              Medidas médias:
              Diâmetro: 1,20m
              Altura: 75cm
            </p>
          </li>
          <li>
            <button class="botao">Página de acesso</button>
          </li>
        </ul>
      </div>
      <div class="imagem_sobre"><img src="@/assets/mesa.png" alt="icone" class="icon"></div>
      <div class="butao">
      </div>
    </section>
    <div class="linha"></div>
    <div class="segundaParte">
      <div class="imagensDois">
        <div class="bloco">
          <font-awesome-icon :icon="['fas', 'truck']" class="iconsDois" />
          <p>Frete grátis para SC</p>
          <div class="divididorDepois"></div>
          <font-awesome-icon :icon="['fas', 'star']" class="iconsDois" />
          <p>Bem avaliados</p>
          <div class="divididorDepois"></div>
          <font-awesome-icon :icon="['fas', 'thumbs-up']" class="iconsDois" />
          <p>Mais vendidos</p>
        </div>
      </div>
      <div class="linhaDois"></div>
    </div>
    <section class="lancamentos">
      <h2>LANÇAMENTOS</h2>
      <div class="cardmesa-container">
        <div class="cardmesa" v-for="mesa in lancamentos" :key="mesa.id">
          <img :src="mesa.imagem" :alt="mesa.nome" class="mesa-img" />
          <h3>{{ mesa.nome }}</h3>
          <p class="autor">{{ mesa.descricao }}</p>
          <p class="preco">R$ {{ mesa.preco.toFixed(2) }}</p>
          <div class="acoes">
            <button class="botao-comprar" @click="adicionarAoCarrinho(mesa)">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon :icon="['fas', 'heart']" class="icone-favorito-final"
              :style="{ color: favoritos.includes(mesa.id) ? 'brown' : '' }" @click="toggleFavorito(mesa.id)" />
          </div>
        </div>
      </div>
    </section>
    <div v-if="mostrandoMensagem" class="mensagem-carrinho">
      {{ mensagem }}
    </div>

  </main>
  <footer>
    <div class="pe">
      <div class="esquerdo">
        <h4>BesTables</h4>
        <p><a href="#"><font-awesome-icon :icon="['fab', 'square-facebook']" size="2x" />
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
          </a>
          <a href="#">
            <font-awesome-icon :icon="['fab', 'square-twitter']" size="2x" />
          </a>
        </p>
      </div>
      <div class="contato">
        <h4>Contato</h4>
        <p><font-awesome-icon :icon="['fas', 'phone']" /> +55 47 40045263</p>
        <p><font-awesome-icon :icon="['fas', 'clock']" /> 8h às 23h - Seg a Sex</p>
        <p><font-awesome-icon :icon="['fas', 'envelope']" /> contato@bestables.com</p>
        <p><font-awesome-icon :icon="['fab', 'cc-paypal']" class="cartoes" size="2x" />
          <font-awesome-icon :icon="['fab', 'cc-mastercard']" class="cartoes" size="2x" />
          <font-awesome-icon :icon="['fab', 'cc-visa']" class="cartoes" size="2x" />
        </p>
      </div>
    </div>
    <div class="linhaDiferente"></div>
    <div class="direitos">
      <p>
        &copy; Alguns direitos reservados. BesTables 2025. </p>
    </div>
  </footer>
</template>

<style scoped>
header {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: bold;
  margin-left: 16rem;
  margin-top: 1.5rem;
}

main {
  font-family: "Merriweather Sans", sans-serif;
}

.container {
  display: flex;
  font-size: x-large;
}

.container h1 {
  margin-top: 0.8rem;
  font-size: x-large;
  color: #441f05;
  padding-right: 5rem;
}

.container a img {
  width: 4rem;
  height: auto;
  border-radius: 15px;
  border: 3px solid #8B4F24;
}

.divididor {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 0.2rem;
  height: 4.5rem;
  background-color: #8B4F24;
  border-radius: 15px;
}

.pesquisar input {
  border-radius: 15px;
  padding-left: 1rem;
  height: 3.3vh;
  width: 25rem;
  padding-right: 5vw;
}

.pesquisar {
  position: relative;
  padding-left: 5rem;
  display: flex;
  align-items: center;
}

.coisas {
  padding-left: 10rem;
  margin-top: 1.5rem;
  display: flex;
}

.coisas a {
  padding-right: 5rem;
  text-decoration: none;
  color: #8B4F24;
}

.pesquisar img {
  position: absolute;
  right: 0.7rem;
  top: 1.5rem;
  width: 1.5rem;
  height: auto;
}

.img_header {
  display: flex;
  padding-left: 1rem;
}

.icons {
  padding-left: 2rem;
}

.divididorDois {
  margin-left: 2rem;
  margin-top: 0.3rem;
  width: 2px;
  height: 1rem;
  background-color: #8B4F24;
  border-radius: 15px;
}

.quadrado {
  border: 2px solid #8B4F24;
  padding: 5px;
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.quadrado p {
  font-weight: 700;
}

.sobre1 {
  display: flex;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 15rem;
  margin-left: 10.5rem;
  background-color: #F0F0F0;
  border-radius: 15px;
  height: auto;
  width: 120rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.sobre h3 {
  font-weight: bold;
  font-size: xxx-large;
  padding-bottom: 1rem;
}

.sobre {
  padding-left: 12.5rem;
}

.imagem_sobre img {
  padding-bottom: 7rem;
  width: 40rem;
  padding-right: 22.5rem;
}

.medidas {
  padding: 1.5rem 0 0 0;
  font-size: medium;
  font-weight: bold;
}

.textosafado {
  font-weight: bold;
  color: #441f05;
  font-size: larger;
  padding-right: 10rem;
}

.botao {
  font-size: x-large;
  background-color: #8B4F24;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  margin: 2.5rem 0 0 0;
}

.linhaAntes {
  background-color: #8B4F24;
  margin-left: 10.5rem;
  margin-top: 1.5rem;
  width: 135rem;
  height: 0.15rem;
  border-radius: 15px;
}

.linha {
  background-color: #8B4F24;
  margin-left: 10.5rem;
  width: 135rem;
  height: 0.13rem;
  border-radius: 15px;
}

.linhaDois {
  background-color: #8B4F24;
  margin-left: 10.5rem;
  margin-top: 3rem;
  width: 135rem;
  height: 0.1rem;
  border-radius: 15px;
}

.imagensDois {
  display: flex;
  padding-top: 1.5rem;
  margin-left: 18.5rem;
}

.imagensDois p {
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 7rem;
  font-weight: bold;
  font-size: x-large;
}

.divididorDepois {
  margin-left: 6rem;
  margin-right: 13rem;
  width: 2px;
  height: 3rem;
  background-color: #8B4F24;
  border-radius: 15px;
}

.bloco {
  display: flex;
  margin-left: 11.5rem;
  padding-top: 1rem;
}

.iconsDois {
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  font-size: 2.5rem;
  color: #441f05
}

.lancamentos {
  margin-left: 8rem;
}

.lancamentos h2 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.2rem;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: -1rem;
  background-color: #F0F0F0;
  border-radius: 15px;
  width: 140rem;
  padding-top: 4rem;
}

.cardmesa-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;

  justify-content: space-between;
  width: 130rem;
  background-color: #f0f0f0;

  padding: 5rem;

  border-radius: 15px;
  margin-bottom: 1.5rem;
}

.cardmesa {
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.cardmesa img {
  width: 100%;
  height: auto;
}

.cardmesa h3 {
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
  color: #333;
  font-weight: bold;
}

.cardmesa p {
  font-size: 1rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
}

.preco {
  font-weight: bold;
  margin-top: 1rem;
  font-size: 3rem;
  color: #333;
}

.acoes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

.botao-comprar {
  background-color: #8B4F24;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 6px;
  font-size: 1.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2.3rem;
  margin: 1rem;
}

.icone-favorito-final {
  color: #777;
  font-size: 2.3rem;
  cursor: pointer;
  transition: color 0.3s;
}


.pe {
  display: flex;
  justify-content: space-between;
}

footer {
  background-color: #3b2311;
  color: #F0F0F0;
  width: 156.5rem;

}

.esquerdo {
  padding-top: 6rem;
  padding-left: 5rem;
}

.contato {
  font-size: large;
  font-weight: 500;
  padding-top: 6rem;
  padding-right: 4rem;
  padding-bottom: 3rem;
}

.contato p {
  padding-top: 0.9rem;
}

.esquerdo h4 {
  font-weight: bold;
  font-size: large;
  padding-left: 0.5rem;
}

.esquerdo p a {
  color: #F0F0F0;
  padding-left: 0.5rem;
}

.esquerdo p {
  padding-top: 1rem;
}

.cartoes {
  padding-top: 5rem;
  padding-right: 0.5rem;
  color: #ffffff;
}

.linhaDiferente {
  background-color: #F0F0F0;
  width: 156.5rem;
  height: 0.1rem;
  border-radius: 15px;
}

.direitos {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.direitos {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
}

.carrinho {
  position: fixed;
  top: 7rem;

  left: 0;
  width: 100vw;
  height: calc(100rem - 8rem);

  background-color: white;
  z-index: 9999;
  overflow-y: auto;
  background-color: #F0F0F0;
  margin-left: 100rem;
  width: 50rem;
  height: 58.5rem;
  border-radius: 15px;
  margin-top: 1.5rem;
  border: 2px solid #3b2311;
}


.carrinho h3 {
  font-size: 2rem;
  margin-bottom: 3rem;
  padding-left: 19rem;
  padding-top: 3rem;
}

.carrinho ul {
  list-style-type: none;
  padding-left: 3rem;
  padding-right: 2rem;
}

.carrinho li {
  margin-bottom: 2rem;
}

.carrinho button {
  background-color: #8B4F24;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5rem;
  margin-top: 3.2rem;
  margin-bottom: 1.5rem;
}

.carrinho button:hover {
  background-color: #6d3e1f;
}

.produtos h2 {
  font-size: 2.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #333;
}

.produtos {
  background-color: #F0F0F0;
  border-radius: 15px;
  padding-top: 4rem;
  margin-left: 11.3rem;
  font-family: "Merriweather Sans", sans-serif;
  width: 92.3rem;
  padding-bottom: 5rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  border-radius: 15px;
}

.linhaquetadividindo {
  background-color: #8B4F24;
  margin-left: 12rem;
  margin-top: 2rem;
  width: 91rem;
  height: 0.10rem;
  border-radius: 15px;
}

.cardsgerais {
  display: flex;
  flex-wrap: wrap;

  margin-left: 5.75rem;
  margin-top: 4rem;
}

.cardmesa {
  background-color: rgb(255, 255, 255);
  padding: 1.5rem 10rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cardmesa img {
  width: 16.75rem;
  height: auto;
}

.cardmesa img.nairobi {
  width: 12rem;
  height: auto;
  padding-top: 5rem;
}

.cardmesa img.mesa3 {
  width: 19rem;
  height: auto;
  padding-top: 8rem;
}

.cardmesa img.mesa4 {
  width: 18.5rem;
  height: auto;
  padding: 10rem 0 5rem 0;
}

.cardmesa img.mesa5 {
  width: 17.7rem;
  height: auto;
  padding: 4rem 0 5rem 0;
}

.cardmesa img.mesa6 {
  width: 15.5rem;
  height: auto;
  padding: 5rem 0 4rem 0;
}

.cardmesa h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0 1.4rem 0;
  color: #333;
  font-weight: bold;
}

.cardmesa p {
  font-size: 0.75rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
}

.cardmesa p.preco {
  font-size: 1.2rem;
  font-weight: bold;
}

.mensagem-carrinho {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background-color: #8B4F24;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  font-weight: bold;
}

.imagem-item {
  width: 10rem;
  height: auto;
  margin-right: 1rem;
  padding-bottom: 1rem;
}

.item {
  display: flex;
  align-items: flex-start;

  border: 2px solid #3b2311;
  border-radius: 15px;
  padding: 1rem;
}

.imagem-item {
  width: 8rem;

  height: auto;
  margin-right: 1rem;
  padding-top: 1rem;
}

.nome-mesa {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 4rem;

}

.precoCarrinho {
  padding-top: 3.6rem;
  padding-left: 1rem;
}

.botaoInd {
  background-color: #8B4F24;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.botaoInd:hover {
  background-color: #A55B2C;
}

.vazio {
  padding-left: 20rem;
  padding-top: 20rem;
}

.cardmesa {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.cardmesa:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
}


button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #3b2311;

  transform: scale(1.05);

}

.icons {
  display: inline-block;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.icons:hover {
  transform: scale(1.2);
}

.icon-carrinho {
  display: inline-block;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.icon-carrinho:hover {
  transform: scale(1.2);
}

a {
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

a:hover {
  transform: scale(1.1);
}

.icone-favorito-final {
  transition: transform 0.3s ease-in-out;
}

.icone-favorito-final:hover {
  transform: scale(1.2);
}

.item {
  transition: transform 0.4s ease;
}

.item:hover {
  transform: scale(1.05);
}

.carrinho-fade-enter-active,
.carrinho-fade-leave-active {
  transition: opacity 0.5s ease;
}


.carrinho-fade-enter,
.carrinho-fade-leave-to {
  opacity: 0;
}
</style>
