const y = document.createElement.bind(document)

const html = {
  title: "HTML",
  image: "https://brandeps.com/icon-download/H/Html-five-icon-vector-01.svg"
}

const css = {
  title: "Css",
  image: "https://brandeps.com/icon-download/C/CSS-3-icon-vector-01.svg"
}

const sass = {
  title: "Sass",
  image: "https://brandeps.com/logo-download/S/Sass-logo-vector-01.svg"
}

const js = {
  title: "JavaScript",
  image: "https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg"
}

const react = {
  title: "React",
  image: "https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
}

const rails = {
  title: "Ruby on Rails",
  image: "https://brandeps.com/icon-download/R/Rails-icon-vector-02.svg"
}

const sql = {
  title: "PostgreSQL",
  image: "https://brandeps.com/logo-download/P/PostgreSQL-logo-vector-01.svg"
}

const git = {
  title: "Git",
  image: "https://brandeps.com/icon-download/G/Git-icon-vector-04.svg"
}

const github = {
  title: "Github",
  image: "https://brandeps.com/icon-download/G/Github-icon-vector-22.svg"
}




function createSkill(skill) {
  const divItem = y("div")
  divItem.classList.add("img-skills-container")
  const itemImage = y("img")
  itemImage.classList.add("img-skills")
  itemImage.src = skill.image
  const itemParagraph = y("p")
  itemParagraph.innerHTML = skill.title

  divItem.append(itemImage, itemParagraph)

  document.getElementById("img-skills-wrapper").appendChild(divItem)
}

const skillsList = [
  html, css, sass, js, react, rails, sql, github, git
]

function renderSkill(skills) {
  skills.forEach(skill => {
    createSkill(skill)
  });
}

renderSkill(skillsList)
