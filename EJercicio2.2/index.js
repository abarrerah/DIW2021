let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
  

let progress=document.getElementById("progressbar");
let totalHeight=document.body.scrollHeight-window.innerHeight;

window.onscroll=function(){
  let progressHeight=(window.pageYOffset/ totalHeight)*100;
  progress.style.height=progressHeight+"%";
}