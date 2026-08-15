// mobile menu--------------------------------------------

const mobileMenuIcon = document.querySelector(".hamburger");
const ShowNav = document.querySelector("#mobileNav");
mobileMenuIcon.addEventListener("click",()=>{
    ShowNav.classList.toggle("show");
})

// active navlink-------------------------------------//
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

document.querySelectorAll("#mobileNav ul li").forEach(li => {
    const link = li.querySelector("a");

    if (link.getAttribute("href") === currentPage) {
        li.classList.add("active");
    }
});
