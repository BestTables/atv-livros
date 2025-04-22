<script setup>

</script>

<template>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
    <body>
    <header>
      <div class="container">
        <a href="#">
          <img src="@\assets\LOGO.png" alt="logo">
        </a>
        <span class="divididor"></span>
        <h1>Apreço a <br> mesas</h1>
        <div class="pesquisar">
          <input type="text" v-model="busca" placeholder="  Pesquisar..." class="input">
          <img src="@\assets\lupa.png" alt="lupa" class="lupa">
        </div>
        <div class="coisas">
          <a href="#">Termos</a>
          <a href="#">Equipe</a>
          <a href="#">Envio</a>
          <a href="#">Devoluções</a>
          <div class="img_header">
            <img src="@\assets\Download.png" alt="carrinho">
            <div class="divididorDois"></div>
            <img src="@\assets\Heart.png" alt="coracao">
            <div class="divididorDois"></div>
            <img src="@\assets\Icon.png" alt="icone" class="icon">
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
              Feita em peroba rosa de demolição, essa mesa tem estilo e resistência. O pé de <br> aranha garante firmeza e um visual diferente do comum, com aquele toque retrô <br> que chama atenção sem exagero.
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
          <button class="botao">Acessar pagina de acesso</button>
        </li>
      </ul>
    </div>
    <div class="imagem_sobre"><img
        src="https://dcdn-us.mitiendanube.com/stores/003/118/708/products/f6af9f8750d144fc661558489ac22504-a148db03f22c7600d716885562954946-1024-1024.png"
        alt="icone" class="icon"></div>
        <div class="butao">
        </div>
      </section>
      <div class="linha"></div>
      <div class="segundaParte">
        <div class="imagensDois">
          <img src="@/assets/livro.png" alt="livro">
          <p>Frete grátis para SC</p>
          <img src="@/assets/Star.png" alt="estrela">
          <p>Livros recomendados</p>
          <img src="@/assets/Truck.png" alt="caminhaum">
          <p>Mais vendidos</p>
        </div>
        <div class="linhaDois"></div>
      </div>
    </main>
  </body>
</template>

<style scoped>
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
header {
  font-family: "Oswald";
} 
.container {
  display: flex;
  margin-left: 11.3vw;
  margin-right: 5vw;
  font-size: x-large;
}

.container h1 {
  margin-top: 1.5vh;
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
  margin-top: 1.4vh;
  width: 5px;
  height: 6vh;
  background-color: #8B4F24;
  border-radius: 15px;
}

.pesquisar input {
  border-radius: 15px;
  height: 3.3vh;
  width: 20vw;
  padding-right: 2.5vw;
}
.pesquisar {
  position: relative;
  padding-left: 5vw;
  display: flex;
  align-items: center;
}
.coisas {
  padding-left: 4vw;
  margin-top: 1vh;
  display: flex;
}

.coisas a {
  margin-top: 1.5vh;
  padding-right: 2.7vw;
  text-decoration: none;
  color: #8B4F24;
}

.pesquisar img {
  position: absolute;
  right: 0.5vw;
  top: 3.8vh;
  transform: translateY(-50%);
  width: 1.2vw;
  height: auto;
}
.img_header{
  display: flex;
}
.coisas .img_header img {
  padding-left: 1.5vw;
  margin-top: 1.5vh;
  width: 1.5vw;
  height: 3vh;
}
.divididorDois {
  margin-left: 1vw;
  margin-top: 1.9vh;
  width: 2px;
  height: 2vh;
  background-color: #8B4F24;
  border-radius: 15px;
}
.sobre1 {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 40px;
}
.sobre {
  margin-left: 10vw;
}
.sobre h3 {
  font-weight: bold;
  font-size: xx-large;
  padding:0 0 1.5vw 0 ;
}

.imagem_sobre img{
  width: 30vw;
  margin-right: 10vw ;
}
.medidas{
  padding: 1vw 0 0 0;
  font-size: medium ;
  font-weight: bold;
}
.textosafado {
  font-size: medium;
}
.botao {
  font-size: x-large;
  background-color: #8B4F24;
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
}
.linha{
  background-color: #8B4F24;
  margin-left: 10vw;
  margin-top: 2vh;
  width: 80vw;
  height: 0.1vh;
}
.linhaDois {
  background-color: #8B4F24;
  margin-left: 10vw;
  margin-top: 2vh;
  width: 80vw;
  height: 0.1vh;
}
.imagensDois{
display: flex;
padding-top: 1vh;
margin-left: 30vw;
}
.imagensDois p{
  padding-top: 1.5vh;
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
  font-size: larger;
}
</style>
