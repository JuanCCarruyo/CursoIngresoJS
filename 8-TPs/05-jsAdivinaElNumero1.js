/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto=0; 
var contadorIntentos=0;
var num=0;
var falta=0;
var paso=0;

function comenzar()
{
	let NumMax = 100;  // generador numero random entre 1 y 100
	let NumMin = 1;

  numeroSecreto = Math.round( Math.random() * (NumMax - NumMin) + NumMin);
  console.log(numeroSecreto);

}

function verificar()
{

  num = parseInt(document.getElementById("txtIdNumero").value);

  if (isNaN(num)){
    alert("Ingrese un numero.")
  }

  else if (num !== numeroSecreto){
    contadorIntentos++
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    if (num < numeroSecreto){
      falta = numeroSecreto-num;
      alert("Falta "+falta+" para llegar al numero secreto.");
    }
    else {
      paso = num-numeroSecreto;
      alert("Se pasó "+paso+" del numero secreto.");
    }
  }

  else{
    alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
  }
	
}