const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: { type: String, default: uuid.v1 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
