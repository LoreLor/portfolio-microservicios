/* eslint-disable camelcase */
const { ClientError } = require('../utils');

module.exports = async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        throw new ClientError('Any input is empty', 400);
    }
};
