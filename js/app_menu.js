export const appMenu = () => {
    const menuBars = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close');
    const menuMobile = document.querySelector('.mobile-nav');
    const menuMobileInner = document.querySelector('.mobile-nav__menu');
    let outMenu = true;
    
    
    menuBars.addEventListener('click', () => {
        menuMobile.classList.add('active');
    });
    
    menuClose.addEventListener('click', () => {
        menuMobile.classList.remove('active');
    });
    
    menuMobileInner.addEventListener('mouseout', () => {
        outMenu = true;
    });
    
    menuMobileInner.addEventListener('mouseover', () => {
        outMenu = false;
    });
    
    menuMobile.addEventListener('click', () => {
        if (outMenu) {
            menuMobile.classList.remove('active');
        }
    });
};
