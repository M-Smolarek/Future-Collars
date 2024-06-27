const elements = [1, 2, 3, 4, 5];

const modifyEverySecondElement = elements.map((number) => {
  for (let i = 0; i < elements.length; i = i + 2) {
    return elements[i] + 1;
  }
});
console.log(modifyEverySecondElement);
