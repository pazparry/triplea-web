const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navbar-ul');

hamburger.addEventListener('click', () =>{
    navUl.classList.toggle('show');
}
);