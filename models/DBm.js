'use strict'
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  rut: {
    type: String,
    required: true,
    maxLength: 10,
  },
  clave: {
    type: String,
    required: true,
  },
});

const DBmodel = mongoose.model('DBmodel', userSchema);

module.exports = DBmodel;