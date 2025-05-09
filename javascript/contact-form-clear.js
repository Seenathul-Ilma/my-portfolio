const form = document.querySelector("form");
form.addEventListener("submit", function () {
    setTimeout(() => {
        form.reset();
    }, 2000);
});