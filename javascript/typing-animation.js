document.addEventListener('DOMContentLoaded', function() {
    let typing=new Typed(".my-occupation", {
        strings: ["", "Full Stack Developer.", "Software Engineer.", "Web Developer.", "Web Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    });

    let typing2=new Typed(".my-occupation-mobile", {
        strings: ["", "- Full Stack Developer -", "- Software Engineer -", "- Web Developer -", "- Web Designer -", "- Freelancer -"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
    });
});