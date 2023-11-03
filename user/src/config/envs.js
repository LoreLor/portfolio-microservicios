require('dotenv').config();

module.exports = {
    PORT: process.env.PORT_USER,
    JWT_KEY: process.env.JWT_KEY
};
