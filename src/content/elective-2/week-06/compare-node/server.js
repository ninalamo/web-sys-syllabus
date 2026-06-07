// Express server mirroring IPaymentProvider example
const express = require('express');
const app = express();

// Dummy payment providers
class GCashProvider {
  pay(amount) {
    return `Paid ${amount} via GCash`; 
  }
}
class CreditCardProvider {
  pay(amount) {
    return `Paid ${amount} via Credit Card`; 
  }
}

// Simple checkout service using dependency injection via constructor
class CheckoutService {
  constructor(provider) {
    this.provider = provider;
  }
  checkout(amount) {
    return this.provider.pay(amount);
  }
}

// Route to select provider via query param and perform checkout
app.get('/checkout', (req, res) => {
  const type = req.query.type;
  let provider;
  if (type === 'gcash') provider = new GCashProvider();
  else provider = new CreditCardProvider();
  const service = new CheckoutService(provider);
  res.send(service.checkout(100));
});

app.listen(3000, () => console.log('Server running on port 3000'));
