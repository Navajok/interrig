var slideIndex = 1;
showSlides(slideIndex);

document.querySelector('.projectsPrev').onclick = function () {
  plusSlides(-1);
};

document.querySelector('.projectsNext').onclick = function () {
  plusSlides(+1);
};

function plusSlides(x) {
  showSlides(slideIndex += x);
}

function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  var slides = document.getElementsByClassName("projects-slide");

  if (x > slides.length) {
    slideIndex = 1; 
  }
  if (x < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[slideIndex - 1].classList.add('active');
}
