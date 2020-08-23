'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link ==null) {
return;
  } else {
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: 'smooth'});
  scrollIntoView(link);
  }
});

//Handle contact me button - jiu
// const contactBtn = document.querySelector('.home__contact');
// contactBtn.addEventListener('click', (event) => {
//   const target = event.target;
//   const link = target.dataset.link;
//   const scrollTo = document.querySelector(link);
//   scrollTo.scrollIntoView({behavior: 'smooth'});
// });

//Handle click on "contact me" button on home - ellie
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});


//Transparent home -jiu
// const home = document.querySelector('#home');
// const homeHeight = home.getBoundingClientRect().height;
// console.log(homeHeight);
// document.addEventListener('scroll', () => {
//   const y = window.scrollY;
//   console.log(y);
  
// });

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});



function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});
}

