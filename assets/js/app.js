var api = {
	url:"https://laboratoria.cuadra.co:9339/api/v1/students/"
};

var cargarPagina = function (){
	cargarListaAlumnas();

	// console.log("hola");
};

var cargarListaAlumnas = function () {
	$.getJSON(api.url, function (alumnas) {
		alumnas.forEach(crearItemAlumna);
		// console.log(alumnas);
	});
}

var plantilla = "<li>"+"__nombre_alumna__"+"<input type='checkbox'/>"+"</li>";

var crearItemAlumna = function (alumna) {
	var nombre = alumna.name;
	var lista =$("#lista-alumnas");


	var reemplazarPlantilla = " ";
	reemplazarPlantilla += plantilla.replace("__nombre_alumna__", nombre);

	console.log(reemplazarPlantilla);

	lista.append(reemplazarPlantilla);

};

$(document).ready(cargarPagina);
