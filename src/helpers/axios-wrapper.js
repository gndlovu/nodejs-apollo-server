const axios = require('axios');
const { RequestError } = require('../errors/request-error');

/**
 * Makes HTTP requests
 *
 * @param {string} url
 * @param {string} method
 * @param {Object} data
 * @param {Object} headers
 *
 * @returns {Promise|RequestError}
 */
async function request(url, method = 'get', data = {}, headers = {}) {
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const config = {
        method,
        url,
        headers: { ...defaultHeaders, ...headers }
    };

    if (Object.keys(data).length) {
        config.data = data;
    }

    try {
        return await axios(config);
    } catch (err) {
        throw RequestError.fromResponse(err);
    }
}

module.exports = { request };
