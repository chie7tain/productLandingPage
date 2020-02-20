let burger = document.querySelector('.burger');
let navBar = document.querySelector('#nav-bar');
let ulNav = document.querySelector('.nav');
let [...navLinks] = document.querySelectorAll(".nav li");

burger.addEventListener('click',()=>{
  ulNav.classList.toggle("nav-active");
  navLinks.forEach((link,index)=>{
    if(link.style.animation){
    link.style.animation = '';  
    }else{
      link.style.animation = `navLinkFade 2s ease forwards ${index/7 + 0.9}s`;
      return;
    }
  });
  burger.classList.toggle('toggle');
});

let header = document.querySelector("header");

let sticky = header.offsetTop;
window.addEventListener("scroll",()=>{
  if(window.pageYOffset >= sticky){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
});