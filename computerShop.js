const laptop = require('./models/laptopModel');

class computerShop {
  inventory = [];

  addInventory(someInventory) {
    return this.inventory.push(someInventory);
  }

  removeInventory(someInventory) {
    const index = this.inventory.indexOf(someInventory);
    return this.inventory.splice(index, 1);
  }

  listInventory() {
    for(var i=0; i<this.inventory.length; i++)  
    console.log(this.inventory[i]);
  }
}

module.exports = computerShop;