const var_form = document.getElementById("form_id");
const var_result = document.getElementById("input_result");

const sayHello = (parameter_name) => {
  return `Hello ${parameter_name || "world"}`;
};

var_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = event.target.input_name.value.trim();
  var_result.textContent = sayHello(value);
  var_result.style.color = "red";
});
