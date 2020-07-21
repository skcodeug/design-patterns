// const Computers = require('./computer');

// class laptop extends computers {
//   constructor(battery, ram, hdd, screenSize, color, price) {
//     super(ram, hdd, screenSize, color, price);
//     this.battery = battery;
//   }
// }

// class Laptop extends Computers {}

const laptop = (
  brand,
  manufacturerModel,
  modelCategory,
  processorType,
  processorSpeed,
  ramSize,
  screenSize,
  driveSize,
  price
) => {
  return {
    brand: brand,
    manufacturerModel: manufacturerModel,
    modelCategory: modelCategory,
    processorType: processorType,
    processorSpeed: processorSpeed,
    ramSize: ramSize,
    screenSize: screenSize,
    driveSize: driveSize,
    price: price
  };
};

module.exports = laptop;