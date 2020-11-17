const Payment = require('../models/payment.model.js');

module.exports = {
  create: (req, res) => {
        let payment = new Payment(req.body)
      payment.save()
      .then(result => {
          res.json({ success: true, result: result})
      })
      .catch(err => {
           res.json({ success: false, result: err})
          })
  }
}