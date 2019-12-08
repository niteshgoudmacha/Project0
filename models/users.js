const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema =  new Schema({
    googleId: String,
    credits: {type: Number, default: 50}
});

mongoose.model('users', userSchema);