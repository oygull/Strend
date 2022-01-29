window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("header").style.backgroundColor= "#fff";
    document.getElementById("demoBtn").style.backgroundColor= "#fe521d";
    document.getElementById("demoBtn").style.color= "#fff";
  } else {
    document.getElementById("header").style.backgroundColor= "transparent";
    document.getElementById("demoBtn").style.backgroundColor= "#fff";
    document.getElementById("demoBtn").style.color= "#fe521d";
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
