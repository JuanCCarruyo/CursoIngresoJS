function mostrar()
{
	/*
	Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
    */

	let nombre;
	let edad=0;
	let sexo;
	let civil;
	let temp=0;
	let x="s";

	let masTemp=0;
	let flag=0;
	let masNom;

	let contMSolteroViudo=0;
	let contMayorViudo=0;
	let contMayorTemp=0;
	let contMSoltero=0;
	let acumEdadMSoltero=0;

	while( x == "s"|| x == "si"){


		nombre = prompt("Ingrese su nombre.");

		edad = parseInt(prompt("Ingrese su edad."));

		do{
			sexo = prompt("Ingrese su sexo. (F/M)").toUpperCase();
		}while(!(sexo == "F" || sexo == "M"));

		do{
			civil = prompt("Ingrese si estado civil. (soltero, casado o viudo)").toLowerCase();
		}while(!(civil == "soltero" || civil == "casado" || civil == "viudo"));
		
		temp = parseFloat(prompt("Ingrese su temperatura corporal."));

		//a)
		if (flag == 0 || temp > masTemp){
			masTemp = temp;
			masNom = nombre;
			flag = 1;
		}


		//c)
		switch(civil){

			case "soltero":
			case "viudo":
				if (sexo == "M"){
					contMSolteroViudo++;
				}
			break;
		}

		//b) d)
		if (edad >= 60){
			if (civil == "viudo"){
				contMayorViudo++;
			}
			if (temp >= 38){
				contMayorTemp++;
			}
		}

		if (sexo == "M" && civil == "soltero"){
			acumEdadMSoltero = acumEdadMSoltero + edad;
			contMSoltero++;
		}




		x = prompt("Va a ingresar otra persona? (s/n)").toLowerCase();
	}


	document.write("La persona con mayor temperatura es "+masNom+" con una temperatura de "+masTemp+"<br>"); //a)
	document.write("Hay "+contMayorViudo+" mayores de edad viudos."+"<br>"); //b)
	document.write("Hay "+contMSolteroViudo+" hombres solteros y viudos."+"<br>"); //c)
	document.write("Hay "+contMayorTemp+" mayores de edad que tienen mas de 38 de temperatura"+"<br>"); //d)
	document.write("El promedio de edad entre los hombres solteros es de "+(acumEdadMSoltero/contMSoltero)+" años"); //e)

	


}
