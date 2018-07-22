window.addEventListener('resize', toggleMobileMenu);
window.addEventListener('load', toggleMobileMenu);


function toggleMobileMenu() {
    if (document.documentElement.clientWidth < 800) {
        document.getElementById("show-nav-btn").classList.remove('hidden');
        document.getElementById("toggle-nav").style.width = 0;
        document.getElementById("hide-nav-btn").classList.remove('hidden');
        document.getElementById("show-nav-btn").addEventListener('click', showNav);
        document.getElementById("hide-nav-btn").addEventListener('click', hideNav);
    } else {
        document.getElementById("show-nav-btn").classList.add('hidden');
        document.getElementById("hide-nav-btn").classList.add('hidden');
        document.getElementById("toggle-nav").style.width = "auto";
    }
}

function showNav(e) {
    document.getElementById("toggle-nav").style.width = "80%";
    document.getElementById("overlay").classList.remove('hidden');
}

function hideNav(e) {
    document.getElementById("toggle-nav").style.width = 0;
    document.getElementById("overlay").classList.add('hidden');
}