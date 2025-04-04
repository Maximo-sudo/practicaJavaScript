function abrir() {
    let ventana = open();
    ventana.document.write('Segunda Pagina Web');
}

function ventana() {
    let ventana = open('','','width=400, height=250');
    ventana.document.write('Soy Otra Ventana')
}

function confirmar() {
    let respuesta = confirm('Quieres Salir De La Pagina');
    if (respuesta == true) {
        window.close(); 
    }
}