// projects list
let projects = [
  {
    name: 'Eelclip',
    desc: 'A video creation app enabling scene-based editing with drag-and-drop asset management for fast, customizable video production.',
    lang: 'TS, Angular, RxJS, Tailwind',
    imgUrl: 'images/projects/eelclip.png',
    link: 'https://eelclip.com'
  },
  {
    name: 'Tramatch',
    desc: 'Tramatch is a faith-based dating app connecting individuals with shared values for meaningful, lasting relationships.',
    lang: 'TS, Angular, SocketIO, Jasmine/Karma',
    imgUrl: 'images/projects/tramatch.png',
    link: 'https://www.tramatch.com'
  },
  {
    name: 'Food Fusion',
    desc: 'A simple food ecommerce platform interface implemented with Angular and TypeScript',
    lang: 'HTML, CSS, TS, Angular',
    imgUrl: 'images/projects/foodfusion.png',
    link: 'https://foodfusion.vercel.app'
  },
  {
    name: 'Youtube Search',
    desc: 'A YouTube Search Component which utilizes the YouTube Data Api to make searches and display matching videos',
    lang: 'HTML, CSS, TS, Angular',
    imgUrl: 'images/projects/youtube.png',
    link: 'https://youtubeapi-tau.vercel.app'
  },
  {
    name: 'Video Game DB',
    desc: 'A video game database where users can search and view information about hundreds of thousands of games',
    lang: 'HTML, SCSS, TS, Angular',
    imgUrl: 'images/projects/vid.png',
    link: 'https://gamedb-delta.vercel.app'
  },
  {
    name: 'Basita Brimix',
    desc: "BASITA is one of Nigeria's leading paint companies with a wealth of products and services ...",
    lang: 'HTML, CSS, JS',
    imgUrl: 'images/projects/basita.png',
    link: 'https://basitabrimix.com'
  },
  // {
  //   name: 'Senpai Academy',
  //   desc: "A school that makes a difference...",
  //   lang: 'HTML, CSS, JS',
  //   imgUrl: 'images/projects/senpai.png',
  //   link: 'https://senpaiacademy.netlify.app'
  // },
  // {
  //   name: 'Hotel Pablo',
  //   desc: "The best place to stay!!!",
  //   lang: 'HTML, CSS, JS',
  //   imgUrl: 'images/projects/hotel.png',
  //   link: 'https://hotelpablo.netlify.app'
  // }
]

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

let projectsCon = document.querySelector('.projects');

// PROJECTS DISPLAY
projects.forEach((project) => {
  projectsCon.innerHTML += `
  <a href="${project.link}" target="_blank">
    <div class="project" style="background-image: url(${project.imgUrl});">
        <div class="project-info">
            <ion-icon name="folder-outline"></ion-icon>
            <div class="project-details dflex f-column">
                <div>
                    <p class="project-name"><strong>${project.name}</strong></p>
                    <p><small>${project.desc}</p>
                </div>
                <p>${project.lang}</p>
            </div>
        </div>
    </div>
  </a>` 
})