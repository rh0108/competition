const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const CartItemSchema = new Schema({
    category: {
      type: String,
      required: true
    },
    manufacturer: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    length: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    },
    ticketPrice: {
      type: Number,
      required: true
    },
    images: [{
      type: String,
      required: false
    }],
    ticketNumber: {
      type: Number,
      required: true
    },
    boatId: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
});

module.exports = CartItem = mongoose.model("cartItems", CartItemSchema);