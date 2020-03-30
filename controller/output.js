const Product = require('../models/product');

exports.getProductOutput = (req, res, next) => {
  const product = Product.fetchAll();
  res.render('output', {
    prods: 'product',
    pageTitle:'Output Page',
    path: '/'
  });
};


