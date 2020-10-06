const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const SpotBallSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: false,
    },
});

module.exports = SpotBall = mongoose.model("spotballs", SpotBallSchema);
