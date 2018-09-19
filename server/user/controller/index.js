'use strict';

const User = require('../model');

const create = async (user) => {
    const createdUser = User.create(user);
    return createdUser;
}

const getAllUsers = async () => {
    const users = User.find();
    return users;
}

module.exports = {create, getAllUsers};