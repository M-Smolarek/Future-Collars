const elements = [1, 2, 3, 4, 5];

const multiplierValue = 2;

const multiplyBy = (items, multiplier) => {
  return items.map((item) => {
    return item * multiplier;
  });
};
console.log(multiplyBy(elements, multiplierValue));
