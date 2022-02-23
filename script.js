const menu = document.querySelector("#menu");
const navcenter = document.querySelector(".nav-center");
const navend = document.querySelector(".nav-end");

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navcenter.classList.toggle("active")
    navend.classList.toggle("active")
})
