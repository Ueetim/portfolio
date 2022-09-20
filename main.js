// // preloader
// const preloader = document.querySelector('.preloader');
// const main = document.querySelector('.main');

window.addEventListener('load', ()=>{
    window.setTimeout(()=>{
        typeWriter();
    }, 1600);
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

// indicate current section nav btn
// let navItems = document.querySelectorAll('.navItem');
// let section = document.getElementsByTagName('section');
// // console.log(section);

// window.addEventListener('scroll', ()=>{
//   let scrollHeight = window.pageYOffset;
//   // console.log(scrollHeight)
//   let a = [];
//   for (let i = 0; i < section.length; i++) {
//     navItems[i].classList.remove('active');
//     if ((section[i].offsetTop - 300) < scrollHeight) {
//       a.push(i);
//       let item = navItems[a.length - 1];
//       console.log(item.dataset.id);
//       item.classList.add('active')
//       if (navItems[i] !== item){
//         navItems[i].classList.remove('active');
//       }
//     }
//   }
// })

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navItem");

window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute("id"); 
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.id == current) {
      li.classList.add("active");
    }
  });
};