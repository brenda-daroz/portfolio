import { h } from "./static_projects.js"

const weatherApp = {
  title: "Weather App",
  image: "images/weather-app.png",
  liveCode: "https://brenda-daroz.github.io/weather-app-react/",
  gitHub: "https://github.com/brenda-daroz/weather-app-react",
  p: ["Built with React",
    "Used API calls from OpenWeatherMap to fetch weather information",
    "Used Unsplash API to fetch background images that dynamically change based on the weather"],
  language: "react"

}

const movieSearchApp = {
  title: "Movie Search App",
  image: "images/movie-search-app.png",
  liveCode: "https://brenda-daroz.github.io/movie-search-app/",
  gitHub: "https://github.com/brenda-daroz/movie-search-app",
  p: ["Built with React",
    "Used API calls from The Movie Database (TMDB) to fetch movie information",
    "Used search functionality to filter movies by title"],
  language: "react"
}

const miseEnPlace = {
  title: "Mise en place",
  image: "images/mise-en-place.png",
  liveCode: "https://www.mise-en-place.fun/",
  gitHub: "https://github.com/brenda-daroz/mise-en-place",
  p: ["Web application to help users search recipes and have a nice user experience",
    "Built with Ruby on Rails, StimulusJS, PostgreSQL, and Bootstrap",
    "Used Spoonacular API to fetch recipes and ingredients",
    "Used Cloudinary API to upload and store images",
    "Used Active Storage to store images in the database",
    "Used StimulusJS to add functionality to change update portion size and units measurement",
    "Search functionality to filter recipes by title and ingredients",
    "Cooking mode to display the steps of the recipe",
  ],
  language: "ruby"
}

function createProject(project) {
  const divItem = h("div")
  divItem.classList.add("main-projects__wrapper")
  const itemParagraph = h("h3")
  itemParagraph.classList.add("projects__item--title", "main-project-title")
  itemParagraph.innerHTML = project.title
  const itemImage = h("img")
  itemImage.classList.add("main-project-img")
  itemImage.src = project.image
  const divContent = h("div")
  divContent.classList.add("main-project-content")
  const divText = h("div")
  divText.classList.add("main-project-text")
  divText.innerHTML = itemParagraph.outerHTML
  for (let i = 0; i < project.p.length; i++)
    divText.innerHTML += "<p>" + project.p[i] + "</p>";
  const ul = h("ul")
  const li = h("li")
  li.classList.add("main-project-buttons")
  const aLiveCode = h("a")
  aLiveCode.classList.add("main-project-button")
  const aGitHub = h("a")
  aGitHub.classList.add("main-project-button")
  aLiveCode.href = project.liveCode
  aGitHub.href = project.gitHub
  aLiveCode.innerHTML = "Live Code"
  aGitHub.innerHTML = "GitHub"
  aLiveCode.target = "_blank"
  aGitHub.target = "_blank";

  divContent.append(itemImage, divText)
  divItem.append(divContent)
  divText.append(ul)
  ul.appendChild(li)
  li.append(aLiveCode, aGitHub)

  if (project.language == "react") {
    document.getElementById("react-projects__container").appendChild(divItem)
  } else if (project.language == "ruby") {
    document.getElementById("ruby-projects__container").appendChild(divItem)
  }
}

let projects = [weatherApp, movieSearchApp, miseEnPlace]

function renderProject(projects) {
  projects.forEach(project => {
    createProject(project)
  });
}

renderProject(projects)
