'use strict';

/**
 * Read configurations from a module.
 * In this case I read the configurations
 * for database from json file db-configs in server folder.
 *
 * @param key the name of the parameter from which we want to read the value
 * @param path path to module
 * @returns {*} the value defined in module or
 */
const readConfigs = (key, path) => {
    const file = require(path);
    return file && file[key];
}

exports.readConfigs = readConfigs;