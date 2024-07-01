// document.addEventListener("DOMContentLoaded", function () {});
//   const przykladowyTekst = document.getElementById("h1Id");
//   console.log(przykladowyTekst);
// });

const przykladowyTekst = "Przykładowy tekst";

const przykladowyTekst2 = document.getElementById("h1Id");

// console.log(przykladowyTekst);

// console.log(przykladowyTekst2);

// const fillElement = document.createElement (a) => {
//  return `Element <span>${parameter_name}</span>`;
//  console.log(fillElement(przykladowyTekst2));
// };

function fillElement(a) {
  const spanStart = document.createElement("<span>");
  const spanEnd = document.createElement("</span>");
  return `Element, spanStart, a, spanEnd`;
  console.log(fillElement(przykladowyTekst));
}

// document.addEventListener("DOMContentLoaded", function (event) {
//   const przykladowyTekst = document.getElementById("h1Id");
//   console.log(przykladowyTekst);
// });
