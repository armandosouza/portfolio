//Shows burger menu when clicked
const navbarBurger = document.getElementsByClassName('navbar-burger')[0]
const navbarMenu = document.getElementById(navbarBurger.dataset.target)
navbarBurger.addEventListener('click', () => {
	navbarBurger.classList.toggle('is-active')
	navbarMenu.classList.toggle('is-active')
})

//Add tooltips on footer
const socialFooter = document.getElementsByClassName('foot-social')[0]
const itemSocial = socialFooter.children[0].children
for(let i = 0; i < itemSocial.length; i++) {
	itemSocial[i].addEventListener('mouseover', () => {
		itemSocial[i].children[1].classList.remove('is-hidden')
	})
	itemSocial[i].addEventListener('mouseout', () => {
		itemSocial[i].children[1].classList.add('is-hidden')
	})
}

//Animate on Scroll
AOS.init()