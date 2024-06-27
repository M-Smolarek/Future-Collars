const elements_1 = [1, 2, -3, 4, 5];

const elements_2 = [-6, 7, -9, 10];

const filterItems_1 = elements_1.filter((number) => {
  return number > 0;
});

const filterItems_2 = elements_2.filter((number) => {
  return number > 0;
});

const filterItems = [filterItems_1, filterItems_2];
console.log(filterItems);
