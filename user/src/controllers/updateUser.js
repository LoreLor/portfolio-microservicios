const User = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    const updateUser = await User.update(id, user);
    response(res, 200, updateUser);
};
