document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.banner__menu').classList.toggle('active');
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});