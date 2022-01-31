window.onscroll = function() {scrollFunction()};
var nav_links;
var headerLogo =document.getElementById('headerLogo')

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("header").style.backgroundColor= "#fff";
    document.getElementById("demoBtn").style.backgroundColor= "#fe521d";
    document.getElementById("demoBtn").style.color= "#fff";

    nav_links = document.getElementsByClassName('nav__link');
    for (let nav_link of nav_links){
      nav_link.style.color= "#000" ;
    }

  } else {
    document.getElementById("header").style.backgroundColor= "transparent";
    document.getElementById("demoBtn").style.backgroundColor= "#fff";
    document.getElementById("demoBtn").style.color= "#fe521d";
    document.getElementById('navLink').style.color= "#fff";
     
    nav_links = document.getElementsByClassName('nav__link');
    for (let nav_link of nav_links){
      nav_link.style.color= "#fff" ;
    }
  }
}

let elSearchBtn = document.getElementById('searchBtn');
let elModal= document.getElementById('modalBox');
let elClose= document.getElementById('closeBtn');

elSearchBtn.addEventListener('click', function(){
  elModal.classList.add('show');
})
elClose.addEventListener('click', function(){
  elModal.classList.remove('show');
})

