let contadorTotal = 0; //Contador
const botonSumar = document.getElementById("sumar"); //En estas variables guardo los elementos por su ID
const botonRestar = document.getElementById("restar");
const botonReiniciar = document.getElementById("reiniciar");
const numeroContador = document.getElementById("contador");
const valorSumar = 5;
const valorRestar = 1;
const mostradorValorRestar = document.getElementById("numeroRestar");
const mostradorValorSumar = document.getElementById("numeroSumar");

//Acá llamo esas variables para darle la instruccion de cuando se les dé click, ejecuten x función
botonSumar.addEventListener("click", sumar);
botonRestar.addEventListener("click", restar);
botonReiniciar.addEventListener("click", reiniciar);

function mostrarContador() {
  numeroContador.textContent = contadorTotal;
}
function mostrarPasos() {
  mostradorValorRestar.textContent = valorRestar;
  mostradorValorSumar.textContent = valorSumar;
}

function sumar() {
  contadorTotal = contadorTotal + valorSumar;
  mostrarContador();
}

function restar() {
  if (contadorTotal < valorRestar) {
    alert(
      "no puedes restar este valor, ya que no se permite resultados en valores negativos",
    );
  } else {
    contadorTotal = contadorTotal - valorRestar;
    mostrarContador();
  }
}

function reiniciar() {
  contadorTotal = 0;
  mostrarContador();
}

function iniciar() {
  mostrarPasos();
}
window.addEventListener("load", iniciar);
