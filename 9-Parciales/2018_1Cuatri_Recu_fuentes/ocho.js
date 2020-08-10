function mostrar()
{
    /*
    Bienvenidos.
    </br>Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
        a)
            La cantidad de números pares.
        b)
            La cantidad de números impares.
        c)
            La cantidad de ceros.
        d)
            El promedio de todos los números positivos ingresados.
        e)
            La suma de todos los números negativos.
        f)
            El número y la letra del máximo y el mínimo.
 
            
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

    let par=0;     //a) contador
    let impar=0;   //b) contador
    let cero=0;    //c) contador

    let contPos=0; //d)
    let acumPos=0;

    let acumNeg=0; //e)

    let numMax=0;  //f)
    let letraMax="";
    let numMin=0;
    let letraMin="";
    let flagMin=0;
    let flagMax=0;

    while( x == "s" || x == "si"){

        do{
            letra = prompt("Ingrese una letra").toLowerCase();
        }while (!(isNaN(letra)));

        do{
            num = parseFloat(prompt("Ingrese un numero: (entre -100 y 100)"))
        }while ( isNaN(num) || num < -100 || num > 100 );

        // a) b) c)
        if (num == 0){
            cero++;
        }
        else if (num%2 == 0){
            par++;
        }
        else {
            impar++;
        }

        // d) e)
        if (num > 0){
            contPos++;
            acumPos = acumPos + num;
        }
        else {
            acumNeg = acumNeg + num;
        }

        // f)

        if (flagMin == 0 || num < numMin){
            numMin = num;
            letraMin = letra;
            flagMin=1;
        }
        
        if (flagMax == 0 || num > numMax){
            numMax = num;
            letraMax = letra;
            flagMax=1;
        }

        x = prompt("Desea ingresar mas datos? (s/n)").toLowerCase();
    }

    document.write("La cantidad de números pares es: "+par+"<br>"+"<br>"); // a)
    document.write("La cantidad de números impares es: "+impar+"<br>"+"<br>"); // b)
    document.write("La cantidad de ceros es: "+cero+"<br>"+"<br>"); // c)
    document.write("El promedio de todos los números positivos ingresados es: "+(acumPos/contPos)+"<br>"+"<br>"); // d)
    document.write("La suma de todos los números negativos es: "+acumNeg+"<br>"+"<br>"+"<br>"); // e)

    document.write("El número y la letra del máximo es: "+"<br>"+"Número: "+numMax+"<br>"+"Letra: "+letraMax+"<br>"+"<br>"); // f)
    document.write("El número y la letra del mínimo es: "+"<br>"+"Número: "+numMin+"<br>"+"Letra: "+letraMin);


}
