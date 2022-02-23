const menu = document.querySelector("#menu");
const navcenter = document.querySelector(".nav-center");

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navcenter.classList.toggle("active")
})
