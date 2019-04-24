
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username:String,
  password:String
},{collection:'friend'});

module.exports = mongoose.model('friend',userSchema);