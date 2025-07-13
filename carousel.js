document.addEventListener("DOMContentLoaded", function () {
  const testimonialCarousel = document.querySelector('#testimonialCarousel');
  if (testimonialCarousel) {
    new bootstrap.Carousel(testimonialCarousel, {
      interval: 3000,
      pause: 'hover'
    });
  }
});
