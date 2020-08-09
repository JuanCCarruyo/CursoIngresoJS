/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto=0; 
var contadorIntentos=0;
var num=0;

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
    contadorIntentos++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
  }

  else{
	switch(contadorIntentos){
		case 0:
			alert("usted es un Psíquico"); //primer intento
			contadorIntentos++;
			document.getElementById("txtIdIntentos").value = contadorIntentos;
			break;
		case 1:
			alert("excelente percepción"); //segundo intento
			contadorIntentos++;
			document.getElementById("txtIdIntentos").value = contadorIntentos;
			break;
		case 2:
			alert("Esto es suerte");
			contadorIntentos++;
			document.getElementById("txtIdIntentos").value = contadorIntentos;
			break;
		case 3:
			alert("Excelente técnica");
			contadorIntentos++;
			document.getElementById("txtIdIntentos").value = contadorIntentos;
			break;
		case 4:
			alert("usted está en la media"); //quinto intento
			contadorIntentos++;
			document.getElementById("txtIdIntentos").value = contadorIntentos;
			break;
	}

	if (contadorIntentos >= 5 && contadorIntentos < 10){ //desde  6 Intentos hasta 10
		alert("falta técnica");
		contadorIntentos++;
		document.getElementById("txtIdIntentos").value = contadorIntentos;
	}
	else if (contadorIntentos >= 10){ //mas de 10 intentos
		alert("afortunado en el amor!!");
		contadorIntentos++;
		document.getElementById("txtIdIntentos").value = contadorIntentos;
	}
  }
	
}