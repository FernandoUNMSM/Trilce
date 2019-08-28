var blanco = document.getElementById('blanco');
var naranja = document.getElementById('naranja');
naranja.addEventListener('mouseover', opacidad);
naranja.addEventListener('mouseout', fueraopacidad);
function opacidad() {
	blanco.classList.toggle('blanco-on');
}
function fueraopacidad() {
	blanco.classList.toggle('blanco-on')
}