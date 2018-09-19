'use strict';

const joi = require('joi');

const validate = async (object, schema, options) => {
    const {value, error} = joi.validate(object, schema, options);
    if (error) {
        throw error;
    }
}

module.exports = validate;