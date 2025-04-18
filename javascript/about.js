document.addEventListener('DOMContentLoaded', function() {

    // Basic counter animation
    const counters = document.querySelectorAll('.stat-box span');
    counters.forEach(counter => {
        let value = +counter.innerText.replace('+', '');
        let count = 0;
        const update = () => {
            count += 1;
            counter.innerText = count + "+";
            if (count < value) {
                requestAnimationFrame(update);
            }
        };
        update();
    });

});