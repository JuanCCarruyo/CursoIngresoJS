/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

vnombre = document.getElementById("txtIdNombre").value;

//	nombreIngresado=txtIdNombre.value;   esta es una comodidad que ofrece el navegador pero no asegura que funcione siempre, es mejor usar la linea de arriba
	alert(vnombre);

}


