function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	let NumMax = 10;
	let NumMin = 1;
	let Rando;

//	Rando = Math.floor(Math.random()*10) + 1;
	Rando = Math.round( Math.random() * (NumMax - NumMin) + NumMin);
	
	alert(Rando);	

}//FIN DE LA FUNCIÓN