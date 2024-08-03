const button = document.getElementById("getCurrencies");

button.addEventListener("click", () => {
  fetch("https://api.frankfurter.app/latest")
    .then((response) => {
      if (!response.ok) {
        return Promise.reject();
      }
      return response.json();
    })
    .then((data) => {
      if (!data.rates) {
        return Promise.reject();
      }
    })
    .catch((error) => {
      alert("Wystąpił błąd");
    });
});
