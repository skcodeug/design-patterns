const keyboard = (brand, noOfKeys, connector, price) => {
  return {
    brand: brand,
    noOfKeys: noOfKeys,
    connector: connector,
    price: price,
  };
};

module.exports = keyboard;