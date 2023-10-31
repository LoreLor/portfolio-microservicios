const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
const allowedOrigins = ['https://lorena-de-armas.netlify.app', '*'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Acceso no permitido por CORS'));
        }
    }
};
server.use(cors(corsOptions));

server.use('/skill', require('./routes'));

server.use((err, req, res, next) => {
    const status = res.statusCode || 500;
    const message = err.message || err;

    res.status(status).json({
        error: true,
        message
    });
});

module.exports = server;
