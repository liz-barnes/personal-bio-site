"use strict";

const projects = [
  {
    title: "Cool Project",
    screenshot: "/images/kitters.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "/images/lyft-sticker-contest.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "/images/liz-pose.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "/images/kreamer-graphic.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "/images/ns-coaching-opp.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "/images/allyssa-flowers.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = "";

  for (let i = 0; i < projects.length; i++) {
    domString += `<div class="project-card">`;
    domString += `<div class="title"><h3>${projects[i].title}</h3></div>`;
    domString += `<div class="project-image"><img src=${projects[i].screenshot} alt=""></div>`;
    domString += `<div class="project-description"><h3>${projects[i].description}</h3></div>`;
    domString += `<div class="tech-used"><p>${projects[i].technologiesUsed}</p></div>`;
    domString += `<div class="project-link"><h3><a href=${projects[i].url}>Check it out!</a></h3></div>`;
    domString += `<div class="project-link"><p><a href=${projects[i].githubUrl}>Other projects on GitHub</a></p></div>`;
    domString += `</div>`;

    if (projects.available === true) {
      
    }
  }
  printToDom("projectsPage", domString);
};

const init = () => {
  createProjectCards();
};

init();

