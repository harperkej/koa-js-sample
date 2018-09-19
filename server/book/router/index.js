'use strict';

const router = require('koa-router')();

const controller = require('../controller');

router.post('/', async (ctx) => {
    const bookToCreate = ctx.request.body;
    const createdBook = await controller.createBook(bookToCreate);
    ctx.response.body = createdBook;
});

router.get('/', async (ctx) => {
    const allBooks = await controller.findAll();
    ctx.response.body = allBooks;
});

module.exports = router.routes();