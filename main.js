const container_left = document.querySelector(".container_left")
const navbar = document.querySelector(".navbar")

let isOpen = false

container_left.addEventListener("click", () => {
    if (!isOpen) {
        navbar.style.display = "flex";
    }
    else {
        navbar.style.display="none";
    }

    isOpen=!isOpen;
});