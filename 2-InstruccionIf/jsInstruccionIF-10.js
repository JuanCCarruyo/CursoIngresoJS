function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let NumMax = 10;
	let NumMin = 1;
	let Rando;

//	Rando = parseInt(Math.floor(Math.random()*10) + 1);
	Rando = Math.round( Math.random() * (NumMax - NumMin) + NumMin);

	if(Rando >= 9){
		alert("Nota: "+Rando+" EXCELENTE.");
	}
	else if(Rando >= 4){
		alert("Nota: "+Rando+" APROBÓ.");
	}
	else{
		alert("Nota: "+Rando+" Vamos, la proxima se puede.");
	}

}//FIN DE LA FUNCIÓN