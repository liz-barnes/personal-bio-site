import navbarEvents from './components/_navigation';

import 'bootstrap';
import '../styles/main.scss';

// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint;
// };

// const createProjectCards = () => {
//   let domString = '';

// for (let i = 0; i < projects.length; i += 1) {
//   if (`${projects[i].available}` === 'true') {
//     domString = `<div class="project-card">
//     <div class="title"><h3>${projects[i].title}</h3></div>
//   <div class=""><img src=${projects[i].screenshot} alt=""></div>
//  <div class="project-description"><h4>${projects[i].description}</h4></div>
//   <div class="tech-used"><p>${projects[i].technologiesUsed}</p></div>
//    <div class="project-link"><h4><a href=${projects[i].url}>Check it out!</a></h4></div>
//    <div class="project-link"><p><a href=${projects[i].githubUrl}>Other projects on GitHub</a></p></div>
//     </div>`;
//   }
// }
//   printToDom('projectsPage', domString);
// };

const init = () => {
  // createProjectCards();
  navbarEvents.navbarEvents();
};

init();
