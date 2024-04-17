//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const CookieClosed = document.querySelector("#CookieClosed")
const btnReset = document.querySelector("#btnReset")

//frases
let phrases = [
  "Você é mais forte do que imagina.",
  "O sucesso é uma escolha, escolha ser bem-sucedido.",
  "Não desista, a vitória está logo ali.",
  "Você é capaz de alcançar seus sonhos.",
  "Tudo é possível se você acredita.",
  "Se você quer algo, vá atrás dele.",
  "O fracasso é apenas uma oportunidade para recomeçar com mais inteligência.",
  "Não importa o quão lento você vá, desde que não pare.",
  "A determinação é a chave do sucesso.",
  "Não importa o que aconteça, nunca desista dos seus sonhos.",
]


//eventos
CookieClosed.addEventListener('click', openCookie)
btnReset.addEventListener('click', handleResetClick)

// funções
function openCookie(event) {
  event.preventDefault()
  toggleScreen()
  newPhrase()
}

function handleResetClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function newPhrase(){
  let randomIndex = Math.floor(Math.random() * phrases.length);
  let randomPhrase = phrases[randomIndex];
  
  screen2.querySelector("p").innerText = randomPhrase
}