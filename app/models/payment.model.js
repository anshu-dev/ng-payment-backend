const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
  creditCardNumber: String,
  cardholder: String,
  expirationDate: Date,
  securityCode: String,
  amount: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Payment', PaymentSchema);