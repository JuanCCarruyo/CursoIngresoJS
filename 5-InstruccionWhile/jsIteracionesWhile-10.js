/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num=0;
	let i=0;
	let x="si";
	let cero=0;
	let positivo=0;
	let cantpos=0;
	let cantneg=0;
	let negativo=0;
	let cantpar=0;

	while(x == "si" || x == "s"){

		num = parseInt(prompt("Ingrese un numero: "));
		i = i + 1;
		
		if (num == 0){
			cero =  cero + 1
		}
		else if (num>0){
			positivo = positivo + num;
			cantpos = cantpos + 1;
			if (num%2 == 0){
				cantpar = cantpar + 1;
			}
		}
		else{
			negativo = negativo + num;
			cantneg = cantneg + 1
			if (num%2 == 0){
				cantpar = cantpar + 1;
			}
		}
		x = prompt("Quieres introducir otro numero?").toLowerCase();

	}

	document.write("1- la suma de negativos es :"+negativo+"<br>");
	document.write("2- la suma de positivos es :"+positivo+"<br>");
	document.write("3- la cantidad de positivos es :"+cantpos+"<br>");
	document.write("4- la cantidad de negativos es :"+cantneg+"<br>");
	document.write("5- la cantidad de ceros es :"+cero+"<br>");
	document.write("6- la cantidad de numeros par es :"+cantpar+"<br>");
	document.write("7- el promedio de positivos es :"+(positivo/cantpos)+"<br>");
	document.write("8- el promedio de negativos es :"+(negativo/cantneg)+"<br>");
	document.write("9- la diferencia entre positivos y negativos es :"+(positivo-negativo)+"<br>");

	/*


	NO UTILIZAR ARRAYS EN PARCIAL

	let num=0;
	let i=0;
	let x="si";
	let list = [];
	let listpos = [];
	let listneg = [];
	let listcero = [];
	let listparpos = [];
	let listparneg = [];
	let listpar = [];
	let positivo=0;
	let negativo=0;

	while(x == "si" || x == "s"){ 

		num = parseInt(prompt("Ingrese un numero: "));
		list.push(num);
		i = i + 1;
		if (num == 0){
			listcero.push(num); 
		}
		else if (num>0){
			positivo = positivo + num;
			listpos.push(num);
			if (num%2 == 0){
				listparpos.push(num);
			}
		}
		else{
			negativo = negativo + num;
			listneg.push(num);
			if (num%2 == 0){
				listparneg.push(num);
			}
		}
		x = prompt("Quieres introducir otro numero?").toLowerCase();

	}



	listpar = listparpos.concat(...listparneg); //debe tener ... el comando por alguna razon


	document.write("listpos es :"+listpos+"<br>");
	document.write("listneg es :"+listneg+"<br>");
	document.write("listcero es :"+listcero+"<br>");
	document.write("listpar es :"+listpar+"<br>"+"<br>"+"<br>");

	document.write("La lista de numeros es :"+list+"<br>"+"<br>");
	
	document.write("1- la suma de negativos es :"+negativo+"<br>");
	document.write("2- la suma de positivos es :"+positivo+"<br>");
	document.write("3- la cantidad de positivos es :"+listpos.length+"<br>");
	document.write("4- la cantidad de negativos es :"+listneg.length+"<br>");
	document.write("5- la cantidad de ceros es :"+listcero.length+"<br>");
	document.write("6- la cantidad de numeros par es :"+listpar.length+"<br>");
	document.write("7- el promedio de positivos es :"+"<br>");
	document.write("8- el promedio de negativos es :"+"<br>");
	document.write("9- la diferencia entre positivos y negativos es :"+(positivo-negativo)+"<br>");

*/

}//FIN DE LA FUNCIÓN