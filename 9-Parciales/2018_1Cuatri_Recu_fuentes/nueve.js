function mostrar()
{
    /*
    Bienvenidos.
    >Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000  y 
    la temperatura del hábitat (entre -30 y 30)  hasta que el
            usuario quiera e informar al terminar el ingreso por document.write:
        a)
            La cantidad de temperaturas pares.
        b)
            El nombre y temperatura del animal más pesado
        c)
            La cantidad de animales que viven a menos de 0 grados.
        d)
            El promedio del peso de todos los animales.				
        f)
            El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
    
    
    </h3>
        <br> Testeo con los siguientes valores
            <br>(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
            <br>(m=teem;p = 10; t =0 )
            <br>(m=llut;p = -150(mal), 15(bien); t =-13 )
            <br>(m=fpy;p = 45; t =-12 )
    */


    let nombre="";
    let peso=0;
    let temp=0;
    let x="s";

    let tempPar=0; //a) contador

    let pesoMax=0;
    let flagPMax=0;

    let nombreMasPesado=""; //b)
    let tempMasPesado=0;

    let contAnimSubcero=0; // c) contador

    let contAnim=0;
    let acumPeso=0;

    let pesoMaxcero=0;
    let flagPMaxcero=0;
    let pesoMincero=0;
    let flagPMincero=0;


    do{

        nombre = prompt("Ingrese el nombre del animal");

        do{

            peso = parseFloat(prompt("Ingrese el peso del animal: (entre 1 y 1000)"));

        }while( isNaN(peso) || peso < 1 || peso > 1000 );

        do{

            temp = parseFloat(prompt("Ingrese la temperatura del hábitat: (entre -30 y 30)"));

        }while ( isNaN(temp) || temp < -30 || temp > 30 );

        contAnim++;
        acumPeso = acumPeso + peso; // d)

        if (temp%2 == 0){

            tempPar++; // a)

        }

        if ( flagPMax == 0 || peso > pesoMax){

            pesoMax = peso;
            nombreMasPesado = nombre;
            tempMasPesado = temp;
            flagPMax = 1;
        }

        if ( temp < 0 ){

            contAnimSubcero++; // c)

            if ( flagPMaxcero == 0 || peso > pesoMaxcero){ // f)
                pesoMaxcero = peso;
                flagPMaxcero = 1;
            } 

            if (flagPMincero == 0 || peso < pesoMincero){
                pesoMincero = peso;
                flagPMincero = 1;
            }

        }

        x = prompt("Desea ingresar otro animal? (s/n)").toLowerCase();

    }while ( x == "s" || x == "si" );

    document.write("La cantidad de temperaturas pares es: "+tempPar+"<br>"+"<br>"); //a)
    document.write("El nombre del animal más pesado es "+nombreMasPesado+" y la temperatura de su habitat es de "+tempMasPesado+"<br>"+"<br>"); //b)
    document.write("La cantidad de animales que viven a menos de 0 grados es: "+contAnimSubcero+"<br>"+"<br>"); //c)
    document.write("El promedio del peso de todos los animales es de "+(acumPeso/contAnim)+"<br>"+"<br>"); //d)
    document.write("El peso máximo de todos los animales cuyas temperaturas sean bajo cero es de "+pesoMaxcero+"<br>"+"<br>"); //f)
    document.write("El peso mínimo de todos los animales cuyas temperaturas sean bajo cero es de "+pesoMincero+"<br>"+"<br>"); //f)

}
