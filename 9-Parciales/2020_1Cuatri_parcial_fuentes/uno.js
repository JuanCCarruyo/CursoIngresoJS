
function mostrar()
{

	/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
   el tipo (validar "barbijo" , "jabón" o "alcohol") ,
   el precio (validar entre 100 y 300),
   la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
   la Marca y el fabricante.

   Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
	*/

	let tipo;
	let precio=0;
	let cant=0;
	let marca;
	let fabr;

	let flag=0;
	let precmin=0;
	let cantmin=0;
	let fabrmin="";

	let canttotalalcohol=0;
	let canttotaljabon=0;
	let canttotalbarbijo=0;

	let masunidades=0;

	let a=0;
	let b=0;
	let j=0;

	for (let i=0; i<5; i++){

		do{
			tipo = prompt("Ingresa el tipo de producto");
		}while (!(tipo == "barbijo" || tipo == "jabón" || tipo == "jabon" || tipo == "alcohol"));

		do{
			precio = parseInt(prompt("Ingresa el precio del producto"));
		}while (precio < 100 || precio > 300);

		do{
			cant = parseInt(prompt("Ingresa la cantidad de unidades"));
		}while (cant < 1 || cant > 1000);

		marca = prompt("Ingresa la marca del producto");

		fabr = prompt("Ingresa el fabricante del producto");


		if (tipo == "alcohol"){

			canttotalalcohol = canttotalalcohol + cant;   // canttotalalcohol es un acumulador
			a++;                                          // a es un contador

			if (flag == 0 || precmin > precio){
				precmin = precio;
				cantmin = cant;
				fabrmin = fabr;
				flag=1;
			}

		}

		if (tipo == "jabon" || tipo == "jabón"){
			
			canttotaljabon = canttotaljabon + cant;
			j++;

		}

		if (tipo == "barbijo"){

			canttotalbarbijo = canttotalbarbijo + cant;
			b++;

		}

	} 

	if (canttotalalcohol > canttotalbarbijo && canttotalalcohol > canttotaljabon){
		masunidades = canttotalalcohol;
		mascont = a;
	}
	else if (canttotaljabon > canttotalalcohol && canttotaljabon > canttotalbarbijo){
		masunidades = canttotaljabon;
		mascont = j;
	}
	else {
		masunidades = canttotalbarbijo;
		mascont = b;
	}

	document.write("a) Del más barato de los alcohol, la cantidad de unidades y el fabricante"+"<br>");
	document.write("Es el fabricante "+fabrmin+" con "+cantmin+" unidades."+"<br>"+"<br>");

	document.write("b) Del tipo con mas unidades, el promedio por compra"+"<br>");
	document.write("Es "+(masunidades/mascont)+"<br>"+"<br>");

	document.write("c) Cuántas unidades de jabones hay en total"+"<br>");
	document.write("Hay "+canttotaljabon+" unidades de jabon.");


}
