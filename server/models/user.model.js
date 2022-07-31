const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true,required:true },
  password: { type: String,required:true },
  role:{ type: String,default: 'user',enum: ['user', 'admin'] },
  gender:{ type: String,default: 'other',enum: ['male', 'female','other']},
  phone:{ type: String,default: null },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);