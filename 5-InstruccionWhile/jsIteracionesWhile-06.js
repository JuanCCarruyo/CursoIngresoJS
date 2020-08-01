// Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

function mostrar()
{

	let num=0;
	let i=0;
	let promedio=0;

	while(i<5){  //cuenta el 0 entonces son 5 las iteraciones

		num = num + parseInt(prompt("Ingrese un numero: "));
		i = i + 1;

	}

	promedio = num / i;

	document.getElementById("txtIdSuma").value = num;
	document.getElementById("txtIdPromedio").value = promedio;


/* manera sin while

	var contador;
	var acumulador;
	var num;
	let promedio;

	num = parseInt(prompt("Ingrese un numero: "));
	num = num + parseInt(prompt("Ingrese otro numero: "));
	num = num + parseInt(prompt("Ingrese otro numero: "));
	num = num + parseInt(prompt("Ingrese otro numero: "));
	num = num + parseInt(prompt("Ingrese otro numero: "));

	promedio = num / 5;

	document.getElementById("txtIdSuma").value = num;
	document.getElementById("txtIdPromedio").value = promedio;
*/


}//FIN DE LA FUNCIÓN