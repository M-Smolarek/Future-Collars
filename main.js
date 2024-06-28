const elements1 = [1, 2, -3, 4, 5];

const elements2 = [-6, 7, -9, 10];

const combineElements = [...elements1, ...elements2];

const filterItems = (sumArray) => {
  return sumArray.filter((number) => {
    return number > 0;
  });
};
