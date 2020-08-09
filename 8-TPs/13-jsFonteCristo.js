/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{

    var num=0;
    var contpar=0;
    var contimpar=0;
    var contdiv=0;
    var contprim=0;


    num = parseInt(document.getElementById("txtIdNumero").value);

    if (num < 1 || isNaN(num)){
        alert("Ingrese un numero positivo.")
    }
    else{

         
    // mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
    // 	for (let i=1; i<=num; i++){ 


	for (let i=num; i>=num; i--){   	

		if (i%2==0){
			alert("El numero "+i+" es par.");
			contpar++;
		}

	}

    






    }


 	
}

function NumerosPares()
{

    alert("Se encontraron "+contpar+" numeros pares.");

}
