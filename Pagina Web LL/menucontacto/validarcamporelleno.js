function validateForm() {
	
	var x = document.forms["myForm"]["nombre"].value;
	var y = document.forms["myForm"]["emailusuario"].value;
	var z = document.forms["myForm"]["comentario"].value;
	
if (x == "") {
	alert("El campo Nombre debe ser rellenado");
	return false;
  }
if (y == "") {
	alert("El campo e-mail debe ser rellenado");
	return false;
  }
if (z == "") {
	alert("El campo Comentario debe ser rellenado");
	return false;
  }
  }
 