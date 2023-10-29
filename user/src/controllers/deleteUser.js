const User = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;

    const deleteUser = await User.delete(id);
    response(res, 200, deleteUser);
};
