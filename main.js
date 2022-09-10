// preloader
const preloader = document.querySelector('.preloader');
const main = document.querySelector('.main');

window.addEventListener('load', ()=>{
    window.setTimeout(()=>{
        preloader.style.display = 'none';
        main.style.visibility = 'visible';
        document.body.style.overflowY = 'auto';
    }, 2000);

    window.setTimeout(()=>{
        typeWriter();
    }, 3500);
})

// text typing effect
let i = 0;
let txt = 'a web developer'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero-txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}