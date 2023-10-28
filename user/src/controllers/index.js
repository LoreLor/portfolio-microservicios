const { catchAsync } = require('../utils');

module.exports = {
    userCreate: catchAsync(require('./createUser'))
};
