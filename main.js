const elements = [1, 2, 3, 4, 5];

let multiplier = 2;

const multiplyBy = elements.map((number) => {
  for (let i = 0; i < elements.length; i++) {
    return number * multiplier;
  }
});
console.log(multiplyBy);
