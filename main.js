const fillElement = (text) => {
  const spanFunction = document.createElement("span");
  spanFunction.textContent = text;
  return spanFunction;
};

const h1Text = document.getElementById("h1Id")?.textContent;

const section = document.getElementById("sectionId");

const span = fillElement(h1Text);

section.appendChild(span);
