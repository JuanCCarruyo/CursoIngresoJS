function mostrar()
{

    let letra;
    let num=0;
    let x="s";

    let par=0;       //a)
    let impar=0;     //b)
    let cero=0;      //c)

    let contPos=0;   //d)
    let acumPos=0;
    
    let acumNeg=0;   //e)

    let numMax=0;    //f)
    let letraMax="";
    let flagMax=0;

    let numMin=0;
    let letraMin="";
    let flagMin=0;

    do{

        letra = prompt("Ingrese una letra").toLowerCase();

        do{

            num = parseFloat(prompt("Ingrese un numero entre -100 y 100:"));

        }while(isNaN(num) || num < -100 || num > 100);

        if (num == 0){
            cero++;
        }
        else if (num%2 == 0){
            par++;
        }
        else {
            impar++;
        }

        if (num > 0){
            contPos++;
            acumPos = acumPos + num;
        }
        else {
            acumNeg = acumNeg + num; 
        }

        if (flagMax==0 || num > numMax){
            numMax = num;
            letraMax = letra;
            flagMax=1;
        }

        if (flagMin==0 || num < numMin){
            numMin = num;
            letraMin = letra;
            flagMin=1;
        }

        x = prompt("Desea ingresar mas datos? (s/n)").toLowerCase();
    }while(x == "s" || x == "si");

    document.write("a) La cantidad de números pares es "+par+"<br>"+"<br>");
    document.write("b) La cantidad de números impares es "+impar+"<br>"+"<br>");
    document.write("c) La cantidad de ceros es "+cero+"<br>"+"<br>");
    document.write("d) El promedio de todos los números positivos ingresados es "+(acumPos/contPos)+"<br>"+"<br>");
    document.write("e) La suma de todos los números negativos es "+acumNeg+"<br>"+"<br>");
    document.write("f) El número y la letra del máximo"+"<br>"+"  Letra: "+letraMax+"<br>"+"  Número: "+numMax+"<br>"+"<br>");
    document.write("   El número y la letra del mínimo"+"<br>"+"  Letra: "+letraMin+"<br>"+"  Número: "+numMin+"<br>"+"<br>");

}
