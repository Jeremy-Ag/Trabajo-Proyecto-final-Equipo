
var btnMostrarFormulario = document.getElementById("mostrar-formulario");
var formulario = document.getElementById("formulario");
var btnCerrarFormulario = document.getElementById("cerrar-formulario");

btnMostrarFormulario.onclick = function() {
	formulario.style.display = "block";
}

btnCerrarFormulario.onclick = function() {
	formulario.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == formulario) {
		formulario.style.display = "none";
	}
}