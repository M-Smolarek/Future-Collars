const form_1 = document.getElementById("active_field_1_id");
const form_1_result = document.getElementById("input_1_result");

const form_2 = document.getElementById("active_field_2_id");
const form_2_result = document.getElementById("input_2_result");

const area = (form_1_result, form_2_result) => {
  return form_1(value) ** form_2(value);
};

form_1.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = event.target.input_1_name.value.trim();
});

form_2.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = event.target.input_2_name.value.trim();
});
