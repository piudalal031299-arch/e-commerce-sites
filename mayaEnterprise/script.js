// mobile menu--------------------------------------------

const mobileMenuIcon = document.querySelector(".hamburger");
const ShowNav = document.querySelector("#mobileNav");
mobileMenuIcon.addEventListener("click",()=>{
    ShowNav.classList.toggle("show");
})