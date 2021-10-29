const bars = document.querySelector('.bars');
const close = document.querySelector('.fa-times');
const resHeader = document.querySelector('.header-navv');


bars.addEventListener('click', () => {
    if (resHeader.classList.contains('hidden')) {
        resHeader.classList.remove('hidden')
    }
});

close.addEventListener('click', () => {
    resHeader.classList.add('hidden');
});