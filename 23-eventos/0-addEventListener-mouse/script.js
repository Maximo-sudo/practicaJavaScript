let boton1 = document.querySelector(".tipo-1")
let boton2 = document.querySelector(".tipo-2");
let boton3 = document.querySelector(".tipo-3");
let boton4 = document.querySelector(".tipo-4");
// FUNCIONES ADD_EVENT_LISTENER
/*
function muestraMensaje1() {
    alert('Boton 1 presionado!');
}
function muestraMensaje2() {
    alert('Boton 2 presionado!');
}
function muestraMensaje3() {
    alert('Boton 3 presionado!');
}
function muestraMensaje4() {
    alert('Boton 4 presionado!');
}
boton1.addEventListener('click', muestraMensaje1);
boton2.addEventListener('click', muestraMensaje2);
boton3.addEventListener('click', muestraMensaje3);
boton4.addEventListener('click', muestraMensaje4);
*/

/*
boton1.addEventListener('click', function() {
    alert('Botón 1 presionado!');
});

boton2.addEventListener('click', function() {
    alert('Botón 2 presionado!');
});

boton3.addEventListener('click', function() {
    alert('Botón 3 presionado!');
});

boton4.addEventListener('click', function() {
    alert('Botón 4 presionado!');
});
*/

// FUNCIONES MOUSEOVER Y MOUSEOUT

boton1.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = "green";
});
boton1.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = "white";
});

boton2.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = "blue";
});
boton2.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = "white";
});

boton3.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = "brown";
});
boton3.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = "white";
});

boton4.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = "orange";
});
boton4.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = "white";
});