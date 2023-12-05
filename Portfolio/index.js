const icon = document.querySelector(".icon");
const menu = document.querySelector(".desktopmenu")
const image = document.querySelector(".smallimg") 
const bigimage = document.querySelector(".bigimage")
const icon1 = document.querySelector(".Xicon")
const button = document.querySelector(".view")
icon.addEventListener("click", () => {
    menu.classList.toggle("show");
})

image.addEventListener("click", () => {
    bigimage.classList.toggle("show")
    // Xicon.classList.toggle("show")
    // smallimg.classList.toggle("show")
} )
image.addEventListener("click", () => {
    
    icon1.classList.toggle("show")
    // smallimg.classList.toggle("show")
} )

button.addEventListener("click", () =>{
    bigimage.classList.toggle("show")
    icon1.classList.toggle("show")

})

icon1.addEventListener("click", () => {
    
    bigimage.classList.toggle("show")
    icon1.classList.toggle("show")
})

function submitbutton() {
    alert("You will be contacted soon!")
}

