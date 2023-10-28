const { catchAsync } = require('../utils');

module.exports = {
    userCreate: catchAsync(require('./createUser')),
    allUsers: catchAsync(require('./allUsers')),
    userById: catchAsync(require('./userById'))
};
