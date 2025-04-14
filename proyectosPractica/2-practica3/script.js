let menuContainer = document.querySelector('.menu-container');
let menuContent = document.getElementById('menuContent');
let menuButton = document.getElementById('menuButton');
let menuItems = document.querySelectorAll('.menu-item');
let hiddenSelect = document.getElementById('menuSelector');




menuContainer.addEventListener('mouseenter', showMenu);
menuContainer.addEventListener('mouseleave', hideMenu);

function showMenu() {
    menuContent.classList.add('visible');
}

function hideMenu() {
    menuContent.classList.remove('visible');
}


