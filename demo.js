"use strict";
const mongoose = require('mongoose');
mongoose.connect('mongodb://sebastian891:stan891@ds121588.mlab.com:21588/sebastian891');
mongoose.Promise = global.Promise; // ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`${err.message}`);
});;

const manholeSchema = new mongoose.Schema({
    manholeId:  {
      type: String,
      required: true
    },
    location: {
      lat:{
        type: Number,
        required: true
      },
      long:{
        type: Number,
        required: true
      }
    },
    status: {
      overflow: {
        type: Boolean,
        default: false
      },
      damage: {
        type: Boolean,
        default: false
      }
    },
    urgency: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: Number,
      required: true
    }

});
var Manhole = mongoose.model('Manhole', manholeSchema);
    

  let newUser = Manhole({
    manholeId: 'iygoasf',
    location: {
        lat: 141,
        long: 147
    },
    status: {
      overflow: true,
      damage: false
  },
    urgency:true,
    phoneNumber:8956622555
  });

  //Save the product.
  newUser.save((err) => {
    if (err) {
        console.log(err);

    }
    console.log("success");
    ;
  })
