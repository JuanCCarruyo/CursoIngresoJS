function mostrar()
{
    /*
    					Bienvenidos (IF).
        </br>Pedir dos números y mostrar el resultado:  
        </br>Si son iguales los muestro concatenados.
        </br>Si el primero es mayor, los resto,
        </br>de lo contrario los sumo.
        </br>Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
        </br>"la suma es xxx y supero el 10".
    */

    let num1=0;
    let num2=0;
    let num3=0;

    num1 = parseFloat(prompt("Ingrese el primer numero"));
    num2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (num1 == num2){
        alert(""+num1+num2);
    }
    else{

        if (num1 > num2){
            alert(num1-num2);
        }
        else {
            num3 = num1+num2;

            if (num3 > 10){
                alert(num3);
                alert("la suma es "+num3+" y supero el 10.");
            }
            else{
                alert(num3);
            }
        }
    }

}
