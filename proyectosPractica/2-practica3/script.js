let menuContainer = document.querySelector('.menu-container');
let menuContent = document.getElementById('menuContent');
let menuButton = document.getElementById('menuButton');
let menuItems = document.querySelectorAll('.menu-item');
let hiddenSelect = document.getElementById('menuSelector');




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
    if (value === '') {
        contMenu.classList.add('visible');
    } else {
        contMenu.classList.remove('visible');
    }
    console.log('Mode menu activated with value:', value);
}