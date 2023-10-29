const { ClientError } = require('../utils');
const User = require('../service');

module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new ClientError('Email is required', 400);
    }

    const user = await User.getByEmail(email);

    if (!user) {
        throw new ClientError('Email is not found', 400);
    }
    next();
};
