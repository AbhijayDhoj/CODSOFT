const icon = document.querySelector(".icon");
const menu = document.querySelector(".desktopmenu")

icon.addEventListener("click", () => {
    
    menu.classList.toggle("show");
})