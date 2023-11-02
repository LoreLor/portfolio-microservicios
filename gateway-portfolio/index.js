const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
const PORT_GATEWAY = process.env.PORT_GATEWAY;

app.use(morgan('dev'));
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

app.listen(PORT_GATEWAY, () => {
    console.log(`Gateway run on port: ${PORT_GATEWAY}`);
});
