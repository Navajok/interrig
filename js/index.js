document.addEventListener("DOMContentLoaded", function () {

  let slideIndex = 1;
  showSlides(slideIndex);

  document.querySelector('.prev').onclick = function () {
    plusSlides(-1);
  };

  document.querySelector('.next').onclick = function () {
    plusSlides(1);
  };

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
  }

});