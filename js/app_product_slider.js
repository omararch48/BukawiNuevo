export const productSlider = () => {


    const images = document.querySelectorAll('li.slide img');
    const imageContainer = document.querySelector('.product-image-app');
    const mainImage = document.querySelector('.product-image-app a img');

    images.forEach((image) => {
        image.addEventListener('click', () => {
            mainImage.src = image.src;
            console.log(mainImage.src);
            imageContainer.classList.add('active');
        });
    });


};