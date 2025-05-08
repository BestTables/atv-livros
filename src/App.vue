<script setup>

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
        <input type="text" v-model="busca" placeholder="Pesquisar..." class="input">
        <img src="@/assets/lupa.png" alt="lupa" class="lupa">
      </div>
      <div class="coisas">
        <a href="#">Termos</a>
        <a href="#">Equipe</a>
        <a href="#">Envio</a>
        <a href="#">Devoluções</a>
        <div class="img_header">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="icons" />
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
        </div>
        <div class="divididorDepois"></div>
        <font-awesome-icon :icon="['fas', 'star']" class="iconsDois" />
        <p>Bem avaliados</p>
        <div class="divididorDepois"></div>
        <font-awesome-icon :icon="['fas', 'thumbs-up']" class="iconsDois" />
        <p>Mais vendidos</p>
      </div>
      <div class="linhaDois"></div>
    </div>
    <section class="lancamentos">
      <h2>LANÇAMENTOS</h2>
      <div class="grid-livros">
        <div class="card-livro">
          <img src="@/assets/madeiraBranca.png" alt="mesa 1" class="capa-livro" />
          <h3>Mesa De Jantar Branca 10 Lugares Madeira Rústica</h3>
          <p class="autor">Criados artesanalmente cada móvel é único. Feitos em madeira pura, sem adição de fibras
            sintéticas ou aglomerados.</p>
          <p class="preco">R$4.283,93</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-comeco"
  :style="{ color: favoritos.includes(10) ? 'brown' : '' }"
  @click="toggleFavorito(10)"
/>
          </div>
        </div>
        <div class="card-livro">
          <img src="@/assets/mesaRustica.png" alt="mesa 2" class="capa-livro" />
          <h3>Mesa Sala De Jantar Em Madeira Maciça Rústica</h3>
          <p class="autor">Garantimos sua resistência sem sofrer deformações por umidade ou luz solar, se bem cuidados,
            podendo durar diversos anos em ótimas condições
          </p>
          <p class="preco">R$3.699,02</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-comeco"
  :style="{ color: favoritos.includes(9) ? 'brown' : '' }"
  @click="toggleFavorito(9)"
/>
          </div>
        </div>
        <div class="card-livro">
          <img src="@/assets/mesabranca.png" alt="mesa 2" class="capa-livro" />
          <h3>Mesa Ripada Avelã Vidro Off White Inspirare</h3>
          <p class="autor">Com acabamento ripado em avelã e tampo de vidro off white, essa mesa une charme contemporâneo e funcionalidade para sua sala de jantar.
          </p>
          <p class="preco">R$2.735,79</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-comeco"
  :style="{ color: favoritos.includes(8) ? 'brown' : '' }"
  @click="toggleFavorito(8)"
/>
          </div>
        </div>
        <div class="card-livro">
          <img src="@/assets/mesapreta.png" alt="mesa 2" class="capa-livro" />
          <h3>Mesa De Madeira Chcampagne Tampo Vidro </h3>
          <p class="autor">Com design elegante, a mesa de madeira champagne com tampo de vidro preto combina sofisticação e modernidade para seu ambiente.
          </p>
          <p class="preco">R$1.999,00</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-comeco"
  :style="{ color: favoritos.includes(7) ? 'brown' : '' }"
  @click="toggleFavorito(7)"
/>
          </div>
        </div>
      </div>
    </section>
    <div class="linhaquetadividindo"></div>
    <section class="produtos">
      <h2>Veja nossos produtos</h2>
      <div class="cardsgerais">
        <div class="cardmesa">
          <img src="@/assets/mesabizarra.png" alt="mesa 2" class="mesa1" />
          <h3>Mesa de Jantar Russell</h3>
          <p class="autor">Design moderno com tampo em laca e vidro fendi, base capuccino, perfeita para valorizar sua sala de jantar.
          </p>
          <p class="preco">R$2.870,00</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-final"
  :style="{ color: favoritos.includes(6) ? 'brown' : '' }"
  @click="toggleFavorito(6)"
/>    </div>
        </div>
        <div class="cardmesa">
          <img src="@\assets\-mesa-de-jantar-redonda-nairobi-verniz-nozes-4-lugares.webp" alt="mesa 2" class="nairobi"/>
          <h3>Mesa redonda nairobi verniz</h3>
          <p class="autor"> Design elegante com acabamento em verniz nozes, ideal para modernizar sua sala de jantar.
          </p>
          <p class="preco">R$ 996,00</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-final"
  :style="{ color: favoritos.includes(5) ? 'brown' : '' }"
  @click="toggleFavorito(5)"
/>
        </div>
        </div>
        <div class="cardmesa">
          <img src="@\assets\mesaemLmadeiramaciça.png" alt="mesa 2" class="mesa3" />
          <h3>
            Mesa L de madeira maciça</h3>
          <p class="autor"> Bancada em L de madeira maciça, estilo rústico, ideal para otimizar seu espaço.
          </p>
          <p class="preco">R$ 4.917,00</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-final"
  :style="{ color: favoritos.includes(4) ? 'brown' : '' }"
  @click="toggleFavorito(4)"
/>
        </div>
        </div>
        <div class="cardmesa">
          <img src="@\assets\mesa escrivaninha.webp" alt="mesa 2" class="mesa4" />
          <h3>Mesa Freijó Madeirado</h3>
          <p class="autor"> Mesa de computador freijó com pés metalon, estilo industrial, perfeita para seu ambiente.
          </p>
          <p class="preco">R$ 369,99  </p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-final"
  :style="{ color: favoritos.includes(3) ? 'brown' : '' }"
  @click="toggleFavorito(3)"
/>
        </div>
        </div>
        <div class="cardmesa">
          <img src="@\assets\mesamadeira6lugarhelena.jpg" alt="mesa 2" class="mesa5" />
          <h3>Mesa madeira Helena imbuia.</h3>
          <p class="autor"> Mesa de madeira imbuia, com design clássico, ideal para refeições em família.
          </p>
          <p class="preco">R$ 348,90</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-final"
  :style="{ color: favoritos.includes(2) ? 'brown' : '' }"
  @click="toggleFavorito(2)"
/>
        </div>
        </div>
        <div class="cardmesa">
          <img src="@\assets\mesainovadorareceba.webp" alt="mesa 2" class="mesa6" />
          <h3> Mesa Jantar Extensível Lisboa</h3>
          <p class="autor"> Mesa inovadora com acabamento off white e freijó, ideal para ampliar seu espaço e proporcionar elegância ao ambiente.
          </p>
          <p class="preco">R$ 699,99</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon
  :icon="['fas', 'heart']"
  class="icone-favorito-final"
  :style="{ color: favoritos.includes(1) ? 'brown' : '' }"
  @click="toggleFavorito(1)"
/>
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

<script setup>
import { ref } from 'vue'

const favoritos = ref([])

function toggleFavorito(index) {
  if (favoritos.value.includes(index)) {
    favoritos.value = favoritos.value.filter(i => i !== index)
  } else {
    favoritos.value.push(index)
  }
}
</script>

<style scoped>

header {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: bold;
  margin-left: 5rem;
  margin-top: 1rem;
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
  padding-left: 0.8rem;
  height: 2rem;
  width: 20rem;
  padding-right: 3.12rem;
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
  padding-right: 4rem;
  text-decoration: none;
  color: #8B4F24;
}

.pesquisar img {
  position: absolute;
  right: 0.5rem;
  top: 1.5rem;
  width: 1.5rem;
  height: auto;
}

.img_header {
  display: flex;
  padding-left: 1rem;
}

.icons {
  padding-left: 1rem;
}

.divididorDois {
  margin-left: 1rem;
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
  margin-left: 12.5rem;
  background-color: #F0F0F0;
  border-radius: 15px;
  height: 30rem;
  width: 75rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.sobre h3 {
  font-weight: bold;
  font-size: xx-large;
  padding-bottom: 1rem;
}

.imagem_sobre img {
  padding-bottom: 7rem;
  width: 35rem;
  margin-right: 12.5rem;
}

.medidas {
  padding: 1.5rem 0 0 0;
  font-size: medium;
  font-weight: bold;
}

.textosafado {
  font-weight: bold;
  color: #441f05;
  font-weight: 600;
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
  margin-left: 12rem;
  margin-top: 1.5rem;
  width: 91rem;
  height: 0.1vh;
  border-radius: 15px;
}

.linha {
  background-color: #8B4F24;
  margin-left: 12rem;
  width: 91rem;
  height: 0.1vh;
  border-radius: 15px;
}

.linhaDois {
  background-color: #8B4F24;
  margin-left: 12rem;
  margin-top: 3rem;
  width: 91rem;
  height: 0.1vh;
  border-radius: 15px;
}

.imagensDois {
  display: flex;
  padding-top: 3rem;
  margin-left: 15rem;
}

.imagensDois p {
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: bold;
  font-size: larger;
}

.divididorDepois {
  margin-left: 6rem;
  margin-right: 3rem;
  width: 2px;
  height: 3rem;
  background-color: #8B4F24;
  border-radius: 15px;
}

.bloco {
  display: flex;
  margin-left: 8.8rem;
}

.iconsDois {
  padding-top: 0.3rem;
  padding-left: 0.5rem;
  font-size: 2.5rem;
  color: #441f05
}

.lancamentos {
  padding-top: 4rem;
  margin-left: 12rem;
  font-family: "Merriweather Sans", sans-serif;
  background-color: #F0F0F0;
  width: 91.3rem;
  padding-bottom: 8rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-radius: 15px;
}

.lancamentos h2 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.2rem;
  color: #333;
}

.grid-livros {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-left: 5.5rem;
  padding-top: 3rem;
}

.card-livro {
  background-color: rgb(255, 255, 255);
  padding: 1rem 8.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 23rem;
  height: auto;

}

.card-livro img {
  width: 22rem;
  height: auto;
}



.card-livro h3 {
  font-size: 1.5rem;
  margin: 1rem 0 2rem 0;
  color: #333;
  font-weight: bold;
}

.card-livro p {
  font-size: 1rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
}

.autor {
  color: #555;
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
  cursor: pointer;
  transition: color 0.3s;
  width: 7rem;
}
.icone-favorito-comeco{
  color: #777;
  padding:0 4.7rem;
  font-size: 2.7rem;
  cursor: pointer;
  cursor: pointer;
  transition: color 0.3s;
}

.pe {
  display: flex;
  justify-content: space-between;
}

footer {
  background-color: #3b2311;
  margin-left: 7rem;
  margin-right: 7rem;
  color: #F0F0F0;
}

.esquerdo {
  padding-top: 6rem;
  padding-left: 5rem;
}

.contato {
  font-size: large;
  font-weight: 500;
  padding-top: 6rem;
  padding-left: 5rem;
  padding-right: 5rem;
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
  width: 100rem;
  height: 0.1rem;
  border-radius: 15px;
}

.direitos {
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
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
  height: 0.1vh;
  border-radius: 15px;
}

.cardsgerais {
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  margin-left: 5vw;
  margin-top: 4vh;
}

.cardmesa {
  background-color: rgb(255, 255, 255);
  padding: 2vh 7vw;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cardmesa img {
  width: 15vw;
  height: auto;
}

.cardmesa img.nairobi{
  width: 11vw;
  height: auto;
  padding-top:8vh ;
}
.cardmesa img.mesa3{
  width: 17vw;
  height: auto;
  padding-top:12vh ;
}
.cardmesa img.mesa4{
  width: 17vw;
  height: auto;
  padding:10.5vh 0 7vh 0 ;
}
.cardmesa img.mesa5{
  width: 15.5vw;
  height: auto;
  padding:4vh 0 4vh 0 ;
}
.cardmesa img.mesa6{
  width: 14vw;
  height: auto;
  padding:3vh 0 4vh 0 ;
}

.cardmesa h3 {
  font-size: 1.0vw;
  margin: 4vh 0 2vh 0;
  color: #333;
  font-weight: bold;
}

.cardmesa p {
  font-size: 0.7vw;
  margin: 0 0 2vh 0;
  font-weight: bold;
}
.cardmesa p.preco {
  font-size: 0.9vw;
  font-weight: bold;
}
</style>
