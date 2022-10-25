export const appFooter = () => {
    const footerLinks = document.querySelectorAll('.footer__social-list li'),
        footerMessages = document.querySelectorAll('.footer__social-text');
    
    footerLinks.forEach(function(element, index) {
        element.addEventListener('mouseover', () => {
            footerMessages[0].classList.remove('footer-active');
            footerMessages[index + 1].classList.add('footer-active');
        });
    });
    
    footerLinks.forEach(function(element, index) {
        element.addEventListener('mouseout', () => {
            console.log('salir');
            for (let i = 1; i < footerMessages.length; i++) {
                footerMessages[i].classList.remove('footer-active');
            }
            footerMessages[0].classList.add('footer-active');
        });
    });
};