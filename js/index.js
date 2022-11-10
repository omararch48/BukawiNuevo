// menu
import { appMenu } from './app_menu.js';
// slider
import { appSlider } from './app_slider.js';
// footer
import { appFooter } from './app_footer.js';
// scroll
import { appScroll } from './app_scroll.js';
// testimonials
import { appTestimonials } from './app_testimonials.js';
// product
import { productSlider } from './app_product_slider.js';


const pageName = document.querySelector('main');


appMenu();
appScroll();
appFooter();


if (pageName.id == 'index') {
    appSlider();
    appTestimonials();
} else if (pageName.id == 'testimonials') {
    appSlider();
} else if (pageName.id == 'product') {
    appSlider();
    // productSlider();
}