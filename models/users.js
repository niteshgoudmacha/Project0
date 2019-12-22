const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema =  new Schema({
    userName: String,
    googleId: String,
    credits: {type: Number, default: 25}
});

mongoose.model('users', userSchema);