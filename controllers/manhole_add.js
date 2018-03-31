"use strict";
const mongoose = require('mongoose');
const Manhole = mongoose.model('Manhole');

exports.addManhole = async (req, res) => {
  let newUser = Manhole({
    manholeId: `${req.params.manholeId}`,
    location: {
        lat: `${req.params.lat}`,
        long: `${req.params.long}`
    },
    status: {
      overflow: `${req.params.overflow}`,
      damage: `${req.params.damage}`
  },
    urgency:`${req.params.urgency}`,
    phoneNumber:`${req.params.phoneNumber}`
  });

  //Save the product.
  newUser.save((err) => {
    if (err) {
        console.log(err);
        res.json({
          success: false,
          message: 'Something went wrong.'
        })
    }
    res.json({
      success: true,
      message: 'Product was added succesfully.'
    });
  })
}
