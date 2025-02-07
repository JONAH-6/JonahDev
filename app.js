let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll Down - Hide Navbar
        navbar.style.top = "-60px";
    } else {
        // Scroll Up - Show Navbar
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll;
});