const VIP_DISCOUNT_RATE = 0.10;

function calculateOrderTotal(unitPrice, quantity, customerType) {
  if (unitPrice < 0 || quantity < 0) {
    throw new Error("Price and quantity must not be negative");
  }

  let total = unitPrice * quantity;

  if (customerType === "vip") {
    total -= total * VIP_DISCOUNT_RATE;
  }

  return total;
}

module.exports = { calculateOrderTotal };
