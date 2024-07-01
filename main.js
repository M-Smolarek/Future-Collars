const elements1 = [1, 2, -3, 4, 5];

const elements2 = [-6, 7, -9, 10];

const filterItems = (a, b) => {
  const combineElements = [...elements1, ...elements2];
  return combineElements.filter((item) => {
    return item > 0;
  });
};

console.log(filterItems(elements1, elements2));
