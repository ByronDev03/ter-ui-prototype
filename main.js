//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links  a');

    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    let x = document.getElementById("nav");
    
    x.classList.remove("responsive");
    x.classList.remove("active");
}

//función que muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");
    
    x.classList.toggle("responsive");
    x.classList.toggle("active");
}

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