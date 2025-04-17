<script setup>

</script>

<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
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

    </main>
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
  margin-left: 14.5vw;
  margin-right: 5vw;
  font-size: x-large;
}

.container h1 {
  margin-top: 0.5vh;
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
  margin-top: 2.5vh;
  height: 3.3vh;
  width: 20vw;
  position: relative;
}

.pesquisar {
  padding-left: 5vw;
}

.coisas {
  padding-left: 4vw;
  margin-top: 2vh;
  display: flex;
}

.coisas a {
  padding-right: 2.7vw;
  text-decoration: none;
  color: #8B4F24;
}

.pesquisar img {
  position: absolute;
  left: 47.7vw;
  top: 4.1vh;
}
.img_header{
  display: flex;
}
.coisas .img_header img {
  padding-left: 1.5vw;
  margin-top: 1vh;
  width: 1.5vw;
  height: 3vh;
}
.divididorDois {
  margin-left: 1vw;
  margin-top: 1.4vh;
  width: 2px;
  height: 2vh;
  background-color: #8B4F24;
  border-radius: 15px;
}
</style>
