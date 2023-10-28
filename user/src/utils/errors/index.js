/* eslint-disable camelcase */
class ClientError extends Error {
    constructor (message, statusCode, first_name, last_name, email, password) {
        super(message);
        this.statusCode = statusCode;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
};

module.exports = {
    ClientError
};
