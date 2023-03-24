import { h } from "./static_projects.js"

const weatherApp = {
  title: "Weather App",
  image: "images/weather-app.png",
  liveCode: "https://brenda-daroz.github.io/weather-app-react/",
  gitHub: "https://github.com/brenda-daroz/weather-app-react",
  p: ["Built with React",
    "Used API calls from WeatherApp to fetch weather information",
    "Used Unsplash API to fetch background images that dynamically change based on the weather"]
}

const movieSearchApp = {
  title: "Movie Search App",
  image: "images/movie-search-app.png",
  liveCode: "https://brenda-daroz.github.io/movie-search-app/",
  gitHub: "https://github.com/brenda-daroz/movie-search-app",
  p: ["Built with React",
    "Used API calls from The Movie Database (TMDB) to fetch movie information",
    "Used search functionality to filter movies by title"]
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

  document.getElementById("react-projects__container").appendChild(divItem)
}

let projects = [weatherApp, movieSearchApp]

function renderProject(projects) {
  projects.forEach(project => {
    createProject(project)
  });
}

renderProject(projects)
