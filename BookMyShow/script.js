const mobileMenu = document.querySelector(".hamburgar");
mobileMenu.addEventListener("onclick",()=>{
mobileMenu.classList.add('active')
});

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
const Title = document.querySelector("accordianTitle");
accordians.forEach((item,index)=>{

});


