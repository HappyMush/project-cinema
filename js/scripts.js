const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost = 450;
let totalPrice=0;
schemeSvg.addEventListener('click', (event) => {
    /*console.log(event.target);*/
    if (!event.target.classList.contains('booked')&&!event.target.classList.contains('light'))
    {event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = cost * totalSeats;
    totalPriceTag.textContent = totalPrice + " ";
        }
    });
menuButton.addEventListener('click', () => {
/*console.log('click done');*/
menu.classList.toggle('is-open');
})