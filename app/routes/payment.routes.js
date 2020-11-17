module.exports = (app) => {
  const payment = require('../controllers/payment.controller.js');

  // Create payment
  app.post('/api/payment', payment.create);

}