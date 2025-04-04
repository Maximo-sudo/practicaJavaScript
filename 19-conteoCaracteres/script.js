document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres() {
    const MAX_CARACTERES = 20;
    let texto = document.getElementById('texto').value;
    let cant = texto.length;
    let disponible = MAX_CARACTERES - cant;

    document.getElementById('cantidad').textContent = disponible;
    if (disponible <= 0){
        swal.fire('Caracteres agotados');
    }
}