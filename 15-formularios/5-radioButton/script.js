const horario = () => {
    const horarios = {
        mañana: 'De 8am a 12am',
        tarde: 'De 2pm a 6pm',
        noche: 'De 7pm a 12pm',
    };

    const buttom = document.getElementById('confirmarBtn');

    const verificar = () => {
        const seleccionado = document.querySelector('input[name="horario"]:checked');

        if (!seleccionado) {
            Swal.fire('Error', 'No seleccionaste nada', 'error');
            return;
        }

        const turno = seleccionado.value;
        Swal.fire('Perfecto', `Turno ${turno}: ${horarios[turno]}`, 'success')
    };

    buttom.addEventListener('click', verificar);
};
  
document.addEventListener('DOMContentLoaded', horario);