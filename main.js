const button = document.getElementById("searchKitty");

button.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => {
      if (!response.ok) {
        return Promise.reject();
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data?.length > 0 && data[0].url) {
        const IMG = document.createElement("img");
        IMG.src = data[0].url;
        IMG.setAttribute("data-test", "img-kitty");
        document.body.appendChild(IMG);
      }
    })
    .catch((error) => {
      alert("Wystąpił błąd");
    });
});
