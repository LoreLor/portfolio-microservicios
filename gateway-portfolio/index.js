const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
    origin: 'https://lorena-de-armas.netlify.app',
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

app.use('/project', createProxyMiddleware({
    // target: 'http://localhost:8001'
    target: 'http://project:8001',
    changeOrigin: true
}));

app.use('/skill', createProxyMiddleware({
    target: 'http://skill:8002',
    changeOrigin: true
}));

app.use('/user', createProxyMiddleware({
    target: 'http://user:8003',
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log(`Gateway run on port: ${PORT}`);
});
