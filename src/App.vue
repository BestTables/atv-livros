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
            <font-awesome-icon :icon="['fas', 'heart']" class="icone-favorito" />
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
            <font-awesome-icon :icon="['fas', 'heart']" class="icone-favorito" />
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
  padding-left: 0.5vw;
  height: 3.3vh;
  width: 20rem;
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
  margin-left: 5.5vw;
}

.iconsDois {
  padding-top: 0.5vh;
  padding-left: 3vw;
  font-size: 2vw;
  color: #441f05
}

.lancamentos {
  padding-top: 5vh;
  margin-left: 10vw;
  font-family: "Merriweather Sans", sans-serif;
  background-color: #F0F0F0;
  width: 80vw;
  padding-bottom: 15vh;
  margin-bottom: 5vh;
  margin-top: 5vh;
  border-radius: 15px;
}

.lancamentos h2 {
  font-size: 2vw;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5vw;
  color: #333;
}

.grid-livros {
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  padding-left: 5vw;
  padding-top: 3vh;
}

.card-livro {
  background-color: rgb(255, 255, 255);
  padding: 2vh 7vw;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 20vw;
  height: auto;

}

.card-livro img {
  width: 20vw;
  height: auto;
}

.capa-livro {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-livro h3 {
  font-size: 1.5vw;
  margin: 4vh 0 2vh 0;
  color: #333;
  font-weight: bold;
}

.card-livro p {
  font-size: 1vw;
  margin: 0 0 2vh 0;
  font-weight: bold;
}

.autor {
  font-size: 1.8vw;
  color: #555;
}

.preco {
  font-weight: bold;
  margin-top: 1vh;
  font-size: 3vw;
  color: #333;
}

.acoes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
}

.botao-comprar {
  background-color: #8B4F24;
  color: white;
  border: none;
  padding: 1vh 2vw;
  border-radius: 6px;
  font-size: 1.5vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2vw;
  margin: 0.5vw;
}

.icone-favorito {
  color: #777;
  font-size: 2vw;
  cursor: pointer;
}

.pe {
  display: flex;
  justify-content: space-between;
}

footer {
  background-color: #3b2311;
  margin-left: 7vw;
  margin-right: 7vw;
  color: #F0F0F0;
}

.esquerdo {
  padding-top: 10vh;
  padding-left: 5vw;
}

.contato {
  font-size: large;
  font-weight: 500;
  padding-top: 10vh;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 5vh;
}

.contato p {
  padding-top: 1vh;
}

.esquerdo h4 {
  font-weight: bold;
  font-size: large;
  padding-left: 0.5vw;
}

.esquerdo p a {
  color: #F0F0F0;
  padding-left: 0.5vw;
}

.esquerdo p {
  padding-top: 1vh;
}

.cartoes {
  padding-top: 5vh;
  padding-right: 0.5vw;
  color: #F0F0F0;
}

.linhaDiferente {
  background-color: #F0F0F0;
  width: 100vw;
  height: 0.1vh;
  border-radius: 15px;
}

.direitos {
  text-align: center;
  padding-top: 3vh;
  padding-bottom: 3vh;
}
</style>
