const express = require('express');
const laptop = require('./models/laptop');
const desktop = require('./models/desktop');
const laptopBag = require('./models/laptopBag');
const keyboard = require('./models/keyboard');
const software = require('./models/software');
const ShoppingCart = require("./computerShop");
// const PORT = process.env.PORT || 3000;
const app = express();

const ShoppingCart1 = new ShoppingCart();
const ShoppingCart2 = new ShoppingCart();

var laptop1 = laptop('Apple', 'MacBook', 'Pro', 'Salt Lake', 2.4, 8, 13.3, 256, 3400);
var laptop2 = laptop("Apple", "MacBook", "Air", "Silicon", 2.1, 6, 13.3, 128, 2700);
var desktop1 = desktop('DELL', 'Precision', 'D710', 'Core i7', 3.4, 16, 21, 1000, 1790);
var bag1 = bag2 = laptopBag("Targus", "Leather", `14"`, 230);
var keyboard1 = keyboard('HP', 101, 'Bluetooth', 80);
var antivirus = software("Kaspersky", "Antivirus", "license.001", 15);
var msoffice = software("MS Office 365", "Productivity Suite", "license.002", 130);

ShoppingCart1.addInventory(laptop1);
ShoppingCart2.addInventory(laptop2);
ShoppingCart1.addInventory(desktop1);
ShoppingCart1.addInventory(bag1);
ShoppingCart2.addInventory(bag2);
ShoppingCart1.addInventory(keyboard1);
ShoppingCart1.addInventory(antivirus);
ShoppingCart1.addInventory(msoffice);
ShoppingCart1.listInventory();
ShoppingCart2.summaryInventory();

// app.listen(PORT, () => console.log(`Listening on ${PORT}`))