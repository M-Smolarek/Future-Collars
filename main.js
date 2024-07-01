const elements1 = [1, 2, -3, 4, 5];

const elements2 = [-6, 7, -9, 10];

const filterItems = (a, b) => {
  const combineElements = [...a, ...b];
  return combineElements.filter((item) => {
    return item > 0;
  });
};

console.log(filterItems(elements1, elements2));
