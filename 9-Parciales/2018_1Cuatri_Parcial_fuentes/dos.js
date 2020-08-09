function mostrar()
{
  //	   	<input type="text"  placeholder="nombre" id="elNombre">
  //<input type="text"  placeholder="localidad" id="laLocalidad">

  let nombre;
  let localidad;

  nombre = document.getElementById("elNombre").value;
  localidad = document.getElementById("laLocalidad").value;

  alert("usted es "+nombre+" y vive en la localidad de "+localidad);


}
