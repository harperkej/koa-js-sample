'use strict';

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    surName: String,
    birthData: Number
});

const User = mongoose.model("User", UserSchema);
module.exports = User;