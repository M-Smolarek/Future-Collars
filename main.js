const button = document.getElementById("startTimeout");

const announcement = document.getElementById("boom");

button.addEventListener("click", (event) => {
  event.target.disabled = true;
  setTimeout(() => {
    announcement.textContent = "Boom!";
    event.target.disabled = false;
  }, 5000);
});
