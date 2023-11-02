const server = require('./src/server');
const { PORT_USER } = require('./src/config/envs');

server.listen(PORT_USER, () => {
    console.log(`User listening on ${PORT_USER}`);
});
