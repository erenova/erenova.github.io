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
    document.querySelectorAll("[data-progress]").forEach((e) => {
      progressAnimation(e);
    });
  });
});

domItems.homeLink.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll("[data-progress]").forEach((e) => {
      resetAnimations();
    });
  });
});
domItems.aboutLink.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll("[data-progress]").forEach((e) => {
      resetAnimations();
    });
  });
});
