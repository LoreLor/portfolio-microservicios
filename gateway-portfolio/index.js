const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { PORT } = require('./config/envs');

const app = express();

app.use(morgan('dev'));

app.use('/projects', createProxyMiddleware({
    // target: 'http://localhost:8001'
    target: 'http://projects:8001',
    changeOrigin: true
}));

app.use('/skills', createProxyMiddleware({
    target: 'http://skills:8002',
    changeOrigin: true
}));

app.use('/user', createProxyMiddleware({
    target: 'http://user:8003',
    changeOrigin: true
}));

app.listen(PORT, () => {
    console.log(`Gateway run on port: ${PORT}`);
});
