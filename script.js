let toggleMenu = () => {
    let navigation = document.querySelector('.navigation');

    let burgerMenu = document.querySelector('.menu_icon');
    let src = burgerMenu.getAttribute('src');

    let isBurger = src === 'images/burger-menu.svg';
    let iconName = isBurger ? 'images/close.svg' : 'images/burger-menu.svg';

    burgerMenu.setAttribute('src', iconName);

    if (!isBurger) {
        navigation.classList.toggle('navigation_mobile');
    }
    else 
        navigation.classList.toggle('navigation_mobile');
};

let sub_menu = () => {
    let work_up = document.querySelector('.first_li');
    work_up.classList.toggle('clicked');
}