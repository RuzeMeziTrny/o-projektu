'use strict';

/* ---------- HEADER ---------- */

const mainHeading = 'O projektu';

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
          <a class="nav__link" href="o-pavline.html">O Pavlíně</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="o-ivane.html">O Ivaně</a>
        </li>
      </ul>
    </nav>
    <h1 class="main-heading">${mainHeading}</h1>
  `;
  return HeaderElm;
};

/* ----------- ABOUT PROJECT SECTION ---------- */

const AboutProjectStory = () => {
  const aboutSection = document.createElement('section');
  aboutSection.className = `about about--upper`;
  aboutSection.innerHTML = `
    <img
      class="photo"
      src="img/foto_project3.jpg"
      alt="děti na houpačce"
    />
    <article class="about__text about__text--upper">
      <h3 class="text__heading">Mami, kam jdem? - příběh projektu</h3>
      <p>
        Každý rodič se s tím setkává téměř denně. Kam půjdeme na hřiště? Co
        budeme o víkendu dělat? Potřebujeme sehnat dobrého zubaře! A nejlépe,
        aby to nebylo moc daleko od bydliště, jelikož cestovat s malými dětmi
        není kolikrát zrovna jednoduché.
      </p>
      <p>
        Proto jsme se rozhodli zmapovat síť hřišť, heren, dětských areálů, ale
        třeba i kroužků, soukromých školek nebo dětských lékařů po Praze 15.
        Abychom už nemusely jako ostatní maminky hledat neustále dokola na
        Googlu, ptát se známých nebo na Facebooku, ale jednoduše použít naši
        aplikaci k výběru vhodného místa.
      </p>
      <p>
        Věříme, že tím ulehčíme život maminkám a tatínkům bydlících v naší
        městské části a okolí.
      </p>
    </article>
  `;
  return aboutSection;
};

const AboutProjectFunctionality = () => {
  const aboutSection = document.createElement('section');
  aboutSection.className = `about about--lower`;
  aboutSection.innerHTML = `
    <img
      class="photo"
      src="img/project_img.png"
      alt="mapa s filtry - jak projekt vypadá"
    />
    <article class="about__text about__text--lower">
      <h3 class="text__heading">Jak projekt vypadá?</h3>
      <p>
        Stěžejní prvek naší aplikace je vyhledávací mapa, na níž se dají
        vyfiltrovat jednotlivé kategorie. Mezi tyto kategorie patří: lékaři, venkovní areály, vnitřní areály, hřiště, soukromé školky, kroužky a baby-friendly restaurace a kavárny.
      </p>
      <p>
        Položky v kategorii si také můžete vyflitrovat dále - např. doktory
        podle jejich specializace nebo hřiště dle herních prvků.
      </p>
      <p>Vše se vám pak zobrazí přehledně na mapě.</p>
      <p>
        Nevidíte vaše oblíbené místo, které chcete doporučit i ostatním?
        Použijte náš kontaktní formulář a napište nám!
      </p>
    </article>
  `;

  return aboutSection;
};

document.querySelector('#app').appendChild(Header());
document.querySelector('#app').appendChild(AboutProjectStory());
document.querySelector('#app').appendChild(AboutProjectFunctionality());
