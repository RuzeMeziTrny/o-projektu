'use strict';

/* ---------- HEADER ---------- */

const mainHeading = 'O autorkách';
const subHeading = 'Pavlína Baldová';

const Header = () => {
  const HeaderElm = document.createElement('header');
  HeaderElm.className = 'header';
  HeaderElm.innerHTML = `
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a class="nav__link" href="index.html">Domů</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="o-projektu.html">O projektu</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="o-ivane.html">O Ivaně</a>
        </li>
      </ul>
    </nav>
    <h1 class="main-heading">${mainHeading}</h1>
    <h2 class="sub-heading">${subHeading}</h2>
  `;
  return HeaderElm;
};

/* ---------- PAVLINA SECTION DATA ---------- */

const skillsPavlina = [
  {
    question: 'Kurzy',
    answer:
      'Tvořím Web 1 - Czechitas, Tvořím Web 2 - Czechitas, Digitální akademie Web',
  },
  {
    question: 'Dovednosti',
    answer: 'HTML, CSS, Sass, BEM, JavaScript, React, Figma',
  },
  {
    question: 'Pracovní zkušenosti',
    answer: 'store manager, senior bank assistent',
  },
];

const quizPavlina = [
  {
    question: 'Nejoblíbenější aktivita',
    answer: 'Být s rodinou a přáteli. Odpočívat, jíst, jezdit na kole',
  },
  {
    question: 'Nejoblíbenější seriál',
    answer: 'Simpsonovi, Friends, IT Crowd a mnoho dalších',
  },
  { question: 'Nejoblíbenější kniha', answer: '1984 - George Orwell' },
  { question: 'Nejoblíbenější místo', answer: 'Domov - město Praha' },
  {
    question: 'Nejoblíbenější jídlo',
    answer: 'Něco slaného, pak něco sladkého a to pořád dokola.',
  },
];

/* ---------- PAVLINA SECTION COMPONENTS ---------- */

const AboutUsListItem = (props) => {
  const aboutListItem = document.createElement('li');
  aboutListItem.className = 'about__list-item';
  aboutListItem.innerHTML = `
    <h4 class="about__list-heading">${props.question}</h4>
    <p>${props.answer}</p>
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

const AboutUsSectionSkills = () => {
  const aboutSection = document.createElement('section');
  aboutSection.className = `about about--upper`;

  aboutSection.innerHTML =
    `
    <img class="photo" src="img/foto_Pavlina1.jpg" alt="Pavlína" />
    <article class="about__text about__text--upper">
      <h3 class="text__heading">O mně</h3>
  ` +
    AboutUsList(skillsPavlina).outerHTML +
    `
      <div class="logo__container">
        <a href="https://www.linkedin.com/in/pavl%C3%ADna-baldov%C3%A1-79869217a/">
          <img class="logo" src="img/logoLI.png" alt="Linked-in logo" />
        </a>
        <a href="https://github.com/PavlinaBaldova">
          <img class="logo" src="img/logoGH.png" alt="GitHub logo" />
        </a>
      </div>
    </article>
  `;

  return aboutSection;
};

const AboutUsSectionQuiz = () => {
  const aboutSection = document.createElement('section');
  aboutSection.className = `about about--lower`;

  aboutSection.innerHTML =
    `
    <img class="photo" src="img/foto_Pavlina2.jpg" alt="Pavlína se synem" />
    <article class="about__text about__text--lower">
      <h3 class="text__heading">A co dál? Malý kvíz</h3>
  ` +
    AboutUsList(quizPavlina).outerHTML +
    `</article>`;

  return aboutSection;
};

document.querySelector('#app').appendChild(Header());
document.querySelector('#app').appendChild(AboutUsSectionSkills());
document.querySelector('#app').appendChild(AboutUsSectionQuiz());
