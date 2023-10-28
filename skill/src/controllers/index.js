const { catchAsync } = require('../utils');

module.exports = {
    allSkills: catchAsync(require('./allSkills')),
    skillById: catchAsync(require('./skillById')),
    createSkill: catchAsync(require('./createSkill')),
    updateSkill: catchAsync(require('./updateSkill')),
    deleteSkill: catchAsync(require('./deleteSkill'))
};
