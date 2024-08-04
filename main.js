const showCurrencies = document.getElementById("getCurrencies");
const showRate = document.getElementById("getRate");
showRate.style.display = "none";

const select = document.createElement("select");

const result = document.createElement("h2");
result.classList.add("result");

let rates = {};

showCurrencies.addEventListener("click", () => {
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
      rates = data.rates; //w wierszach 20-35 mamy dostep do danych z API
      select.replaceChildren();
      const currencies = Object.keys(data.rates);
      currencies.forEach((item) => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
      });
      document.body.appendChild(select);
      showRate.style.display = "inline-block";
    })
    .catch((error) => {
      alert("Wystąpił błąd");
    });
});

showRate.addEventListener("click", () => {
  if (!select.value) {
    return;
  }
  const rate = rates[select.value]; //szukamy elementu rates dla wybranego klucza z listy rozwijanej(select)
  result.textContent = `EUR/${select.value}: ${rate}`;
  document.body.appendChild(result);
});
