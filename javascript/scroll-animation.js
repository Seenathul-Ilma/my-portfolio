document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener("scroll", () => {
        const arrow = document.querySelector(".return-to-top-arrow");
        if (window.scrollY > 900) {
            arrow.classList.remove("hidden");
            arrow.classList.add("show");
        } else {
            arrow.classList.remove("show");
            arrow.classList.add("hidden");
        }
    });
});
