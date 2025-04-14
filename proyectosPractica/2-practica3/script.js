let menuContainer = document.querySelector('.menu-container');
let menuContent = document.getElementById('menuContent');
let menuButton = document.getElementById('menuButton');
let menuItems = document.querySelectorAll('.menu-item');
let hiddenSelect = document.getElementById('menuSelector');

let contMenu = document.getElementById('content-groupMenu');
let bloque1 = document.getElementById('bloque1');
let bloque2 = document.getElementById('bloque2');


menuContainer.addEventListener('mouseenter', showMenu);
menuContainer.addEventListener('mouseleave', hideMenu);

function showMenu() {
    menuContent.classList.add('visible');
};

function hideMenu() {
    menuContent.classList.remove('visible');
};

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
        // if (value === '') {
        //     modeMenu(value);
        // }
    });
});

function handleSelection(value) {
    console.log('Selected value: ' + value);
};

// function modeMenu() {
//     console.log('Mode menu activated');
// }

function modeMenu(value) {
    // Oculta todos los elementos
    contMenu.classList.remove('visible');
    bloque1.classList.remove('visible');
    bloque2.classList.remove('visible');

    // Muestra solo el correspondiente
    if (value === '') {
        contMenu.classList.add('visible');
    } else if (value === 'peliculas.json') {
        bloque1.classList.add('visible');
    } else if (value === 'series.json') {
        bloque2.classList.add('visible');
    }
}

// function bloque1(value) {
//     if (value === 'peliculas.json') {
//         bloque1.classList.add('visible');
//     } else {
//         bloque1.classList.remove('visible');
//     }
//     console.log('Modo Peliculas:', value);
// };