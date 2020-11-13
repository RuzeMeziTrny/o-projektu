'use strict';

/* ---------- DATA PRO SEKCE O NÁS ---------- */

const skillsP = [
  {
    category: 'Kurzy',
    value: '',
  },
  {
    category: 'Dovednosti',
    value: '',
  },
  {
    category: 'Pracovní zkušenosti',
    value: '',
  },
];

const skillsI = [
  {
    category: 'Kurzy',
    value:
      'Czechitas kurzy Tvořím Web od A do Z 1, Tvořím Web od A do Z 2, Digitální akademie Web',
  },
  {
    category: 'Dovednosti',
    value:
      'HTML, CSS, Sass, Bootstrap, BEM, JavaScript, React; Miro, Figma, Trello',
  },
  {
    category: 'Pracovní zkušenosti',
    value: 'koordinátor tréninků bezpečnosti na cestách',
  },
];

const quizP = [
  { question: 'aktivita', answer: '' },
  { question: 'seriál', answer: '' },
  { question: 'kniha', answer: '' },
  { question: 'místo', answer: '' },
  { question: 'jídlo', answer: '' },
];

const quizI = [
  { question: 'aktivita', answer: 'tanec' },
  { question: 'seriál', answer: 'Castle na zabití' },
  { question: 'kniha', answer: 'Saturnin od Zdeňka Jirotky' },
  { question: 'místo', answer: 'Dijon <3' },
  { question: 'jídlo', answer: 'kuře na paprice' },
];

/* ---------- KOMPONENTY PRO SEKCE O NÁS ---------- */

const AboutUsListItem = (props) => {
  const aboutListItem = document.createElement('li');
  aboutListItem.className = 'about__list-item';
  aboutListItem.innerHTML = `
    <h4 class="about__list-heading">${props.category}</h4>
    <p>${props.value}</p>
  `;

  return aboutListItem;
};

const AboutUsList = (props) => {
  const aboutList = document.createElement('ul');
  aboutList.className = 'about__list';

  props.forEach((prop) => {
    aboutList.appendChild(AboutUsListItem(prop));
  });

  return aboutList;
};

const AboutUsSection = (side) => {
  const aboutSection = document.createElement('section');
  aboutSection.className = `about about--${side}`;

  aboutSection.innerHTML =
    `
    <img class="photo" src="#" alt="Ivana" />
    <div class="about__text about__text--${side}">
      <h3 class="text__heading">O mně</h3>
  ` +
    AboutUsList(skillsI).outerHTML +
    `
      <div class="logo_container">
        <img class="logo" src="logoLI.png" alt="Linked-in logo" />
        <img class="logo logoGH" src="logoGH.png" alt="GitHub logo" />
      </div>
    </div>
  `;

  return aboutSection;
};

const upperSide = 'upper';
document.querySelector('#about-ivana').appendChild(AboutUsSection(upperSide));
