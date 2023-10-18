import '../scss/main.scss';
import '../scss/catalog.scss';

import '../catalog.html';

import '../images/pagination-arrow-active.svg';
import '../images/pagination-arrow-noactive.svg';
import '../images/select-bg.svg';



let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__navigation');
headerBurger.addEventListener('click', function(){
    headerBurger.classList.toggle('active');
	menu.classList.toggle('active');
})

//Scroll
let scrollpos = window.scrollY;

const header = document.querySelector("header");
const scrollChange = 20;
const add_class_on_scroll = () => header.classList.add("bg-white");
const remove_class_on_scroll = () => header.classList.remove("bg-white");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})