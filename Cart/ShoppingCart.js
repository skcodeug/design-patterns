class ShoppingCart {
    constructor(){
        this.items = [];
    }

    addItems(someItem) {
        return this.inventory.push(someItem);
    }

    removeItem(someItem) {
        const index = this.printItems.indexOf(someItem);
        return this.printItems.splice(index, 1);
    }

    showAllItems() {
        return this.printItems;
    }

    printItems(){
        let string = "";
        this.items.map((item)=>string+=this.items.toString()+"\n");
        
        return string;
    }
}

module.exports = ShoppingCart;