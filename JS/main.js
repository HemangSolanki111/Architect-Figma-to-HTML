//  Scrollbar Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


// navbar hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapes = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function (){
        navCollapes.classList.remove("show");
    });
});