const var_form = document.getElementById("form_id");
const var_result = document.getElementById("input_result");

const sayHello = (parameter_name) => {
  return `Hello ${parameter_name || "world"}`;
};

const colorizeElement = (item) => {
  item.style.color = "#f1f1f1";
  item.style.fontSize = "12px";
  item.classList.add("newClass");
  item.setAttribute("data-tag", item.tagName);
  return item;
};

var_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value_from_input = event.target.input_name.value.trim();
  var_result.textContent = sayHello(value_from_input);
  colorizeElement(var_result);
});
