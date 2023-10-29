const { PORT } = require('./src/config/envs');
const server = require('./src/server');

server.listen(PORT, () => {
    console.log(`DATABASE run on port: ${PORT}`)
});