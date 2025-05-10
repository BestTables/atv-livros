<script setup>
import { ref } from 'vue';
import madeiraBranca from '@/assets/madeiraBranca.png';
import mesaRustica from '@/assets/mesaRustica.png';
import mesabranca from "@/assets/mesabranca.png";
import mesapreta from "@/assets/mesapreta.png";
import mesabizarra from "@/assets/mesabizarra.png";
import mesaRedondaNairobi from "@/assets/-mesa-de-jantar-redonda-nairobi-verniz-nozes-4-lugares.webp";
import mesaEmLmadeiramacica from "@/assets/mesaemLmadeiramaciça.png";
import mesaEscrivaninha from "@/assets/mesa escrivaninha.webp";
import mesamadeiraHelena from "@/assets/mesamadeira6lugarhelena.jpg";

const favoritos = ref([]);

const toggleFavorito = (id) => {
  if (favoritos.value.includes(id)) {
    favoritos.value = favoritos.value.filter(fav => fav !== id);
  } else {
    favoritos.value.push(id);
  }
};

const mostrarCarrinho = ref(false);
const carrinho = ref([]);

const lancamentos = ref([
  {
    id: 10,
    nome: 'Mesa De Jantar Branca 10 Lugares Madeira Rústica',
    descricao: 'Criados artesanalmente cada móvel é único. Feitos em madeira pura, sem adição de fibras sintéticas ou aglomerados.',
    preco: 4283.93,
    imagem: madeiraBranca
  },
  {
    id: 11,
    nome: 'Mesa Sala De Jantar Em Madeira Maciça Rústica',
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
  {
    id: 4,
    nome: "Mesa L de madeira maciça",
    descricao: "Bancada em L de madeira maciça, estilo rústico, ideal para otimizar seu espaço.",
    preco: 4917.00,
    imagem: mesaEmLmadeiramacica
  },
  {
    id: 3,
    nome: "Mesa Freijó Madeirado",
    descricao: "Mesa de computador freijó com pés metalon, estilo industrial, perfeita para seu ambiente.",
    preco: 369.99,
    imagem: mesaEscrivaninha
  },
  {
    id: 2,
    nome: "Mesa madeira Helena imbuia",
    descricao: "Mesa de madeira imbuia, com design clássico, ideal para refeições em família.",
    preco: 348.90,
    imagem: mesamadeiraHelena
  },

]);

const toggleCarrinho = () => {
  mostrarCarrinho.value = !mostrarCarrinho.value;
};

const adicionarAoCarrinho = (mesa) => {
  if (!carrinho.value.find(m => m.id === mesa.id)) {
    carrinho.value.push(mesa);
  }
};

const finalizarCompra = () => {
  // Lógica para finalizar a compra
  alert('Compra finalizada!');
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
          <!-- Coloque isso dentro da tag <header> -->
          <div @click="toggleCarrinho" class="icone-carrinho">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </div>
          <div v-if="mostrarCarrinho" class="carrinho">
            <h3>Seu Carrinho</h3>
            <!-- Aqui você pode adicionar os itens do carrinho -->
            <ul>
              <li v-for="item in carrinho" :key="item.id">
                {{ item.nome }} - R$ {{ item.preco.toFixed(2) }}
              </li>
            </ul>
            <button @click="finalizarCompra">Finalizar Compra</button>
            <button @click="toggleCarrinho">Fechar Carrinho</button>
          </div>

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
  margin-top: 2rem;
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
  height: 0.1rem;
  border-radius: 15px;
}

.linha {
  background-color: #8B4F24;
  margin-left: 10.5rem;
  width: 135rem;
  height: 0.15rem;
  border-radius: 15px;
}

.linhaDois {
  background-color: #8B4F24;
  margin-left: 10.5rem;
  margin-top: 3rem;
  width: 135rem;
  height: 0.155rem;
  border-radius: 15px;
}

.imagensDois {
  display: flex;
  padding-top: 3rem;
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
  height: 4rem;
  background-color: #8B4F24;
  border-radius: 15px;
}

.bloco {
  display: flex;
  margin-left: 11.5rem;
  padding-top: 0.5rem;
}

.iconsDois {
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  font-size: 2.5rem;
  color: #441f05
}

.cardmesa-containe {
  padding-top: 4rem;
  margin-left: 12rem;
  font-family: "Merriweather Sans", sans-serif;
  background-color: #F0F0F0;
  width: 10rem;
  padding-bottom: 8rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-radius: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Isso vai criar 3 colunas */
  gap: 2rem;
  /* Define o espaço entre as colunas e linhas */

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
}

.cardmesa-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 0.5rem;
  /* Ajuste do gap */
  justify-content: space-between;
  width: 130rem;
  background-color: #f0f0f0;
  /* Exemplo de cor de fundo */
  padding: 5rem;
  /* Padding para dar mais espaço dentro do container */
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
  width: 155rem;
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
  top: 10%;
  right: 5%;
  background-color: white;
  border: 1px solid #8B4F24;
  padding: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 300px;
  z-index: 1000;
}

.carrinho h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.carrinho ul {
  list-style-type: none;
  padding: 0;
}

.carrinho li {
  margin-bottom: 1rem;
}

.carrinho button {
  background-color: #8B4F24;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  gap: 2.65rem;
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
</style>
