const server = require('./src/server');
const { PORT_PROJECT } = require('./src/config/envs');

server.listen(PORT_PROJECT, () => {
    console.log(`Project listening on port: ${PORT_PROJECT}`);
});
