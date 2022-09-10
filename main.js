const preloader = document.querySelector('.preloader');
const main = document.querySelector('.main');

window.addEventListener('load', ()=>{
    window.setTimeout(()=>{
        preloader.style.display = 'none';
        main.style.display = 'block';
    }, 2000);
})