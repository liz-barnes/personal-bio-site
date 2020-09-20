import navbarEvents from './_navigation';

"use strict";

const projects = [
  {
    title: "Bear Watcher",
    screenshot: "http://g.recordit.co/9OI4LassSC.gif",
    description: "This application allows users to track a bear that they see out in the wild by uploading a picture!", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Bootstrap | Github",
    available: true,
    url: "https://lizb-bear-watcher.netlify.app/", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "cool project",
    screenshot: "/images/lyft-sticker-contest.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "cool project",
    screenshot: "/images/liz-pose.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "cool project",
    screenshot: "/images/kreamer-graphic.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "cool project",
    screenshot: "/images/ns-coaching-opp.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "cool project",
    screenshot: "/images/allyssa-flowers.png",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML | CSS | Vanilla JavaScript | Version Control with Github",
    available: false,
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
    if (`${projects[i].available}` === 'true') {
      domString += `<div class="project-card">`;
      domString += `<div class="title"><h3>${projects[i].title}</h3></div>`;
      domString += `<div class=""><img src=${projects[i].screenshot} alt=""></div>`;
      domString += `<div class="project-description"><h4>${projects[i].description}</h4></div>`;
      domString += `<div class="tech-used"><p>${projects[i].technologiesUsed}</p></div>`;
      domString += `<div class="project-link"><h4><a href=${projects[i].url}>Check it out!</a></h4></div>`;
      domString += `<div class="project-link"><p><a href=${projects[i].githubUrl}>Other projects on GitHub</a></p></div>`;
      domString += `</div>`;
    }
  }
  printToDom("projectsPage", domString);
};

const init = () => {
  createProjectCards();
  navbarEvents.navbarEvents();
};

init();

