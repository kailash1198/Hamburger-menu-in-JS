const burgerBtn = document.querySelector('.burger')
const barsIco = document.querySelector('.fa-bars')
const xIco = document.querySelector('.fa-x')
const nav = document.querySelector('nav ul')


function handleNav() {
    nav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
    barsIco.classList.toggle('hide')
    xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav);