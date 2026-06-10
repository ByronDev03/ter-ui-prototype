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
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();