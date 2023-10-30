const { PORT } = require('./src/config/envs');
const server = require('./src/server');

server.listen(8004, () => {
    console.log(`DATABASE is running`)
});