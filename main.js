const var_form = document.getElementById("active_field_id");

const form_result = document.getElementById("result_id");

const compare = (a, b) => {
  // if (a > b) {
  //   return 1;
  // }
  // if (a < b) {
  //   return -1;
  // }
  // return 0;
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
};

var_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const a_value = event.target.input_1_name.value.trim();
  const b_value = event.target.input_2_name.value.trim();
  form_result.textContent = compare(a_value, b_value);
});
