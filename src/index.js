let num = 0;
let numE = 0;
let conteo = 0;
let puntos = 0;
let timer = null;
let timer2 = null;
let timerShow = 4;
let conteo2 = -1;
const mas = "+";
const text8 = "El tiempo es "

document.getElementById("text1").style.display = "none";
document.getElementById("div1").style.display = "none";
document.getElementById("div2").style.display = "none";
document.getElementById("answer").innerHTML = "Correcto +10 puntos";
document.getElementById("answer2").innerHTML = "Incorrecto -5 puntos";

const numAleatorio = () => {
  console.log("Test");
  if(conteo < 10){
    num = (Math.floor(Math.random() * 100));
    numE = (Math.floor(Math.random() * 100));
    document.getElementById("numtest").innerHTML = num;
    document.getElementById("numteste").innerHTML = numE;
    document.getElementById("mas").innerHTML = mas;
    conteo = conteo + 1;
    conteo2 = conteo2 + 1;
  }
  else{
    clearInterval(timer);
  }
  if(conteo == 10){
    conteo2 = conteo2 + 1;
  }
}
const empJuego = () => {
  timer2 = setInterval(showTimer,1000);
  timer = setInterval(numAleatorio,5000);
  document.getElementById("text1").style.display = "block";
  document.getElementById("div1").style.display = "block";
  document.getElementById("div2").style.display = "block";
  document.getElementById("text8").style.display = "block";
  document.getElementById("boton2").style.display = "none";
}
const resultado = () => {
  if(conteo == 10){
    document.getElementById("result").disabled = true
    document.getElementById("boton").disabled = true
  }
  if(document.getElementById("result").value == num + numE){
     puntos = puntos + 10;
  }
  else{
    puntos = puntos - 5;
  }
    document.getElementById("puntos").innerHTML = puntos;
}
const showTimer = () => {
  console.log("Test2");
  if(conteo2 < 11){
    document.getElementById("showTimer").innerHTML = timerShow;
    document.getElementById("text8").innerHTML = text8;
    timerShow = timerShow - 1;
  }
  else{
    clearInterval(timer2)
  }
  if(timerShow == 0){
      timerShow = timerShow + 5;
  }
  if(conteo2 == 11){
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("pFinal").style.display = "none";
    document.getElementById("maintext").innerHTML = "Tu puntaje final es "
  }
}