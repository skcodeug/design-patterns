const laptop = require("./models/laptop");

class ShoppingCart {
  inventory = [];

  addInventory(someInventory) {
    return this.inventory.push(someInventory);
  }

  removeInventory(someInventory) {
    const index = this.inventory.indexOf(someInventory);
    return this.inventory.splice(index, 1);
  }

  listInventory() {
    var price = 0;
    for (var i = 0; i < this.inventory.length; i++) {
      console.log(this.inventory[i]);
      price += this.inventory[i].price;
    }
    console.log(`There are ${this.inventory.length} items costing $${price}.`);
  }

  summaryInventory() {
    var price = 0;
    for (var i = 0; i < this.inventory.length; i++)
      price += this.inventory[i].price;
    console.log(`There are ${this.inventory.length} items costing $${price}.`);
  }
}

module.exports = ShoppingCart;
