function seleccion(){
    let cantidad = 0;
    const checks = ['check1', 'check2', 'check3', 'check4', 'check5'];

    checks.forEach(checkId => {
        if (document.getElementById(checkId).checked) cantidad++;
    });
    
    const mensaje = cantidad === 1 ? 'Conoces: <b>1</b> lenguaje' : `Conoces: <b>${cantidad}</b> lenguajes`;
    Swal.fire({
        html: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}
