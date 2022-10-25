export const appTestimonials = () => {

    console.log('crotolamo');
    // Elements
    const testimonialsContainer = document.querySelector('.testimonials__container'),
          testimonials = document.querySelectorAll('.testimonial__container');
    let testimonialWidth,
        testimonialsNumber,
        iteration = 1,
        counter,
        deltaTime = 10000;
    
    // Functions
    const getTestimonialsNumber = () => {
        let w = window.innerWidth;
        if (w > 1000) {
            testimonialsNumber = 3;
            return 3;
        } else if (w > 650 && w <= 1000) {
            testimonialsNumber = 2;
            return 2;
        }
        testimonialsNumber = 1;
        return 1;
    };
    
    const renderTestimonials = () => {
        if (getTestimonialsNumber() == 1) {
            for (let i = 0; i < testimonials.length; i++) {
                testimonials[i].style.left = `${i * 100}%`
                testimonials[i].style.width = '100%'
            }
        } else if (getTestimonialsNumber() == 2) {
            for (let i = 0; i < testimonials.length; i++) {
                testimonials[i].style.left = `${i * 50}%`
                testimonials[i].style.width = '50%'
            }
        } else if (getTestimonialsNumber() == 3) {
            for (let i = 0; i < testimonials.length; i++) {
                testimonials[i].style.left = `${i * 33.3333}%`
                testimonials[i].style.width = '33.3333%'
            }
        }
    };
    
    const moveScroll = () => {
        testimonialWidth = testimonials[0].clientWidth;
        testimonialWidth *= iteration;
        testimonialsContainer.style.scrollSnapType = 'none';
        testimonialsContainer.scrollTo({
            top: 0,
            left: testimonialWidth,
            behavior: 'smooth'
        });
        iteration++;
        if (testimonialsNumber == 3) {
            if (iteration == testimonials.length - 2) {
                iteration = 0;
            }
        } else if (testimonialsNumber == 2) {
            if (iteration == testimonials.length - 1) {
                iteration = 0;
            }
        } else if (testimonialsNumber == 1) {
            if (iteration == testimonials.length) {
                iteration = 0;
            }
        }
    };
    
    const startTestimonials = () => {
        renderTestimonials();
        counter = setInterval(moveScroll, deltaTime);
    };
    
    
    // Events
    testimonialsContainer.addEventListener('mouseover', () => {
        clearInterval(counter);
        counter = null;
        testimonialsContainer.style.scrollSnapType = 'x mandatory';
    });
    
    testimonialsContainer.addEventListener('mouseout', () => {
        testimonialsContainer.style.scrollSnapType = 'none';
        counter = setInterval(moveScroll, deltaTime);
    });
    
    addEventListener('resize', () => {
        clearInterval(counter);
        counter = null;
        testimonialsContainer.style.scrollSnapType = 'x mandatory';
        renderTestimonials();
        setTimeout(() => {
            testimonialsContainer.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 1000);
        setTimeout(() => {
            counter = setInterval(moveScroll, deltaTime);
        }, 1000);
    });
    
    
    // Start
    startTestimonials();
};