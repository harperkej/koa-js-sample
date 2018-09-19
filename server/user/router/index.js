'user strict';

const router = require('koa-router')();
const joi = require('joi');

const controller = require('../controller');
const validator = require('../../validation');

const schemaValidator = {
    name: joi.string().required(),
    surName: joi.string().required()
}

router.get('/', async (ctx) => {
    const users = await controller.getAllUsers();
    console.log('Found the following data => ', users);
    ctx.body = users;
});

router.post('/', async (ctx) => {
    const userToCreate = ctx.request.body;
    await validator(userToCreate, schemaValidator);
    console.log('User to create = ', userToCreate);
    const createdUser = await controller.create(userToCreate);
    console.log('Created user = ', createdUser);
    ctx.body = createdUser;
});

module.exports = router.routes();