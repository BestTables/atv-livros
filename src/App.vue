<script setup>

</script>

<template>

  <body>
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
            <img src="@\assets\Heart.png" alt="coracao">
            <img src="@\assets\Icon.png" alt="icone">
          </div>
        </div>
      </div>
    </header>
    <main>

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

body {
  font-family: "Oswald";
}

.container {
  display: flex;
  margin-left: 17vw;
  margin-right: 17vw;
  font-size: x-large;
}

.container h1 {
  margin-top: 0.9vh;
}

.container a img {
  width: 3vw;
  height: auto;
  border-radius: 15px;
  border: 5px solid #8B4F24;
}

.divididor {
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  width: 0.1vw;
  height: 6.3vh;
  background-color: #8B4F24;
}

.pesquisar input {
  border-radius: 15px;
  margin-top: 1vh;
  height: 3.3vh;
  width: 20vw;
  position: relative;
}

.pesquisar {
  padding-left: 100px;
}

.coisas {
  padding-left: 80px;
  margin-top: 1vh;
  display: flex;
}

.coisas a {
  padding-right: 50px;
  text-decoration: none;
  color: #8B4F24;
}

.pesquisar img {
  position: absolute;
  left: 48.5vw;
  top: 2.6vh;
}

.coisas .img_header img {
  padding-left: 1.5vw;
  margin-top: 0.2vh;
}
</style>
