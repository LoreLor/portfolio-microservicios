const server = require('./src/server');
const { PORT_SKILL } = require('./src/config/envs');

server.listen(PORT_SKILL, () => {
    console.log(`Skill listen on port: ${PORT_SKILL}`);
});
