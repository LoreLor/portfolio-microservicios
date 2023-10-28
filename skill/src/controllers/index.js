const { catchAsync } = require('../utils');

module.exports = {
    allSkills: catchAsync(require('./allSkills'))
};
