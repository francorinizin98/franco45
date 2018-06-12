function validar(){
var nom = document.pedidos.nombre.value.trim();
var ap = document.pedidos.apellido.value.trim();
var email = document.pedidos.email.value.trim();
var cod = document.pedidos.codigo.value.trim();
var cel = document.pedidos.celular.value.trim();
var patronnya=/^[A-Z][a-z]/;
var patronmail=/^\w+@\w+(\.\w{3})$/;
var patroncelular= /^(([0-9]){3,4})\-([0-9]){7,10}$/;
var patroncodigo= /^([0-9]){4}$/;
if(!nom)
		{
			alert("Complete con nombre. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		if(!patronnya.test(nom)){
			alert("Complete con nombre. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		/*VALIDA EL APELLIDO*/
		if(!ap)
		{
			alert("Complete con apellido. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		if(!patronnya.test(ap)){
			alert("Complete con apellido. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		if(!email)
		{
			alert("Completar con email. Debe ingresar caracteres.Ej: name@example.com");
			return false;
		}
		/*'<!--VALIDA EL MAIL-->'*/
		if(!patronmail.test(email))
		{
			alert("Completar con email. Debe ingresar caracteres.Ej: name@example.com");
			return false
		}
		if(!cod)
		{
			alert("Completar con codigo postal. Debe ingresar caracteres numericos. Ej: 2000,etc.");
			return false;
		}
		if(!patroncodigo.test(cod))
		{
			alert("Completar con codigo postal. Debe ingresar caracteres numericos. Ej: 2000,etc.");
			return false;
		}
		if(!cel)
		{
			alert("Completar con celular. Debe ingresar caracteres numericos [0-9] ");
			return false;
		}
		if(!patroncelular.test(cel))
		{
			alert("Completar con celular. Debe ingresar caracteres numericos [0-9] ");
			return false;
		}
		alert("El pedido a sido enviado correctamente. Tendra su respuesta a la brevedad.");
		return true;
}
function sugerir()
{
	var nom = document.sugerencia.nombre.value.trim();
	var ap = document.sugerencia.apellido.value.trim();
	if(!nom)
		{
			alert("Complete con nombre. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		if(!patronnya.test(nom)){
			alert("Complete con nombre. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		/*VALIDA EL APELLIDO*/
		if(!ap)
		{
			alert("Complete con apellido. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		if(!patronnya.test(ap)){
			alert("Complete con apellido. Debe ingresar caracteres [A-Z][a-z]");
			return false;
		}
		alert("Sugerencia enviada.");
		return true;
}
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}