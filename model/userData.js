const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
  },
})

const Userdata = mongoose.model('Userdata', userDataSchema)
module.exports = Userdata
