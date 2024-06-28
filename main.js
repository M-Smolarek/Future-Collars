const elements = [1, 2, 3, 4, 5];

const iterateAndSum = (items) => {
  return items.reduce((acc, number) => {
    return acc + number;
  }, 0);
};
console.log(iterateAndSum(elements));
