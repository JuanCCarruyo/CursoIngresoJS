/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta=0;
var turespuesta=0;
var num1=0;
var num2=0;
var op=0;

function comenzar()
{

	let NumMax = 10;  // generador numero random entre 1 y 10
	let NumMin = 1;

  num1 = Math.round( Math.random() * (NumMax - NumMin) + NumMin);
  console.log(num1);

  num2 = Math.round( Math.random() * (NumMax - NumMin) + NumMin);
  console.log(num2);

  let opNumMax = 4;  // generador numero random entre 1 y 4
  let opNumMin = 1;
  
  op = Math.round( Math.random() * (opNumMax - opNumMin) + opNumMin);
  console.log(op);

  switch(op){
      
    case 1:
        op = "+";
        respuesta = num1+num2;
        break;
    case 2:
        op = "-";
        respuesta = num1-num2;
        break;
    case 3:
        op = "/";
        respuesta = num1/num2;
        break;
    case 4:
        op = "*";
        respuesta = num1*num2;
        break;
  }
  console.log(op);
  console.log(respuesta);

  document.getElementById("txtIdPrimerNumero").value = num1;
  document.getElementById("txtIdOperador").value = op;
  document.getElementById("txtIdSegundoNumero").value = num2;
	

}//FIN DE LA FUNCIÓN

function Responder()
{
    turespuesta = parseInt(document.getElementById("txtIdRespuesta").value);

    if (turespuesta == respuesta){
        alert("Correcto!");
    }
    else {
        alert("Incorrecto.");
    }

}//FIN DE LA FUNCIÓN
