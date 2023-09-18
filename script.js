class Project {
  constructor(repoTitle, projectTitle, description, isLargeImage = false) {
    this.repoTitle = repoTitle;
    this.projectTitle = projectTitle;
    this.description = description;
    this.isLargeImage = isLargeImage;
  }

  getImage() {
    return `utils/${this.repoTitle}.png`;
  }
  getDemo() {
    return `${demoLink}${this.repoTitle}`;
  }
  getSource() {
    return `${githubLink}${this.repoTitle}`;
  }
}
const projectList = [];
const demoLink = `https://erenova.github.io/`;
const githubLink = `https://github.com/erenova/`;

function addNewProject(repoTitle, title, description, isLargeImage = false) {
  const newProject = new Project(repoTitle, title, description, isLargeImage);
  projectList.push(newProject);
  renderProjects();
}
function renderProjects() {
  const buttonHolderDOM = document.querySelector("#button-holder");
  const modalHolderDOM = document.querySelector("#modal-holder");
  buttonHolderDOM.innerHTML = "";
  modalHolderDOM.innerHTML = "";
  for (let i = 0; i < projectList.length; i++) {
    const currentProjectObj = projectList[i];

    let largeImageChecker =
      currentProjectObj.isLargeImage === true ? "large-images" : "image";
    let newButton = document.createElement("div");
    newButton.innerHTML = `
    <button type="button" data-bs-toggle="modal" data-bs-target="#modal${i}"
    class="text-center btn btn-outline-success d-flex align-items-center justify-content-center"
    style="width: 10rem;height: 4rem;">
    ${currentProjectObj.projectTitle}
</button>`;
    let newModal = document.createElement("div");
    newModal.innerHTML = `<div class="modal fade" id="modal${i}">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">

            <div class="modal-header">
                <h4 class="modal-title">${
                  currentProjectObj.projectTitle
                } Project</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
                <a href="${currentProjectObj.getDemo()}" target="_blank"><img src="${currentProjectObj.getImage()}"
                        alt="Project example image" style="width: 100%;" class="${largeImageChecker}" data-bs-toggle="tooltip"
                        data-bs-placement="bottom" title="Click Me!"></a>
                <div class="text-section p-2 text-center fs-4">
                    <p>${currentProjectObj.description}</p>
                    <p><a href="${currentProjectObj.getDemo()}" class="link-primary" target="_blank">try
                            it
                            here!</a></p>
                    <p><a href="${currentProjectObj.getSource()}" class="link-secondary" target="_blank">
                            Source Code</a></p>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>`;
    buttonHolderDOM.appendChild(newButton);
    modalHolderDOM.appendChild(newModal);
  }
}

const textSettings = {
  links: ["https://github.com/erenova"],
};

const domItems = {
  homeLink: document.querySelectorAll('[href="#home"]'),
  progressLink: document.querySelectorAll('[href="#progress"]'),
  aboutLink: document.querySelectorAll('[href="#about"]'),
};

const domFunctions = {
  getProgressNumber(value) {
    return parseFloat(value.style.width.replace("%", ""));
  },
};
function progressAnimation(item) {
  const lastVal = item.dataset.progress;
  item.style.width = `${lastVal}%`;
}

function resetAnimations() {
  document.querySelectorAll("[data-progress]").forEach((e) => {
    e.style.width = "0%";
  });
}

domItems.progressLink.forEach((e) => {
  e.addEventListener("click", () => {
    domItems.homeLink.forEach((e) => {
      e.classList.remove("active");
    });
    domItems.aboutLink.forEach((e) => {
      e.classList.remove("active");
    });
    domItems.progressLink[0].classList.add("active");
    domItems.progressLink[1].classList.add("active");
    document.querySelectorAll("[data-progress]").forEach((e) => {
      progressAnimation(e);
    });
  });
});

domItems.homeLink.forEach((e) => {
  e.addEventListener("click", () => {
    domItems.aboutLink.forEach((e) => {
      e.classList.remove("active");
    });
    domItems.progressLink.forEach((e) => {
      e.classList.remove("active");
    });
    domItems.homeLink[0].classList.add("active");
    domItems.homeLink[1].classList.add("active");
    document.querySelectorAll("[data-progress]").forEach((e) => {
      resetAnimations();
    });
  });
});
domItems.aboutLink.forEach((e) => {
  e.addEventListener("click", () => {
    domItems.homeLink.forEach((e) => {
      e.classList.remove("active");
    });
    domItems.progressLink.forEach((e) => {
      e.classList.remove("active");
    });
    domItems.aboutLink[0].classList.add("active");
    domItems.aboutLink[1].classList.add("active");
    document.querySelectorAll("[data-progress]").forEach((e) => {
      resetAnimations();
    });
  });
});

addNewProject(
  `tic-tac-toe`,
  `Tic Tac Toe`,
  "Tic Tac Toe project with AI, three option of Ai, easy med and hard modes",
  true
);

addNewProject(
  `library`,
  `Library`,
  `Library Project! Made With html5&CSS3&JavaScript, responsive!`,
  true
);

addNewProject(
  `calculator`,
  `Calculator`,
  `This Calculator project made with Html5, CSS3, and vanilla JavaScript`,
  true
);
addNewProject(
  `sketchpad`,
  `Sketchpad`,
  `This project briefly provides you a sketch pad to draw, set grid, color palette and more...`,
  true
);
addNewProject(
  `landing-page`,
  `Landing Page`,
  `Landing page project for certain css features`,
  true
);
addNewProject(
  `admin-dashboard`,
  `Admin Dashboard`,
  `Admin dashboard project for testing css Grid&Flexbox`,
  true
);

addNewProject(
  `rock-paper-scissors`,
  `Rock Paper Scissors`,
  `This project briefly provides you a Rock Paper Scissors game`,
  true
);
