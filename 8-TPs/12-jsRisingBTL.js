/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 

			<input type="text" readonly placeholder="Edad validada" id="txtIdEdad">
			<input type="text" readonly placeholder="Sexo validado" id="txtIdSexo">
			<input type="text" readonly placeholder="Estado civil validado" id="txtIdEstadoCivil">
			<input type="text" readonly placeholder="Sueldo bruto validado" id="txtIdSueldo">
			<input type="text" readonly placeholder="Lejago validado" id="txtIdLegajo">
			<input type="text" readonly placeholder="Nacionalida validada" id="txtIdNacionalidad">

*/
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var civil;
	var sueldo=0;
	var legajo=0;
	var nacionalidad;

	do{
		edad = parseInt(prompt("Ingrese su edad: (entre 18 y 90 años)"));
	}while(edad < 18 || edad > 90 || isNaN(edad));

	do{
		sexo = prompt("Ingrese su sexo: (M o F)").toUpperCase();
	}while(!(sexo == "M" || sexo == "F"));

	do{
		civil = parseInt(prompt("Ingrese su estado civil: (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)"));
	}while(civil < 1 || civil > 4 || isNaN(civil));

	do{
		sueldo = parseInt(prompt("Ingrese su sueldo: (no menor a $8000)"));
	}while(sueldo < 8000 || isNaN(sueldo));

	do{
		legajo = parseInt(prompt("Ingrese su número de legajo (numérico de 4 cifras, sin ceros a la izquierda)"));
	}while(legajo < 1000 || legajo > 9999 || isNaN(legajo));

	do{
		nacionalidad = prompt("Ingrese su nacionalidad: (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)").toUpperCase();
	}while(!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N"));


	switch(sexo){
		case "M":
			sexo = "Masculino"
		break;
		
		case "F":
			sexo = "Femenino"
		break;
	}

	switch(civil){
		case 1:
			civil = "Soltero";
		break;

		case 2:
			civil = "Casado";
		break;

		case 3:
			civil = "Divorciado";
		break;
		case 4:
			civil = "Viudo";
		break;
	}

	switch(nacionalidad){
		case "A":
			nacionalidad = "Argentino";
		break;

		case "E":
			nacionalidad = "Extranjero";
		break;

		case "N":
			nacionalidad = "Nacionalizado";
		break;
	}


	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = civil;
	document.getElementById("txtIdSueldo").value = "$"+sueldo;
	document.getElementById("txtIdLegajo").value = legajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;



}
