const form = document.getElementById("form_id");
const result = document.getElementById("input_result");

const sayHello = (parameter_name) => {
  return `Hello ${parameter_name || "world"}`;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = event.target.input_name.value.trim();
  result.textContent = sayHello(value);
});
