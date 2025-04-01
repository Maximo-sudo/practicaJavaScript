function seleccion(){
    let cantidad = 0;
    const checks = ['check1', 'check2', 'check3', 'check4', 'check5'];

    checks.forEach(checkId => {
        if (document.getElementById(checkId).checked) cantidad++;
    });
    
    Swal.fire({
        html: `Conoces: <b>${cantidad}</b> lenguajes`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}
