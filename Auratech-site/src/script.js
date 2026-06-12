const mobileMenu = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector("#mobileNav");

mobileMenu.addEventListener("click",()=>{
    mobileNav.classList.toggle("hidden")
})