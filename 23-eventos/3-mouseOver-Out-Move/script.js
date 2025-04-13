let menu = document.getElementById('miMenu');
let boton = document.getElementById('miBoton');

// boton.addEventListener('click', function() {
//     menu.style.display = 'block';
// });


boton.addEventListener('mouseover', function() {
    menu.style.display = 'block';
});

boton.addEventListener('mouseout', function() {
    menu.style.display = 'none';
});

document.addEventListener('mousemove', function(event) {
    console.log('Posicion X: '+ event.clientX + ' -Posicion Y: '+ event.clientY);
});