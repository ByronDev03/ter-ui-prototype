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