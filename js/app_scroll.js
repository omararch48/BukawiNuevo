let mainUbication = window.scrollY;
const menuNavbar = document.querySelector('.main-nav');


window.onscroll = function() {
    let displacement = window.scrollY;
    if (mainUbication >= displacement) {
        menuNavbar.style.top = '0';
    } else {
        menuNavbar.style.top = '-20rem';
    }
    mainUbication = displacement;
    if (window.scrollY == 0) {
        menuNavbar.style.top = '0';
    } else if (window.scrollY >= 600) {
        menuNavbar.classList.add('active');
    } else if (window.scrollY < 600) {
        menuNavbar.classList.remove('active');
    }
}