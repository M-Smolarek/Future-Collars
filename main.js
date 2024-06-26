const var_form = document.getElementById("active_field_id");

const form_result = document.getElementById("result_id");

const pow = (a, b) => {
  return a ** b;
};

var_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const a_value = event.target.input_1_name.value.trim();
  const b_value = event.target.input_2_name.value.trim();
  form_result.textContent = pow(a_value, b_value);
});
