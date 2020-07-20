const express = require('express');
const laptopModel = require('./models/laptopModel');
const computerShop = require('./computerShop');
const PORT = process.env.PORT || 3000;
const app = express();

const computerShop1 = new computerShop();

var laptop = laptopModel('Apple', 'MacBook', 'Pro', 'Salt Lake', 2.4, 8, 13.3, 256);
var laptop2 = laptopModel("Apple", "MacBook", "Air", "Silicon", 2.1, 6, 13.3, 128);

computerShop1.addInventory(laptop);
computerShop1.addInventory(laptop2);
computerShop1.listInventory();

// app.listen(PORT, () => console.log(`Listening on ${PORT}`))