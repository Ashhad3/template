function responsivenav() {

    let navbar = document.querySelector('.navbar');
    let navleft = document.querySelector('.nav-left');
    let navright = document.querySelector('.nav-right');
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    let menulist = document.querySelector('.menu-list');
    let search = document.querySelector('.search');
    let logo = document.querySelector('.logo');
    let menuli = document.querySelector('li');

    let navbarresp = document.querySelector('.navbar-resp');

    burger.addEventListener('click', e =>{

        navbar.classList.toggle('navbar-resp');
        navbar.style.transition = 'all 0.7s ease-out';
        
        navleft.classList.toggle('nav-left-resp');
        navright.classList.toggle('nav-right-resp');
        menu.classList.toggle('menu-resp');
        menulist.classList.toggle('menu-list-resp');
        search.classList.toggle('search-resp');
        logo.classList.toggle('logo-resp');
        menuli.classList.toggle('li-resp');

    });

}
responsivenav();