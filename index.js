const h = document.createElement.bind(document)

const nftPreview = {
    title: "Nft Preview Card",
    image: "images/nft-preview-card.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/nft-preview-card-component-main/index.html",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/nft-preview-card-component-main"
}

const qrCodeComponent = {
    title: "Qr Code Component",
    image: "images/qr-code-component.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/qr-code-component/index.html",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/qr-code-component"
}

const baseApparel = {
    title: "Base Apparel Coming Soon",
    image: "images/base-apparel-coming-soon.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/base-apparel-coming-soon-master/",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/base-apparel-coming-soon-master"
}

const timeTracking = {
    title: "Time Tracking Dashboard",
    image: "images/time-tracking-dashboard.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/time-tracking-dashboard-main/",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/time-tracking-dashboard-main"
}

const clipboardLanding = {
    title: "Clipboard Landing Page",
    image: "images/clipboard-landing-page.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/clipboard-landing-page-master/",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/clipboard-landing-page-master"
}

const formValidation = {
    title: "Form Validation",
    image: "images/form-validation.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/form-validation/",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/form-validation"
}

const tipCalculator = {
    title: "Tip Calculator",
    image: "images/splitter-tip.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/tip-calculator-app-main/",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/tip-calculator-app-main"
}

const adviceGenerator = {
    title: "Advice Generator",
    image: "images/advice-generator.png",
    liveCode: "https://brenda-daroz.github.io/frontend-mentor/advice-generator-app-main/",
    gitHub: "https://github.com/brenda-daroz/frontend-mentor/tree/master/advice-generator-app-main"
}

function createProject(project) {
    const divItem = h("div")
    divItem.classList.add("projects__item")
    const itemParagraph = h("p")
    itemParagraph.classList.add("projects__item--title")
    itemParagraph.innerHTML = project.title
    const itemImage = h("img")
    itemImage.classList.add("img")
    itemImage.src = project.image
    const ul = h("ul")
    const li = h("li")
    const aLiveCode = h("a")
    const aGitHub = h("a")
    aLiveCode.href = project.liveCode
    aGitHub.href = project.gitHub
    aLiveCode.innerHTML = "Live Code"
    aGitHub.innerHTML = "GitHub"
    aLiveCode.target = "_blank"
    aGitHub.target = "_blank";

    divItem.append(itemParagraph, itemImage, ul)
    ul.appendChild(li)
    li.append(aLiveCode, aGitHub)

    document.getElementById("projects__container").appendChild(divItem)
}

const projectsList = [
    qrCodeComponent,
    nftPreview,
    baseApparel,
    timeTracking,
    clipboardLanding,
    formValidation,
    tipCalculator,
    adviceGenerator
]

function renderProject(projects) {
    projects.forEach(project => {
        createProject(project)
    });
    // for (let i = 0; i < projects.length; i++) {
    //     const element = projects[i];
    //     createProject(element)
    // }
}

renderProject(projectsList)