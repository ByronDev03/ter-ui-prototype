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

const destinosTER = {
  "Morelos": [
    "Amacuzac, Mor.",
    "Amayuca, Mor.",
    "Anenecuilco, Mor.",
    "Axochiapan, Mor.",
    "Cuautla, Mor.",
    "Cuautlixco, Mor.",
    "Cuernavaca Casino, Mor.",
    "Cuernavaca Centro, Mor.",
    "Felipe Neri, Mor.",
    "IMSS, Mor.",
    "Jojutla, Mor.",
    "Jonacatepec, Mor.",
    "Oacalco, Mor.",
    "Oaxtepec, Mor.",
    "Paloma de la Paz, Mor.",
    "Paloma de la Paz UAEM, Mor",
    "Puente de Ixtla, Mor.",
    "San Carlos, Mor.",
    "Tejalpa, Mor.",
    "Tepalcingo, Mor.",
    "Tepoztlán, Mor.",
    "Tlaltizapán, Mor.",
    "Tlaquiltenango, Mor.",
    "Tlayacapan, Mor.",
    "Totolapan, Mor.",
    "UAEM, Mor.",
    "Villa de Ayala, Mor."
  ].sort((a, b) => a.localeCompare(b, "es")),

  "Guerrero": [
    "Buenavista de Cuéllar, Gro.",
    "Iguala, Gro."
  ].sort((a, b) => a.localeCompare(b, "es")),

  "Puebla": [
    "2 Poniente, Pue.",
    "Caseta Atlixcáyotl, Pue",
    "Izúcar de Matamoros, Pue",
    "Puebla CAPU, Pue"
  ].sort((a, b) => a.localeCompare(b, "es")),

  "Ciudad de México": [
    "México Sur, CDMX."
  ].sort((a, b) => a.localeCompare(b, "es")),
};

const viajesTER = [
  {
    origen: "CUAUTLA",
    destino: "TEPOZTLÁN",
    salida: "05:20 a.m.",
    llegada: "06:30 a.m.",
    precio: 38
  },
  {
    origen: "CUAUTLA",
    destino: "TEPOZTLÁN",
    salida: "07:00 a.m.",
    llegada: "08:10 a.m.",
    precio: 38
  },
  {
    origen: "CUAUTLA",
    destino: "CUERNAVACA",
    salida: "06:00 a.m.",
    llegada: "07:00 a.m.",
    precio: 45
  },
  {
    origen: "CUAUTLA",
    destino: "CDMX",
    salida: "08:30 a.m.",
    llegada: "10:30 a.m.",
    precio: 150
  }
];

const originField =
document.getElementById(
  "originField"
);

const destinationField =
document.getElementById(
  "destinationField"
);

const originText =
document.getElementById(
  "originText"
);

const destinationText =
document.getElementById(
  "destinationText"
);

const originDropdown =
document.getElementById(
  "originDropdown"
);

const destinationDropdown =
document.getElementById(
  "destinationDropdown"
);

const swapBtn = 
document.getElementById(
  "swapBtn"
);

const dateField = document.getElementById("dateField");
const dateText = document.getElementById("dateText");
const calendarDropdown = document.getElementById("calendarDropdown");
const passengerField = document.getElementById("passengerField");
const passengerText = document.getElementById("passengerText");
const passengerDropdown = document.getElementById("passengerDropdown");

calendarDropdown.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  }
);

passengerDropdown.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
  }
);

let selectedOrigin = "";
let selectedDestination = "";

const passengers = {
  adultos: 1,
  menores: 0,
  inapam: 0,
  estudiantes: 0
} 

function updatePassengerText(){
  const total =
    Object.values(passengers)
      .reduce(
        (sum, value) =>
          sum + value,
        0
      );

  if(total === 1){
    passengerText.textContent =
      "1 Adulto";
  }
  else{
    passengerText.textContent =
      `${total} Pasajeros`;
  }

  document.getElementById(
    "adultosCount"
  ).textContent =
    passengers.adultos;

  document.getElementById(
    "menoresCount"
  ).textContent =
    passengers.menores;

  document.getElementById(
    "inapamCount"
  ).textContent =
    passengers.inapam;

  document.getElementById(
    "estudiantesCount"
  ).textContent =
    passengers.estudiantes;
}

document
  .querySelectorAll(
    ".counter-btn"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const type =
          button.dataset.type;

        const action =
          button.dataset.action;

        if(
          action ===
          "increase"
        ){
          passengers[type]++;
        }
        else{

          if(
            type ===
            "adultos"
          ){
            if(
              passengers.adultos > 1
            ){
              passengers.adultos--;
            }
          }
          else{

            if(
              passengers[type] > 0
            ){
              passengers[type]--;
            }
          }
        }

        updatePassengerText();
      }
    );
  });

swapBtn?.addEventListener(
  "click",
  () => {

    if(
      !selectedOrigin ||
      !selectedDestination
    ){
      return;
    }

    swapBtn.classList.add("swapping");

    setTimeout(() => {
      swapBtn.classList.remove(
        "swapping"
      );
    }, 400);

    [selectedOrigin, selectedDestination] = [
      selectedDestination,
      selectedOrigin
    ];

    originText.textContent = selectedOrigin;

    destinationText.textContent = selectedDestination;
  }
);

let selectedDate = null;
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function agruparPorLetra(destinos){

  const grupos = {};

  destinos.forEach(destino => {

    const letra =
      destino.charAt(0).toUpperCase();

    if(!grupos[letra]){
      grupos[letra] = [];
    }

    grupos[letra].push(destino);

  });

  return grupos;
}

function openDropdown(
  dropdown,
  callback
){

  dropdown.innerHTML = "";

  Object.entries(destinosTER)
    .forEach(
      ([estado, destinos]) => {

        const state =
          document.createElement(
            "div"
          );

        state.className =
          "dropdown-state";

        state.textContent =
          estado;

        dropdown.appendChild(
          state
        );

        const grupos =
          agruparPorLetra(
            destinos
          );

        Object.entries(grupos)
          .forEach(
            ([letra, lugares]) => {

              const letter =
                document.createElement(
                  "div"
                );

              letter.className =
                "dropdown-letter";

              letter.textContent =
                letra;

              dropdown.appendChild(
                letter
              );

              lugares.forEach(
                lugar => {

                  const button =
                    document.createElement(
                      "button"
                    );

                  button.className =
                    "dropdown-item";

                  button.textContent =
                    lugar;

                  button.addEventListener(
                    "click",
                    () => {

                      callback(
                        lugar
                      );

                      dropdown
                        .classList
                        .remove(
                          "show"
                        );

                    }
                  );

                  dropdown.appendChild(
                    button
                  );
                }
              );
            }
          );
      }
    );
  dropdown.classList.add(
    "show"
  );
}

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

function renderCalendar(){

  calendarDropdown.innerHTML = "";

  const header =
    document.createElement("div");

  header.className =
    "calendar-header";

  header.innerHTML = `
    <button id="prevMonth">
      <i class="bi bi-chevron-left"></i>
    </button>

    <span>
      ${months[currentMonth]}
      ${currentYear}
    </span>

    <button id="nextMonth">
      <i class="bi bi-chevron-right"></i>
    </button>
  `;

  calendarDropdown.appendChild(
    header
  );

  const grid =
    document.createElement("div");

  grid.className =
    "calendar-grid";

  const weekDays = [
    "DOM",
    "LUN",
    "MAR",
    "MIÉ",
    "JUE",
    "VIE",
    "SÁB"
  ];

  weekDays.forEach(day => {

    const label =
      document.createElement("div");

    label.className =
      "calendar-weekday";

    label.textContent =
      day;

    grid.appendChild(label);

  });

  const firstDay =
    new Date(
      currentYear,
      currentMonth,
      1
    ).getDay();

  const daysInMonth =
    new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

  for(let i = 0; i < firstDay; i++)
  {
    const empty =
      document.createElement("div");

    grid.appendChild(
      empty
    );
  }

  for(let day = 1; day <= daysInMonth;day++)
  {
    const button = document.createElement("button");

    button.className =
      "calendar-day";

    button.textContent =
      day;

    const date = new Date(
      currentYear,
      currentMonth,
      day
    );

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    if (date < todayDate){
      button.classList.add("disabled");
        button.disabled = true;
    }

    if(
      day === today.getDate() && 
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()
    ){
      button.classList.add("today");
    }

    if (
      selectedDate && 
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    ){
      button.classList.add("selected");
    }

    button.addEventListener(
      "click",
      () => {

        selectedDate =
          new Date(
            currentYear,
            currentMonth,
            day
          );

        dateText.textContent =
          selectedDate.toLocaleDateString(
            "es-MX",
            {
              day: "2-digit",
              month: "short",
              year: "numeric"
            }
          );

        calendarDropdown
          .classList
          .remove("show");

      }
    );

    grid.appendChild(button);

  }

  calendarDropdown.appendChild(
    grid
  );

  document
    .getElementById("prevMonth")
    .addEventListener(
      "click",
      (e) => {
        e.stopPropagation();

        if(currentMonth === 0 && currentYear > today.getFullYear())
          {
            currentMonth = 11;
            currentYear--;
          }
          else if(currentMonth > 0){
            currentMonth--;
          }

          renderCalendar();
        }
    );

    const prevButton = document.getElementById("prevMonth");
    prevButton.disabled = 
    currentMonth === 
    today.getMonth() &&
    currentYear === 
    today.getFullYear();

  document.getElementById("nextMonth")
    .addEventListener(
      "click",
      (e) => {

        e.stopPropagation();

        if(currentMonth === 11 && currentYear < 2027)
          {
            currentMonth = 0;
            currentYear++;
          }
          else if (currentMonth < 11)
          {
            currentMonth++;
          }
          renderCalendar();
        }
    );

    const nextButton = document.getElementById("nextMonth");
    nextButton.disabled = currentMonth === 11 && currentYear === 2027;
}

originField?.addEventListener(
  "click",
  () => {

    openDropdown(
      originDropdown,
      (item) => {

        selectedOrigin =
          item;

        originText.textContent =
          item;

        selectedDestination =
          "";

        destinationText.textContent =
          "¿Hacia dónde viajas?";

      }
    );

  }
);

destinationField?.addEventListener(
  "click",
  () => {

    if(!selectedOrigin)
      return;

    openDropdown(
      destinationDropdown,
      (item) => {

        if(
          item === 
          selectedOrigin
        ){
          return;
        }

        selectedDestination = item;

        destinationText.textContent = item;
      }
    );

  }
);

dateField?.addEventListener(
  "click",
  () => {
    renderCalendar();
    calendarDropdown.classList.add("show");
  }
);

passengerField?.addEventListener(
  "click",
  () => {
    passengerDropdown.classList.add("show");
  }
);

document.addEventListener(
  "click",
  (e) => {

    if(
      !calendarDropdown.contains(
        e.target
      ) &&
      !dateField.contains(
        e.target
      )
    ){

      calendarDropdown.classList.remove(
        "show"
      );
    }

    if(
      !passengerDropdown.contains(
        e.target
      ) &&
      !passengerField.contains(
        e.target
      )
    ){
      passengerDropdown.classList.remove(
        "show"
      );
    }
      
    if(
      !originDropdown.contains(
        e.target
      ) &&
      !originField.contains(
        e.target
      )
    ){
      originDropdown.classList.remove(
        "show"
      );
    }

    if(
      !destinationDropdown.contains(
        e.target
      ) && 
      !destinationField.contains(
        e.target
      )
    ){
      destinationDropdown.classList.remove(
        "show"
      );
    }
  }
);


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