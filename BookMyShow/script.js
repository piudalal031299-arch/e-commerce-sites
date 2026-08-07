const mobileMenu = document.querySelector(".mobileMenu");
const hamburger = document.querySelector(".hamburgar");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {

    mobileNav.classList.toggle("show");
    // if (mobileNav.classList.contains("show")) {
    //     hamburger.textContent = "close";
    // } else {
    //     hamburger.textContent = "menu";
    // }

});
document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target)) {
        mobileNav.classList.remove("show");
    }
})

// hero slider start-------------------------------------------------

 $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: true,  
            
        });

// hero slider end---------------------------------------------------

// <!----------------------------------------accordian---------------------------------->

const accordians = document.querySelectorAll(".accordian");

accordians.forEach((item,index)=>{

    let ShowHideIcon = item.querySelector(".dynIcon");
    const option = item.querySelector(".accordianOption");
    
    ShowHideIcon.addEventListener("click",()=>{
         accordians.forEach((accordion) => {
            if (accordion !== item) {
                accordion.querySelector(".accordianOption").classList.remove("active");
                accordion.querySelector(".dynIcon").textContent = "+";
            }
        });
        option.classList.toggle("active");

        if(option.classList.contains("active")){
            ShowHideIcon.textContent = '-';
        }else{
           ShowHideIcon.textContent = '+'; 
        }
    });
});


