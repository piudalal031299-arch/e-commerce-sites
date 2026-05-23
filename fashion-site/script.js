// hambarger

const mobileMenu = document.querySelector("#hambarger");
const sideNav = document.querySelector(".side-nav");

mobileMenu.addEventListener("click",()=>{
    sideNav.classList.toggle("side-nav-show")
})

// login-from

const loginBtn = document.querySelector(".icon-login");
const loginForm = document.createElement("div");
document.body.appendChild(loginForm);

loginForm.innerHTML = `
                        <div class="log-head">
                        <h2 style="color:#064CCF;">Login</h2>
                        <button id="close-btn"><span class="material-symbols-outlined">close</span></button>
                        </div>
                        <form action="post">
                            <input type="text"  required placeholder="User Name" class="input-field">
                            <input type="email" required placeholder="Enter Email" class="input-field">
                            <input type="password" required placeholder="Enter Password" class="input-field">
                            <button class="login-btn">Login</button>
                        </form>    
                    `;

loginForm.classList.add("modal");

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    loginForm.classList.add("show-modal");
});
const close = document.getElementById("close-btn");
close.addEventListener("click",()=>{
loginForm.classList.remove("show-modal");
});

// form valid







