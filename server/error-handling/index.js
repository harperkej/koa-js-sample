'use strict';
/**
 * Middleware to handle error and log them centrally.
 * Especially the errors coming from joi middleware are treated.
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
const handleValidationErrors = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        console.log('Error = ', error);
        if (error.name == 'ValidationError') {
            ctx.status = 400;
            ctx.body = error.details;
        }
    }
}

module.exports = handleValidationErrors;