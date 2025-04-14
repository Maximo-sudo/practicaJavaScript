// informacionMenu
let menuContainer = document.querySelector('.menu-container');
let menuContent = document.getElementById('menuContent');
let menuButton = document.getElementById('menuButton');
let menuItems = document.querySelectorAll('.menu-item');
let hiddenSelect = document.getElementById('menuSelector');

// codigoDesplegable
let contMenu = document.getElementById('content-groupMenu');
let bloque1 = document.getElementById('bloque1');
let bloque2 = document.getElementById('bloque2');
let jsonData = {};

// eventosMenu
menuContainer.addEventListener('mouseenter', showMenu);
menuContainer.addEventListener('mouseleave', hideMenu);
function showMenu() {
    menuContent.classList.add('visible');
};
function hideMenu() {
    menuContent.classList.remove('visible');
};

// manejoIntems
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        let value = e.target.dataset.value;
        let text = e.target.textContent;

        hiddenSelect.value = value;
        menuButton.textContent = text;

        menuItems.forEach(i => i.classList.remove('selected'));
        e.target.classList.add('selected');

        handleSelection(value);
        modeMenu(value);
    });
});

function handleSelection(value) {
    console.log('Selected value: ', value);
};

function modeMenu(value) {
    contMenu.classList.remove('visible');
    bloque1.classList.remove('visible');
    bloque2.classList.remove('visible');

    if (value === '') {
        contMenu.classList.add('visible');
    } else if (value === 'peliculas.json') {
        bloque1.classList.add('visible');
        chargeFormatMode(value, bloque1);
    } else if (value === 'series.json') {
        bloque2.classList.add('visible');
        chargeFormatMode(value, bloque2);
    } 
    console.log('Mode menu activated with value:', value);
};

function chargeFormatMode(tipo, bloque) {
    if (jsonData[tipo]) {
        bloque.innerHTML = '';

        const titulo = document.createElement('h1');
        titulo.textContent = jsonData[tipo].titulo;

        // heDeDarleFuncionalidadAlCrearLosOtrosJson
        const content = document.createElement('p');
        content.textContent = jsonData[tipo].content;

        bloque.style.background = jsonData[tipo].fondo;
        bloque.style.color = jsonData[tipo].colorTexto;
        bloque.style.width = jsonData[tipo].ancho;
        bloque.style.height = jsonData[tipo].alto;
        bloque.style.boxShadow = jsonData[tipo].sombra;
        bloque.style.padding = jsonData[tipo].padding;
        bloque.style.margin = jsonData[tipo].margin;
        bloque.style.borderRadius = jsonData[tipo].radiusBorder;

        bloque.appendChild(titulo);
        bloque.appendChild(content);
    } else { 
        console.warn('Datos No Encontrados Para: ', tipo);
    }
}


function loadFormatMode() {
    fetch('json/formato.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            console.log('Datos cargados: ', jsonData);
        })
        .catch(error => {
            console.log('Error cargando formato: ', error);
        });
};

window.onload = () => {
    loadFormatMode();
}