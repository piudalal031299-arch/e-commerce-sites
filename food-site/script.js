// mobile menu //

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("show");

    if (mobileNav.classList.contains("show")) {
        hamburger.textContent = "close";
    } else {
        hamburger.textContent = "menu";
    }
});

// booking form//


const form = document.getElementById("bookingForm");

form.addEventListener("submit", function () {

    alert("Booking Successful!");

    form.reset();
});