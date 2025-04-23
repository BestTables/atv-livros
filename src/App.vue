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
        <img src="@\assets\lupa.png" alt="lupa" class="lupa">
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
        <h3>Mesa de Peroba Rosa <br> circular pé de aranha</h3>
        <ul>
          <li>
          </li>
          <li>
            <p class="textosafado">
              Feita em peroba rosa de demolição, essa mesa tem estilo e resistência. O pé de <br> aranha garante firmeza
              e um visual diferente do comum, com aquele toque retrô <br> que chama atenção sem exagero.
              Perfeita pra quem curte madeira de verdade e <br> quer uma peça durável com personalidade.
              Sem firula, só madeira boa e um design <br> que funciona.
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
      <div class="imagem_sobre"><img src="@\assets\mesa.png" alt="icone" class="icon"></div>
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
          <img src="" alt="mesa 1" class="capa-livro" />
          <h3>Nome da mesa</h3>
          <p class="autor">Conceito</p>
          <p class="preco">R$19,90</p>
          <div class="acoes">
            <button class="botao-comprar">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Comprar
            </button>
            <font-awesome-icon :icon="['fas', 'heart']" class="icone-favorito" />
          </div>
        </div>

        <div class="card-livro">
          <img src="" alt="mesa 2" class="capa-livro" />
          <h3>Nome da mesa</h3>
          <p class="autor">Conceito</p>
          <p class="preco">R$19,90</p>
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
</template>

<style scoped>
header {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: bold;
}

main {
  font-family: "Merriweather Sans", sans-serif;
}

.container {
  display: flex;
  margin-left: 11.3vw;
  margin-right: 5vw;
  font-size: x-large;
}

.container h1 {
  margin-top: 2.5vh;
  font-size: x-large;
  color: #441f05;
}

.container a img {
  margin-top: 1vh;
  width: 3vw;
  height: auto;
  border-radius: 15px;
  border: 5px solid #8B4F24;
}

.divididor {
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-top: 1.3vh;
  width: 5px;
  height: 6vh;
  background-color: #8B4F24;
  border-radius: 15px;
}

.pesquisar input {
  border-radius: 15px;
  padding-left: 0.5vw;
  height: 3.3vh;
  width: 20vw;
  padding-right: 2.5vw;
}

.pesquisar {
  position: relative;
  padding-left: 5vw;
  margin-top: 1vh;
  display: flex;
  align-items: center;
}

.coisas {
  padding-left: 5.5vw;
  margin-top: 1.5vh;
  display: flex;
}

.coisas a {
  margin-top: 2vh;
  padding-right: 2.7vw;
  text-decoration: none;
  color: #8B4F24;
}

.pesquisar img {
  position: absolute;
  right: 0.5vw;
  top: 3.4vh;
  transform: translateY(-50%);
  width: 1.2vw;
  height: auto;
}

.img_header {
  display: flex;
  padding-left: 1vw;
}

.icons {
  margin-top: 2vh;
  padding-left: 1vw;
}

.divididorDois {
  margin-left: 1vw;
  margin-top: 1.8vh;
  width: 2px;
  height: 2vh;
  background-color: #8B4F24;
  border-radius: 15px;
}

.sobre1 {
  display: flex;
  align-items: center;
  padding: 40px;
  padding-left: 15vw;
  margin-left: 10vw;
  background-color: #F0F0F0;
  height: 55vh;
  width: 63.4vw;
}

.sobre {
  margin-left: vw;
}

.sobre h3 {
  font-weight: bold;
  font-size: xx-large;
  padding: 0 0 1.5vw 0;
}

.imagem_sobre img {
  margin-top: -10vh;
  width: 30vw;
  margin-right: 10vw;
}

.medidas {
  padding: 1vw 0 0 0;
  font-size: medium;
  font-weight: bold;
}

.textosafado {
  font-weight: 500;
  color: #441f05;
  font-size: medium;
}

.botao {
  font-size: x-large;
  background-color: #8B4F24;
  border: none;
  border-radius: 5px;
  padding: 20px;
  color: white;
  margin: 2.5vw 0 0 0;
}

.linhaAntes {
  background-color: #8B4F24;
  margin-left: 10vw;
  margin-top: 2vh;
  width: 80vw;
  height: 0.1vh;
  border-radius: 15px;
}

.linha {
  background-color: #8B4F24;
  margin-left: 10vw;
  width: 80vw;
  height: 0.1vh;
  border-radius: 15px;
}

.linhaDois {
  background-color: #8B4F24;
  margin-left: 10vw;
  margin-top: 2.5vh;
  width: 80vw;
  height: 0.2vh;
  border-radius: 15px;
}

.imagensDois {
  display: flex;
  padding-top: 3vh;
  margin-left: 15vw;
}

.imagensDois p {
  padding-top: 2vh;
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
  font-size: larger;
}

.divididorDepois {
  margin-left: 5vw;
  margin-right: 3vw;
  width: 2px;
  height: 5vh;
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
}

.lancamentos h2 {
  font-size: 2vw;
  font-weight: bold;
  padding-left: 33vw;
  margin-bottom: 1vw;
  color: #333;
}

.grid-livros {
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  padding-left: 15vw;
  padding-top: 3vh;
}

.card-livro {
  background-color: white;
  padding: 2vh 2vw;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 20vw;
  height: 25vh;
}

.capa-livro {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.card-livro h3 {
  font-size: 2.5vw;
  margin: 1vh 0 0.5vh 0;
  color: #333;
}

.autor {
  font-size: 1.8vw;
  color: #555;
}

.preco {
  font-weight: bold;
  margin-top: 1vh;
  font-size: 2vw;
  color: #333;
}

.acoes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
}

.botao-comprar {
  background-color: #23a455;
  color: white;
  border: none;
  padding: 1vh 2vw;
  border-radius: 6px;
  font-size: 2vw;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5vw;
}

.icone-favorito {
  color: #777;
  font-size: 2vw;
  cursor: pointer;
}
</style>
