const { catchedAsync } = require('../utils');

module.exports = {
    allProjects: catchedAsync(require('./allProjects')),
    projectById: catchedAsync(require('./projectById')),
    updateProject: catchedAsync(require('./updateProject')),
    createProject: catchedAsync(require('./createProject'))
}