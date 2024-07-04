const button = document.getElementById("startTimeout");

const announcement = document.getElementById("boom");

setTimeout(() => {
  announcement.textContent = "Boom!";
}, 5000);

button.addEventListener("submit", (event) => {
  event.preventDefault();
  const announcement_text = event.target.buttonName.value.trim();
  announcement.textContent = setTimeout(announcement_text);
});
