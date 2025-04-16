const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("menu-close-icon");
const dropdown = document.querySelector(".dropdown_menu");
const openBtn = document.querySelector(".menu-mobile");
const closeBtn = document.querySelector(".menu-close-mobile");

openBtn.addEventListener("click", () => {
    dropdown.style.display = "block";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

closeBtn.addEventListener("click", () => {
    dropdown.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
});