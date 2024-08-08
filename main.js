class Fruit {
  constructor(name, color, sweetness) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
  }
}

class Apple extends Fruit {
  constructor(goodForCider, goodForJuice, name, color, sweetness) {
    super(name, color, sweetness);
    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
}
const apple = new Apple(true, false, "antonowka", "yellow", 5);

console.log(apple);
