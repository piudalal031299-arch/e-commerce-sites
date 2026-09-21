document.addEventListener("DOMContentLoaded", function () {
    
    // mobile menu open=========================

    const menu = document.querySelector(".menuIcon");
    const navlinks = document.querySelector(".navlinks");
    const spanIcon = document.querySelector(".tglBtn");

    menu.addEventListener("click", ()=>{
        navlinks.classList.toggle("show");
        if (navlinks.classList.contains("show")) {
        spanIcon.textContent = "close";
    } else {
        spanIcon.textContent = "menu";
    }
    })

    // radius slider==============================

    const radiusSlider = document.querySelector(".radius-slider");
    const radiusText = document.querySelector(".radius-text");

    function updateSlider() {

    const value = radiusSlider.value;
    const min = radiusSlider.min;
    const max = radiusSlider.max;

    const percentage =
        ((value - min) / (max - min)) * 100;

    radiusText.innerHTML = `
        Radius: <strong>${value} miles</strong>
    `;

    // Red + Blue progress
    radiusSlider.style.background = `
        linear-gradient(
            to right,
            #e6384d 0%,
            #e6384d ${percentage}%,
            #2993cf ${percentage}%,
            #2993cf 100%
        )
    `;
}
radiusSlider.addEventListener("input", updateSlider);

updateSlider();

// hotsSlide====================================

const hotFlex = document.querySelector(".hotFlex");
const hotCards = document.querySelectorAll(".hotFlex > .slideCard");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;


// কতগুলো card দেখাবে
function getCardsPerView() {
    if (window.innerWidth <= 575) {
        return 1;
    }

    if (window.innerWidth <= 991) {
        return 2;
    }

    return 3;
}


// কতগুলো dot দেখাবে
function getDotCount() {
    if (window.innerWidth <= 575) {
        return 6;
    }

    if (window.innerWidth <= 991) {
        return 3;
    }

    return 2;
}


// Slider move
function moveSlider(index) {

    const cardWidth = hotCards[0].offsetWidth;

    const gap = parseFloat(
        getComputedStyle(hotFlex).gap
    );

    const moveAmount = cardWidth + gap;

    hotFlex.style.transform =
        `translateX(-${index * moveAmount}px)`;


    // Dot active
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}


// Dot click
dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        const dotCount = getDotCount();

        // Current screen অনুযায়ী শুধু valid dots
        if (index < dotCount) {
            currentIndex = index;
            moveSlider(currentIndex);
        }

    });

});


// Responsive dot show/hide
function updateDots() {

    const dotCount = getDotCount();

    dots.forEach((dot, index) => {

        if (index < dotCount) {
            dot.style.display = "block";
        } else {
            dot.style.display = "none";
        }

    });


    // resize করার পরে invalid position হলে reset
    if (currentIndex >= dotCount) {
        currentIndex = 0;
    }

    moveSlider(currentIndex);
}


// Initial
updateDots();


// Resize
window.addEventListener("resize", () => {
    updateDots();
});

 
    });