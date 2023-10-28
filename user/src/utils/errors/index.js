class ClientError extends Error {
    constructor (message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.first_name = this.constructor.first_name;
        this.email = this.constructor.email;
        this.last_name = this.constructor.last_name;
        this.password = this.constructor.password;
        Error.captureStackTrace(this, this.constructor);
    }
};

module.exports = {
    ClientError
};
