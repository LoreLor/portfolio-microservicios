const User = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const users = await User.list();
    response(res, 200, users);
};
