let control = 0;
let contra = '7654321aA';
let intentos = 0;

function verificar() {
    let clave = document.getElementById('clave').value;
    
    if (clave != contra){
        intentos ++;
        alert('Clave Incorrecta. Numero Intentos: ' + intentos);

        if (intentos >= 3){
            alert('Superaste Los 3 Intentos');
            document.getElementById('clave').disabled = true;
            document.write('hola');
        }
    } else {
        window.open("http://www.google.com");
    }   
}
