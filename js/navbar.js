const navBtn = document.querySelector('.navigation__button');
const nav = document.querySelector('.navigation__nav');
const navList = document.querySelector('.navigation__list');
const navItems = document.querySelectorAll('.navigation__item');
const navLinks = document.querySelectorAll('.navigation__link');
const navDesktop = document.querySelector('.navigationDesktop');
const navMobile = document.querySelector('.navigation');

let showNav = false;
let lastScroll = 0;

navBtn.addEventListener('click', toggleNav);

navLinks.forEach(link => link.addEventListener('click', closeNav));

function toggleNav(){
    if(!showNav){
        navBtn.classList.add('close');
        nav.classList.add('show');
        navList.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showNav = true;
    }
    else{
        navBtn.classList.remove('close');
        nav.classList.remove('show');
        navList.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showNav = false;
    }
}

function closeNav(){
    navBtn.classList.remove('close');
    nav.classList.remove('show');
    navList.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showNav = false;
}

window.addEventListener('scroll', function (e) {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navDesktop.classList.remove('u-scroll-up');
    }

    if (currentScroll > lastScroll && !navDesktop.classList.contains('u-scroll-down')) {
        navDesktop.classList.remove('u-scroll-up');
        navDesktop.classList.add('u-scroll-down');
    }

    if (currentScroll < lastScroll && navDesktop.classList.contains('u-scroll-down')) {
        navDesktop.classList.remove('u-scroll-down');
        navDesktop.classList.add('u-scroll-up');
    }

    lastScroll = currentScroll;

    // show or hide the background color of navigation
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        navDesktop.classList.add('u-bg-blue');
        navDesktop.classList.remove('u-bg-transparent');
        navMobile.classList.add('u-bg-blue');
        navMobile.classList.remove('u-bg-transparent');
    }
    else {
        navDesktop.classList.add('u-bg-transparent');
        navDesktop.classList.remove('u-bg-blue');
        navMobile.classList.add('u-bg-transparent');
        navMobile.classList.remove('u-bg-blue');
    }
});