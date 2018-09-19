'use strict';

const joi = require('joi');

const Book = require('../model');
const validator = require('../../validation');

const schemaValidation = {
    name: joi.string().required(),
    author: joi.string().required(),
    isbn: joi.string().alphanum().min(13).max(13).required(),
}

const createBook = async (book) => {
    await validator(book, schemaValidation);
    console.log('Book to create = ', book);
    const createdBook = await Book.create(book);
    console.log('Created book = ', createdBook);
    return createdBook;
}

const findAll = async () => {
    const allBooks = await Book.find();
    console.log('All books = ', allBooks);
    return allBooks;
}

const findByIsbn = async (isbn) => {
    return Book.find({isbn: isbn});
}

module.exports = {createBook, findAll, findByIsbn};