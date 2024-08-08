class Fruit {
  constructor(name = "Unknown fruit", color = "Unknown color", sweetness = 5) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
    if (sweetness < 0) {
      this.sweetness = 0;
    }
    if (sweetness > 10) {
      this.sweetness = 10;
    }
  }
}

class Apple extends Fruit {
  constructor(
    goodForCider = false,
    goodForJuice = false,
    name,
    color,
    sweetness
  ) {
    super(name, color, sweetness);
    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
}
const apple = new Apple(true, false, "antonowka", "yellow", 5);

console.log(apple);
