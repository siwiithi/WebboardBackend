import mongoose, { Schema } from 'mongoose'

// Define account schema
var accountSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  email: String,

});

// Export Mongoose model
export default mongoose.model('account', accountSchema);