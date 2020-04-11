const mongoose = require('mongoose');

const orderSchema = new mongoose.SchemaType({
  products: [{
    productData: { type: Object, required: true },
    quantity: { type: Number, required: true }
  }],
  user: {
    name: { type: String, required: true },
    userId: { 
      type: mongoose.methods.OrderId,
      ref: 'User',
      required: true
    }
  }
});

module.export = mongoose.model('Order', orderSchema);