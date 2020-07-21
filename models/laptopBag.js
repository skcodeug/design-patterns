const laptopBag = (
  bagBrand,
  material,
  laptopSizeFit,
  price
) => {
  return {
    bagBrand: bagBrand,
    material: material,
    laptopSizeFit: laptopSizeFit,
    price: price,
  };
};

module.exports = laptopBag;