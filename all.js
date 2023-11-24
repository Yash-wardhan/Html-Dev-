document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.MenuButton');
    var menu = document.querySelector('.menu');

    menuButton.addEventListener('click', function () {
        menu.classList.toggle('active');
        animateBars();
    });

    function animateBars() {
        var bars = document.querySelectorAll('.bar');
        bars.forEach(function (bar, index) {
            if (menu.classList.contains('active')) {
                bar.style.transitionDelay = index * 0.2 + 's';
                bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            } else {
                bar.style.transitionDelay = '';
                bar.style.transform = 'none';
            }
        });
    }
});
