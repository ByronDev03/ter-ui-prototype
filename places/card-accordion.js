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