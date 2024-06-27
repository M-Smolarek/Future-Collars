const elements = [1, 2, 3, 4, 5];

const modifyEverySecondElement = (items) => {
  return items.map((item, index) => {
    // if (index % 2 === 0) {
    //   return item;
    // }
    // return item + 1;
    return index % 2 === 0 ? item : item + 1;
  });
};

console.log(modifyEverySecondElement(elements));
