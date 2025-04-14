const menuContainer = document.querySelector('.menu-container');
const menuContent = document.getElementById('menuContent');

menuContainer.addEventListener('mouseenter', showMenu);
menuContainer.addEventListener('mouseleave', hideMenu);

function showMenu() {
    menuContent.classList.add('visible');
}

function hideMenu() {
    menuContent.classList.remove('visible');
}