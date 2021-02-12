/**
 * RequestError class
 */
class RequestError extends Error {
    /**
     * RequestError class constructor
     *
     * @param {String} message
     * @param {int} code
     * @param {Object} data
     */
    constructor(message, code, data) {
        super(message);

        this.statusCode = code;
        this.data = data;
    }

    /**
     * Handles axios error object
     *
     * @param {Object} err
     * @returns {RequestError}
     */
    static fromResponse(err) {
        let message = 'Internal server error';
        let code = 500;
        let data = {};

        // Since axios always returns this. Unless on connection error
        if (err && err.response) {
            code = err.response.status;
            message = err.response.statusText;
            data = err.response.data;
        }

        console.error(`statusCode: ${code}, message: ${message}, data: `, data);

        return new this(message, code, data);
    }
}

module.exports = {
    RequestError
};
