const Product = require('../models/product');

exports.getInputProduct =  (req, res, next) => {
  res.render('input', {
    pageTitle: 'Input',
    path: '/add-product'
  });
}

exports.postInputProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}