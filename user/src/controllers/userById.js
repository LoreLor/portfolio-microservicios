const User = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;

    const user = await User.getById(id);
    response(res, 200, user);
};
