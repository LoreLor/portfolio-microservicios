/* eslint-disable camelcase */
const User = require('../service');
const { response } = require('../utils');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { first_name, last_name, image, email, password } = req.body;

    const newUser = await User.insert({
        first_name,
        last_name,
        image,
        email,
        password: bcrypt.hashSync(password, 8)
    });
    response(res, 201, newUser);
};
