const URL = "https://api.thecatapi.com/v1/images/search";

const getKittenByAxios = () => {
  axios
    .get(URL)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      alert("Wystąpił błąd");
    });
};
getKittenByAxios();
