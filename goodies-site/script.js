
// -----Set the offer end date and time-----------//

const offerEnd = new Date("2026-07-27T23:59:59").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = offerEnd - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").textContent =
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    // Offer expired
    if (distance <= 0) {
        clearInterval(timer);
        document.querySelector(".timer-div").style.display = "none";
    }
}, 1000);

// ------favourite icon-------//

let favIcon = document.querySelectorAll('.fav-icon');
let icon = document.querySelectorAll("span");
favIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("active-fav");
    });
});

// ---------------login----------------//

let login = document.getElementById('login');
let loginModal = document.querySelector('.login-modal');

login.addEventListener("click", () => {
    loginModal.classList.add("show-modal");
});
let closeBtn = document.querySelector(".close-modal");
closeBtn.addEventListener("click", () => {
        loginModal.classList.remove("show-modal");
    });


// -----------mobile menu---------//
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    mobileNav.classList.add("show");
    
});

 let closeMenu = document.querySelector(".close-menu");
 closeMenu.addEventListener("click", () => {
        mobileNav.classList.remove("show");
    });
// ------------slider----------------

  const track = document.querySelector(".slider-track");
        const cards = document.querySelectorAll(".card");
        const next = document.querySelector(".next");
        const prev = document.querySelector(".prev");

        let index = 0;

        function visibleCards() {
            if (window.innerWidth < 576) {
                return 1;
            }
            if (window.innerWidth < 768) {
                return 2;
            }
            return 3;
        }

        function moveSlider() {
            let cardWidth = cards[0].offsetWidth;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
        next.addEventListener("click", () => {
            let maxIndex = cards.length - visibleCards();
            if (index < maxIndex) {
                index++;
            } else {
                index = 0;
            }
            moveSlider();
        });
        prev.addEventListener("click", () => {
            let maxIndex = cards.length - visibleCards();
            if (index > 0) {
                index--;
            } else {
                index = maxIndex;
            }
            moveSlider();
        });
        window.addEventListener("resize", moveSlider);

        // Auto Slider
        
        setInterval(() => {
            let maxIndex = cards.length - visibleCards();
            if (index < maxIndex) {
                index++;
            } else {
                index = 0;
            }
            moveSlider();
        }, 2000);
    

// -----------footer-------------//

const form = document.querySelector(".newsletter");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = this.querySelector("input").value;

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    alert("Thanks for subscribing!");

    this.reset();

});
