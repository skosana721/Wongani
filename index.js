const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i in splitText) {
  text.innerHTML += `<span>${splitText[i]}</span>`;
}

let char = 0;

const onTick = () => {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
};
let timer = setInterval(onTick, 50);

const complete = () => {
  clearInterval(timer);
  timer = null;
};

// Show or hide progress-bar
const skills = document.querySelector(".skills-section");
const progressBars = document.querySelectorAll(".progress-bar");

const showProgress = () => {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
};
const hideProgress = () => {
  progressBars.forEach((progressBar) => {
    progressBar.style.opacity = 0;
    progressBar.style.width = 0;
  });
};
window.addEventListener("scroll", () => {
  const sectionPos = skills.getBoundingClientRect().top;
  const screenPos = window.innerHeight;
  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

const menu = document.querySelector(".menu-toggle");
const navBar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-bar");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navBar.classList.toggle("active");
});
