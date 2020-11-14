'use strict';

/* ---------- HEADER ---------- */

const mainHeading = "Mami, kam jdem?";
const subHeading = "Projekt pro rodiče s dětmi v městské části Praha 15";


const Header = (props) => {
  const HeaderElm = document.createElement("header");
  HeaderElm.className = "header";
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
  ` ;
  return HeaderElm;
};

/* ---------- TAB SECTION ---------- */

const tabField = [
{content: ` Připravili jsem pro vás webovou aplikaci, která mapuje místa na Praze
15, která můžete navštívit s dětmi. Ať za zábavou nebo naplnit hladové
bříško, ale třeba také najít dobrého dětského doktora.`,
href: `o-projektu.html`,
button: `Dozvědět se více o projektu`,
},
{content: `Pavlína je jedna z autorek webové aplikace Mami, kam jdem? Je studentkou Czechitas Digitální akademie Web. Pro projekt se rozhodla, protože je maminkou a bydlí na Praze 15.` ,
href: `o-pavline.html`,
button: `Dozvědět se více o Pavlíně`,
},
{content: `Druhou půlkou autorského týmu je Ivana, která také studuje Digitální akademii zaměřenou na tvorbu webu. Rovněž bydlí na Praze 15 a podobně jako Pavlína zná rodičovské radosti a strasti.`,
href: `o-ivane.html`,
button: `Dozvědět se více o Ivaně`,
}
]

const TabSection = (props) => {
const tabSectionElm = document.createElement("section");
tabSectionElm.className = "tab";
tabSectionElm.innerHTML = `
<p class="tab__content">${props.content}</p>
<a href="${props.href}">
  <button class="tab__button">${props.button}</button>
</a>
`;
return tabSectionElm
}

const TabSectionList = () => {
  const listElm = document.createElement("div");
  listElm.className = "homepage__container";

  tabField.forEach((prop) => {
    listElm.appendChild(TabSection(prop))
  });
return listElm
};

document.querySelector('#app').appendChild(Header());
document.querySelector('#app').appendChild(TabSectionList());