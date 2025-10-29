import mongoose from 'mongoose';

//this is just a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'resturant'], default: 'customer' },
});

//mongoose schema to model conversion

const User = mongoose.model('User', userSchema);

export default User;
