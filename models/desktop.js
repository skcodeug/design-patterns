const desktop = (
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
    price: price,
  };
};

module.exports = desktop
