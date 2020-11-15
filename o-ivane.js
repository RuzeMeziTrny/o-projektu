'use strict';

/* ---------- HEADER ---------- */

const mainHeading = 'O autorkách';
const subHeading = 'Ivana Růžičková';

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
          <a class="nav__link" href="o-pavline.html">O Pavlíně</a>
        </li>
      </ul>
    </nav>
    <h1 class="main-heading">${mainHeading}</h1>
    <h2 class="sub-heading">${subHeading}</h2>
  `;
  return HeaderElm;
};

/* ---------- IVANA SECTION DATA ---------- */

const skillsIvana = [
  {
    question: 'Kurzy',
    answer:
      'Czechitas kurzy Tvořím Web od A do Z 1, Tvořím Web od A do Z 2, Digitální akademie Web',
  },
  {
    question: 'Dovednosti',
    answer:
      'HTML, CSS, Sass, Bootstrap, BEM, JavaScript, React; Miro, Figma, Trello',
  },
  {
    question: 'Pracovní zkušenosti',
    answer: 'koordinátor tréninků bezpečnosti na cestách',
  },
];

const quizIvana = [
  {
    question: 'Nejoblíbenější aktivita',
    answer: 'tanec a jinak už se těším na odpočinek po DA :-)',
  },
  { question: 'Nejoblíbenější seriál', answer: 'Castle na zabití' },
  { question: 'Nejoblíbenější kniha', answer: 'Saturnin od Zdeňka Jirotky' },
  { question: 'Nejoblíbenější místo', answer: 'Dijon' },
  {
    question: 'Nejoblíbenější jídlo',
    answer: 'kuře na paprice, ale s knedlíkem!',
  },
];

/* ---------- IVANA SECTION COMPONENTS ---------- */

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
    <img class="photo" src="img/foto_Ivana1.JPG" alt="Ivana" />
    <article class="about__text about__text--upper">
      <h3 class="text__heading">O mně</h3>
  ` +
    AboutUsList(skillsIvana).outerHTML +
    `
      <div class="logo__container">
        <a href="https://www.linkedin.com/in/ivanaruzickova/">
          <img class="logo" src="img/logoLI.png" alt="Linked-in logo" />
        </a>
        <a href="https://github.com/RuzeMeziTrny">
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
    <img class="photo" src="img/foto_Ivana2.jpg" alt="Ivana se synem" />
    <article class="about__text about__text--lower">
      <h3 class="text__heading">A co dál? Malý kvíz</h3>
  ` +
    AboutUsList(quizIvana).outerHTML +
    `</article>`;

  return aboutSection;
};

document.querySelector('#app').appendChild(Header());
document.querySelector('#app').appendChild(AboutUsSectionSkills());
document.querySelector('#app').appendChild(AboutUsSectionQuiz());
