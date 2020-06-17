var num = 0;
var numE = 0;
var conteo = 0;
var puntos = 0;
var timer = null;
var timer2 = null;
var timerShow = 4;
var conteo2 = -1;
var mas = "+";
var text8 = "El tiempo es "

function numAleatorio(){
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

function empJuego(){
  timer2 = setInterval(showTimer,1000);
  timer = setInterval(numAleatorio,5000);
  document.getElementById("text1").style.display = "block";
  document.getElementById("text2").style.display = "block";
  document.getElementById("text3").style.display = "block";
  document.getElementById("answer").style.display = "block";
  document.getElementById("answer2").style.display = "block";
  document.getElementById("boton").style.display = "block";
  document.getElementById("result").style.display = "block";
  document.getElementById("text8").style.display = "block";
  document.getElementById("boton2").style.display = "none";
}
document.getElementById("text1").style.display = "none";
document.getElementById("text2").style.display = "none";
document.getElementById("text3").style.display = "none";
document.getElementById("answer").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("boton").style.display = "none";
document.getElementById("result").style.display = "none";

function resultado(){
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

document.getElementById("answer").innerHTML = "Correcto +10 puntos";
document.getElementById("answer2").innerHTML = "Incorrecto -5 puntos";

function showTimer(){
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
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("boton").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("numtest").style.display = "none";
    document.getElementById("numteste").style.display = "none";
    document.getElementById("mas").style.display = "none";
    document.getElementById("pFinal").style.display = "none";
    document.getElementById("maintext").innerHTML = "Tu puntaje final es "
    document.getElementById("text8").style.display = "none";
    document.getElementById("showTimer").style.display = "none";
  }
}
