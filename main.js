"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
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
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//Transparent home -jiu
// const home = document.querySelector('#home');
// const homeHeight = home.getBoundingClientRect().height;
// console.log(homeHeight);
// document.addEventListener('scroll', () => {
//   const y = window.scrollY;
//   console.log(y);
//   if(y / homeHeight) {}
// });

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down - jiu
// const arrowUp = document.querySelector('.arrow-up');
// const windowHeight = 800;
// if (window.scrollY < windowHeight) {
//   arrowUp.classList.remove('visible');
// } else {
//   arrowUp.classList.add('visible');
// }

// Show "arrow up" button when scrolling down - ellie
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//Projects
const workBtncontainer = document.querySelector(".work__categories");
const ProjectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtncontainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projects.forEach((project) => {
    console.log(project.dataset.type);
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});

///
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
