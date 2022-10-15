const cart = ["apple", "mango", "orange"];

//  Sequence of steps while ordering in e-commerce websites
//  1. Cart Creation
//  2. Payment Page
//  3. Display Summary
//  4. Update Wallet
// Function nested inside one another creates a callback hell

api.createCart(cart, function () {
  api.proceedToPayment(function () {
    api.showSummary(function () {
      api.updateWallet();
    });
  });
});
