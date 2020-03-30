const fs = require('fs');
const rootDir = require('../utils/path');
const path = require('path');

module.exports = class Product {
  constructor(title, ) {
    this.title = title;
  }

  save() {
    const p = path.join(rootDir, 'woo-order', 'woo-order.json');
    const p2 = path.join(rootDir, 'dd-order', 'product.json')
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        productData = JSON.parse(fileContent)
        console.log(products);
      }
      // products.push(this);
      fs.writeFile(p2, JSON.stringify(productsData), (err) => {
        console.log(err)
      })
    });
  }

  static fetchAll() {
    return products;
  }
}