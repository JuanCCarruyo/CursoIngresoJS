function mostrar()
{
  /*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
  */

  var tipo;
  let cant=0;
  let precio=0;
  let acumCant=0;
  let acumPrec=0;

  let acumCantarena=0;
  let acumCantcal=0;
  let acumCantcemento=0;

  let acumPrecarena=0;
  let acumPreccal=0;
  let acumPreccemento=0;

  let masCant=0;
  let masCaro=0;

  let descuento=1;
  let desc;

  let RespAB;
  let RespD;
  let RespF;
  
  let x="s";

  while(x =="s" || x == "si"){

    do{
      tipo = prompt("Ingrese el tipo de bolsa: (arena, cal o cemento)").toLowerCase();
    }while (!(tipo == "arena" || tipo == "cal" || tipo == "cemento"));

    do{
      cant = parseInt(prompt("Ingrese la cantidad de bolsas:"));
    }while (isNaN(cant));

    do{
      precio = parseFloat(prompt("Ingrese el precio por bolsa:"));
    }while (precio < 1 || isNaN(precio));

    //todo OK

    precio = precio * cant;

    acumCant = acumCant + cant;
    acumPrec = acumPrec + precio;

    switch(tipo){

      case "arena":
        acumCantarena = acumCantarena + cant;
        acumPrecarena = acumPrecarena + precio;
      break;

      case "cal":
        acumCantcal = acumCantcal + cant;
        acumPreccal = acumPreccal + precio;
      break;

      case "cemento":
        acumCantcemento = acumCantcemento + cant;
        acumPreccemento = acumPreccemento + precio;
      break;

    }

    x = prompt("Desea ingresar otro producto? s/n")
  } //end While


// a) b)
  if (acumCant > 10 && acumCant < 30){
    descuento = 0.15;
    desc = "15%";
  }
  else if (acumCant > 30){
    descuento = 0.25;
    desc = "25%";
  }

  if (!(descuento == 0.15 || descuento == 0.25)){
    RespAB = "El importe total a pagar es de $"+acumPrec+" (sin descuento).";
  }
  else {
    RespAB = "El importe bruto es de $"+acumPrec+" pero con un descuento del "+desc+" te sale en $"+(acumPrec-acumPrec*descuento);
  }

// d)
  if (acumCantarena > acumCantcal && acumCantarena > acumCantcemento){
    masCant = "arena";
  }
  else if (acumCantcal > acumCantarena && acumCantcal > acumCantcemento){
    masCant = "cal";
  }
  else{
    masCant = "cemento";
  }

  RespD = "El tipo con mas cantidad de bolsas es la de "+masCant;

// f)
  if (acumPrecarena > acumPreccal && acumPrecarena > acumPreccemento){
    masCaro = "arena";
  }
  else if (acumPreccal > acumPrecarena && acumPreccal > acumPreccemento){
    masCaro = "cal";
  }
  else{
    masCaro = "cemento";
  }

  RespF = "El tipo de bolsa mas caro es la de "+masCaro;
  

  document.write(RespAB+"<br>");
  document.write(RespD+"<br>");
  document.write(RespF);

}
