function responsiveMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("responsive");
}

function seleccionar(link){
  document.querySelectorAll("#links a").forEach(a=>{
    a.classList.remove("seleccionado");
  });

  link.classList.add("seleccionado");

  document.getElementById("nav")
    .classList.remove("responsive");
}




const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const button = item.querySelector('.faq-question');
  const icon = button.querySelector('i');

  button.addEventListener('click', () => {

    faqItems.forEach(faq => {

      if(faq !== item){
        faq.classList.remove('active');

        faq.querySelector('i')
          .className = 'bi bi-plus-lg';
      }

    });

    item.classList.toggle('active');

    icon.className = item.classList.contains('active')
      ? 'bi bi-dash-lg'
      : 'bi bi-plus-lg';

  });

});




const footerAccordions =
document.querySelectorAll(".footer-accordion");

footerAccordions.forEach(item => {

  const button =
  item.querySelector(".footer-toggle");

  button.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});




const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();




const track = document.querySelector('.mobile-track');
const cards = document.querySelectorAll('.mobile-card');
const mobileDots = document.querySelectorAll('.carousel-dots span');

if(track && cards.length && mobileDots.length){

  track.addEventListener('scroll', () => {

    const cardWidth =
      cards[0].offsetWidth +
      parseInt(getComputedStyle(track).gap);

    const index =
      Math.round(track.scrollLeft / cardWidth);

    mobileDots.forEach(dot =>
      dot.classList.remove('active')
    );

    if(mobileDots[index]){
      mobileDots[index].classList.add('active');
    }

  });

}




const slides =
document.querySelectorAll('.hero-slide');

const heroDots =
document.querySelectorAll('.hero-dots span');

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide =>
        slide.classList.remove('active')
    );

    heroDots.forEach(dot =>
        dot.classList.remove('active')
    );

    slides[index]
        .classList.add('active');

    heroDots[index]
        .classList.add('active');
}

if (slides.length && heroDots.length) {
  showSlide(0);

  setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);

  }, 4500);

}