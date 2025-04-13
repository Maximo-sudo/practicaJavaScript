let socket = new WebSocket('ws://localhost:8080');
let mensajeInput = document.getElementById('mensajeIngresado');
let boton = document.getElementById('enviarMensaje');

function mostrarMensaje(content) {
    let contMensajes = document.getElementById('contenedorMensajes');
    let elementMensaje = document.createElement('div');
    elementMensaje.innerText = content;
    contMensajes.appendChild(elementMensaje);
};

boton.onclick = function() {
    const mensaje = mensajeInput.value;
    mostrarMensaje(mensaje);
    socket.send(mensaje);
};

socket.onmessage = function(event) {
    let mensaje = event.data;
    mostrarMensaje(mensaje);
};