let headerBurger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__navigation');
headerBurger.addEventListener('click', function(){
    headerBurger.classList.toggle('active');
	menu.classList.toggle('active');
})


let scrollpos = window.scrollY;

const header = document.querySelector("header");
const scrollChange = 20;


const add_class_on_scroll = () => {
  header.classList.remove("bg-white");
  document.querySelectorAll('.header__link--cat, .header__link--dog').forEach(link => {
    link.classList.add("header__link--black");
  });
};

const remove_class_on_scroll = () => {
  header.classList.add("bg-white");
  document.querySelectorAll('.header__link--cat, .header__link--dog').forEach(link => {
    link.classList.remove("header__link--black");
  });
 
};

add_class_on_scroll();

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { 
    remove_class_on_scroll();
  }
  else { 
    add_class_on_scroll();
  }
});