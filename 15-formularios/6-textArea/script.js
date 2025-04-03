function comentar() {
    const comentario = document.getElementById('comentarios').value;
    if(comentario.length > 100) {
        Swal.fire('Comentario Muy Largo');
    } else {
        Swal.fire('Gracias');
    }
}