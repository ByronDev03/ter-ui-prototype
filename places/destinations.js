function responsiveMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("responsive");
}




const footerAccordions =
document.querySelectorAll(".footer-accordion");
footerAccordions.forEach(item => {
  const button =
  item.querySelector(".footer-toggle");
  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});




const cards = document.querySelectorAll('.place-card, .food-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        if(window.innerWidth <= 768){
            cards.forEach(item => {
                if(item !== card){
                    item.classList.remove('active');
                }
            });
            card.classList.toggle('active');
        }
    });
});