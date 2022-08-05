const navbarBurger = document.getElementsByClassName('navbar-burger')[0]
const navbarMenu = document.getElementById(navbarBurger.dataset.target)
console.log(navbarMenu)
navbarBurger.addEventListener('click', () => {
	navbarBurger.classList.toggle('is-active')
	navbarMenu.classList.toggle('is-active')
})