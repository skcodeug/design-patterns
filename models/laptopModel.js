// const mongoose = require("mongoose");

// const laptopSchema = new mongoose.Schema({
//   laptopBrand: String,
//   manufacturerModel: String,
//   modelCategory: String,
//   processorType: String,
//   processorSpeed: Number,
//   ramSize: Number,
//   screenSize: Number,
//   driveSize: Number
// });

// // Create model and export it from Schema to rest of application
// module.exports = mongoose.model("Laptop", laptopSchema);

const laptopModel = (
  laptopBrand,
  manufacturerModel,
  modelCategory,
  processorType,
  processorSpeed,
  ramSize,
  screenSize,
  driveSize
) => {
  return {
    laptopBrand: laptopBrand,
    manufacturerModel: manufacturerModel,
    modelCategory: modelCategory,
    processorType: processorType,
    processorSpeed: processorSpeed,
    ramSize: ramSize,
    screenSize: screenSize,
    driveSize: driveSize,
  };
};

module.exports = laptopModel;

