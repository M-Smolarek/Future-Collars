const button = document.getElementById("getGoat");

button.addEventListener("click", () => {
  const IMG = document.createElement("img");
  IMG.src = "https://placegoat.com/300px/200px";
  IMG.setAttribute("data-test", "img-goat");
  document.body.appendChild(IMG);
});
