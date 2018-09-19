'use strict';

const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    author: String,
    isbn: String,
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;