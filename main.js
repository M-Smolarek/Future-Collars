const form = document.getElementById("converter");
const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  errorMessage.textContent = "";
  result.textContent = "";
  const button = event.target.convert;
  button.disabled = true;

  const amount = event.target.amount.value;
  const currency = event.target.currency.value;

  const url = `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/today/`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject();
      }
      return response.json();
    })
    .then((data) => {
      if (
        data?.rates?.length > 0 &&
        //        typeof data.rates[0].mid === "number" &&
        data.rates[0].mid > 0
      ) {
        const rate = data.rates[0].mid;
        result.textContent = (amount * rate).toFixed(2);
      } else {
        return Promise.reject();
      }
    })
    .catch(() => {
      errorMessage.textContent = "Błąd po bieranych danych";
    })
    .finally(() => {
      button.disabled = false;
    });
});
