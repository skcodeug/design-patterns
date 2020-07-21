const Item = require("../Cart/Item")

class LaptopAdapter extends Item {
  constructor(quantity, laptop) {
    this.quantity = this.quantity;
    this.laptop = this.laptop;
  }

  getQuantity() {
    return this.laptop.quantity;
  }

  getPrice() {
    return this.laptop.price;
  }

  getDescription() {
    return `${this.laptop.battery} ${this.laptop.ram} ${this.laptop.hdd} ${this.laptop.screenSize} ${this.laptop.color}`;
  }
}

module.exports = LaptopCart;