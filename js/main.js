const navBtn = document.querySelector('.navigation__button');
const nav = document.querySelector('.navigation__nav');
const navList = document.querySelector('.navigation__list');
const navItems = document.querySelectorAll('.navigation__item');
const navLinks = document.querySelectorAll('.navigation__link')

let showNav = false;

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