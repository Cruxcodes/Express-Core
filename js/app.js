let navbar = document.querySelector('.links-wrapper');
let hamburger = document.getElementById('hamburger');
let navitem = document.querySelectorAll('.nav-item');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
})

navitem.forEach(n => n.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}))


//function to toggle the dropdown

let dropdown = document.getElementById('dropdown');
let ul = document.getElementById('service');
dropdown.addEventListener('click', () => {
    ul.classList.toggle('show');
})

let dropdown_1 = document.getElementById('dropdown-1');
let ul_1 = document.getElementById('resources');
dropdown_1.addEventListener('click', () => {
    ul_1.classList.toggle('show');
})

document.getElementById('year').innerHTML = new Date().getFullYear();


//function  Toggle() {
    //navbar.classList.toggle('active');
    //navbar.style.display = 'block';
    //hamburger.classList.toggle('active');
//}