function mostrar()
{
    /*
    					Bienvenidos.
        </br>Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
				 </br>a)
				La cantidad de números pares.
				 </br>b)
				La cantidad de números impares.
				 </br>c)
				La cantidad de ceros.
				 </br>d)
				El promedio de todos los números positivos ingresados.
				 </br>e)
				La suma de todos los números negativos.
				 </br>f)
				El número y la letra del máximo y el mínimo.
				</h3>
				
				<br> Testeo con los siguientes datos
				<br>( d , -150(mal) , -50(bien))
				<br>( z , 0)
				<br>( g , 20)
				<br>( a , 150(mal) , 0(bien))
				<br>( b , 3)
                <br>( k , 7)
    */

    let letra;
    let num=0;
    let x="s";
    let par=0;
    let impar=0;
    let cero=0;

    let acumpos=0;
    let contpos=0;
    let acumneg=0;
    let max=0;
    let Lmax="";
    let Lmin="";
    let min=0;
    let flag=0;

    while( x == "s" || x == "si"){

        letra = prompt("Ingrese una letra");

        do{
            num = parseInt(prompt("Ingrese un número entre -100 y 100"));
        }while (num < -100 || num > 100 || isNaN(num));

        if (num == 0){
            cero++;
        }
        else if (num%2 == 0){
            par++;
        }
        else{
            impar++;
        }

        if (num>0){
            contpos++;
            acumpos = acumpos + num;
        }
        else{
            acumneg = acumneg + num;
        }

        if ( num > max ){
            max = num;
            Lmax = letra;
        }

        if (flag==0 || num < min){
            min = num;
            Lmin = letra;
            flag = 1;
        }

        x = prompt("Quiere ingresar otros datos?")
    }

document.write("La cantidad de números pares es: "+par+"<br>");
document.write("La cantidad de números impares es: "+impar+"<br>");
document.write("La cantidad de ceros es: "+cero+"<br>");
document.write("El promedio de todos los números positivos ingresados es: "+(acumpos/contpos)+"<br>");
document.write("La suma de todos los números negativos es: "+acumneg+"<br>"+"<br>")
document.write("El número y la letra del máximo"+"<br>"+"Letra: "+Lmax+"<br>"+"Número: "+max+"<br>"+"<br>");
document.write("El número y la letra del mínimo"+"<br>"+"Letra: "+Lmin+"<br>"+"Número: "+min+"<br>"+"<br>");


}
