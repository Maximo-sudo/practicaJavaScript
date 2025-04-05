function f_focus() {
    document.getElementById('nombre').value = "";
    document.getElementById('nombre').style.background = 'none';
}

function f_blur() {
    if (document.getElementById('nombre').value == '') {
        document.getElementById('nombre').style.background = 'red';
        alert('Debe De Introducir Los Datos')
    }
}
