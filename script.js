const navToggleBtn = document.querySelector('#navToggleBtn');
const nav = document.querySelector('nav.navigation');
const navlinks = document.querySelectorAll('nav .nav-link');
const year = new Date().getFullYear();

document.getElementById("year").innerHTML = year;

navToggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});


navlinks.forEach(link => {
    link.addEventListener('click' , () => {
        nav.classList.remove('active');
    });
});