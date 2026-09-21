function toggleDropDown(){
    document.getElementById("dropdownUl").classList.toggle("show");
}

const hamburgerIcon = document.getElementById("hamburgerIcon");
const navLinks = document.getElementById("navLinks");

hamburgerIcon.addEventListener("click", ()=>{
  navLinks.classList.toggle("openMenu");
  if (navLinks.classList.contains("openMenu")) {
    document.body.style.overflow="hidden"
  } else {
        document.body.style.overflow="auto"
  }
})
 const wrap1 = document.getElementById('wrap1');
  const wrap2 = document.getElementById('wrap2');

  const RUN_TIME = 10000;  
  const PAUSE_TIME = 2000; 

  function cycle() {
    wrap1.classList.add('paused');
    wrap2.classList.add('paused');

    setTimeout(() => {
      wrap1.classList.remove('paused');
      wrap2.classList.remove('paused');

      setTimeout(cycle, RUN_TIME);
    }, PAUSE_TIME);
  }

  setTimeout(cycle, RUN_TIME);