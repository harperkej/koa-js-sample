'use strict';

const router = require('koa-router')();

const userRoutes = require('../user/router');
const bookRoutes = require('../book/router');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);

module.exports = router;