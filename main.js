const URL = "https://api.thecatapi.com/v1/images/search";

axios
  .get(URL)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    alert("Wystąpił błąd");
  });
