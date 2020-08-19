const express = require("express");
const router = express.Router();

// Load Boat model
const Boat = require("../../models/Boat");

// @route GET api/bpats/boats
// @desc All Boats List and return Boats
// @access Public
router.get("/boats/boats", (res) => {

  Boat.find({}).then(boats => {
    if (!boats) {
      boats = [];
    }
    res.json({
      success: true,
      boats: boats
    });
  });
});

module.exports = router;
