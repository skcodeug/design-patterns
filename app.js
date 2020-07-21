const ShoppingCart = require('./Cart/ShoppingCart');
const Item = require("./Cart/Item");
const Laptop = require('./models/laptop');
const Desktop = require('./models/desktop');
const LaptopAdapter = require("./Adapters/LaptopAdapter");

class Main {
    main() {
        const hpLaptop = new Laptop("Apple", "MacBook", "Air", "Silicon", 2.1, 6, 13.3, 128, 2700);
        const acerLaptop = new Laptop("Apple", "MacBook", "Pro", "Salt Lake", 2.4, 8, 13.3, 256, 3400);
        const hpDesktop = new Desktop("HP", "Elite", "8300", "Core i5", 3.6, 8, 21, 1000, 2250);
        const dellDesktop = new Desktop("DELL", "Precision", "D710", "Core i7", 3.4, 16, 21, 1000, 1790);

        const shoppingCart = new  ShoppingCart();
        // const item1 = new Item(2,hpLaptop.price,`17" 1TB Black HP advanced laptop`);
        const item1 = new LaptopAdapter(2, hpLaptop);
        const item2 = new Item(5, acerLaptop.price, `14" 500GB Silver Acer amazing laptop`);
        shoppingCart.addItems(item1);
        shoppingCart.addItems(item2);
        //shoppingCart.addItems(acerLaptop); //this should break the code by outputting an object
        shoppingCart.addItems(new LaptopAdapter(10,acerLaptop)); //Better implementation
        const printableString = shoppingCart.printItems();
        console.log(printableString);
    }
}

const main = new Main();
main.main();