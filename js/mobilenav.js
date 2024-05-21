var navToggle = document.getElementById('nav-toggle');
var mobileNav = document.getElementById('mobile-nav');
var closebtn = document.getElementById('closebtn');

if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function() {
        if (mobileNav.style.width === '0px') {
            mobileNav.style.width = '250px';
        } else {
            mobileNav.style.width = '0px';
        }
    });
}

if (closebtn && mobileNav) {
    closebtn.addEventListener('click', function() {
        mobileNav.style.width = '0px';
    });
}