function mostrar()
{
    /*
    					Bienvenidos.
        </br>Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
        <br>la temperatura de almacenamiento(entre -30 y 30)  hasta que el
				usuario quiera e informar al terminar el ingreso por document.write:
				<br>a)
				La cantidad de temperaturas pares. /
				<br>b)
				La marca del producto más pesado
				<br>c)
				La cantidad de productos que se conservan a menos de 0 grados. /
				<br>d)
				El promedio del peso de todos los productos. /		
				<br>f)
				El peso máximo y el mínimo.
		
		</h3>
			<br> Testeo con los siguientes valores
				<br>(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
				<br>(m=teem;p = 10; t =0 )
				<br>(m=llut;p = 150(mal), 15(bien); t =-13 )
                <br>(m=fpy;p = 45; t =-12 )
    */


    let x="s";

    let marca="";
    let peso=0;
    let temp=0;

    let par=0;

    let maspeso=0;
    let masmarca="";

    let contcongelados=0;

    let acumpeso=0;
    let contpeso=0;

    let minpeso=0;
    let flag=0;

    while( x == "s" || x == "si"){

        marca = prompt("Ingrese la marca del producto:");

        do{
            peso = parseFloat(prompt("Ingrese el peso del producto:"));
        }while( peso < 1 || peso > 100 || isNaN(peso));

        do{
            temp = parseFloat(prompt("Ingrese la temperatura del producto:"));
        }while( temp < -30 || temp > 30 || isNaN(temp));

        contpeso++;
        acumpeso = acumpeso + peso;

        if (temp%2 == 0){
            par++;
        }

        if (temp < 0){
            contcongelados++;
        }

        if ( peso > maspeso){
            maspeso = peso;
            masmarca = marca;
        }

        if (flag==0 || peso < minpeso){
            minpeso = peso;
            flag = 1;
        }


        x = prompt("Desea ingresar otro producto? (s/n)")

    }

    document.write("La cantidad de temperaturas pares es: "+par+"<br>");
    document.write("La marca del producto más pesado es: "+masmarca+"<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es: "+contcongelados+"<br>");
    document.write("El promedio del peso de todos los productos es: "+(acumpeso/contpeso)+"<br>")
    document.write("El peso máximo es: "+maspeso+"<br>");
    document.write("El peso mínimo es: "+minpeso);
}
