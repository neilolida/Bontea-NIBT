let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onresize = () => {
    if (window.innerWidth > 768) { // Adjust the breakpoint as needed
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
}


// const navLinksEls = document.querySelectorAll('.nav-link');

// navLinksEls.forEach(navLinkEl => {
//     navLinkEl.addEventListener('click', () => {
//         navLinkEl.classList.add('activeLink');
//     });
// });