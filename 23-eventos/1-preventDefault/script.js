let boton1 = document.querySelector(".tipo-1")
let boton2 = document.querySelector(".tipo-2");
let boton3 = document.querySelector(".tipo-3");
let boton4 = document.querySelector(".tipo-4");
let enlace1 = document.querySelector(".link");

function mostrarMensaje1(event1) {
    alert('Target: ' + event1.target.className);
    alert('Current Target: ' + event1.currentTarget.className);
    alert('Parent Node: ' + event1.currentTarget.parentNode.className);
}

function mostrarMensaje2(event2) {
    alert('Target: ' + event2.target.className);
    alert('Current Target: ' + event2.currentTarget.className);
    alert('Parent Node: ' + event2.currentTarget.parentNode.className);
}
function mostrarMensaje3(event3) {
    alert('Target: ' + event3.target.className);
    alert('Current Target: ' + event3.currentTarget.className);
    alert('Parent Node: ' + event3.currentTarget.parentNode.className);
}
function mostrarMensaje4(event4) {
    alert('Target: ' + event4.target.className);
    alert('Current Target: ' + event4.currentTarget.className);
    alert('Parent Node: ' + event4.currentTarget.parentNode.className);
}

boton1.addEventListener('click', mostrarMensaje1);
boton2.addEventListener('click', mostrarMensaje2);
boton3.addEventListener('click', mostrarMensaje3);
boton4.addEventListener('click', mostrarMensaje4);


function bloqueoEnlace(event) {
    event.preventDefault();
    alert('Enlace bloqueado!');
}

enlace1.addEventListener('click', bloqueoEnlace);


