function mostrar()
{
//	al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
//  validar que sea numero y que sea mayor a 1

	let num;
	let contdiv=0;
	let prim;

	do{

		num = parseInt(prompt("Ingrese un numero mayor a 1"));

	}while(num <= 1 || isNaN(num));


	for (let i=1; i<=num; i++){   	

		if (num%i==0){
			contdiv++;
		}

	}

	if (contdiv > 2){
		prim = "El numero "+num+" NO es primo.";
		
	}
	else {
		prim = "El numero "+num+" es primo.";
		
	}
	
	alert(prim);



}//FIN DE LA FUNCIÓN