let texto1 = document.getElementById('miTexto');

function verificNum(event) {
    if(event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    };
};

texto1.addEventListener('keydown', verificNum);

texto1.addEventListener('keyup', function(event) {
    console.log('Entrada del usuario: ' + event.target.value);
})

texto1.addEventListener('keypress', function(event) {
    console.log('Caracter ingresado: ' + event.key);
})