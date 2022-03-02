"use strict"

const burger = document.getElementById("burger");
const navbar = document.getElementById('navbar');
const body = document.getElementsByTagName('BODY')[0];

body.addEventListener('click', (e) => {

    if (e.target === burger) {
        navbar.classList.add('navbar_toggle')
        console.log(e.target)
    } else if (e.currentTarget == body && e.target !== navbar) {
        navbar.classList.remove('navbar_toggle')
    }
})


