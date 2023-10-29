const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/envs');

module.exports = (user) => {
    return jwt.sign({
        _id: user._id,
        first_name: user.first_name,
        email: user.email
    }, JWT_KEY || 'jwt_key', {
        expiresIn: '7days'
    });
};
