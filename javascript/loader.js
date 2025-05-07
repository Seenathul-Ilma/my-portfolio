window.addEventListener("load", function () {

    console.log("Script is running...");

    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.remove("loading");

        console.log("Body overflow:", getComputedStyle(document.body).overflow);

        // Apply media query settings explicitly
        if (window.innerWidth <= 768) {
            document.body.style.overflowY = "auto";
            document.body.style.scrollBehavior = "smooth";
            console.log("Body overflow:", getComputedStyle(document.body).overflow);

        }
    }, 500);
    console.log("Body overflow:", getComputedStyle(document.body).overflow);

});

/*document.addEventListener("DOMContentLoaded", function () {
    // Hide the preloader once the DOM is ready
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    // After fade-out, hide the preloader and enable scrolling
    setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.remove("loading");
    }, 500); // Matches the fade-out duration

    console.log("Body overflow:", getComputedStyle(document.body).overflow);
});*/