var projects = [{
		"name": "Projeto Burgeria",
		"desc": "Site responsivo de uma hamburgueria fictícia, feito com HTML, CSS e Javascript.",
		"stack": "HTML, CSS e Javascript",
		"image": "https://raw.githubusercontent.com/armandosouza/burgeria/main/screenshot.png",
		"link": "https://armandosouza.epizy.com/burgeria",
		"type": "front"
	},
	{
		"name": "Finans",
		"desc": "Página de uma financeira, utilizando HTML, CSS e Bootstrap",
		"stack": "HTML, CSS e Bootstrap",
		"image": "https://raw.githubusercontent.com/armandosouza/finans-bootstrap/main/screenshot.png",
		"link": "https://armandosouza.epizy.com/finans",
		"type": "front"
	},
	{
		"name": "Todo App",
		"desc": "App de lista de tarefas feito em React",
		"stack": "React",
		"image": "../screenshot.png",
		"link": "https://todo-react-lime.vercel.app/",
		"type": "front"
	},
	{
		"name": "Next University",
		"desc": "Projeto full stack de universidade com plataforma de cursos",
		"stack": "MERN (MongoDB, Express, React, Node.js)",
		"image": "https://github.com/armandosouza/universidade-next/blob/main/2.jpg",
		"link": "https://universidade-next.vercel.app/",
		"type": "full"
	}]

const listProjects = document.getElementById('listprojects')
projects.forEach((item) => {
	listProjects.insertAdjacentHTML('beforeend', `
		<div class="project-card mt-4 has-card-hover is-clickable">
			<a href="${item.link}" target="_blank">
				<div class="project-card-image">
					<figure>
						<img src="${item.image}" alt="${item.alt}">
					</figure>
				</div>
				<div class="project-card-content">
					<div>
						<p class="title is-4"><i class="fa-solid fa-code mr-2"></i>${item.name}</p>
						<p class="subtitle is-6"><i class="fa-solid fa-cubes mr-2"></i>${item.stack}</p>
					</div>
				</div>
				<div class="mx-5 mb-3 mt-1">
					${item.desc}
				</div>
			</a>
		</div>`)
})

function searchProjectByName() {
	var listProjects = document.getElementById('listprojects')
	var array = [...listProjects.children]
	var value = document.getElementById('project-search').value.toLowerCase()
	projects.forEach((eachProject) => {
		if(eachProject.name.toLowerCase().indexOf(value) == -1) {
			array.forEach((item) => {
				if(item.firstElementChild.href == eachProject.link) {
					item.hidden = true
				}
			})
		} else {
			array.forEach((item) => {
				if(item.firstElementChild.href == eachProject.link) {
					item.hidden = false
				}
			})
		}
	})
}

function searchProjectBySelect() {
	var listProjects = document.getElementById('listprojects')
	var array = [...listProjects.children]
	var projectType = document.getElementById('project-type').children[0]
	projects.forEach((eachProject) => {
		if(eachProject.type != projectType.value && projectType.value != "") {
			array.forEach((item) => {
				if(item.firstElementChild.href == eachProject.link) {
					item.hidden = true
				}
			})
		} else {
			array.forEach((item) => {
				if(item.firstElementChild.href == eachProject.link) {
					item.hidden = false
				}
			})
		}
	})
}